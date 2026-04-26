var A$=Object.create;var{getPrototypeOf:M$,defineProperty:AH,getOwnPropertyNames:W$}=Object;var R$=Object.prototype.hasOwnProperty;function G$(v){return this[v]}var X$,Y$,qr=(v,h,e)=>{var u=v!=null&&typeof v==="object";if(u){var H=h?X$??=new WeakMap:Y$??=new WeakMap,q=H.get(v);if(q)return q}e=v!=null?A$(M$(v)):{};let A=h||!v||!v.__esModule?AH(e,"default",{value:v,enumerable:!0}):e;for(let M of W$(v))if(!R$.call(A,M))AH(A,M,{get:G$.bind(v,M),enumerable:!0});if(u)H.set(v,A);return A};var Yh=(v,h)=>()=>(h||v((h={exports:{}}).exports,h),h.exports);var J$=(v)=>v;function Q$(v,h){this[v]=J$.bind(null,h)}var z$=(v,h)=>{for(var e in h)AH(v,e,{get:h[e],enumerable:!0,configurable:!0,set:Q$.bind(h,e)})};var hg=Yh((K$,su)=>{(function(){function v(X,N){Object.defineProperty(u.prototype,X,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",N[0],N[1])}})}function h(X){if(X===null||typeof X!=="object")return null;return X=Io&&X[Io]||X["@@iterator"],typeof X==="function"?X:null}function e(X,N){X=(X=X.constructor)&&(X.displayName||X.name)||"ReactClass";var gr=X+"."+N;er[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",N,X),er[gr]=!0)}function u(X,N,gr){this.props=X,this.context=N,this.refs=rv,this.updater=gr||_o}function H(){}function q(X,N,gr){this.props=X,this.context=N,this.refs=rv,this.updater=gr||_o}function A(){}function M(X){return""+X}function Y(X){try{M(X);var N=!1}catch(Xr){N=!0}if(N){N=console;var gr=N.error,ur=typeof Symbol==="function"&&Symbol.toStringTag&&X[Symbol.toStringTag]||X.constructor.name||"Object";return gr.call(N,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ur),M(X)}}function Q(X){if(X==null)return null;if(typeof X==="function")return X.$$typeof===d5?null:X.displayName||X.name||null;if(typeof X==="string")return X;switch(X){case Wr:return"Fragment";case t:return"Profiler";case S:return"StrictMode";case Tr:return"Suspense";case wr:return"SuspenseList";case Xg:return"Activity"}if(typeof X==="object")switch(typeof X.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),X.$$typeof){case or:return"Portal";case zr:return X.displayName||"Context";case Hr:return(X._context.displayName||"Context")+".Consumer";case Gr:var N=X.render;return X=X.displayName,X||(X=N.displayName||N.name||"",X=X!==""?"ForwardRef("+X+")":"ForwardRef"),X;case nr:return N=X.displayName||null,N!==null?N:Q(X.type)||"Memo";case ar:N=X._payload,X=X._init;try{return Q(X(N))}catch(gr){}}return null}function J(X){if(X===Wr)return"<>";if(typeof X==="object"&&X!==null&&X.$$typeof===ar)return"<...>";try{var N=Q(X);return N?"<"+N+">":"<...>"}catch(gr){return"<...>"}}function R(){var X=tr.A;return X===null?null:X.getOwner()}function z(){return Error("react-stack-top-frame")}function m(X){if(Bh.call(X,"key")){var N=Object.getOwnPropertyDescriptor(X,"key").get;if(N&&N.isReactWarning)return!1}return X.key!==void 0}function j(X,N){function gr(){Te||(Te=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",N))}gr.isReactWarning=!0,Object.defineProperty(X,"key",{get:gr,configurable:!0})}function Z(){var X=Q(this.type);return I1[X]||(I1[X]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),X=this.props.ref,X!==void 0?X:null}function y(X,N,gr,ur,Xr,Br){var Zr=gr.ref;return X={$$typeof:hr,type:X,key:N,props:gr,_owner:ur},(Zr!==void 0?Zr:null)!==null?Object.defineProperty(X,"ref",{enumerable:!1,get:Z}):Object.defineProperty(X,"ref",{enumerable:!1,value:null}),X._store={},Object.defineProperty(X._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(X,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(X,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Xr}),Object.defineProperty(X,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Br}),Object.freeze&&(Object.freeze(X.props),Object.freeze(X)),X}function rr(X,N){return N=y(X.type,N,X.props,X._owner,X._debugStack,X._debugTask),X._store&&(N._store.validated=X._store.validated),N}function Pr(X){vr(X)?X._store&&(X._store.validated=1):typeof X==="object"&&X!==null&&X.$$typeof===ar&&(X._payload.status==="fulfilled"?vr(X._payload.value)&&X._payload.value._store&&(X._payload.value._store.validated=1):X._store&&(X._store.validated=1))}function vr(X){return typeof X==="object"&&X!==null&&X.$$typeof===hr}function a(X){var N={"=":"=0",":":"=2"};return"$"+X.replace(/[=:]/g,function(gr){return N[gr]})}function s(X,N){return typeof X==="object"&&X!==null&&X.key!=null?(Y(X.key),a(""+X.key)):N.toString(36)}function lr(X){switch(X.status){case"fulfilled":return X.value;case"rejected":throw X.reason;default:switch(typeof X.status==="string"?X.then(A,A):(X.status="pending",X.then(function(N){X.status==="pending"&&(X.status="fulfilled",X.value=N)},function(N){X.status==="pending"&&(X.status="rejected",X.reason=N)})),X.status){case"fulfilled":return X.value;case"rejected":throw X.reason}}throw X}function C(X,N,gr,ur,Xr){var Br=typeof X;if(Br==="undefined"||Br==="boolean")X=null;var Zr=!1;if(X===null)Zr=!0;else switch(Br){case"bigint":case"string":case"number":Zr=!0;break;case"object":switch(X.$$typeof){case hr:case or:Zr=!0;break;case ar:return Zr=X._init,C(Zr(X._payload),N,gr,ur,Xr)}}if(Zr){Zr=X,Xr=Xr(Zr);var vg=ur===""?"."+s(Zr,0):ur;return qg(Xr)?(gr="",vg!=null&&(gr=vg.replace(xh,"$&/")+"/"),C(Xr,N,gr,"",function(Ko){return Ko})):Xr!=null&&(vr(Xr)&&(Xr.key!=null&&(Zr&&Zr.key===Xr.key||Y(Xr.key)),gr=rr(Xr,gr+(Xr.key==null||Zr&&Zr.key===Xr.key?"":(""+Xr.key).replace(xh,"$&/")+"/")+vg),ur!==""&&Zr!=null&&vr(Zr)&&Zr.key==null&&Zr._store&&!Zr._store.validated&&(gr._store.validated=2),Xr=gr),N.push(Xr)),1}if(Zr=0,vg=ur===""?".":ur+":",qg(X))for(var $r=0;$r<X.length;$r++)ur=X[$r],Br=vg+s(ur,$r),Zr+=C(ur,N,gr,Br,Xr);else if($r=h(X),typeof $r==="function")for($r===X.entries&&(Zh||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Zh=!0),X=$r.call(X),$r=0;!(ur=X.next()).done;)ur=ur.value,Br=vg+s(ur,$r++),Zr+=C(ur,N,gr,Br,Xr);else if(Br==="object"){if(typeof X.then==="function")return C(lr(X),N,gr,ur,Xr);throw N=String(X),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(X).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return Zr}function V(X,N,gr){if(X==null)return X;var ur=[],Xr=0;return C(X,ur,"","",function(Br){return N.call(gr,Br,Xr++)}),ur}function c(X){if(X._status===-1){var N=X._ioInfo;N!=null&&(N.start=N.end=performance.now()),N=X._result;var gr=N();if(gr.then(function(Xr){if(X._status===0||X._status===-1){X._status=1,X._result=Xr;var Br=X._ioInfo;Br!=null&&(Br.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Xr)}},function(Xr){if(X._status===0||X._status===-1){X._status=2,X._result=Xr;var Br=X._ioInfo;Br!=null&&(Br.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Xr)}}),N=X._ioInfo,N!=null){N.value=gr;var ur=gr.displayName;typeof ur==="string"&&(N.name=ur)}X._status===-1&&(X._status=0,X._result=gr)}if(X._status===1)return N=X._result,N===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,N),"default"in N||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,N),N.default;throw X._result}function n(){var X=tr.H;return X===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),X}function Jr(){tr.asyncTransitions--}function Rr(X){if(N1===null)try{var N=("require"+Math.random()).slice(0,7);N1=(su&&su[N]).call(su,"timers").setImmediate}catch(gr){N1=function(ur){ne===!1&&(ne=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Xr=new MessageChannel;Xr.port1.onmessage=ur,Xr.port2.postMessage(void 0)}}return N1(X)}function Qr(X){return 1<X.length&&typeof AggregateError==="function"?AggregateError(X):X[0]}function Cr(X,N){N!==B1-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),B1=N}function k(X,N,gr){var ur=tr.actQueue;if(ur!==null)if(ur.length!==0)try{d(ur),Rr(function(){return k(X,N,gr)});return}catch(Xr){tr.thrownErrors.push(Xr)}else tr.actQueue=null;0<tr.thrownErrors.length?(ur=Qr(tr.thrownErrors),tr.thrownErrors.length=0,gr(ur)):N(X)}function d(X){if(!x1){x1=!0;var N=0;try{for(;N<X.length;N++){var gr=X[N];do{tr.didUsePromise=!1;var ur=gr(!1);if(ur!==null){if(tr.didUsePromise){X[N]=gr,X.splice(0,N);return}gr=ur}else break}while(1)}X.length=0}catch(Xr){X.splice(0,N+1),tr.thrownErrors.push(Xr)}finally{x1=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var hr=Symbol.for("react.transitional.element"),or=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),t=Symbol.for("react.profiler"),Hr=Symbol.for("react.consumer"),zr=Symbol.for("react.context"),Gr=Symbol.for("react.forward_ref"),Tr=Symbol.for("react.suspense"),wr=Symbol.for("react.suspense_list"),nr=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Xg=Symbol.for("react.activity"),Io=Symbol.iterator,er={},_o={isMounted:function(){return!1},enqueueForceUpdate:function(X){e(X,"forceUpdate")},enqueueReplaceState:function(X){e(X,"replaceState")},enqueueSetState:function(X){e(X,"setState")}},zo=Object.assign,rv={};Object.freeze(rv),u.prototype.isReactComponent={},u.prototype.setState=function(X,N){if(typeof X!=="object"&&typeof X!=="function"&&X!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,X,N,"setState")},u.prototype.forceUpdate=function(X){this.updater.enqueueForceUpdate(this,X,"forceUpdate")};var cg={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(Ll in cg)cg.hasOwnProperty(Ll)&&v(Ll,cg[Ll]);H.prototype=u.prototype,cg=q.prototype=new H,cg.constructor=q,zo(cg,u.prototype),cg.isPureReactComponent=!0;var qg=Array.isArray,d5=Symbol.for("react.client.reference"),tr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Bh=Object.prototype.hasOwnProperty,Yg=console.createTask?console.createTask:function(){return null};cg={react_stack_bottom_frame:function(X){return X()}};var Te,b0,I1={},m1=cg.react_stack_bottom_frame.bind(cg,z)(),Z4=Yg(J(z)),Zh=!1,xh=/\/+/g,Ul=typeof reportError==="function"?reportError:function(X){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X),error:X});if(!window.dispatchEvent(N))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",X);return}console.error(X)},ne=!1,N1=null,B1=0,Z1=!1,x1=!1,s5=typeof queueMicrotask==="function"?function(X){queueMicrotask(function(){return queueMicrotask(X)})}:Rr;cg=Object.freeze({__proto__:null,c:function(X){return n().useMemoCache(X)}});var Ll={map:V,forEach:function(X,N,gr){V(X,function(){N.apply(this,arguments)},gr)},count:function(X){var N=0;return V(X,function(){N++}),N},toArray:function(X){return V(X,function(N){return N})||[]},only:function(X){if(!vr(X))throw Error("React.Children.only expected to receive a single React element child.");return X}};K$.Activity=Xg,K$.Children=Ll,K$.Component=u,K$.Fragment=Wr,K$.Profiler=t,K$.PureComponent=q,K$.StrictMode=S,K$.Suspense=Tr,K$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tr,K$.__COMPILER_RUNTIME=cg,K$.act=function(X){var N=tr.actQueue,gr=B1;B1++;var ur=tr.actQueue=N!==null?N:[],Xr=!1;try{var Br=X()}catch($r){tr.thrownErrors.push($r)}if(0<tr.thrownErrors.length)throw Cr(N,gr),X=Qr(tr.thrownErrors),tr.thrownErrors.length=0,X;if(Br!==null&&typeof Br==="object"&&typeof Br.then==="function"){var Zr=Br;return s5(function(){Xr||Z1||(Z1=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function($r,Ko){Xr=!0,Zr.then(function(gv){if(Cr(N,gr),gr===0){try{d(ur),Rr(function(){return k(gv,$r,Ko)})}catch(rb){tr.thrownErrors.push(rb)}if(0<tr.thrownErrors.length){var Fl=Qr(tr.thrownErrors);tr.thrownErrors.length=0,Ko(Fl)}}else $r(gv)},function(gv){Cr(N,gr),0<tr.thrownErrors.length?(gv=Qr(tr.thrownErrors),tr.thrownErrors.length=0,Ko(gv)):Ko(gv)})}}}var vg=Br;if(Cr(N,gr),gr===0&&(d(ur),ur.length!==0&&s5(function(){Xr||Z1||(Z1=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),tr.actQueue=null),0<tr.thrownErrors.length)throw X=Qr(tr.thrownErrors),tr.thrownErrors.length=0,X;return{then:function($r,Ko){Xr=!0,gr===0?(tr.actQueue=ur,Rr(function(){return k(vg,$r,Ko)})):$r(vg)}}},K$.cache=function(X){return function(){return X.apply(null,arguments)}},K$.cacheSignal=function(){return null},K$.captureOwnerStack=function(){var X=tr.getCurrentStack;return X===null?null:X()},K$.cloneElement=function(X,N,gr){if(X===null||X===void 0)throw Error("The argument must be a React element, but you passed "+X+".");var ur=zo({},X.props),Xr=X.key,Br=X._owner;if(N!=null){var Zr;r:{if(Bh.call(N,"ref")&&(Zr=Object.getOwnPropertyDescriptor(N,"ref").get)&&Zr.isReactWarning){Zr=!1;break r}Zr=N.ref!==void 0}Zr&&(Br=R()),m(N)&&(Y(N.key),Xr=""+N.key);for(vg in N)!Bh.call(N,vg)||vg==="key"||vg==="__self"||vg==="__source"||vg==="ref"&&N.ref===void 0||(ur[vg]=N[vg])}var vg=arguments.length-2;if(vg===1)ur.children=gr;else if(1<vg){Zr=Array(vg);for(var $r=0;$r<vg;$r++)Zr[$r]=arguments[$r+2];ur.children=Zr}ur=y(X.type,Xr,ur,Br,X._debugStack,X._debugTask);for(Xr=2;Xr<arguments.length;Xr++)Pr(arguments[Xr]);return ur},K$.createContext=function(X){return X={$$typeof:zr,_currentValue:X,_currentValue2:X,_threadCount:0,Provider:null,Consumer:null},X.Provider=X,X.Consumer={$$typeof:Hr,_context:X},X._currentRenderer=null,X._currentRenderer2=null,X},K$.createElement=function(X,N,gr){for(var ur=2;ur<arguments.length;ur++)Pr(arguments[ur]);ur={};var Xr=null;if(N!=null)for($r in b0||!("__self"in N)||"key"in N||(b0=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),m(N)&&(Y(N.key),Xr=""+N.key),N)Bh.call(N,$r)&&$r!=="key"&&$r!=="__self"&&$r!=="__source"&&(ur[$r]=N[$r]);var Br=arguments.length-2;if(Br===1)ur.children=gr;else if(1<Br){for(var Zr=Array(Br),vg=0;vg<Br;vg++)Zr[vg]=arguments[vg+2];Object.freeze&&Object.freeze(Zr),ur.children=Zr}if(X&&X.defaultProps)for($r in Br=X.defaultProps,Br)ur[$r]===void 0&&(ur[$r]=Br[$r]);Xr&&j(ur,typeof X==="function"?X.displayName||X.name||"Unknown":X);var $r=1e4>tr.recentlyCreatedOwnerStacks++;return y(X,Xr,ur,R(),$r?Error("react-stack-top-frame"):m1,$r?Yg(J(X)):Z4)},K$.createRef=function(){var X={current:null};return Object.seal(X),X},K$.forwardRef=function(X){X!=null&&X.$$typeof===nr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof X!=="function"?console.error("forwardRef requires a render function but was given %s.",X===null?"null":typeof X):X.length!==0&&X.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",X.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),X!=null&&X.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var N={$$typeof:Gr,render:X},gr;return Object.defineProperty(N,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,X.name||X.displayName||(Object.defineProperty(X,"name",{value:ur}),X.displayName=ur)}}),N},K$.isValidElement=vr,K$.lazy=function(X){X={_status:-1,_result:X};var N={$$typeof:ar,_payload:X,_init:c},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return X._ioInfo=gr,N._debugInfo=[{awaited:gr}],N},K$.memo=function(X,N){X==null&&console.error("memo: The first argument must be a component. Instead received: %s",X===null?"null":typeof X),N={$$typeof:nr,type:X,compare:N===void 0?null:N};var gr;return Object.defineProperty(N,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,X.name||X.displayName||(Object.defineProperty(X,"name",{value:ur}),X.displayName=ur)}}),N},K$.startTransition=function(X){var N=tr.T,gr={};gr._updatedFibers=new Set,tr.T=gr;try{var ur=X(),Xr=tr.S;Xr!==null&&Xr(gr,ur),typeof ur==="object"&&ur!==null&&typeof ur.then==="function"&&(tr.asyncTransitions++,ur.then(Jr,Jr),ur.then(A,Ul))}catch(Br){Ul(Br)}finally{N===null&&gr._updatedFibers&&(X=gr._updatedFibers.size,gr._updatedFibers.clear(),10<X&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),N!==null&&gr.types!==null&&(N.types!==null&&N.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),N.types=gr.types),tr.T=N}},K$.unstable_useCacheRefresh=function(){return n().useCacheRefresh()},K$.use=function(X){return n().use(X)},K$.useActionState=function(X,N,gr){return n().useActionState(X,N,gr)},K$.useCallback=function(X,N){return n().useCallback(X,N)},K$.useContext=function(X){var N=n();return X.$$typeof===Hr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),N.useContext(X)},K$.useDebugValue=function(X,N){return n().useDebugValue(X,N)},K$.useDeferredValue=function(X,N){return n().useDeferredValue(X,N)},K$.useEffect=function(X,N){return X==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),n().useEffect(X,N)},K$.useEffectEvent=function(X){return n().useEffectEvent(X)},K$.useId=function(){return n().useId()},K$.useImperativeHandle=function(X,N,gr){return n().useImperativeHandle(X,N,gr)},K$.useInsertionEffect=function(X,N){return X==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),n().useInsertionEffect(X,N)},K$.useLayoutEffect=function(X,N){return X==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),n().useLayoutEffect(X,N)},K$.useMemo=function(X,N){return n().useMemo(X,N)},K$.useOptimistic=function(X,N){return n().useOptimistic(X,N)},K$.useReducer=function(X,N,gr){return n().useReducer(X,N,gr)},K$.useRef=function(X){return n().useRef(X)},K$.useState=function(X){return n().useState(X)},K$.useSyncExternalStore=function(X,N,gr){return n().useSyncExternalStore(X,N,gr)},K$.useTransition=function(){return n().useTransition()},K$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var uR=Yh(($$)=>{(function(){function v(){if(a=!1,V){var k=$$.unstable_now();Jr=k;var d=!0;try{r:{Pr=!1,vr&&(vr=!1,lr(c),c=-1),rr=!0;var hr=y;try{g:{q(k);for(Z=e(z);Z!==null&&!(Z.expirationTime>k&&M());){var or=Z.callback;if(typeof or==="function"){Z.callback=null,y=Z.priorityLevel;var Wr=or(Z.expirationTime<=k);if(k=$$.unstable_now(),typeof Wr==="function"){Z.callback=Wr,q(k),d=!0;break g}Z===e(z)&&u(z),q(k)}else u(z);Z=e(z)}if(Z!==null)d=!0;else{var S=e(m);S!==null&&Y(A,S.startTime-k),d=!1}}break r}finally{Z=null,y=hr,rr=!1}d=void 0}}finally{d?Rr():V=!1}}}function h(k,d){var hr=k.length;k.push(d);r:for(;0<hr;){var or=hr-1>>>1,Wr=k[or];if(0<H(Wr,d))k[or]=d,k[hr]=Wr,hr=or;else break r}}function e(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var d=k[0],hr=k.pop();if(hr!==d){k[0]=hr;r:for(var or=0,Wr=k.length,S=Wr>>>1;or<S;){var t=2*(or+1)-1,Hr=k[t],zr=t+1,Gr=k[zr];if(0>H(Hr,hr))zr<Wr&&0>H(Gr,Hr)?(k[or]=Gr,k[zr]=hr,or=zr):(k[or]=Hr,k[t]=hr,or=t);else if(zr<Wr&&0>H(Gr,hr))k[or]=Gr,k[zr]=hr,or=zr;else break r}}return d}function H(k,d){var hr=k.sortIndex-d.sortIndex;return hr!==0?hr:k.id-d.id}function q(k){for(var d=e(m);d!==null;){if(d.callback===null)u(m);else if(d.startTime<=k)u(m),d.sortIndex=d.expirationTime,h(z,d);else break;d=e(m)}}function A(k){if(vr=!1,q(k),!Pr)if(e(z)!==null)Pr=!0,V||(V=!0,Rr());else{var d=e(m);d!==null&&Y(A,d.startTime-k)}}function M(){return a?!0:$$.unstable_now()-Jr<n?!1:!0}function Y(k,d){c=s(function(){k($$.unstable_now())},d)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),$$.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var Q=performance;$$.unstable_now=function(){return Q.now()}}else{var J=Date,R=J.now();$$.unstable_now=function(){return J.now()-R}}var z=[],m=[],j=1,Z=null,y=3,rr=!1,Pr=!1,vr=!1,a=!1,s=typeof setTimeout==="function"?setTimeout:null,lr=typeof clearTimeout==="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null,V=!1,c=-1,n=5,Jr=-1;if(typeof C==="function")var Rr=function(){C(v)};else if(typeof MessageChannel<"u"){var Qr=new MessageChannel,Cr=Qr.port2;Qr.port1.onmessage=v,Rr=function(){Cr.postMessage(null)}}else Rr=function(){s(v,0)};$$.unstable_IdlePriority=5,$$.unstable_ImmediatePriority=1,$$.unstable_LowPriority=4,$$.unstable_NormalPriority=3,$$.unstable_Profiling=null,$$.unstable_UserBlockingPriority=2,$$.unstable_cancelCallback=function(k){k.callback=null},$$.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):n=0<k?Math.floor(1000/k):5},$$.unstable_getCurrentPriorityLevel=function(){return y},$$.unstable_next=function(k){switch(y){case 1:case 2:case 3:var d=3;break;default:d=y}var hr=y;y=d;try{return k()}finally{y=hr}},$$.unstable_requestPaint=function(){a=!0},$$.unstable_runWithPriority=function(k,d){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var hr=y;y=k;try{return d()}finally{y=hr}},$$.unstable_scheduleCallback=function(k,d,hr){var or=$$.unstable_now();switch(typeof hr==="object"&&hr!==null?(hr=hr.delay,hr=typeof hr==="number"&&0<hr?or+hr:or):hr=or,k){case 1:var Wr=-1;break;case 2:Wr=250;break;case 5:Wr=1073741823;break;case 4:Wr=1e4;break;default:Wr=5000}return Wr=hr+Wr,k={id:j++,callback:d,priorityLevel:k,startTime:hr,expirationTime:Wr,sortIndex:-1},hr>or?(k.sortIndex=hr,h(m,k),e(z)===null&&k===e(m)&&(vr?(lr(c),c=-1):vr=!0,Y(A,hr-or))):(k.sortIndex=Wr,h(z,k),Pr||rr||(Pr=!0,V||(V=!0,Rr()))),k},$$.unstable_shouldYield=M,$$.unstable_wrapCallback=function(k){var d=y;return function(){var hr=y;y=d;try{return k.apply(this,arguments)}finally{y=hr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var OR=Yh((i$)=>{var MH=qr(hg());(function(){function v(){}function h(J){return""+J}function e(J,R,z){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{h(m);var j=!1}catch(Z){j=!0}return j&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&m[Symbol.toStringTag]||m.constructor.name||"Object"),h(m)),{$$typeof:Y,key:m==null?null:""+m,children:J,containerInfo:R,implementation:z}}function u(J,R){if(J==="font")return"";if(typeof R==="string")return R==="use-credentials"?R:""}function H(J){return J===null?"`null`":J===void 0?"`undefined`":J===""?"an empty string":'something with type "'+typeof J+'"'}function q(J){return J===null?"`null`":J===void 0?"`undefined`":J===""?"an empty string":typeof J==="string"?JSON.stringify(J):typeof J==="number"?"`"+J+"`":'something with type "'+typeof J+'"'}function A(){var J=Q.H;return J===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),J}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var M={d:{f:v,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:v,C:v,L:v,m:v,X:v,S:v,M:v},p:0,findDOMNode:null},Y=Symbol.for("react.portal"),Q=MH.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),i$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,i$.createPortal=function(J,R){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R||R.nodeType!==1&&R.nodeType!==9&&R.nodeType!==11)throw Error("Target container is not a DOM element.");return e(J,R,null,z)},i$.flushSync=function(J){var R=Q.T,z=M.p;try{if(Q.T=null,M.p=2,J)return J()}finally{Q.T=R,M.p=z,M.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},i$.preconnect=function(J,R){typeof J==="string"&&J?R!=null&&typeof R!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",q(R)):R!=null&&typeof R.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",H(R.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",H(J)),typeof J==="string"&&(R?(R=R.crossOrigin,R=typeof R==="string"?R==="use-credentials"?R:"":void 0):R=null,M.d.C(J,R))},i$.prefetchDNS=function(J){if(typeof J!=="string"||!J)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",H(J));else if(1<arguments.length){var R=arguments[1];typeof R==="object"&&R.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",q(R)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",q(R))}typeof J==="string"&&M.d.D(J)},i$.preinit=function(J,R){if(typeof J==="string"&&J?R==null||typeof R!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",q(R)):R.as!=="style"&&R.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',q(R.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",H(J)),typeof J==="string"&&R&&typeof R.as==="string"){var z=R.as,m=u(z,R.crossOrigin),j=typeof R.integrity==="string"?R.integrity:void 0,Z=typeof R.fetchPriority==="string"?R.fetchPriority:void 0;z==="style"?M.d.S(J,typeof R.precedence==="string"?R.precedence:void 0,{crossOrigin:m,integrity:j,fetchPriority:Z}):z==="script"&&M.d.X(J,{crossOrigin:m,integrity:j,fetchPriority:Z,nonce:typeof R.nonce==="string"?R.nonce:void 0})}},i$.preinitModule=function(J,R){var z="";if(typeof J==="string"&&J||(z+=" The `href` argument encountered was "+H(J)+"."),R!==void 0&&typeof R!=="object"?z+=" The `options` argument encountered was "+H(R)+".":R&&("as"in R)&&R.as!=="script"&&(z+=" The `as` option encountered was "+q(R.as)+"."),z)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",z);else switch(z=R&&typeof R.as==="string"?R.as:"script",z){case"script":break;default:z=q(z),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',z,J)}if(typeof J==="string")if(typeof R==="object"&&R!==null){if(R.as==null||R.as==="script")z=u(R.as,R.crossOrigin),M.d.M(J,{crossOrigin:z,integrity:typeof R.integrity==="string"?R.integrity:void 0,nonce:typeof R.nonce==="string"?R.nonce:void 0})}else R==null&&M.d.M(J)},i$.preload=function(J,R){var z="";if(typeof J==="string"&&J||(z+=" The `href` argument encountered was "+H(J)+"."),R==null||typeof R!=="object"?z+=" The `options` argument encountered was "+H(R)+".":typeof R.as==="string"&&R.as||(z+=" The `as` option encountered was "+H(R.as)+"."),z&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',z),typeof J==="string"&&typeof R==="object"&&R!==null&&typeof R.as==="string"){z=R.as;var m=u(z,R.crossOrigin);M.d.L(J,z,{crossOrigin:m,integrity:typeof R.integrity==="string"?R.integrity:void 0,nonce:typeof R.nonce==="string"?R.nonce:void 0,type:typeof R.type==="string"?R.type:void 0,fetchPriority:typeof R.fetchPriority==="string"?R.fetchPriority:void 0,referrerPolicy:typeof R.referrerPolicy==="string"?R.referrerPolicy:void 0,imageSrcSet:typeof R.imageSrcSet==="string"?R.imageSrcSet:void 0,imageSizes:typeof R.imageSizes==="string"?R.imageSizes:void 0,media:typeof R.media==="string"?R.media:void 0})}},i$.preloadModule=function(J,R){var z="";typeof J==="string"&&J||(z+=" The `href` argument encountered was "+H(J)+"."),R!==void 0&&typeof R!=="object"?z+=" The `options` argument encountered was "+H(R)+".":R&&("as"in R)&&typeof R.as!=="string"&&(z+=" The `as` option encountered was "+H(R.as)+"."),z&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',z),typeof J==="string"&&(R?(z=u(R.as,R.crossOrigin),M.d.m(J,{as:typeof R.as==="string"&&R.as!=="script"?R.as:void 0,crossOrigin:z,integrity:typeof R.integrity==="string"?R.integrity:void 0})):M.d.m(J))},i$.requestFormReset=function(J){M.d.r(J)},i$.unstable_batchedUpdates=function(J,R){return J(R)},i$.useFormState=function(J,R,z){return A().useFormState(J,R,z)},i$.useFormStatus=function(){return A().useHostTransitionStatus()},i$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var T5=Yh((TN,HR)=>{HR.exports=OR()});var PR=Yh((U$)=>{var lg=qr(uR()),n5=qr(hg()),WH=qr(T5());(function(){function v(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function h(r,g,o,l){if(o>=g.length)return l;var b=g[o],w=oo(r)?r.slice():cr({},r);return w[b]=h(r[b],g,o+1,l),w}function e(r,g,o){if(g.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<o.length-1;l++)if(g[l]!==o[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return u(r,g,o,0)}}function u(r,g,o,l){var b=g[l],w=oo(r)?r.slice():cr({},r);return l+1===g.length?(w[o[l]]=w[b],oo(w)?w.splice(b,1):delete w[b]):w[b]=u(r[b],g,o,l+1),w}function H(r,g,o){var l=g[o],b=oo(r)?r.slice():cr({},r);if(o+1===g.length)return oo(b)?b.splice(l,1):delete b[l],b;return b[l]=H(r[l],g,o+1),b}function q(){return!1}function A(){return null}function M(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function Y(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function Q(){}function J(){}function R(r){var g=[];return r.forEach(function(o){g.push(o)}),g.sort().join(", ")}function z(r,g,o,l){return new vQ(r,g,o,l)}function m(r,g){r.context===fl&&(Z8(r.current,2,g,r,null,null),jh())}function j(r,g){if(Lv!==null){var o=g.staleFamilies;g=g.updatedFamilies,ib(),Mq(r.current,g,o),jh()}}function Z(r){Lv=r}function y(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,o=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(o=g.return),r=g.return;while(r)}return g.tag===3?o:null}function Pr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function vr(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function a(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function s(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var o=r,l=g;;){var b=o.return;if(b===null)break;var w=b.alternate;if(w===null){if(l=b.return,l!==null){o=l;continue}break}if(b.child===w.child){for(w=b.child;w;){if(w===o)return a(b),r;if(w===l)return a(b),g;w=w.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==l.return)o=b,l=w;else{for(var O=!1,P=b.child;P;){if(P===o){O=!0,o=b,l=w;break}if(P===l){O=!0,l=b,o=w;break}P=P.sibling}if(!O){for(P=w.child;P;){if(P===o){O=!0,o=w,l=b;break}if(P===l){O=!0,l=w,o=b;break}P=P.sibling}if(!O)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:g}function lr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=lr(r),g!==null)return g;r=r.sibling}return null}function C(r){if(r===null||typeof r!=="object")return null;return r=QW&&r[QW]||r["@@iterator"],typeof r==="function"?r:null}function V(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===Kz?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case g5:return"Fragment";case t8:return"Profiler";case c2:return"StrictMode";case D8:return"Suspense";case V8:return"SuspenseList";case _8:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case r5:return"Portal";case K0:return r.displayName||"Context";case k8:return(r._context.displayName||"Context")+".Consumer";case Cb:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case j2:return g=r.displayName||null,g!==null?g:V(r.type)||"Memo";case Ov:g=r._payload,r=r._init;try{return V(r(g))}catch(o){}}return null}function c(r){return typeof r.tag==="number"?n(r):typeof r.name==="string"?r.name:null}function n(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(g);case 8:return g===c2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var o=g.length-1;0<=o;o--)if(typeof g[o].name==="string")return g[o].name}if(r.return!==null)return n(r.return)}return null}function Jr(r){return{current:r}}function Rr(r,g){0>d0?console.error("Unexpected pop."):(g!==y8[d0]&&console.error("Unexpected Fiber popped."),r.current=E8[d0],E8[d0]=null,y8[d0]=null,d0--)}function Qr(r,g,o){d0++,E8[d0]=r.current,y8[d0]=o,r.current=g}function Cr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,g){Qr(Vl,g,r),Qr(Tb,r,r),Qr(Dl,null,r);var o=g.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?yM(g):Pl:Pl;break;default:if(o=g.tagName,g=g.namespaceURI)g=yM(g),g=cM(g,o);else switch(o){case"svg":g=x5;break;case"math":g=yu;break;default:g=Pl}}o=o.toLowerCase(),o=tP(null,o),o={context:g,ancestorInfo:o},Rr(Dl,r),Qr(Dl,o,r)}function d(r){Rr(Dl,r),Rr(Tb,r),Rr(Vl,r)}function hr(){return Cr(Dl.current)}function or(r){r.memoizedState!==null&&Qr(f2,r,r);var g=Cr(Dl.current),o=r.type,l=cM(g.context,o);o=tP(g.ancestorInfo,o),l={context:l,ancestorInfo:o},g!==l&&(Qr(Tb,r,r),Qr(Dl,l,r))}function Wr(r){Tb.current===r&&(Rr(Dl,r),Rr(Tb,r)),f2.current===r&&(Rr(f2,r),Lw._currentValue=Xh)}function S(){}function t(){if(nb===0){zW=console.log,KW=console.info,$W=console.warn,iW=console.error,UW=console.group,LW=console.groupCollapsed,FW=console.groupEnd;var r={configurable:!0,enumerable:!0,value:S,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}nb++}function Hr(){if(nb--,nb===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:zW}),info:cr({},r,{value:KW}),warn:cr({},r,{value:$W}),error:cr({},r,{value:iW}),group:cr({},r,{value:UW}),groupCollapsed:cr({},r,{value:LW}),groupEnd:cr({},r,{value:FW})})}0>nb&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function zr(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Gr(r){if(c8===void 0)try{throw Error()}catch(o){var g=o.stack.trim().match(/\n( *(at )?)/);c8=g&&g[1]||"",IW=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+c8+r+IW}function Tr(r,g){if(!r||j8)return"";var o=f8.get(r);if(o!==void 0)return o;j8=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=T.H,T.H=null,t();try{var b={DetermineComponentFrameRoot:function(){try{if(g){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(br){var B=br}Reflect.construct(r,[],$)}else{try{$.call()}catch(br){B=br}r.call($.prototype)}}else{try{throw Error()}catch(br){B=br}($=r())&&typeof $.catch==="function"&&$.catch(function(){})}}catch(br){if(br&&B&&typeof br.stack==="string")return[br.stack,B.stack]}return[null,null]}};b.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var w=Object.getOwnPropertyDescriptor(b.DetermineComponentFrameRoot,"name");w&&w.configurable&&Object.defineProperty(b.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var O=b.DetermineComponentFrameRoot(),P=O[0],W=O[1];if(P&&W){var G=P.split(`
`),F=W.split(`
`);for(O=w=0;w<G.length&&!G[w].includes("DetermineComponentFrameRoot");)w++;for(;O<F.length&&!F[O].includes("DetermineComponentFrameRoot");)O++;if(w===G.length||O===F.length)for(w=G.length-1,O=F.length-1;1<=w&&0<=O&&G[w]!==F[O];)O--;for(;1<=w&&0<=O;w--,O--)if(G[w]!==F[O]){if(w!==1||O!==1)do if(w--,O--,0>O||G[w]!==F[O]){var I=`
`+G[w].replace(" at new "," at ");return r.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",r.displayName)),typeof r==="function"&&f8.set(r,I),I}while(1<=w&&0<=O);break}}}finally{j8=!1,T.H=l,Hr(),Error.prepareStackTrace=o}return G=(G=r?r.displayName||r.name:"")?Gr(G):"",typeof r==="function"&&f8.set(r,G),G}function wr(r,g){switch(r.tag){case 26:case 27:case 5:return Gr(r.type);case 16:return Gr("Lazy");case 13:return r.child!==g&&g!==null?Gr("Suspense Fallback"):Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 15:return Tr(r.type,!1);case 11:return Tr(r.type.render,!1);case 1:return Tr(r.type,!0);case 31:return Gr("Activity");default:return""}}function nr(r){try{var g="",o=null;do{g+=wr(r,o);var l=r._debugInfo;if(l)for(var b=l.length-1;0<=b;b--){var w=l[b];if(typeof w.name==="string"){var O=g;r:{var{name:P,env:W,debugLocation:G}=w;if(G!=null){var F=zr(G),I=F.lastIndexOf(`
`),$=I===-1?F:F.slice(I+1);if($.indexOf(P)!==-1){var B=`
`+$;break r}}B=Gr(P+(W?" ["+W+"]":""))}g=O+B}}o=r,r=r.return}while(r);return g}catch(br){return`
Error generating stack: `+br.message+`
`+br.stack}}function ar(r){return(r=r?r.displayName||r.name:"")?Gr(r):""}function Xg(){if(Hv===null)return null;var r=Hv._debugOwner;return r!=null?c(r):null}function Io(){if(Hv===null)return"";var r=Hv;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Gr(r.type);break;case 13:g+=Gr("Suspense");break;case 19:g+=Gr("SuspenseList");break;case 31:g+=Gr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=ar(r.type));break;case 11:r._debugOwner||g!==""||(g+=ar(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var l=o._debugStack;if(r&&l){var b=zr(l);b!==""&&(g+=`
`+b)}}else if(r.debugStack!=null){var w=r.debugStack;(r=r.owner)&&w&&(g+=`
`+zr(w))}else break;var O=g}catch(P){O=`
Error generating stack: `+P.message+`
`+P.stack}return O}function er(r,g,o,l,b,w,O){var P=Hv;_o(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,o,l,b,w,O)):g(o,l,b,w,O)}finally{_o(P)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _o(r){T.getCurrentStack=r===null?null:Io,$0=!1,Hv=r}function zo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function rv(r){try{return cg(r),!1}catch(g){return!0}}function cg(r){return""+r}function qg(r,g){if(rv(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,zo(r)),cg(r)}function d5(r,g){if(rv(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,zo(r)),cg(r)}function tr(r){if(rv(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",zo(r)),cg(r)}function Bh(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{v5=g.inject(r),io=g}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return g.checkDCE?!0:!1}function Yg(r){if(typeof mz==="function"&&Nz(r),io&&typeof io.setStrictMode==="function")try{io.setStrictMode(v5,r)}catch(g){i0||(i0=!0,console.error("React instrumentation encountered an error: %o",g))}}function Te(r){return r>>>=0,r===0?32:31-(Bz(r)/Zz|0)|0}function b0(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function I1(r,g,o){var l=r.pendingLanes;if(l===0)return 0;var b=0,w=r.suspendedLanes,O=r.pingedLanes;r=r.warmLanes;var P=l&134217727;return P!==0?(l=P&~w,l!==0?b=b0(l):(O&=P,O!==0?b=b0(O):o||(o=P&~r,o!==0&&(b=b0(o))))):(P=l&~w,P!==0?b=b0(P):O!==0?b=b0(O):o||(o=l&~r,o!==0&&(b=b0(o)))),b===0?0:g!==0&&g!==b&&(g&w)===0&&(w=b&-b,o=g&-g,w>=o||w===32&&(o&4194048)!==0)?g:b}function m1(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function Z4(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Zh(){var r=d2;return d2<<=1,(d2&62914560)===0&&(d2=4194304),r}function xh(r){for(var g=[],o=0;31>o;o++)g.push(r);return g}function Ul(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function ne(r,g,o,l,b,w){var O=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:P,expirationTimes:W,hiddenUpdates:G}=r;for(o=O&~o;0<o;){var F=31-No(o),I=1<<F;P[F]=0,W[F]=-1;var $=G[F];if($!==null)for(G[F]=null,F=0;F<$.length;F++){var B=$[F];B!==null&&(B.lane&=-536870913)}o&=~I}l!==0&&N1(r,l,0),w!==0&&b===0&&r.tag!==0&&(r.suspendedLanes|=w&~(O&~g))}function N1(r,g,o){r.pendingLanes|=g,r.suspendedLanes&=~g;var l=31-No(g);r.entangledLanes|=g,r.entanglements[l]=r.entanglements[l]|1073741824|o&261930}function B1(r,g){var o=r.entangledLanes|=g;for(r=r.entanglements;o;){var l=31-No(o),b=1<<l;b&g|r[l]&g&&(r[l]|=g),o&=~b}}function Z1(r,g){var o=g&-g;return o=(o&42)!==0?1:x1(o),(o&(r.suspendedLanes|g))!==0?0:o}function x1(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function s5(r,g,o){if(U0)for(r=r.pendingUpdatersLaneMap;0<o;){var l=31-No(o),b=1<<l;r[l].add(g),o&=~b}}function Ll(r,g){if(U0)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:l}=r;0<g;){var b=31-No(g);r=1<<b,b=o[b],0<b.size&&(b.forEach(function(w){var O=w.alternate;O!==null&&l.has(O)||l.add(w)}),b.clear()),g&=~r}}function X(r){return r&=-r,Pv!==0&&Pv<r?_v!==0&&_v<r?(r&134217727)!==0?L0:s2:_v:Pv}function N(){var r=eg.p;if(r!==0)return r;return r=window.event,r===void 0?L0:MW(r.type)}function gr(r,g){var o=eg.p;try{return eg.p=r,g()}finally{eg.p=o}}function ur(r){delete r[Wo],delete r[Bo],delete r[rO],delete r[xz],delete r[Cz]}function Xr(r){var g=r[Wo];if(g)return g;for(var o=r.parentNode;o;){if(g=o[El]||o[Wo]){if(o=g.alternate,g.child!==null||o!==null&&o.child!==null)for(r=gW(r);r!==null;){if(o=r[Wo])return o;r=gW(r)}return g}r=o,o=r.parentNode}return null}function Br(r){if(r=r[Wo]||r[El]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function Zr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function vg(r){var g=r[mW];return g||(g=r[mW]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function $r(r){r[Sb]=!0}function Ko(r,g){gv(r,g),gv(r+"Capture",g)}function gv(r,g){p1[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),p1[r]=g;var o=r.toLowerCase();gO[o]=r,r==="onDoubleClick"&&(gO.ondblclick=r);for(r=0;r<g.length;r++)NW.add(g[r])}function Fl(r,g){Tz[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function rb(r){if(Vv.call(ZW,r))return!0;if(Vv.call(BW,r))return!1;if(nz.test(r))return ZW[r]=!0;return BW[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function $P(r,g,o){if(rb(g)){if(!r.hasAttribute(g)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&o===!0)return!0;return qg(o,g),r===""+o?o:r}}function Se(r,g,o){if(rb(g))if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var l=g.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(g);return}}qg(o,g),r.setAttribute(g,""+o)}}function te(r,g,o){if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}qg(o,g),r.setAttribute(g,""+o)}}function V0(r,g,o,l){if(l===null)r.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}qg(l,o),r.setAttributeNS(g,o,""+l)}}function zv(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return tr(r),r;default:return""}}function iP(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function ZJ(r,g,o){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:b,set:w}=l;return Object.defineProperty(r,g,{configurable:!0,get:function(){return b.call(this)},set:function(O){tr(O),o=""+O,w.call(this,O)}}),Object.defineProperty(r,g,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(O){tr(O),o=""+O},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function x4(r){if(!r._valueTracker){var g=iP(r)?"checked":"value";r._valueTracker=ZJ(r,g,""+r[g])}}function UP(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var o=g.getValue(),l="";return r&&(l=iP(r)?r.checked?"true":"false":r.value),r=l,r!==o?(g.setValue(r),!0):!1}function ke(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function Kv(r){return r.replace(Sz,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function LP(r,g){g.checked===void 0||g.defaultChecked===void 0||CW||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Xg()||"A component",g.type),CW=!0),g.value===void 0||g.defaultValue===void 0||xW||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Xg()||"A component",g.type),xW=!0)}function C4(r,g,o,l,b,w,O,P){if(r.name="",O!=null&&typeof O!=="function"&&typeof O!=="symbol"&&typeof O!=="boolean"?(qg(O,"type"),r.type=O):r.removeAttribute("type"),g!=null)if(O==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+zv(g)}else r.value!==""+zv(g)&&(r.value=""+zv(g));else O!=="submit"&&O!=="reset"||r.removeAttribute("value");g!=null?T4(r,O,zv(g)):o!=null?T4(r,O,zv(o)):l!=null&&r.removeAttribute("value"),b==null&&w!=null&&(r.defaultChecked=!!w),b!=null&&(r.checked=b&&typeof b!=="function"&&typeof b!=="symbol"),P!=null&&typeof P!=="function"&&typeof P!=="symbol"&&typeof P!=="boolean"?(qg(P,"name"),r.name=""+zv(P)):r.removeAttribute("name")}function FP(r,g,o,l,b,w,O,P){if(w!=null&&typeof w!=="function"&&typeof w!=="symbol"&&typeof w!=="boolean"&&(qg(w,"type"),r.type=w),g!=null||o!=null){if(!(w!=="submit"&&w!=="reset"||g!==void 0&&g!==null)){x4(r);return}o=o!=null?""+zv(o):"",g=g!=null?""+zv(g):o,P||g===r.value||(r.value=g),r.defaultValue=g}l=l!=null?l:b,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=P?r.checked:!!l,r.defaultChecked=!!l,O!=null&&typeof O!=="function"&&typeof O!=="symbol"&&typeof O!=="boolean"&&(qg(O,"name"),r.name=O),x4(r)}function T4(r,g,o){g==="number"&&ke(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function IP(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?n5.Children.forEach(g.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||nW||(nW=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||SW||(SW=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||TW||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),TW=!0)}function mP(){var r=Xg();return r?`

Check the render method of \``+r+"`.":""}function Ch(r,g,o,l){if(r=r.options,g){g={};for(var b=0;b<o.length;b++)g["$"+o[b]]=!0;for(o=0;o<r.length;o++)b=g.hasOwnProperty("$"+r[o].value),r[o].selected!==b&&(r[o].selected=b),b&&l&&(r[o].defaultSelected=!0)}else{o=""+zv(o),g=null;for(b=0;b<r.length;b++){if(r[b].value===o){r[b].selected=!0,l&&(r[b].defaultSelected=!0);return}g!==null||r[b].disabled||(g=r[b])}g!==null&&(g.selected=!0)}}function NP(r,g){for(r=0;r<kW.length;r++){var o=kW[r];if(g[o]!=null){var l=oo(g[o]);g.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,mP()):!g.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,mP())}}g.value===void 0||g.defaultValue===void 0||tW||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),tW=!0)}function BP(r,g){g.value===void 0||g.defaultValue===void 0||DW||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Xg()||"A component"),DW=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function ZP(r,g,o){if(g!=null&&(g=""+zv(g),g!==r.value&&(r.value=g),o==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=o!=null?""+zv(o):""}function xP(r,g,o,l){if(g==null){if(l!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(oo(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}o=l}o==null&&(o=""),g=o}o=zv(g),r.defaultValue=o,l=r.textContent,l===o&&l!==""&&l!==null&&(r.value=l),x4(r)}function CP(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?CP(r.children[0],g):r}function ov(r){return"  "+"  ".repeat(r)}function Th(r){return"+ "+"  ".repeat(r)}function C1(r){return"- "+"  ".repeat(r)}function TP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function gb(r,g){return VW.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function De(r,g,o){var l=120-2*o;if(g===null)return Th(o)+gb(r,l)+`
`;if(typeof g==="string"){for(var b=0;b<g.length&&b<r.length&&g.charCodeAt(b)===r.charCodeAt(b);b++);return b>l-8&&10<b&&(r="..."+r.slice(b-8),g="..."+g.slice(b-8)),Th(o)+gb(r,l)+`
`+C1(o)+gb(g,l)+`
`}return ov(o)+gb(r,l)+`
`}function n4(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,o){return o})}function ob(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(oo(r))return"[...]";if(r.$$typeof===z0)return(g=V(r.type))?"<"+g+">":"<...>";var o=n4(r);if(o==="Object"){o="",g-=2;for(var l in r)if(r.hasOwnProperty(l)){var b=JSON.stringify(l);if(b!=='"'+l+'"'&&(l=b),g-=l.length-2,b=ob(r[l],15>g?g:15),g-=b.length,0>g){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+l+":"+b}return"{"+o+"}"}return o;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function nh(r,g){return typeof r!=="string"||VW.test(r)?"{"+ob(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function S4(r,g,o){var l=120-o.length-r.length,b=[],w;for(w in g)if(g.hasOwnProperty(w)&&w!=="children"){var O=nh(g[w],120-o.length-w.length-1);l-=w.length+O.length+2,b.push(w+"="+O)}return b.length===0?o+"<"+r+`>
`:0<l?o+"<"+r+" "+b.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+b.join(`
`+o+"  ")+`
`+o+`>
`}function xJ(r,g,o){var l="",b=cr({},g),w;for(w in r)if(r.hasOwnProperty(w)){delete b[w];var O=120-2*o-w.length-2,P=ob(r[w],O);g.hasOwnProperty(w)?(O=ob(g[w],O),l+=Th(o)+w+": "+P+`
`,l+=C1(o)+w+": "+O+`
`):l+=Th(o)+w+": "+P+`
`}for(var W in b)b.hasOwnProperty(W)&&(r=ob(b[W],120-2*o-W.length-2),l+=C1(o)+W+": "+r+`
`);return l}function CJ(r,g,o,l){var b="",w=new Map;for(G in o)o.hasOwnProperty(G)&&w.set(G.toLowerCase(),G);if(w.size===1&&w.has("children"))b+=S4(r,g,ov(l));else{for(var O in g)if(g.hasOwnProperty(O)&&O!=="children"){var P=120-2*(l+1)-O.length-1,W=w.get(O.toLowerCase());if(W!==void 0){w.delete(O.toLowerCase());var G=g[O];W=o[W];var F=nh(G,P);P=nh(W,P),typeof G==="object"&&G!==null&&typeof W==="object"&&W!==null&&n4(G)==="Object"&&n4(W)==="Object"&&(2<Object.keys(G).length||2<Object.keys(W).length||-1<F.indexOf("...")||-1<P.indexOf("..."))?b+=ov(l+1)+O+`={{
`+xJ(G,W,l+2)+ov(l+1)+`}}
`:(b+=Th(l+1)+O+"="+F+`
`,b+=C1(l+1)+O+"="+P+`
`)}else b+=ov(l+1)+O+"="+nh(g[O],P)+`
`}w.forEach(function(I){if(I!=="children"){var $=120-2*(l+1)-I.length-1;b+=C1(l+1)+I+"="+nh(o[I],$)+`
`}}),b=b===""?ov(l)+"<"+r+`>
`:ov(l)+"<"+r+`
`+b+ov(l)+`>
`}if(r=o.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(w="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")w=""+g;b+=De(w,""+r,l+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")b=r==null?b+De(""+g,null,l+1):b+De(""+g,void 0,l+1);return b}function nP(r,g){var o=TP(r);if(o===null){o="";for(r=r.child;r;)o+=nP(r,g),r=r.sibling;return o}return ov(g)+"<"+o+`>
`}function t4(r,g){var o=CP(r,g);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return ov(g)+`...
`+t4(o,g+1);o="";var l=r.fiber._debugInfo;if(l)for(var b=0;b<l.length;b++){var w=l[b].name;typeof w==="string"&&(o+=ov(g)+"<"+w+`>
`,g++)}if(l="",b=r.fiber.pendingProps,r.fiber.tag===6)l=De(b,r.serverProps,g),g++;else if(w=TP(r.fiber),w!==null)if(r.serverProps===void 0){l=g;var O=120-2*l-w.length-2,P="";for(G in b)if(b.hasOwnProperty(G)&&G!=="children"){var W=nh(b[G],15);if(O-=G.length+W.length+2,0>O){P+=" ...";break}P+=" "+G+"="+W}l=ov(l)+"<"+w+P+`>
`,g++}else r.serverProps===null?(l=S4(w,b,Th(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=CJ(w,b,r.serverProps,g),g++);var G="";b=r.fiber.child;for(w=0;b&&w<r.children.length;)O=r.children[w],O.fiber===b?(G+=t4(O,g),w++):G+=nP(b,g),b=b.sibling;b&&0<r.children.length&&(G+=ov(g)+`...
`),b=r.serverTail,r.serverProps===null&&g--;for(r=0;r<b.length;r++)w=b[r],G=typeof w==="string"?G+(C1(g)+gb(w,120-2*g)+`
`):G+S4(w.type,w.props,C1(g));return o+l+G}function k4(r){try{return`

`+t4(r,0)}catch(g){return""}}function SP(r,g,o){for(var l=g,b=null,w=0;l;)l===r&&(w=0),b={fiber:l,children:b!==null?[b]:[],serverProps:l===g?o:l===r?null:void 0,serverTail:[],distanceFromLeaf:w},w++,l=l.return;return b!==null?k4(b).replaceAll(/^[+-]/gm,">"):""}function tP(r,g){var o=cr({},r||EW),l={tag:g};if(_W.indexOf(g)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),kz.indexOf(g)!==-1&&(o.pTagInButtonScope=null),tz.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=l,g==="form"&&(o.formTag=l),g==="a"&&(o.aTagInScope=l),g==="button"&&(o.buttonTagInScope=l),g==="nobr"&&(o.nobrTagInScope=l),g==="p"&&(o.pTagInButtonScope=l),g==="li"&&(o.listItemTagAutoclosing=l),g==="dd"||g==="dt")o.dlItemTagAutoclosing=l;return g==="#document"||g==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=l),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function kP(r,g,o){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return Dz.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return o||g===null;case"html":return o&&g==="#document"||g===null;case"body":return o&&(g==="#document"||g==="html")||g===null}return!0}function TJ(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function DP(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function D4(r,g){g=g||EW;var o=g.current;if(g=(o=kP(r,o&&o.tag,g.implicitRootScope)?null:o)?null:TJ(r,g),g=o||g,!g)return!0;var l=g.tag;if(g=String(!!o)+"|"+r+"|"+l,ru[g])return!1;ru[g]=!0;var b=(g=Hv)?DP(g.return,l):null,w=g!==null&&b!==null?SP(b,g,null):"",O="<"+r+">";return o?(o="",l==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,O,l,o,w)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,O,l,w),g&&(r=g.return,b===null||r===null||b===r&&r._debugOwner===g._debugOwner||er(b,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,O)})),!1}function Ve(r,g,o){if(o||kP("#text",g,!1))return!0;if(o="#text|"+g,ru[o])return!1;ru[o]=!0;var l=(o=Hv)?DP(o,g):null;return o=o!==null&&l!==null?SP(l,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,o),!1}function vb(r,g){if(g){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=g;return}}r.textContent=g}function nJ(r){return r.replace(Ez,function(g,o){return o.toUpperCase()})}function VP(r,g,o){var l=g.indexOf("--")===0;l||(-1<g.indexOf("-")?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,nJ(g.replace(_z,"ms-")))):Vz.test(g)?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!jW.test(o)||vO.hasOwnProperty(o)&&vO[o]||(vO[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,o.replace(jW,""))),typeof o==="number"&&(isNaN(o)?fW||(fW=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(o)||aW||(aW=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),o==null||typeof o==="boolean"||o===""?l?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":l?r.setProperty(g,o):typeof o!=="number"||o===0||pW.has(g)?g==="float"?r.cssFloat=o:(d5(o,g),r[g]=(""+o).trim()):r[g]=o+"px"}function _P(r,g,o){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,o!=null){if(g){var l={};if(o){for(var b in o)if(o.hasOwnProperty(b)&&!g.hasOwnProperty(b))for(var w=oO[b]||[b],O=0;O<w.length;O++)l[w[O]]=b}for(var P in g)if(g.hasOwnProperty(P)&&(!o||o[P]!==g[P]))for(b=oO[P]||[P],w=0;w<b.length;w++)l[b[w]]=P;P={};for(var W in g)for(b=oO[W]||[W],w=0;w<b.length;w++)P[b[w]]=W;W={};for(var G in l)if(b=l[G],(w=P[G])&&b!==w&&(O=b+","+w,!W[O])){W[O]=!0,O=console;var F=g[b];O.error.call(O,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",F==null||typeof F==="boolean"||F===""?"Removing":"Updating",b,w)}}for(var I in o)!o.hasOwnProperty(I)||g!=null&&g.hasOwnProperty(I)||(I.indexOf("--")===0?r.setProperty(I,""):I==="float"?r.cssFloat="":r[I]="");for(var $ in g)G=g[$],g.hasOwnProperty($)&&o[$]!==G&&VP(r,$,G)}else for(l in g)g.hasOwnProperty(l)&&VP(r,l,g[l])}function lb(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function EP(r){return yz.get(r)||r}function SJ(r,g){if(Vv.call(b5,g)&&b5[g])return!0;if(jz.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=dW.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),b5[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),b5[g]=!0}if(cz.test(g)){if(r=g.toLowerCase(),r=dW.hasOwnProperty(r)?r:null,r==null)return b5[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),b5[g]=!0)}return!0}function tJ(r,g){var o=[],l;for(l in g)SJ(r,l)||o.push(l);g=o.map(function(b){return"`"+b+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function kJ(r,g,o,l){if(Vv.call(Zo,g)&&Zo[g])return!0;var b=g.toLowerCase();if(b==="onfocusin"||b==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Zo[g]=!0;if(typeof o==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(g))return!0;if(l=r.hasOwnProperty(b)?r[b]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,l),Zo[g]=!0;if(r9.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),Zo[g]=!0}else if(r9.test(g))return fz.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),Zo[g]=!0;if(az.test(g)||pz.test(g))return!0;if(b==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Zo[g]=!0;if(b==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Zo[g]=!0;if(b==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),Zo[g]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),Zo[g]=!0;if(ou.hasOwnProperty(b)){if(b=ou[b],b!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,b),Zo[g]=!0}else if(g!==b)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,b),Zo[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(b=g.toLowerCase().slice(0,5),b==="data-"||b==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,g,g,o,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,g,g,o,g,g,g),Zo[g]=!0}case"function":case"symbol":return Zo[g]=!0,!1;case"string":if(o==="false"||o==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,g,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,o),Zo[g]=!0}}return!0}function DJ(r,g,o){var l=[],b;for(b in g)kJ(r,b,g[b],o)||l.push(b);g=l.map(function(w){return"`"+w+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function hb(r){return dz.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function _0(){}function V4(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function yP(r){var g=Br(r);if(g&&(r=g.stateNode)){var o=r[Bo]||null;r:switch(r=g.stateNode,g.type){case"input":if(C4(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),g=o.name,o.type==="radio"&&g!=null){for(o=r;o.parentNode;)o=o.parentNode;qg(g,"name"),o=o.querySelectorAll('input[name="'+Kv(""+g)+'"][type="radio"]');for(g=0;g<o.length;g++){var l=o[g];if(l!==r&&l.form===r.form){var b=l[Bo]||null;if(!b)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");C4(l,b.value,b.defaultValue,b.defaultValue,b.checked,b.defaultChecked,b.type,b.name)}}for(g=0;g<o.length;g++)l=o[g],l.form===r.form&&UP(l)}break r;case"textarea":ZP(r,o.value,o.defaultValue);break r;case"select":g=o.value,g!=null&&Ch(r,!!o.multiple,g,!1)}}}function cP(r,g,o){if(lO)return r(g,o);lO=!0;try{var l=r(g);return l}finally{if(lO=!1,w5!==null||e5!==null){if(jh(),w5&&(g=w5,r=e5,e5=w5=null,yP(g),r))for(g=0;g<r.length;g++)yP(r[g])}}}function bb(r,g){var o=r.stateNode;if(o===null)return null;var l=o[Bo]||null;if(l===null)return null;o=l[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function jP(){if(vu)return vu;var r,g=bO,o=g.length,l,b="value"in yl?yl.value:yl.textContent,w=b.length;for(r=0;r<o&&g[r]===b[r];r++);var O=o-r;for(l=1;l<=O&&g[o-l]===b[w-l];l++);return vu=b.slice(r,1<l?1-l:void 0)}function _e(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function Ee(){return!0}function fP(){return!1}function Eo(r){function g(o,l,b,w,O){this._reactName=o,this._targetInst=b,this.type=l,this.nativeEvent=w,this.target=O,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(o=r[P],this[P]=o?o(w):w[P]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?Ee:fP,this.isPropagationStopped=fP,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ee)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ee)},persist:function(){},isPersistent:Ee}),g}function VJ(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=HK[r])?!!g[r]:!1}function _4(){return VJ}function aP(r,g){switch(r){case"keyup":return zK.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==l9;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pP(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function _J(r,g){switch(r){case"compositionend":return pP(g);case"keypress":if(g.which!==b9)return null;return e9=!0,w9;case"textInput":return r=g.data,r===w9&&e9?null:r;default:return null}}function EJ(r,g){if(u5)return r==="compositionend"||!OO&&aP(r,g)?(r=jP(),vu=bO=yl=null,u5=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return h9&&g.locale!=="ko"?null:g.data;default:return null}}function dP(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!$K[r.type]:g==="textarea"?!0:!1}function yJ(r){if(!F0)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function sP(r,g,o,l){w5?e5?e5.push(l):e5=[l]:w5=l,g=T2(g,"onChange"),0<g.length&&(o=new lu("onChange","change",null,o,l),r.push({event:o,listeners:g}))}function cJ(r){xM(r,0)}function ye(r){var g=Zr(r);if(UP(g))return r}function rq(r,g){if(r==="change")return g}function gq(){Eb&&(Eb.detachEvent("onpropertychange",oq),yb=Eb=null)}function oq(r){if(r.propertyName==="value"&&ye(yb)){var g=[];sP(g,yb,r,V4(r)),cP(cJ,g)}}function jJ(r,g,o){r==="focusin"?(gq(),Eb=g,yb=o,Eb.attachEvent("onpropertychange",oq)):r==="focusout"&&gq()}function fJ(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ye(yb)}function aJ(r,g){if(r==="click")return ye(g)}function pJ(r,g){if(r==="input"||r==="change")return ye(g)}function dJ(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function wb(r,g){if(xo(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var o=Object.keys(r),l=Object.keys(g);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var b=o[l];if(!Vv.call(g,b)||!xo(r[b],g[b]))return!1}return!0}function vq(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lq(r,g){var o=vq(r);r=0;for(var l;o;){if(o.nodeType===3){if(l=r+o.textContent.length,r<=g&&l>=g)return{node:o,offset:g-r};r=l}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=vq(o)}}function hq(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?hq(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function bq(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=ke(r.document);g instanceof r.HTMLIFrameElement;){try{var o=typeof g.contentWindow.location.href==="string"}catch(l){o=!1}if(o)r=g.contentWindow;else break;g=ke(r.document)}return g}function E4(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function wq(r,g,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;PO||O5==null||O5!==ke(l)||(l=O5,("selectionStart"in l)&&E4(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cb&&wb(cb,l)||(cb=l,l=T2(HO,"onSelect"),0<l.length&&(g=new lu("onSelect","select",null,g,o),r.push({event:g,listeners:l}),g.target=O5)))}function T1(r,g){var o={};return o[r.toLowerCase()]=g.toLowerCase(),o["Webkit"+r]="webkit"+g,o["Moz"+r]="moz"+g,o}function n1(r){if(qO[r])return qO[r];if(!H5[r])return r;var g=H5[r],o;for(o in g)if(g.hasOwnProperty(o)&&o in O9)return qO[r]=g[o];return r}function tv(r,g){M9.set(r,g),Ko(g,[r])}function sJ(r){for(var g=bu,o=0;o<r.length;o++){var l=r[o];if(typeof l==="object"&&l!==null)if(oo(l)&&l.length===2&&typeof l[0]==="string"){if(g!==bu&&g!==GO)return WO;g=GO}else return WO;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||g!==bu&&g!==RO)return WO;g=RO}}return g}function y4(r,g,o,l){for(var b in r)Vv.call(r,b)&&b[0]!=="_"&&w0(b,r[b],g,o,l)}function w0(r,g,o,l,b){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===z0){var w=V(g.type)||"…",O=g.key;g=g.props;var P=Object.keys(g),W=P.length;if(O==null&&W===0){g="<"+w+" />";break}if(3>l||W===1&&P[0]==="children"&&O==null){g="<"+w+" … />";break}o.push([b+"  ".repeat(l)+r,"<"+w]),O!==null&&w0("key",O,o,l+1,b),r=!1;for(var G in g)G==="children"?g.children!=null&&(!oo(g.children)||0<g.children.length)&&(r=!0):Vv.call(g,G)&&G[0]!=="_"&&w0(G,g[G],o,l+1,b);o.push(["",r?">…</"+w+">":"/>"]);return}if(w=Object.prototype.toString.call(g),w=w.slice(8,w.length-1),w==="Array"){if(G=sJ(g),G===RO||G===bu){g=JSON.stringify(g);break}else if(G===GO){o.push([b+"  ".repeat(l)+r,""]);for(r=0;r<g.length;r++)w=g[r],w0(w[0],w[1],o,l+1,b);return}}if(w==="Promise"){if(g.status==="fulfilled"){if(w=o.length,w0(r,g.value,o,l,b),o.length>w){o=o[w],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(g.status==="rejected"&&(w=o.length,w0(r,g.reason,o,l,b),o.length>w)){o=o[w],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(l)+r,"Promise"]);return}w==="Object"&&(G=Object.getPrototypeOf(g))&&typeof G.constructor==="function"&&(w=G.constructor.name),o.push([b+"  ".repeat(l)+r,w==="Object"?3>l?"":"…":w]),3>l&&y4(g,o,l+1,b);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===NK?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}o.push([b+"  ".repeat(l)+r,g])}function eq(r,g,o,l){var b=!0;for(O in r)O in g||(o.push([wu+"  ".repeat(l)+O,"…"]),b=!1);for(var w in g)if(w in r){var O=r[w],P=g[w];if(O!==P){if(l===0&&w==="children")b="  ".repeat(l)+w,o.push([wu+b,"…"],[eu+b,"…"]);else{if(!(3<=l)){if(typeof O==="object"&&typeof P==="object"&&O!==null&&P!==null&&O.$$typeof===P.$$typeof)if(P.$$typeof===z0){if(O.type===P.type&&O.key===P.key){O=V(P.type)||"…",b="  ".repeat(l)+w,O="<"+O+" … />",o.push([wu+b,O],[eu+b,O]),b=!1;continue}}else{var W=Object.prototype.toString.call(O),G=Object.prototype.toString.call(P);if(W===G&&(G==="[object Object]"||G==="[object Array]")){W=[G9+"  ".repeat(l)+w,G==="[object Array]"?"Array":""],o.push(W),G=o.length,eq(O,P,o,l+1)?G===o.length&&(W[1]="Referentially unequal but deeply equal objects. Consider memoization."):b=!1;continue}}else if(typeof O==="function"&&typeof P==="function"&&O.name===P.name&&O.length===P.length&&(W=Function.prototype.toString.call(O),G=Function.prototype.toString.call(P),W===G)){O=P.name===""?"() => {}":P.name+"() {}",o.push([G9+"  ".repeat(l)+w,O+" Referentially unequal function closure. Consider memoization."]);continue}}w0(w,O,o,l,wu),w0(w,P,o,l,eu)}b=!1}}else o.push([eu+"  ".repeat(l)+w,"…"]),b=!1;return b}function vv(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function e0(r,g,o,l){$g&&(jl.start=g,jl.end=o,s0.color="warning",s0.tooltipText=l,s0.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,jl)):performance.measure(l,jl))}function ce(r,g,o){e0(r,g,o,"Reconnect")}function je(r,g,o,l,b){var w=n(r);if(w!==null&&$g){var{alternate:O,actualDuration:P}=r;if(O===null||O.child!==r.child)for(var W=r.child;W!==null;W=W.sibling)P-=W.actualDuration;l=0.5>P?l?"tertiary-light":"primary-light":10>P?l?"tertiary":"primary":100>P?l?"tertiary-dark":"primary-dark":"error";var G=r.memoizedProps;P=r._debugTask,G!==null&&O!==null&&O.memoizedProps!==G?(W=[BK],G=eq(O.memoizedProps,G,W,0),1<W.length&&(G&&!cl&&(O.lanes&b)===0&&100<r.actualDuration?(cl=!0,W[0]=ZK,s0.color="warning",s0.tooltipText=X9):(s0.color=l,s0.tooltipText=w),s0.properties=W,jl.start=g,jl.end=o,P!=null?P.run(performance.measure.bind(performance,"​"+w,jl)):performance.measure("​"+w,jl))):P!=null?P.run(console.timeStamp.bind(console,w,g,o,iv,void 0,l)):console.timeStamp(w,g,o,iv,void 0,l)}}function c4(r,g,o,l){if($g){var b=n(r);if(b!==null){for(var w=null,O=[],P=0;P<l.length;P++){var W=l[P];w==null&&W.source!==null&&(w=W.source._debugTask),W=W.value,O.push(["Error",typeof W==="object"&&W!==null&&typeof W.message==="string"?String(W.message):String(W)])}r.key!==null&&w0("key",r.key,O,0,""),r.memoizedProps!==null&&y4(r.memoizedProps,O,0,""),w==null&&(w=r._debugTask),r={start:g,end:o,detail:{devtools:{color:"error",track:iv,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:O}}},w?w.run(performance.measure.bind(performance,"​"+b,r)):performance.measure("​"+b,r)}}}function u0(r,g,o,l,b){if(b!==null){if($g){var w=n(r);if(w!==null){l=[];for(var O=0;O<b.length;O++){var P=b[O].value;l.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r.key!==null&&w0("key",r.key,l,0,""),r.memoizedProps!==null&&y4(r.memoizedProps,l,0,""),g={start:g,end:o,detail:{devtools:{color:"error",track:iv,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+w,g)):performance.measure("​"+w,g)}}}else w=n(r),w!==null&&$g&&(b=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,w,g,o,iv,void 0,b)):console.timeStamp(w,g,o,iv,void 0,b))}function rQ(r,g,o,l){if($g&&!(g<=r)){var b=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,b)):console.timeStamp(o,r,g,fr,jr,b)}}function uq(r,g,o,l){!$g||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,g,fr,jr,o)):console.timeStamp("Prewarm",r,g,fr,jr,o))}function Oq(r,g,o,l){!$g||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,g,fr,jr,o)):console.timeStamp("Suspended",r,g,fr,jr,o))}function gQ(r,g,o,l,b,w){if($g&&!(g<=r)){o=[];for(var O=0;O<l.length;O++){var P=l[O].value;o.push(["Recoverable Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:jr,tooltipText:b?"Hydration Failed":"Recovered after Error",properties:o}}},w?w.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function j4(r,g,o,l){!$g||g<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,g,fr,jr,"error")):console.timeStamp("Errored",r,g,fr,jr,"error"))}function oQ(r,g,o,l){!$g||g<=r||(l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,"secondary-light")):console.timeStamp(o,r,g,fr,jr,"secondary-light"))}function Hq(r,g,o,l,b){if($g&&!(g<=r)){for(var w=[],O=0;O<o.length;O++){var P=o[O].value;w.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"error",track:fr,trackGroup:jr,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:w}}},b?b.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function eb(r,g,o){!$g||g<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,g,fr,jr,"secondary-dark")):console.timeStamp("Animating",r,g,fr,jr,"secondary-dark"))}function fe(){for(var r=P5,g=XO=P5=0;g<r;){var o=Uv[g];Uv[g++]=null;var l=Uv[g];Uv[g++]=null;var b=Uv[g];Uv[g++]=null;var w=Uv[g];if(Uv[g++]=null,l!==null&&b!==null){var O=l.pending;O===null?b.next=b:(b.next=O.next,O.next=b),l.pending=b}w!==0&&Pq(o,b,w)}}function ae(r,g,o,l){Uv[P5++]=r,Uv[P5++]=g,Uv[P5++]=o,Uv[P5++]=l,XO|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function f4(r,g,o,l){return ae(r,g,o,l),pe(r)}function $o(r,g){return ae(r,null,null,g),pe(r)}function Pq(r,g,o){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o);for(var b=!1,w=r.return;w!==null;)w.childLanes|=o,l=w.alternate,l!==null&&(l.childLanes|=o),w.tag===22&&(r=w.stateNode,r===null||r._visibility&jb||(b=!0)),r=w,w=w.return;return r.tag===3?(w=r.stateNode,b&&g!==null&&(b=31-No(o),r=w.hiddenUpdates,l=r[b],l===null?r[b]=[g]:l.push(g),g.lane=o|536870912),w):null}function pe(r){if(Jw>fK)throw qh=Jw=0,Qw=dO=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");qh>aK&&(qh=0,Qw=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&LM(r);for(var g=r,o=g.return;o!==null;)g.alternate===null&&(g.flags&4098)!==0&&LM(r),g=o,o=g.return;return g.tag===3?g.stateNode:null}function S1(r){if(Lv===null)return r;var g=Lv(r);return g===void 0?r:g.current}function a4(r){if(Lv===null)return r;var g=Lv(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=S1(r.render),r.render!==g)?(g={$$typeof:Cb,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function qq(r,g){if(Lv===null)return!1;var o=r.elementType;g=g.type;var l=!1,b=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(l=!0);break;case 0:typeof g==="function"?l=!0:b===Ov&&(l=!0);break;case 11:b===Cb?l=!0:b===Ov&&(l=!0);break;case 14:case 15:b===j2?l=!0:b===Ov&&(l=!0);break;default:return!1}return l&&(r=Lv(o),r!==void 0&&r===Lv(g))?!0:!1}function Aq(r){Lv!==null&&typeof WeakSet==="function"&&(q5===null&&(q5=new WeakSet),q5.add(r))}function Mq(r,g,o){do{var l=r,b=l.alternate,w=l.child,O=l.sibling,P=l.tag;l=l.type;var W=null;switch(P){case 0:case 15:case 1:W=l;break;case 11:W=l.render}if(Lv===null)throw Error("Expected resolveFamily to be set during hot reload.");var G=!1;if(l=!1,W!==null&&(W=Lv(W),W!==void 0&&(o.has(W)?l=!0:g.has(W)&&(P===1?l=!0:G=!0))),q5!==null&&(q5.has(r)||b!==null&&q5.has(b))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||G)b=$o(r,2),b!==null&&Zg(b,r,2);if(w===null||l||Mq(w,g,o),O===null)break;r=O}while(1)}function vQ(r,g,o,l){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Y9||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function p4(r){return r=r.prototype,!(!r||!r.isReactComponent)}function E0(r,g){var o=r.alternate;switch(o===null?(o=z(r.tag,g,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=g,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,g=r.dependencies,o.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=S1(r.type);break;case 1:o.type=S1(r.type);break;case 11:o.type=a4(r.type)}return o}function Wq(r,g){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,g=o.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function d4(r,g,o,l,b,w){var O=0,P=r;if(typeof r==="function")p4(r)&&(O=1),P=S1(P);else if(typeof r==="string")O=hr(),O=Pz(r,o,O)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case _8:return g=z(31,o,g,b),g.elementType=_8,g.lanes=w,g;case g5:return t1(o.children,b,w,g);case c2:O=8,b|=Uo,b|=Ev;break;case t8:return r=o,l=b,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=z(12,r,g,l|kr),g.elementType=t8,g.lanes=w,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case D8:return g=z(13,o,g,b),g.elementType=D8,g.lanes=w,g;case V8:return g=z(19,o,g,b),g.elementType=V8,g.lanes=w,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case K0:O=10;break r;case k8:O=9;break r;case Cb:O=11,P=a4(P);break r;case j2:O=14;break r;case Ov:O=16,P=null;break r}if(P="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)P+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":oo(r)?o="array":r!==void 0&&r.$$typeof===z0?(o="<"+(V(r.type)||"Unknown")+" />",P=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(O=l?c(l):null)&&(P+=`

Check the render method of \``+O+"`."),O=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+P)),P=null}return g=z(O,o,g,b),g.elementType=r,g.type=P,g.lanes=w,g._debugOwner=l,g}function de(r,g,o){return g=d4(r.type,r.key,r.props,r._owner,g,o),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function t1(r,g,o,l){return r=z(7,r,l,g),r.lanes=o,r}function s4(r,g,o){return r=z(6,r,null,g),r.lanes=o,r}function Rq(r){var g=z(18,null,null,Lr);return g.stateNode=r,g}function r6(r,g,o){return g=z(4,r.children!==null?r.children:[],r.key,g),g.lanes=o,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function lv(r,g){if(typeof r==="object"&&r!==null){var o=YO.get(r);if(o!==void 0)return o;return g={value:r,source:g,stack:nr(g)},YO.set(r,g),g}return{value:r,source:g,stack:nr(g)}}function y0(r,g){Il(),A5[M5++]=fb,A5[M5++]=uu,uu=r,fb=g}function Gq(r,g,o){Il(),Fv[Iv++]=gl,Fv[Iv++]=ol,Fv[Iv++]=s1,s1=r;var l=gl;r=ol;var b=32-No(l)-1;l&=~(1<<b),o+=1;var w=32-No(g)+b;if(30<w){var O=b-b%5;w=(l&(1<<O)-1).toString(32),l>>=O,b-=O,gl=1<<32-No(g)+b|o<<b|l,ol=w+r}else gl=1<<w|o<<b|l,ol=r}function g6(r){Il(),r.return!==null&&(y0(r,1),Gq(r,1,0))}function o6(r){for(;r===uu;)uu=A5[--M5],A5[M5]=null,fb=A5[--M5],A5[M5]=null;for(;r===s1;)s1=Fv[--Iv],Fv[Iv]=null,ol=Fv[--Iv],Fv[Iv]=null,gl=Fv[--Iv],Fv[Iv]=null}function Xq(){return Il(),s1!==null?{id:gl,overflow:ol}:null}function Yq(r,g){Il(),Fv[Iv++]=gl,Fv[Iv++]=ol,Fv[Iv++]=s1,gl=g.id,ol=g.overflow,s1=r}function Il(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function k1(r,g){if(r.return===null){if(qv===null)qv={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(qv.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");qv.distanceFromLeaf>g&&(qv.distanceFromLeaf=g)}return qv}var o=k1(r.return,g+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>g&&(o.distanceFromLeaf=g),o;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},o.push(g),g}function Jq(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function se(r,g){I0||(r=k1(r,0),r.serverProps=null,g!==null&&(g=sM(g),r.serverTail.push(g)))}function ml(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",l=qv;throw l!==null&&(qv=null,o=k4(l)),ub(lv(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),JO}function Qq(r){var{stateNode:g,type:o,memoizedProps:l}=r;switch(g[Wo]=r,g[Bo]=l,Q8(o,l),o){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(o=0;o<zw.length;o++)dr(zw[o],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":Fl("input",l),dr("invalid",g),LP(g,l),FP(g,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":IP(g,l);break;case"select":Fl("select",l),dr("invalid",g),NP(g,l);break;case"textarea":Fl("textarea",l),dr("invalid",g),BP(g,l),xP(g,l.value,l.defaultValue,l.children)}o=l.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||g.textContent===""+o||l.suppressHydrationWarning===!0||SM(g.textContent,o)?(l.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),l.onScroll!=null&&dr("scroll",g),l.onScrollEnd!=null&&dr("scrollend",g),l.onClick!=null&&(g.onclick=_0),g=!0):g=!1,g||ml(r,!0)}function zq(r){for(Ro=r.return;Ro;)switch(Ro.tag){case 5:case 31:case 13:mv=!1;return;case 27:case 3:mv=!0;return;default:Ro=Ro.return}}function Sh(r){if(r!==Ro)return!1;if(!pr)return zq(r),pr=!0,!1;var g=r.tag,o;if(o=g!==3&&g!==27){if(o=g===5)o=r.type,o=!(o!=="form"&&o!=="button")||U8(r.type,r.memoizedProps);o=!o}if(o&&ig){for(o=ig;o;){var l=k1(r,0),b=sM(o);l.serverTail.push(b),o=b.type==="Suspense"?m8(o):uv(o.nextSibling)}ml(r)}if(zq(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");ig=m8(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");ig=m8(r)}else g===27?(g=ig,kl(r.type)?(r=OH,OH=null,ig=r):ig=g):ig=Ro?uv(r.stateNode.nextSibling):null;return!0}function D1(){ig=Ro=null,I0=pr=!1}function v6(){var r=al;return r!==null&&(So===null?So=r:So.push.apply(So,r),al=null),r}function ub(r){al===null?al=[r]:al.push(r)}function l6(){var r=qv;if(r!==null){qv=null;for(var g=k4(r);0<r.children.length;)r=r.children[0];er(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function r2(){W5=Ou=null,R5=!1}function Nl(r,g,o){Qr(QO,g._currentValue,r),g._currentValue=o,Qr(zO,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==Q9&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=Q9}function c0(r,g){r._currentValue=QO.current;var o=zO.current;Rr(zO,g),r._currentRenderer=o,Rr(QO,g)}function h6(r,g,o){for(;r!==null;){var l=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,l!==null&&(l.childLanes|=g)):l!==null&&(l.childLanes&g)!==g&&(l.childLanes|=g),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function b6(r,g,o,l){var b=r.child;b!==null&&(b.return=r);for(;b!==null;){var w=b.dependencies;if(w!==null){var O=b.child;w=w.firstContext;r:for(;w!==null;){var P=w;w=b;for(var W=0;W<g.length;W++)if(P.context===g[W]){w.lanes|=o,P=w.alternate,P!==null&&(P.lanes|=o),h6(w.return,o,r),l||(O=null);break r}w=P.next}}else if(b.tag===18){if(O=b.return,O===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");O.lanes|=o,w=O.alternate,w!==null&&(w.lanes|=o),h6(O,o,r),O=null}else O=b.child;if(O!==null)O.return=b;else for(O=b;O!==null;){if(O===r){O=null;break}if(b=O.sibling,b!==null){b.return=O.return,O=b;break}O=O.return}b=O}}function th(r,g,o,l){r=null;for(var b=g,w=!1;b!==null;){if(!w){if((b.flags&524288)!==0)w=!0;else if((b.flags&262144)!==0)break}if(b.tag===10){var O=b.alternate;if(O===null)throw Error("Should have a current fiber. This is a bug in React.");if(O=O.memoizedProps,O!==null){var P=b.type;xo(b.pendingProps.value,O.value)||(r!==null?r.push(P):r=[P])}}else if(b===f2.current){if(O=b.alternate,O===null)throw Error("Should have a current fiber. This is a bug in React.");O.memoizedState.memoizedState!==b.memoizedState.memoizedState&&(r!==null?r.push(Lw):r=[Lw])}b=b.return}r!==null&&b6(g,r,o,l),g.flags|=262144}function g2(r){for(r=r.firstContext;r!==null;){if(!xo(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function V1(r){Ou=r,W5=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Lg(r){return R5&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),Kq(Ou,r)}function o2(r,g){return Ou===null&&V1(r),Kq(r,g)}function Kq(r,g){var o=g._currentValue;if(g={context:g,memoizedValue:o,next:null},W5===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");W5=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else W5=W5.next=g;return o}function w6(){return{controller:new TK,data:new Map,refCount:0}}function _1(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function Ob(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&nK(SK,function(){r.controller.abort()})}function O0(r,g,o){if((r&127)!==0)0>m0&&(m0=fg(),pb=Hu(g),KO=g,o!=null&&($O=n(o)),(og&(lo|Wv))!==uo&&(xg=!0,sl=ab),r=mb(),g=Ib(),r!==G5||g!==db?G5=-1.1:g!==null&&(sl=ab),gh=r,db=g);else if((r&4194048)!==0&&0>Nv&&(Nv=fg(),sb=Hu(g),z9=g,o!=null&&(K9=n(o)),0>hl)){if(r=mb(),g=Ib(),r!==g1||g!==oh)g1=-1.1;r1=r,oh=g}}function lQ(r){if(0>m0){m0=fg(),pb=r._debugTask!=null?r._debugTask:null,(og&(lo|Wv))!==uo&&(sl=ab);var g=mb(),o=Ib();g!==G5||o!==db?G5=-1.1:o!==null&&(sl=ab),gh=g,db=o}if(0>Nv&&(Nv=fg(),sb=r._debugTask!=null?r._debugTask:null,0>hl)){if(r=mb(),g=Ib(),r!==g1||g!==oh)g1=-1.1;r1=r,oh=g}}function j0(){var r=rh;return rh=0,r}function v2(r){var g=rh;return rh=r,g}function Hb(r){var g=rh;return rh+=r,g}function l2(){Ur=ir=-1.1}function hv(){var r=ir;return ir=-1.1,r}function bv(r){0<=r&&(ir=r)}function H0(){var r=mg;return mg=-0,r}function P0(r){0<=r&&(mg=r)}function q0(){var r=Fg;return Fg=null,r}function A0(){var r=xg;return xg=!1,r}function e6(r){Co=fg(),0>r.actualStartTime&&(r.actualStartTime=Co)}function u6(r){if(0<=Co){var g=fg()-Co;r.actualDuration+=g,r.selfBaseDuration=g,Co=-1}}function $q(r){if(0<=Co){var g=fg()-Co;r.actualDuration+=g,Co=-1}}function M0(){if(0<=Co){var r=fg(),g=r-Co;Co=-1,rh+=g,mg+=g,Ur=r}}function iq(r){Fg===null&&(Fg=[]),Fg.push(r),ll===null&&(ll=[]),ll.push(r)}function W0(){Co=fg(),0>ir&&(ir=Co)}function Pb(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function hQ(r,g){if(gw===null){var o=gw=[];UO=0,vh=G8(),X5={status:"pending",value:void 0,then:function(l){o.push(l)}}}return UO++,g.then(Uq,Uq),g}function Uq(){if(--UO===0&&(-1<Nv||(hl=-1.1),gw!==null)){X5!==null&&(X5.status="fulfilled");var r=gw;gw=null,vh=0,X5=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function bQ(r,g){var o=[],l={status:"pending",value:null,reason:null,then:function(b){o.push(b)}};return r.then(function(){l.status="fulfilled",l.value=g;for(var b=0;b<o.length;b++)(0,o[b])(g)},function(b){l.status="rejected",l.reason=b;for(b=0;b<o.length;b++)(0,o[b])(void 0)}),l}function O6(){var r=lh.current;return r!==null?r:Gg.pooledCache}function h2(r,g){g===null?Qr(lh,lh.current,r):Qr(lh,g.pool,r)}function Lq(){var r=O6();return r===null?null:{parent:jg._currentValue,pool:r}}function Fq(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function Iq(r){return r=r.status,r==="fulfilled"||r==="rejected"}function mq(r,g,o){T.actQueue!==null&&(T.didUsePromise=!0);var l=r.thenables;if(o=l[o],o===void 0?l.push(g):o!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(_0,_0),g=o),g._debugInfo===void 0){r=performance.now(),l=g.displayName;var b={name:typeof l==="string"?l:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:b}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){b.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,Bq(r),r;default:if(typeof g.status==="string")g.then(_0,_0);else{if(r=Gg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(w){if(g.status==="pending"){var O=g;O.status="fulfilled",O.value=w}},function(w){if(g.status==="pending"){var O=g;O.status="rejected",O.reason=w}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,Bq(r),r}throw bh=g,ew=!0,Y5}}function Bl(r){try{return VK(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw bh=g,ew=!0,Y5;throw g}}function Nq(){if(bh===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=bh;return bh=null,ew=!1,r}function Bq(r){if(r===Y5||r===Xu)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function qo(r){var g=Dr;return r!=null&&(Dr=g===null?r:g.concat(r)),g}function H6(){var r=Dr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var o=r[g].debugTask;if(o!=null)return o}}return null}function b2(r,g,o){for(var l=Object.keys(r.props),b=0;b<l.length;b++){var w=l[b];if(w!=="children"&&w!=="key"){g===null&&(g=de(r,o.mode,0),g._debugInfo=Dr,g.return=o),er(g,function(O){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",O)},w);break}}}function w2(r){var g=uw;return uw+=1,J5===null&&(J5=Fq()),mq(J5,r,g)}function qb(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function Zq(r,g){if(g.$$typeof===Qz)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function e2(r,g){var o=H6();o!==null?o.run(Zq.bind(null,r,g)):Zq(r,g)}function xq(r,g){var o=n(r)||"Component";_9[o]||(_9[o]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,o,g,o))}function u2(r,g){var o=H6();o!==null?o.run(xq.bind(null,r,g)):xq(r,g)}function Cq(r,g){var o=n(r)||"Component";E9[o]||(E9[o]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,g,o))}function O2(r,g){var o=H6();o!==null?o.run(Cq.bind(null,r,g)):Cq(r,g)}function Tq(r){function g(K,i){if(r){var L=K.deletions;L===null?(K.deletions=[i],K.flags|=16):L.push(i)}}function o(K,i){if(!r)return null;for(;i!==null;)g(K,i),i=i.sibling;return null}function l(K){for(var i=new Map;K!==null;)K.key!==null?i.set(K.key,K):i.set(K.index,K),K=K.sibling;return i}function b(K,i){return K=E0(K,i),K.index=0,K.sibling=null,K}function w(K,i,L){if(K.index=L,!r)return K.flags|=1048576,i;if(L=K.alternate,L!==null)return L=L.index,L<i?(K.flags|=67108866,i):L;return K.flags|=67108866,i}function O(K){return r&&K.alternate===null&&(K.flags|=67108866),K}function P(K,i,L,D){if(i===null||i.tag!==6)return i=s4(L,K.mode,D),i.return=K,i._debugOwner=K,i._debugTask=K._debugTask,i._debugInfo=Dr,i;return i=b(i,L),i.return=K,i._debugInfo=Dr,i}function W(K,i,L,D){var Or=L.type;if(Or===g5)return i=F(K,i,L.props.children,D,L.key),b2(L,i,K),i;if(i!==null&&(i.elementType===Or||qq(i,L)||typeof Or==="object"&&Or!==null&&Or.$$typeof===Ov&&Bl(Or)===i.type))return i=b(i,L.props),qb(i,L),i.return=K,i._debugOwner=L._owner,i._debugInfo=Dr,i;return i=de(L,K.mode,D),qb(i,L),i.return=K,i._debugInfo=Dr,i}function G(K,i,L,D){if(i===null||i.tag!==4||i.stateNode.containerInfo!==L.containerInfo||i.stateNode.implementation!==L.implementation)return i=r6(L,K.mode,D),i.return=K,i._debugInfo=Dr,i;return i=b(i,L.children||[]),i.return=K,i._debugInfo=Dr,i}function F(K,i,L,D,Or){if(i===null||i.tag!==7)return i=t1(L,K.mode,D,Or),i.return=K,i._debugOwner=K,i._debugTask=K._debugTask,i._debugInfo=Dr,i;return i=b(i,L),i.return=K,i._debugInfo=Dr,i}function I(K,i,L){if(typeof i==="string"&&i!==""||typeof i==="number"||typeof i==="bigint")return i=s4(""+i,K.mode,L),i.return=K,i._debugOwner=K,i._debugTask=K._debugTask,i._debugInfo=Dr,i;if(typeof i==="object"&&i!==null){switch(i.$$typeof){case z0:return L=de(i,K.mode,L),qb(L,i),L.return=K,K=qo(i._debugInfo),L._debugInfo=Dr,Dr=K,L;case r5:return i=r6(i,K.mode,L),i.return=K,i._debugInfo=Dr,i;case Ov:var D=qo(i._debugInfo);return i=Bl(i),K=I(K,i,L),Dr=D,K}if(oo(i)||C(i))return L=t1(i,K.mode,L,null),L.return=K,L._debugOwner=K,L._debugTask=K._debugTask,K=qo(i._debugInfo),L._debugInfo=Dr,Dr=K,L;if(typeof i.then==="function")return D=qo(i._debugInfo),K=I(K,w2(i),L),Dr=D,K;if(i.$$typeof===K0)return I(K,o2(K,i),L);e2(K,i)}return typeof i==="function"&&u2(K,i),typeof i==="symbol"&&O2(K,i),null}function $(K,i,L,D){var Or=i!==null?i.key:null;if(typeof L==="string"&&L!==""||typeof L==="number"||typeof L==="bigint")return Or!==null?null:P(K,i,""+L,D);if(typeof L==="object"&&L!==null){switch(L.$$typeof){case z0:return L.key===Or?(Or=qo(L._debugInfo),K=W(K,i,L,D),Dr=Or,K):null;case r5:return L.key===Or?G(K,i,L,D):null;case Ov:return Or=qo(L._debugInfo),L=Bl(L),K=$(K,i,L,D),Dr=Or,K}if(oo(L)||C(L)){if(Or!==null)return null;return Or=qo(L._debugInfo),K=F(K,i,L,D,null),Dr=Or,K}if(typeof L.then==="function")return Or=qo(L._debugInfo),K=$(K,i,w2(L),D),Dr=Or,K;if(L.$$typeof===K0)return $(K,i,o2(K,L),D);e2(K,L)}return typeof L==="function"&&u2(K,L),typeof L==="symbol"&&O2(K,L),null}function B(K,i,L,D,Or){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return K=K.get(L)||null,P(i,K,""+D,Or);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case z0:return L=K.get(D.key===null?L:D.key)||null,K=qo(D._debugInfo),i=W(i,L,D,Or),Dr=K,i;case r5:return K=K.get(D.key===null?L:D.key)||null,G(i,K,D,Or);case Ov:var Ir=qo(D._debugInfo);return D=Bl(D),i=B(K,i,L,D,Or),Dr=Ir,i}if(oo(D)||C(D))return L=K.get(L)||null,K=qo(D._debugInfo),i=F(i,L,D,Or,null),Dr=K,i;if(typeof D.then==="function")return Ir=qo(D._debugInfo),i=B(K,i,L,w2(D),Or),Dr=Ir,i;if(D.$$typeof===K0)return B(K,i,L,o2(i,D),Or);e2(i,D)}return typeof D==="function"&&u2(i,D),typeof D==="symbol"&&O2(i,D),null}function br(K,i,L,D){if(typeof L!=="object"||L===null)return D;switch(L.$$typeof){case z0:case r5:J(K,i,L);var Or=L.key;if(typeof Or!=="string")break;if(D===null){D=new Set,D.add(Or);break}if(!D.has(Or)){D.add(Or);break}er(i,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",Or)});break;case Ov:L=Bl(L),br(K,i,L,D)}return D}function Ar(K,i,L,D){for(var Or=null,Ir=null,Kr=null,Yr=i,Sr=i=0,Ug=null;Yr!==null&&Sr<L.length;Sr++){Yr.index>Sr?(Ug=Yr,Yr=null):Ug=Yr.sibling;var Vg=$(K,Yr,L[Sr],D);if(Vg===null){Yr===null&&(Yr=Ug);break}Or=br(K,Vg,L[Sr],Or),r&&Yr&&Vg.alternate===null&&g(K,Yr),i=w(Vg,i,Sr),Kr===null?Ir=Vg:Kr.sibling=Vg,Kr=Vg,Yr=Ug}if(Sr===L.length)return o(K,Yr),pr&&y0(K,Sr),Ir;if(Yr===null){for(;Sr<L.length;Sr++)Yr=I(K,L[Sr],D),Yr!==null&&(Or=br(K,Yr,L[Sr],Or),i=w(Yr,i,Sr),Kr===null?Ir=Yr:Kr.sibling=Yr,Kr=Yr);return pr&&y0(K,Sr),Ir}for(Yr=l(Yr);Sr<L.length;Sr++)Ug=B(Yr,K,Sr,L[Sr],D),Ug!==null&&(Or=br(K,Ug,L[Sr],Or),r&&Ug.alternate!==null&&Yr.delete(Ug.key===null?Sr:Ug.key),i=w(Ug,i,Sr),Kr===null?Ir=Ug:Kr.sibling=Ug,Kr=Ug);return r&&Yr.forEach(function(Al){return g(K,Al)}),pr&&y0(K,Sr),Ir}function Qg(K,i,L,D){if(L==null)throw Error("An iterable object provided no iterator.");for(var Or=null,Ir=null,Kr=i,Yr=i=0,Sr=null,Ug=null,Vg=L.next();Kr!==null&&!Vg.done;Yr++,Vg=L.next()){Kr.index>Yr?(Sr=Kr,Kr=null):Sr=Kr.sibling;var Al=$(K,Kr,Vg.value,D);if(Al===null){Kr===null&&(Kr=Sr);break}Ug=br(K,Al,Vg.value,Ug),r&&Kr&&Al.alternate===null&&g(K,Kr),i=w(Al,i,Yr),Ir===null?Or=Al:Ir.sibling=Al,Ir=Al,Kr=Sr}if(Vg.done)return o(K,Kr),pr&&y0(K,Yr),Or;if(Kr===null){for(;!Vg.done;Yr++,Vg=L.next())Kr=I(K,Vg.value,D),Kr!==null&&(Ug=br(K,Kr,Vg.value,Ug),i=w(Kr,i,Yr),Ir===null?Or=Kr:Ir.sibling=Kr,Ir=Kr);return pr&&y0(K,Yr),Or}for(Kr=l(Kr);!Vg.done;Yr++,Vg=L.next())Sr=B(Kr,K,Yr,Vg.value,D),Sr!==null&&(Ug=br(K,Sr,Vg.value,Ug),r&&Sr.alternate!==null&&Kr.delete(Sr.key===null?Yr:Sr.key),i=w(Sr,i,Yr),Ir===null?Or=Sr:Ir.sibling=Sr,Ir=Sr);return r&&Kr.forEach(function(q$){return g(K,q$)}),pr&&y0(K,Yr),Or}function sr(K,i,L,D){if(typeof L==="object"&&L!==null&&L.type===g5&&L.key===null&&(b2(L,null,K),L=L.props.children),typeof L==="object"&&L!==null){switch(L.$$typeof){case z0:var Or=qo(L._debugInfo);r:{for(var Ir=L.key;i!==null;){if(i.key===Ir){if(Ir=L.type,Ir===g5){if(i.tag===7){o(K,i.sibling),D=b(i,L.props.children),D.return=K,D._debugOwner=L._owner,D._debugInfo=Dr,b2(L,D,K),K=D;break r}}else if(i.elementType===Ir||qq(i,L)||typeof Ir==="object"&&Ir!==null&&Ir.$$typeof===Ov&&Bl(Ir)===i.type){o(K,i.sibling),D=b(i,L.props),qb(D,L),D.return=K,D._debugOwner=L._owner,D._debugInfo=Dr,K=D;break r}o(K,i);break}else g(K,i);i=i.sibling}L.type===g5?(D=t1(L.props.children,K.mode,D,L.key),D.return=K,D._debugOwner=K,D._debugTask=K._debugTask,D._debugInfo=Dr,b2(L,D,K),K=D):(D=de(L,K.mode,D),qb(D,L),D.return=K,D._debugInfo=Dr,K=D)}return K=O(K),Dr=Or,K;case r5:r:{Or=L;for(L=Or.key;i!==null;){if(i.key===L)if(i.tag===4&&i.stateNode.containerInfo===Or.containerInfo&&i.stateNode.implementation===Or.implementation){o(K,i.sibling),D=b(i,Or.children||[]),D.return=K,K=D;break r}else{o(K,i);break}else g(K,i);i=i.sibling}D=r6(Or,K.mode,D),D.return=K,K=D}return O(K);case Ov:return Or=qo(L._debugInfo),L=Bl(L),K=sr(K,i,L,D),Dr=Or,K}if(oo(L))return Or=qo(L._debugInfo),K=Ar(K,i,L,D),Dr=Or,K;if(C(L)){if(Or=qo(L._debugInfo),Ir=C(L),typeof Ir!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Kr=Ir.call(L);if(Kr===L){if(K.tag!==0||Object.prototype.toString.call(K.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Kr)!=="[object Generator]")D9||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),D9=!0}else L.entries!==Ir||mO||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),mO=!0);return K=Qg(K,i,Kr,D),Dr=Or,K}if(typeof L.then==="function")return Or=qo(L._debugInfo),K=sr(K,i,w2(L),D),Dr=Or,K;if(L.$$typeof===K0)return sr(K,i,o2(K,L),D);e2(K,L)}if(typeof L==="string"&&L!==""||typeof L==="number"||typeof L==="bigint")return Or=""+L,i!==null&&i.tag===6?(o(K,i.sibling),D=b(i,Or),D.return=K,K=D):(o(K,i),D=s4(Or,K.mode,D),D.return=K,D._debugOwner=K,D._debugTask=K._debugTask,D._debugInfo=Dr,K=D),O(K);return typeof L==="function"&&u2(K,L),typeof L==="symbol"&&O2(K,L),o(K,i)}return function(K,i,L,D){var Or=Dr;Dr=null;try{uw=0;var Ir=sr(K,i,L,D);return J5=null,Ir}catch(Ug){if(Ug===Y5||Ug===Xu)throw Ug;var Kr=z(29,Ug,null,K.mode);Kr.lanes=D,Kr.return=K;var Yr=Kr._debugInfo=Dr;if(Kr._debugOwner=K._debugOwner,Kr._debugTask=K._debugTask,Yr!=null){for(var Sr=Yr.length-1;0<=Sr;Sr--)if(typeof Yr[Sr].stack==="string"){Kr._debugOwner=Yr[Sr],Kr._debugTask=Yr[Sr].debugTask;break}}return Kr}finally{Dr=Or}}}function nq(r,g){var o=oo(r);return r=!o&&typeof C(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,g,o),!1):!0}function P6(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function q6(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Zl(r){return{lane:r,tag:c9,payload:null,callback:null,next:null}}function xl(r,g,o){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,BO===l&&!a9){var b=n(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,b),a9=!0}if((og&lo)!==uo)return b=l.pending,b===null?g.next=g:(g.next=b.next,b.next=g),l.pending=g,g=pe(r),Pq(r,null,o),g;return ae(r,l,g,o),pe(r)}function Ab(r,g,o){if(g=g.updateQueue,g!==null&&(g=g.shared,(o&4194048)!==0)){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,B1(r,o)}}function H2(r,g){var{updateQueue:o,alternate:l}=r;if(l!==null&&(l=l.updateQueue,o===l)){var b=null,w=null;if(o=o.firstBaseUpdate,o!==null){do{var O={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};w===null?b=w=O:w=w.next=O,o=o.next}while(o!==null);w===null?b=w=g:w=w.next=g}else b=w=g;o={baseState:l.baseState,firstBaseUpdate:b,lastBaseUpdate:w,shared:l.shared,callbacks:l.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=g:r.next=g,o.lastBaseUpdate=g}function Mb(){if(ZO){var r=X5;if(r!==null)throw r}}function Wb(r,g,o,l){ZO=!1;var b=r.updateQueue;o1=!1,BO=b.shared;var{firstBaseUpdate:w,lastBaseUpdate:O}=b,P=b.shared.pending;if(P!==null){b.shared.pending=null;var W=P,G=W.next;W.next=null,O===null?w=G:O.next=G,O=W;var F=r.alternate;F!==null&&(F=F.updateQueue,P=F.lastBaseUpdate,P!==O&&(P===null?F.firstBaseUpdate=G:P.next=G,F.lastBaseUpdate=W))}if(w!==null){var I=b.baseState;O=0,F=G=W=null,P=w;do{var $=P.lane&-536870913,B=$!==P.lane;if(B?(Vr&$)===$:(l&$)===$){$!==0&&$===vh&&(ZO=!0),F!==null&&(F=F.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});r:{$=r;var br=P,Ar=g,Qg=o;switch(br.tag){case j9:if(br=br.payload,typeof br==="function"){R5=!0;var sr=br.call(Qg,I,Ar);if($.mode&Uo){Yg(!0);try{br.call(Qg,I,Ar)}finally{Yg(!1)}}R5=!1,I=sr;break r}I=br;break r;case NO:$.flags=$.flags&-65537|128;case c9:if(sr=br.payload,typeof sr==="function"){if(R5=!0,br=sr.call(Qg,I,Ar),$.mode&Uo){Yg(!0);try{sr.call(Qg,I,Ar)}finally{Yg(!1)}}R5=!1}else br=sr;if(br===null||br===void 0)break r;I=cr({},I,br);break r;case f9:o1=!0}}$=P.callback,$!==null&&(r.flags|=64,B&&(r.flags|=8192),B=b.callbacks,B===null?b.callbacks=[$]:B.push($))}else B={lane:$,tag:P.tag,payload:P.payload,callback:P.callback,next:null},F===null?(G=F=B,W=I):F=F.next=B,O|=$;if(P=P.next,P===null)if(P=b.shared.pending,P===null)break;else B=P,P=B.next,B.next=null,b.lastBaseUpdate=B,b.shared.pending=null}while(1);F===null&&(W=I),b.baseState=W,b.firstBaseUpdate=G,b.lastBaseUpdate=F,w===null&&(b.shared.lanes=0),h1|=O,r.lanes=O,r.memoizedState=I}BO=null}function Sq(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function wQ(r,g){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)Sq(o[r],g)}function tq(r,g){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)Sq(o[r],g)}function kq(r,g){var o=Z0;Qr(Ju,o,r),Qr(Q5,g,r),Z0=o|g.baseLanes}function A6(r){Qr(Ju,Z0,r),Qr(Q5,Q5.current,r)}function M6(r){Z0=Ju.current,Rr(Q5,r),Rr(Ju,r)}function Cl(r){var g=r.alternate;Qr(Dg,Dg.current&z5,r),Qr(Av,r,r),Bv===null&&(g===null||Q5.current!==null?Bv=r:g.memoizedState!==null&&(Bv=r))}function W6(r){Qr(Dg,Dg.current,r),Qr(Av,r,r),Bv===null&&(Bv=r)}function Dq(r){r.tag===22?(Qr(Dg,Dg.current,r),Qr(Av,r,r),Bv===null&&(Bv=r)):Tl(r)}function Tl(r){Qr(Dg,Dg.current,r),Qr(Av,Av.current,r)}function wv(r){Rr(Av,r),Bv===r&&(Bv=null),Rr(Dg,r)}function P2(r){for(var g=r;g!==null;){if(g.tag===13){var o=g.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||F8(o)||I8(o)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function yr(){var r=x;xv===null?xv=[r]:xv.push(r)}function p(){var r=x;if(xv!==null&&(ul++,xv[ul]!==r)){var g=n(Fr);if(!p9.has(g)&&(p9.add(g),xv!==null)){for(var o="",l=0;l<=ul;l++){var b=xv[l],w=l===ul?r:b;for(b=l+1+". "+b;30>b.length;)b+=" ";b+=w+`
`,o+=b}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,o)}}}function kh(r){r===void 0||r===null||oo(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",x,typeof r)}function q2(){var r=n(Fr);s9.has(r)||(s9.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function ng(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function R6(r,g){if(Pw)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",x),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,x,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<g.length&&o<r.length;o++)if(!xo(r[o],g[o]))return!1;return!0}function G6(r,g,o,l,b,w){if(wl=w,Fr=g,xv=r!==null?r._debugHookTypes:null,ul=-1,Pw=r!==null&&r.type!==g.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")w=n(Fr),xO.has(w)||(xO.add(w),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",w===null?"An unknown Component":"<"+w+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,T.H=r!==null&&r.memoizedState!==null?TO:xv!==null?r7:CO,eh=w=(g.mode&Uo)!==Lr;var O=LO(o,l,b);if(eh=!1,$5&&(O=X6(g,o,l,b)),w){Yg(!0);try{O=X6(g,o,l,b)}finally{Yg(!1)}}return Vq(r,g),O}function Vq(r,g){g._debugHookTypes=xv,g.dependencies===null?el!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:el}):g.dependencies._debugThenableState=el,T.H=qw;var o=Rg!==null&&Rg.next!==null;if(wl=0,xv=x=ag=Rg=Fr=null,ul=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),zu=!1,Hw=0,el=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||pg||(r=r.dependencies,r!==null&&g2(r)&&(pg=!0)),ew?(ew=!1,r=!0):r=!1,r&&(g=n(g)||"Unknown",d9.has(g)||xO.has(g)||(d9.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function X6(r,g,o,l){Fr=r;var b=0;do{if($5&&(el=null),Hw=0,$5=!1,b>=EK)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(b+=1,Pw=!1,ag=Rg=null,r.updateQueue!=null){var w=r.updateQueue;w.lastEffect=null,w.events=null,w.stores=null,w.memoCache!=null&&(w.memoCache.index=0)}ul=-1,T.H=g7,w=LO(g,o,l)}while($5);return w}function eQ(){var r=T.H,g=r.useState()[0];return g=typeof g.then==="function"?Rb(g):g,r=r.useState()[0],(Rg!==null?Rg.memoizedState:null)!==r&&(Fr.flags|=1024),g}function Y6(){var r=Ku!==0;return Ku=0,r}function J6(r,g,o){g.updateQueue=r.updateQueue,g.flags=(g.mode&Ev)!==Lr?g.flags&-402655237:g.flags&-2053,r.lanes&=~o}function Q6(r){if(zu){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}zu=!1}wl=0,xv=ag=Rg=Fr=null,ul=-1,x=null,$5=!1,Hw=Ku=0,el=null}function mo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ag===null?Fr.memoizedState=ag=r:ag=ag.next=r,ag}function Og(){if(Rg===null){var r=Fr.alternate;r=r!==null?r.memoizedState:null}else r=Rg.next;var g=ag===null?Fr.memoizedState:ag.next;if(g!==null)ag=g,Rg=r;else{if(r===null){if(Fr.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Rg=r,r={memoizedState:Rg.memoizedState,baseState:Rg.baseState,baseQueue:Rg.baseQueue,queue:Rg.queue,next:null},ag===null?Fr.memoizedState=ag=r:ag=ag.next=r}return ag}function A2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rb(r){var g=Hw;return Hw+=1,el===null&&(el=Fq()),r=mq(el,r,g),g=Fr,(ag===null?g.memoizedState:ag.next)===null&&(g=g.alternate,T.H=g!==null&&g.memoizedState!==null?TO:CO),r}function nl(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Rb(r);if(r.$$typeof===K0)return Lg(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function E1(r){var g=null,o=Fr.updateQueue;if(o!==null&&(g=o.memoCache),g==null){var l=Fr.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(g={data:l.data.map(function(b){return b.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),o===null&&(o=A2(),Fr.updateQueue=o),o.memoCache=g,o=g.data[g.index],o===void 0||Pw)for(o=g.data[g.index]=Array(r),l=0;l<r;l++)o[l]=zz;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return g.index++,o}function kv(r,g){return typeof g==="function"?g(r):g}function z6(r,g,o){var l=mo();if(o!==void 0){var b=o(g);if(eh){Yg(!0);try{o(g)}finally{Yg(!1)}}}else b=g;return l.memoizedState=l.baseState=b,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:b},l.queue=r,r=r.dispatch=qQ.bind(null,Fr,r),[l.memoizedState,r]}function Dh(r){var g=Og();return K6(g,Rg,r)}function K6(r,g,o){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=o;var b=r.baseQueue,w=l.pending;if(w!==null){if(b!==null){var O=b.next;b.next=w.next,w.next=O}g.baseQueue!==b&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=b=w,l.pending=null}if(w=r.baseState,b===null)r.memoizedState=w;else{g=b.next;var P=O=null,W=null,G=g,F=!1;do{var I=G.lane&-536870913;if(I!==G.lane?(Vr&I)===I:(wl&I)===I){var $=G.revertLane;if($===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),I===vh&&(F=!0);else if((wl&$)===$){G=G.next,$===vh&&(F=!0);continue}else I={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},W===null?(P=W=I,O=w):W=W.next=I,Fr.lanes|=$,h1|=$;I=G.action,eh&&o(w,I),w=G.hasEagerState?G.eagerState:o(w,I)}else $={lane:I,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},W===null?(P=W=$,O=w):W=W.next=$,Fr.lanes|=I,h1|=I;G=G.next}while(G!==null&&G!==g);if(W===null?O=w:W.next=P,!xo(w,r.memoizedState)&&(pg=!0,F&&(o=X5,o!==null)))throw o;r.memoizedState=w,r.baseState=O,r.baseQueue=W,l.lastRenderedState=w}return b===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Gb(r){var g=Og(),o=g.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:l,pending:b}=o,w=g.memoizedState;if(b!==null){o.pending=null;var O=b=b.next;do w=r(w,O.action),O=O.next;while(O!==b);xo(w,g.memoizedState)||(pg=!0),g.memoizedState=w,g.baseQueue===null&&(g.baseState=w),o.lastRenderedState=w}return[w,l]}function $6(r,g,o){var l=Fr,b=mo();if(pr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var w=o();K5||w===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),K5=!0)}else{if(w=g(),K5||(o=g(),xo(w,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),K5=!0)),Gg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||_q(l,g,w)}return b.memoizedState=w,o={value:w,getSnapshot:g},b.queue=o,G2(yq.bind(null,l,o,r),[r]),l.flags|=2048,_h(Zv|no,{destroy:void 0},Eq.bind(null,l,o,w,g),null),w}function M2(r,g,o){var l=Fr,b=Og(),w=pr;if(w){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=g(),!K5){var O=g();xo(o,O)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),K5=!0)}if(O=!xo((Rg||b).memoizedState,o))b.memoizedState=o,pg=!0;b=b.queue;var P=yq.bind(null,l,b,r);if(yo(2048,no,P,[r]),b.getSnapshot!==g||O||ag!==null&&ag.memoizedState.tag&Zv){if(l.flags|=2048,_h(Zv|no,{destroy:void 0},Eq.bind(null,l,b,o,g),null),Gg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");w||(wl&127)!==0||_q(l,g,o)}return o}function _q(r,g,o){r.flags|=16384,r={getSnapshot:g,value:o},g=Fr.updateQueue,g===null?(g=A2(),Fr.updateQueue=g,g.stores=[r]):(o=g.stores,o===null?g.stores=[r]:o.push(r))}function Eq(r,g,o,l){g.value=o,g.getSnapshot=l,cq(g)&&jq(r)}function yq(r,g,o){return o(function(){cq(g)&&(O0(2,"updateSyncExternalStore()",r),jq(r))})}function cq(r){var g=r.getSnapshot;r=r.value;try{var o=g();return!xo(r,o)}catch(l){return!0}}function jq(r){var g=$o(r,2);g!==null&&Zg(g,r,2)}function i6(r){var g=mo();if(typeof r==="function"){var o=r;if(r=o(),eh){Yg(!0);try{o()}finally{Yg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:r},g}function U6(r){r=i6(r);var g=r.queue,o=qA.bind(null,Fr,g);return g.dispatch=o,[r.memoizedState,o]}function L6(r){var g=mo();g.memoizedState=g.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=o,g=D6.bind(null,Fr,!0,o),o.dispatch=g,[r,g]}function fq(r,g){var o=Og();return aq(o,Rg,r,g)}function aq(r,g,o,l){return r.baseState=o,K6(r,Rg,typeof l==="function"?l:kv)}function pq(r,g){var o=Og();if(Rg!==null)return aq(o,Rg,r,g);return o.baseState=r,[r,o.queue.dispatch]}function uQ(r,g,o,l,b){if(K2(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var w={payload:b,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(O){w.listeners.push(O)}};T.T!==null?o(!0):w.isTransition=!1,l(w),o=g.pending,o===null?(w.next=g.pending=w,dq(g,w)):(w.next=o.next,g.pending=o.next=w)}}function dq(r,g){var{action:o,payload:l}=g,b=r.state;if(g.isTransition){var w=T.T,O={};O._updatedFibers=new Set,T.T=O;try{var P=o(b,l),W=T.S;W!==null&&W(O,P),sq(r,g,P)}catch(G){F6(r,g,G)}finally{w!==null&&O.types!==null&&(w.types!==null&&w.types!==O.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),w.types=O.types),T.T=w,w===null&&O._updatedFibers&&(r=O._updatedFibers.size,O._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{O=o(b,l),sq(r,g,O)}catch(G){F6(r,g,G)}}function sq(r,g,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(T.asyncTransitions++,o.then(z2,z2),o.then(function(l){rA(r,g,l)},function(l){return F6(r,g,l)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):rA(r,g,o)}function rA(r,g,o){g.status="fulfilled",g.value=o,gA(g),r.state=o,g=r.pending,g!==null&&(o=g.next,o===g?r.pending=null:(o=o.next,g.next=o,dq(r,o)))}function F6(r,g,o){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do g.status="rejected",g.reason=o,gA(g),g=g.next;while(g!==l)}r.action=null}function gA(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function oA(r,g){return g}function Vh(r,g){if(pr){var o=Gg.formState;if(o!==null){r:{var l=Fr;if(pr){if(ig){g:{var b=ig;for(var w=mv;b.nodeType!==8;){if(!w){b=null;break g}if(b=uv(b.nextSibling),b===null){b=null;break g}}w=b.data,b=w===bH||w===t7?b:null}if(b){ig=uv(b.nextSibling),l=b.data===bH;break r}}ml(l)}l=!1}l&&(g=o[0])}}return o=mo(),o.memoizedState=o.baseState=g,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oA,lastRenderedState:g},o.queue=l,o=qA.bind(null,Fr,l),l.dispatch=o,l=i6(!1),w=D6.bind(null,Fr,!1,l.queue),l=mo(),b={state:g,dispatch:null,action:r,pending:null},l.queue=b,o=uQ.bind(null,Fr,b,w,o),b.dispatch=o,l.memoizedState=r,[g,o,!1]}function W2(r){var g=Og();return vA(g,Rg,r)}function vA(r,g,o){if(g=K6(r,g,oA)[0],r=Dh(kv)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var l=Rb(g)}catch(O){if(O===Y5)throw Xu;throw O}else l=g;g=Og();var b=g.queue,w=b.dispatch;return o!==g.memoizedState&&(Fr.flags|=2048,_h(Zv|no,{destroy:void 0},OQ.bind(null,b,o),null)),[l,w,r]}function OQ(r,g){r.action=g}function R2(r){var g=Og(),o=Rg;if(o!==null)return vA(g,o,r);Og(),g=g.memoizedState,o=Og();var l=o.queue.dispatch;return o.memoizedState=r,[g,l,!1]}function _h(r,g,o,l){return r={tag:r,create:o,deps:l,inst:g,next:null},g=Fr.updateQueue,g===null&&(g=A2(),Fr.updateQueue=g),o=g.lastEffect,o===null?g.lastEffect=r.next=r:(l=o.next,o.next=r,r.next=l,g.lastEffect=r),r}function I6(r){var g=mo();return r={current:r},g.memoizedState=r}function y1(r,g,o,l){var b=mo();Fr.flags|=r,b.memoizedState=_h(Zv|g,{destroy:void 0},o,l===void 0?null:l)}function yo(r,g,o,l){var b=Og();l=l===void 0?null:l;var w=b.memoizedState.inst;Rg!==null&&l!==null&&R6(l,Rg.memoizedState.deps)?b.memoizedState=_h(g,w,o,l):(Fr.flags|=r,b.memoizedState=_h(Zv|g,w,o,l))}function G2(r,g){(Fr.mode&Ev)!==Lr?y1(276826112,no,r,g):y1(8390656,no,r,g)}function HQ(r){Fr.flags|=4;var g=Fr.updateQueue;if(g===null)g=A2(),Fr.updateQueue=g,g.events=[r];else{var o=g.events;o===null?g.events=[r]:o.push(r)}}function m6(r){var g=mo(),o={impl:r};return g.memoizedState=o,function(){if((og&lo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function X2(r){var g=Og().memoizedState;return HQ({ref:g,nextImpl:r}),function(){if((og&lo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function N6(r,g){var o=4194308;return(Fr.mode&Ev)!==Lr&&(o|=134217728),y1(o,Mv,r,g)}function lA(r,g){if(typeof g==="function"){r=r();var o=g(r);return function(){typeof o==="function"?o():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function B6(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var l=4194308;(Fr.mode&Ev)!==Lr&&(l|=134217728),y1(l,Mv,lA.bind(null,g,r),o)}function Y2(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,yo(4,Mv,lA.bind(null,g,r),o)}function Z6(r,g){return mo().memoizedState=[r,g===void 0?null:g],r}function J2(r,g){var o=Og();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&R6(g,l[1]))return l[0];return o.memoizedState=[r,g],r}function x6(r,g){var o=mo();g=g===void 0?null:g;var l=r();if(eh){Yg(!0);try{r()}finally{Yg(!1)}}return o.memoizedState=[l,g],l}function Q2(r,g){var o=Og();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&R6(g,l[1]))return l[0];if(l=r(),eh){Yg(!0);try{r()}finally{Yg(!1)}}return o.memoizedState=[l,g],l}function C6(r,g){var o=mo();return T6(o,r,g)}function hA(r,g){var o=Og();return wA(o,Rg.memoizedState,r,g)}function bA(r,g){var o=Og();return Rg===null?T6(o,r,g):wA(o,Rg.memoizedState,r,g)}function T6(r,g,o){if(o===void 0||(wl&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=o,r=eM(),Fr.lanes|=r,h1|=r,o}function wA(r,g,o,l){if(xo(o,g))return o;if(Q5.current!==null)return r=T6(r,o,l),xo(r,g)||(pg=!0),r;if((wl&42)===0||(wl&1073741824)!==0&&(Vr&261930)===0)return pg=!0,r.memoizedState=o;return r=eM(),Fr.lanes|=r,h1|=r,g}function z2(){T.asyncTransitions--}function eA(r,g,o,l,b){var w=eg.p;eg.p=w!==0&&w<_v?w:_v;var O=T.T,P={};P._updatedFibers=new Set,T.T=P,D6(r,!1,g,o);try{var W=b(),G=T.S;if(G!==null&&G(P,W),W!==null&&typeof W==="object"&&typeof W.then==="function"){T.asyncTransitions++,W.then(z2,z2);var F=bQ(W,l);Xb(r,g,F,ev(r))}else Xb(r,g,l,ev(r))}catch(I){Xb(r,g,{then:function(){},status:"rejected",reason:I},ev(r))}finally{eg.p=w,O!==null&&P.types!==null&&(O.types!==null&&O.types!==P.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),O.types=P.types),T.T=O,O===null&&P._updatedFibers&&(r=P._updatedFibers.size,P._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function n6(r,g,o,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var b=uA(r).queue;lQ(r),eA(r,b,g,Xh,o===null?Q:function(){return OA(r),o(l)})}function uA(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:Xh,baseState:Xh,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:Xh},next:null};var o={};return g.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:o},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function OA(r){T.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=uA(r);g.next===null&&(g=r.alternate.memoizedState),Xb(r,g.next.queue,{},ev(r))}function S6(){var r=i6(!1);return r=eA.bind(null,Fr,r.queue,!0,!1),mo().memoizedState=r,[!1,r]}function HA(){var r=Dh(kv)[0],g=Og().memoizedState;return[typeof r==="boolean"?r:Rb(r),g]}function PA(){var r=Gb(kv)[0],g=Og().memoizedState;return[typeof r==="boolean"?r:Rb(r),g]}function c1(){return Lg(Lw)}function t6(){var r=mo(),g=Gg.identifierPrefix;if(pr){var o=ol,l=gl;o=(l&~(1<<32-No(l)-1)).toString(32)+o,g="_"+g+"R_"+o,o=Ku++,0<o&&(g+="H"+o.toString(32)),g+="_"}else o=_K++,g="_"+g+"r_"+o.toString(32)+"_";return r.memoizedState=g}function k6(){return mo().memoizedState=PQ.bind(null,Fr)}function PQ(r,g){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var l=ev(o),b=Zl(l),w=xl(o,b,l);w!==null&&(O0(l,"refresh()",r),Zg(w,o,l),Ab(w,o,l)),r=w6(),g!==null&&g!==void 0&&w!==null&&console.error("The seed argument is not enabled outside experimental channels."),b.payload={cache:r};return}o=o.return}}function qQ(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=ev(r);var b={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};K2(r)?AA(g,b):(b=f4(r,g,b,l),b!==null&&(O0(l,"dispatch()",r),Zg(b,r,l),MA(b,g,l)))}function qA(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=ev(r),Xb(r,g,o,l)&&O0(l,"setState()",r)}function Xb(r,g,o,l){var b={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(K2(r))AA(g,b);else{var w=r.alternate;if(r.lanes===0&&(w===null||w.lanes===0)&&(w=g.lastRenderedReducer,w!==null)){var O=T.H;T.H=cv;try{var P=g.lastRenderedState,W=w(P,o);if(b.hasEagerState=!0,b.eagerState=W,xo(W,P))return ae(r,g,b,0),Gg===null&&fe(),!1}catch(G){}finally{T.H=O}}if(o=f4(r,g,b,l),o!==null)return Zg(o,r,l),MA(o,g,l),!0}return!1}function D6(r,g,o,l){if(T.T===null&&vh===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:G8(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},K2(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=f4(r,o,l,2),g!==null&&(O0(2,"setOptimistic()",r),Zg(g,r,2))}function K2(r){var g=r.alternate;return r===Fr||g!==null&&g===Fr}function AA(r,g){$5=zu=!0;var o=r.pending;o===null?g.next=g:(g.next=o.next,o.next=g),r.pending=g}function MA(r,g,o){if((o&4194048)!==0){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,B1(r,o)}}function V6(r){if(r!==null&&typeof r!=="function"){var g=String(r);P7.has(g)||(P7.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function _6(r,g,o,l){var b=r.memoizedState,w=o(l,b);if(r.mode&Uo){Yg(!0);try{w=o(l,b)}finally{Yg(!1)}}w===void 0&&(g=V(g)||"Component",e7.has(g)||(e7.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),b=w===null||w===void 0?b:cr({},b,w),r.memoizedState=b,r.lanes===0&&(r.updateQueue.baseState=b)}function WA(r,g,o,l,b,w,O){var P=r.stateNode;if(typeof P.shouldComponentUpdate==="function"){if(o=P.shouldComponentUpdate(l,w,O),r.mode&Uo){Yg(!0);try{o=P.shouldComponentUpdate(l,w,O)}finally{Yg(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",V(g)||"Component"),o}return g.prototype&&g.prototype.isPureReactComponent?!wb(o,l)||!wb(b,w):!0}function RA(r,g,o,l){var b=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(o,l),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(o,l),g.state!==b&&(r=n(r)||"Component",v7.has(r)||(v7.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),nO.enqueueReplaceState(g,g.state,null))}function j1(r,g){var o=g;if("ref"in g){o={};for(var l in g)l!=="ref"&&(o[l]=g[l])}if(r=r.defaultProps){o===g&&(o=cr({},o));for(var b in r)o[b]===void 0&&(o[b]=r[b])}return o}function GA(r){MO(r),console.warn(`%s

%s
`,i5?"An error occurred in the <"+i5+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function XA(r){var g=i5?"The above error occurred in the <"+i5+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((SO||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,g,o].slice(0),typeof r[0]==="string"?r.splice(0,1,j7+" "+r[0],f7,fu+l+fu,a7):r.splice(0,0,j7,f7,fu+l+fu,a7),r.unshift(console),l=H$.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,g,o)}function YA(r){MO(r)}function $2(r,g){try{i5=g.source?n(g.source):null,SO=null;var o=g.value;if(T.actQueue!==null)T.thrownErrors.push(o);else{var l=r.onUncaughtError;l(o,{componentStack:g.stack})}}catch(b){setTimeout(function(){throw b})}}function JA(r,g,o){try{i5=o.source?n(o.source):null,SO=n(g);var l=r.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(b){setTimeout(function(){throw b})}}function E6(r,g,o){return o=Zl(o),o.tag=NO,o.payload={element:null},o.callback=function(){er(g.source,$2,r,g)},o}function y6(r){return r=Zl(r),r.tag=NO,r}function c6(r,g,o,l){var b=o.type.getDerivedStateFromError;if(typeof b==="function"){var w=l.value;r.payload=function(){return b(w)},r.callback=function(){Aq(o),er(l.source,JA,g,o,l)}}var O=o.stateNode;O!==null&&typeof O.componentDidCatch==="function"&&(r.callback=function(){Aq(o),er(l.source,JA,g,o,l),typeof b!=="function"&&(w1===null?w1=new Set([this]):w1.add(this)),tK(this,l),typeof b==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",n(o)||"Unknown")})}function AQ(r,g,o,l,b){if(o.flags|=32768,U0&&Ub(r,b),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(g=o.alternate,g!==null&&th(g,o,b,!0),pr&&(I0=!0),o=Av.current,o!==null){switch(o.tag){case 31:case 13:return Bv===null?Z2():o.alternate===null&&Ng===Hl&&(Ng=Uu),o.flags&=-257,o.flags|=65536,o.lanes=b,l===Yu?o.flags|=16384:(g=o.updateQueue,g===null?o.updateQueue=new Set([l]):g.add(l),A8(r,l,b)),!1;case 22:return o.flags|=65536,l===Yu?o.flags|=16384:(g=o.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=g):(o=g.retryQueue,o===null?g.retryQueue=new Set([l]):o.add(l)),A8(r,l,b)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return A8(r,l,b),Z2(),!1}if(pr)return I0=!0,g=Av.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=b,l!==JO&&ub(lv(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),o))):(l!==JO&&ub(lv(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),o)),r=r.current.alternate,r.flags|=65536,b&=-b,r.lanes|=b,l=lv(l,o),b=E6(r.stateNode,l,b),H2(r,b),Ng!==v1&&(Ng=uh)),!1;var w=lv(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),o);if(Xw===null?Xw=[w]:Xw.push(w),Ng!==v1&&(Ng=uh),g===null)return!0;l=lv(l,o),o=g;do{switch(o.tag){case 3:return o.flags|=65536,r=b&-b,o.lanes|=r,r=E6(o.stateNode,l,r),H2(o,r),!1;case 1:if(g=o.type,w=o.stateNode,(o.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||w!==null&&typeof w.componentDidCatch==="function"&&(w1===null||!w1.has(w))))return o.flags|=65536,b&=-b,o.lanes|=b,b=y6(b),c6(b,r,o,l),H2(o,b),!1}o=o.return}while(o!==null);return!1}function Ao(r,g,o,l){g.child=r===null?y9(g,null,o,l):wh(g,r.child,o,l)}function QA(r,g,o,l,b){o=o.render;var w=g.ref;if("ref"in l){var O={};for(var P in l)P!=="ref"&&(O[P]=l[P])}else O=l;if(V1(g),l=G6(r,g,o,O,w,b),P=Y6(),r!==null&&!pg)return J6(r,g,b),f0(r,g,b);return pr&&P&&g6(g),g.flags|=1,Ao(r,g,l,b),g.child}function zA(r,g,o,l,b){if(r===null){var w=o.type;if(typeof w==="function"&&!p4(w)&&w.defaultProps===void 0&&o.compare===null)return o=S1(w),g.tag=15,g.type=o,f6(g,w),KA(r,g,o,l,b);return r=d4(o.type,null,l,g,g.mode,b),r.ref=g.ref,r.return=g,g.child=r}if(w=r.child,!g8(r,b)){var O=w.memoizedProps;if(o=o.compare,o=o!==null?o:wb,o(O,l)&&r.ref===g.ref)return f0(r,g,b)}return g.flags|=1,r=E0(w,l),r.ref=g.ref,r.return=g,g.child=r}function KA(r,g,o,l,b){if(r!==null){var w=r.memoizedProps;if(wb(w,l)&&r.ref===g.ref&&g.type===r.type)if(pg=!1,g.pendingProps=l=w,g8(r,b))(r.flags&131072)!==0&&(pg=!0);else return g.lanes=r.lanes,f0(r,g,b)}return j6(r,g,o,l,b)}function $A(r,g,o,l){var b=l.children,w=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:jb,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((g.flags&128)!==0){if(w=w!==null?w.baseLanes|o:o,r!==null){l=g.child=r.child;for(b=0;l!==null;)b=b|l.lanes|l.childLanes,l=l.sibling;l=b&~w}else l=0,g.child=null;return iA(r,g,w,o,l)}if((o&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&h2(g,w!==null?w.cachePool:null),w!==null?kq(g,w):A6(g),Dq(g);else return l=g.lanes=536870912,iA(r,g,w!==null?w.baseLanes|o:o,o,l)}else w!==null?(h2(g,w.cachePool),kq(g,w),Tl(g),g.memoizedState=null):(r!==null&&h2(g,null),A6(g),Tl(g));return Ao(r,g,b,o),g.child}function Yb(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:jb,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function iA(r,g,o,l,b){var w=O6();return w=w===null?null:{parent:jg._currentValue,pool:w},g.memoizedState={baseLanes:o,cachePool:w},r!==null&&h2(g,null),A6(g),Dq(g),r!==null&&th(r,g,l,!0),g.childLanes=b,null}function i2(r,g){var o=g.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),g=L2({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function UA(r,g,o){return wh(g,r.child,null,o),r=i2(g,g.pendingProps),r.flags|=2,wv(g),g.memoizedState=null,r}function MQ(r,g,o){var l=g.pendingProps,b=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(pr){if(l.mode==="hidden")return r=i2(g,l),g.lanes=536870912,Yb(null,r);if(W6(g),(r=ig)?(o=dM(r,mv),o=o!==null&&o.data===Mh?o:null,o!==null&&(l={dehydrated:o,treeContext:Xq(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=Rq(o),l.return=g,g.child=l,Ro=g,ig=null)):o=null,o===null)throw se(g,r),ml(g);return g.lanes=536870912,null}return i2(g,l)}var w=r.memoizedState;if(w!==null){var O=w.dehydrated;if(W6(g),b)if(g.flags&256)g.flags&=-257,g=UA(r,g,o);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(Jq(),(o&536870912)!==0&&B2(g),pg||th(r,g,o,!1),b=(o&r.childLanes)!==0,pg||b){if(l=Gg,l!==null&&(O=Z1(l,o),O!==0&&O!==w.retryLane))throw w.retryLane=O,$o(r,O),Zg(l,r,O),tO;Z2(),g=UA(r,g,o)}else r=w.treeContext,ig=uv(O.nextSibling),Ro=g,pr=!0,al=null,I0=!1,qv=null,mv=!1,r!==null&&Yq(g,r),g=i2(g,l),g.flags|=4096;return g}return w=r.child,l={mode:l.mode,children:l.children},(o&536870912)!==0&&(o&r.lanes)!==0&&B2(g),r=E0(w,l),r.ref=g.ref,g.child=r,r.return=g,r}function U2(r,g){var o=g.ref;if(o===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)g.flags|=4194816}}function j6(r,g,o,l,b){if(o.prototype&&typeof o.prototype.render==="function"){var w=V(o)||"Unknown";q7[w]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",w,w),q7[w]=!0)}if(g.mode&Uo&&yv.recordLegacyContextWarning(g,null),r===null&&(f6(g,g.type),o.contextTypes&&(w=V(o)||"Unknown",M7[w]||(M7[w]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",w)))),V1(g),o=G6(r,g,o,l,void 0,b),l=Y6(),r!==null&&!pg)return J6(r,g,b),f0(r,g,b);return pr&&l&&g6(g),g.flags|=1,Ao(r,g,o,b),g.child}function LA(r,g,o,l,b,w){if(V1(g),ul=-1,Pw=r!==null&&r.type!==g.type,g.updateQueue=null,o=X6(g,l,o,b),Vq(r,g),l=Y6(),r!==null&&!pg)return J6(r,g,w),f0(r,g,w);return pr&&l&&g6(g),g.flags|=1,Ao(r,g,o,w),g.child}function FA(r,g,o,l,b){switch(A(g)){case!1:var w=g.stateNode,O=new g.type(g.memoizedProps,w.context).state;w.updater.enqueueSetState(w,O,null);break;case!0:g.flags|=128,g.flags|=65536,w=Error("Simulated error coming from DevTools");var P=b&-b;if(g.lanes|=P,O=Gg,O===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");P=y6(P),c6(P,O,g,lv(w,g)),H2(g,P)}if(V1(g),g.stateNode===null){if(O=fl,w=o.contextType,"contextType"in o&&w!==null&&(w===void 0||w.$$typeof!==K0)&&!H7.has(o)&&(H7.add(o),P=w===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof w!=="object"?" However, it is set to a "+typeof w+".":w.$$typeof===k8?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(w).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",V(o)||"Component",P)),typeof w==="object"&&w!==null&&(O=Lg(w)),w=new o(l,O),g.mode&Uo){Yg(!0);try{w=new o(l,O)}finally{Yg(!1)}}if(O=g.memoizedState=w.state!==null&&w.state!==void 0?w.state:null,w.updater=nO,g.stateNode=w,w._reactInternals=g,w._reactInternalInstance=o7,typeof o.getDerivedStateFromProps==="function"&&O===null&&(O=V(o)||"Component",l7.has(O)||(l7.add(O),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",O,w.state===null?"null":"undefined",O))),typeof o.getDerivedStateFromProps==="function"||typeof w.getSnapshotBeforeUpdate==="function"){var W=P=O=null;if(typeof w.componentWillMount==="function"&&w.componentWillMount.__suppressDeprecationWarning!==!0?O="componentWillMount":typeof w.UNSAFE_componentWillMount==="function"&&(O="UNSAFE_componentWillMount"),typeof w.componentWillReceiveProps==="function"&&w.componentWillReceiveProps.__suppressDeprecationWarning!==!0?P="componentWillReceiveProps":typeof w.UNSAFE_componentWillReceiveProps==="function"&&(P="UNSAFE_componentWillReceiveProps"),typeof w.componentWillUpdate==="function"&&w.componentWillUpdate.__suppressDeprecationWarning!==!0?W="componentWillUpdate":typeof w.UNSAFE_componentWillUpdate==="function"&&(W="UNSAFE_componentWillUpdate"),O!==null||P!==null||W!==null){w=V(o)||"Component";var G=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";b7.has(w)||(b7.add(w),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,w,G,O!==null?`
  `+O:"",P!==null?`
  `+P:"",W!==null?`
  `+W:""))}}w=g.stateNode,O=V(o)||"Component",w.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",O):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",O)),!w.getInitialState||w.getInitialState.isReactClassApproved||w.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",O),w.getDefaultProps&&!w.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",O),w.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",O),o.childContextTypes&&!O7.has(o)&&(O7.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",O)),o.contextTypes&&!u7.has(o)&&(u7.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",O)),typeof w.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",O),o.prototype&&o.prototype.isPureReactComponent&&typeof w.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",V(o)||"A pure component"),typeof w.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",O),typeof w.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",O),typeof w.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",O),typeof w.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",O),P=w.props!==l,w.props!==void 0&&P&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",O),w.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",O,O),typeof w.getSnapshotBeforeUpdate!=="function"||typeof w.componentDidUpdate==="function"||h7.has(o)||(h7.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",V(o))),typeof w.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",O),typeof w.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",O),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",O),(P=w.state)&&(typeof P!=="object"||oo(P))&&console.error("%s.state: must be set to an object or null",O),typeof w.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",O),w=g.stateNode,w.props=l,w.state=g.memoizedState,w.refs={},P6(g),O=o.contextType,w.context=typeof O==="object"&&O!==null?Lg(O):fl,w.state===l&&(O=V(o)||"Component",w7.has(O)||(w7.add(O),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",O))),g.mode&Uo&&yv.recordLegacyContextWarning(g,w),yv.recordUnsafeLifecycleWarnings(g,w),w.state=g.memoizedState,O=o.getDerivedStateFromProps,typeof O==="function"&&(_6(g,o,O,l),w.state=g.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof w.getSnapshotBeforeUpdate==="function"||typeof w.UNSAFE_componentWillMount!=="function"&&typeof w.componentWillMount!=="function"||(O=w.state,typeof w.componentWillMount==="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount==="function"&&w.UNSAFE_componentWillMount(),O!==w.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",n(g)||"Component"),nO.enqueueReplaceState(w,w.state,null)),Wb(g,l,w,b),Mb(),w.state=g.memoizedState),typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728),w=!0}else if(r===null){w=g.stateNode;var F=g.memoizedProps;P=j1(o,F),w.props=P;var I=w.context;W=o.contextType,O=fl,typeof W==="object"&&W!==null&&(O=Lg(W)),G=o.getDerivedStateFromProps,W=typeof G==="function"||typeof w.getSnapshotBeforeUpdate==="function",F=g.pendingProps!==F,W||typeof w.UNSAFE_componentWillReceiveProps!=="function"&&typeof w.componentWillReceiveProps!=="function"||(F||I!==O)&&RA(g,w,l,O),o1=!1;var $=g.memoizedState;w.state=$,Wb(g,l,w,b),Mb(),I=g.memoizedState,F||$!==I||o1?(typeof G==="function"&&(_6(g,o,G,l),I=g.memoizedState),(P=o1||WA(g,o,P,l,$,I,O))?(W||typeof w.UNSAFE_componentWillMount!=="function"&&typeof w.componentWillMount!=="function"||(typeof w.componentWillMount==="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount==="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728)):(typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728),g.memoizedProps=l,g.memoizedState=I),w.props=l,w.state=I,w.context=O,w=P):(typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728),w=!1)}else{w=g.stateNode,q6(r,g),O=g.memoizedProps,W=j1(o,O),w.props=W,G=g.pendingProps,$=w.context,I=o.contextType,P=fl,typeof I==="object"&&I!==null&&(P=Lg(I)),F=o.getDerivedStateFromProps,(I=typeof F==="function"||typeof w.getSnapshotBeforeUpdate==="function")||typeof w.UNSAFE_componentWillReceiveProps!=="function"&&typeof w.componentWillReceiveProps!=="function"||(O!==G||$!==P)&&RA(g,w,l,P),o1=!1,$=g.memoizedState,w.state=$,Wb(g,l,w,b),Mb();var B=g.memoizedState;O!==G||$!==B||o1||r!==null&&r.dependencies!==null&&g2(r.dependencies)?(typeof F==="function"&&(_6(g,o,F,l),B=g.memoizedState),(W=o1||WA(g,o,W,l,$,B,P)||r!==null&&r.dependencies!==null&&g2(r.dependencies))?(I||typeof w.UNSAFE_componentWillUpdate!=="function"&&typeof w.componentWillUpdate!=="function"||(typeof w.componentWillUpdate==="function"&&w.componentWillUpdate(l,B,P),typeof w.UNSAFE_componentWillUpdate==="function"&&w.UNSAFE_componentWillUpdate(l,B,P)),typeof w.componentDidUpdate==="function"&&(g.flags|=4),typeof w.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof w.componentDidUpdate!=="function"||O===r.memoizedProps&&$===r.memoizedState||(g.flags|=4),typeof w.getSnapshotBeforeUpdate!=="function"||O===r.memoizedProps&&$===r.memoizedState||(g.flags|=1024),g.memoizedProps=l,g.memoizedState=B),w.props=l,w.state=B,w.context=P,w=W):(typeof w.componentDidUpdate!=="function"||O===r.memoizedProps&&$===r.memoizedState||(g.flags|=4),typeof w.getSnapshotBeforeUpdate!=="function"||O===r.memoizedProps&&$===r.memoizedState||(g.flags|=1024),w=!1)}if(P=w,U2(r,g),O=(g.flags&128)!==0,P||O){if(P=g.stateNode,_o(g),O&&typeof o.getDerivedStateFromError!=="function")o=null,Co=-1;else if(o=N9(P),g.mode&Uo){Yg(!0);try{N9(P)}finally{Yg(!1)}}g.flags|=1,r!==null&&O?(g.child=wh(g,r.child,null,b),g.child=wh(g,null,o,b)):Ao(r,g,o,b),g.memoizedState=P.state,r=g.child}else r=f0(r,g,b);return b=g.stateNode,w&&b.props!==l&&(U5||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",n(g)||"a component"),U5=!0),r}function IA(r,g,o,l){return D1(),g.flags|=256,Ao(r,g,o,l),g.child}function f6(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=V(g)||"Unknown",W7[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),W7[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=V(g)||"Unknown",A7[g]||(console.error("%s: Function components do not support contextType.",g),A7[g]=!0))}function a6(r){return{baseLanes:r,cachePool:Lq()}}function p6(r,g,o){return r=r!==null?r.childLanes&~o:0,g&&(r|=po),r}function mA(r,g,o){var l,b=g.pendingProps;q(g)&&(g.flags|=128);var w=!1,O=(g.flags&128)!==0;if((l=O)||(l=r!==null&&r.memoizedState===null?!1:(Dg.current&Ow)!==0),l&&(w=!0,g.flags&=-129),l=(g.flags&32)!==0,g.flags&=-33,r===null){if(pr){if(w?Cl(g):Tl(g),(r=ig)?(o=dM(r,mv),o=o!==null&&o.data!==Mh?o:null,o!==null&&(l={dehydrated:o,treeContext:Xq(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=Rq(o),l.return=g,g.child=l,Ro=g,ig=null)):o=null,o===null)throw se(g,r),ml(g);return I8(o)?g.lanes=32:g.lanes=536870912,null}var P=b.children;if(b=b.fallback,w){Tl(g);var W=g.mode;return P=L2({mode:"hidden",children:P},W),b=t1(b,W,o,null),P.return=g,b.return=g,P.sibling=b,g.child=P,b=g.child,b.memoizedState=a6(o),b.childLanes=p6(r,l,o),g.memoizedState=kO,Yb(null,b)}return Cl(g),d6(g,P)}var G=r.memoizedState;if(G!==null){var F=G.dehydrated;if(F!==null){if(O)g.flags&256?(Cl(g),g.flags&=-257,g=s6(r,g,o)):g.memoizedState!==null?(Tl(g),g.child=r.child,g.flags|=128,g=null):(Tl(g),P=b.fallback,W=g.mode,b=L2({mode:"visible",children:b.children},W),P=t1(P,W,o,null),P.flags|=2,b.return=g,P.return=g,b.sibling=P,g.child=b,wh(g,r.child,null,o),b=g.child,b.memoizedState=a6(o),b.childLanes=p6(r,l,o),g.memoizedState=kO,g=Yb(null,b));else if(Cl(g),Jq(),(o&536870912)!==0&&B2(g),I8(F)){if(l=F.nextSibling&&F.nextSibling.dataset,l){P=l.dgst;var I=l.msg;W=l.stck;var $=l.cstck}w=I,l=P,b=W,F=$,P=w,W=F,P=P?Error(P):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),P.stack=b||"",P.digest=l,l=W===void 0?null:W,b={value:P,source:null,stack:l},typeof l==="string"&&YO.set(P,b),ub(b),g=s6(r,g,o)}else if(pg||th(r,g,o,!1),l=(o&r.childLanes)!==0,pg||l){if(l=Gg,l!==null&&(b=Z1(l,o),b!==0&&b!==G.retryLane))throw G.retryLane=b,$o(r,b),Zg(l,r,b),tO;F8(F)||Z2(),g=s6(r,g,o)}else F8(F)?(g.flags|=192,g.child=r.child,g=null):(r=G.treeContext,ig=uv(F.nextSibling),Ro=g,pr=!0,al=null,I0=!1,qv=null,mv=!1,r!==null&&Yq(g,r),g=d6(g,b.children),g.flags|=4096);return g}}if(w)return Tl(g),P=b.fallback,W=g.mode,$=r.child,F=$.sibling,b=E0($,{mode:"hidden",children:b.children}),b.subtreeFlags=$.subtreeFlags&65011712,F!==null?P=E0(F,P):(P=t1(P,W,o,null),P.flags|=2),P.return=g,b.return=g,b.sibling=P,g.child=b,Yb(null,b),b=g.child,P=r.child.memoizedState,P===null?P=a6(o):(W=P.cachePool,W!==null?($=jg._currentValue,W=W.parent!==$?{parent:$,pool:$}:W):W=Lq(),P={baseLanes:P.baseLanes|o,cachePool:W}),b.memoizedState=P,b.childLanes=p6(r,l,o),g.memoizedState=kO,Yb(r.child,b);return G!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&B2(g),Cl(g),o=r.child,r=o.sibling,o=E0(o,{mode:"visible",children:b.children}),o.return=g,o.sibling=null,r!==null&&(l=g.deletions,l===null?(g.deletions=[r],g.flags|=16):l.push(r)),g.child=o,g.memoizedState=null,o}function d6(r,g){return g=L2({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function L2(r,g){return r=z(22,r,null,g),r.lanes=0,r}function s6(r,g,o){return wh(g,r.child,null,o),r=d6(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function NA(r,g,o){r.lanes|=g;var l=r.alternate;l!==null&&(l.lanes|=g),h6(r.return,g,o)}function r8(r,g,o,l,b,w){var O=r.memoizedState;O===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:b,treeForkCount:w}:(O.isBackwards=g,O.rendering=null,O.renderingStartTime=0,O.last=l,O.tail=o,O.tailMode=b,O.treeForkCount=w)}function BA(r,g,o){var l=g.pendingProps,b=l.revealOrder,w=l.tail,O=l.children,P=Dg.current;if((l=(P&Ow)!==0)?(P=P&z5|Ow,g.flags|=128):P&=z5,Qr(Dg,P,g),P=b==null?"null":b,b!=="forwards"&&b!=="unstable_legacy-backwards"&&b!=="together"&&b!=="independent"&&!R7[P])if(R7[P]=!0,b==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(b==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof b==="string")switch(b.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',b,b.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',b,b.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',b)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',b);if(P=w==null?"null":w,!iu[P])if(w==null){if(b==="forwards"||b==="backwards"||b==="unstable_legacy-backwards")iu[P]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else w!=="visible"&&w!=="collapsed"&&w!=="hidden"?(iu[P]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',w)):b!=="forwards"&&b!=="backwards"&&b!=="unstable_legacy-backwards"&&(iu[P]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',w));r:if((b==="forwards"||b==="backwards"||b==="unstable_legacy-backwards")&&O!==void 0&&O!==null&&O!==!1)if(oo(O)){for(P=0;P<O.length;P++)if(!nq(O[P],P))break r}else if(P=C(O),typeof P==="function"){if(P=P.call(O))for(var W=P.next(),G=0;!W.done;W=P.next()){if(!nq(W.value,G))break r;G++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',b);if(Ao(r,g,O,o),pr?(Il(),O=fb):O=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&NA(r,o,g);else if(r.tag===19)NA(r,o,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(b){case"forwards":o=g.child;for(b=null;o!==null;)r=o.alternate,r!==null&&P2(r)===null&&(b=o),o=o.sibling;o=b,o===null?(b=g.child,g.child=null):(b=o.sibling,o.sibling=null),r8(g,!1,b,o,w,O);break;case"backwards":case"unstable_legacy-backwards":o=null,b=g.child;for(g.child=null;b!==null;){if(r=b.alternate,r!==null&&P2(r)===null){g.child=b;break}r=b.sibling,b.sibling=o,o=b,b=r}r8(g,!0,o,null,w,O);break;case"together":r8(g,!1,null,null,void 0,O);break;default:g.memoizedState=null}return g.child}function f0(r,g,o){if(r!==null&&(g.dependencies=r.dependencies),Co=-1,h1|=g.lanes,(o&g.childLanes)===0)if(r!==null){if(th(r,g,o,!1),(o&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,o=E0(r,r.pendingProps),g.child=o;for(o.return=g;r.sibling!==null;)r=r.sibling,o=o.sibling=E0(r,r.pendingProps),o.return=g;o.sibling=null}return g.child}function g8(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&g2(r)?!0:!1}function WQ(r,g,o){switch(g.tag){case 3:k(g,g.stateNode.containerInfo),Nl(g,jg,r.memoizedState.cache),D1();break;case 27:case 5:or(g);break;case 4:k(g,g.stateNode.containerInfo);break;case 10:Nl(g,g.type,g.memoizedProps.value);break;case 12:(o&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var l=g.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,W6(g),null;break;case 13:if(l=g.memoizedState,l!==null){if(l.dehydrated!==null)return Cl(g),g.flags|=128,null;if((o&g.child.childLanes)!==0)return mA(r,g,o);return Cl(g),r=f0(r,g,o),r!==null?r.sibling:null}Cl(g);break;case 19:var b=(r.flags&128)!==0;if(l=(o&g.childLanes)!==0,l||(th(r,g,o,!1),l=(o&g.childLanes)!==0),b){if(l)return BA(r,g,o);g.flags|=128}if(b=g.memoizedState,b!==null&&(b.rendering=null,b.tail=null,b.lastEffect=null),Qr(Dg,Dg.current,g),l)break;else return null;case 22:return g.lanes=0,$A(r,g,o,g.pendingProps);case 24:Nl(g,jg,r.memoizedState.cache)}return f0(r,g,o)}function o8(r,g,o){if(g._debugNeedsRemount&&r!==null){o=d4(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),o._debugStack=g._debugStack,o._debugTask=g._debugTask;var l=g.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,o.index=g.index,o.sibling=g.sibling,o.return=g.return,o.ref=g.ref,o._debugInfo=g._debugInfo,g===l.child)l.child=o;else{var b=l.child;if(b===null)throw Error("Expected parent to have a child.");for(;b.sibling!==g;)if(b=b.sibling,b===null)throw Error("Expected to find the previous sibling.");b.sibling=o}return g=l.deletions,g===null?(l.deletions=[r],l.flags|=16):g.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)pg=!0;else{if(!g8(r,o)&&(g.flags&128)===0)return pg=!1,WQ(r,g,o);pg=(r.flags&131072)!==0?!0:!1}else{if(pg=!1,l=pr)Il(),l=(g.flags&1048576)!==0;l&&(l=g.index,Il(),Gq(g,fb,l))}switch(g.lanes=0,g.tag){case 16:r:if(l=g.pendingProps,r=Bl(g.elementType),g.type=r,typeof r==="function")p4(r)?(l=j1(r,l),g.tag=1,g.type=r=S1(r),g=FA(null,g,r,l,o)):(g.tag=0,f6(g,r),g.type=r=S1(r),g=j6(null,g,r,l,o));else{if(r!==void 0&&r!==null){if(b=r.$$typeof,b===Cb){g.tag=11,g.type=r=a4(r),g=QA(null,g,r,l,o);break r}else if(b===j2){g.tag=14,g=zA(null,g,r,l,o);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===Ov&&(g=" Did you wrap a component in React.lazy() more than once?"),o=V(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return j6(r,g,g.type,g.pendingProps,o);case 1:return l=g.type,b=j1(l,g.pendingProps),FA(r,g,l,b,o);case 3:r:{if(k(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=g.pendingProps;var w=g.memoizedState;b=w.element,q6(r,g),Wb(g,l,null,o);var O=g.memoizedState;if(l=O.cache,Nl(g,jg,l),l!==w.cache&&b6(g,[jg],o,!0),Mb(),l=O.element,w.isDehydrated)if(w={element:l,isDehydrated:!1,cache:O.cache},g.updateQueue.baseState=w,g.memoizedState=w,g.flags&256){g=IA(r,g,l,o);break r}else if(l!==b){b=lv(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),ub(b),g=IA(r,g,l,o);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}ig=uv(r.firstChild),Ro=g,pr=!0,al=null,I0=!1,qv=null,mv=!0,o=y9(g,null,l,o);for(g.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(D1(),l===b){g=f0(r,g,o);break r}Ao(r,g,l,o)}g=g.child}return g;case 26:return U2(r,g),r===null?(o=lW(g.type,null,g.pendingProps,null))?g.memoizedState=o:pr||(o=g.type,r=g.pendingProps,l=Cr(Vl.current),l=n2(l).createElement(o),l[Wo]=g,l[Bo]=r,Mo(l,o,r),$r(l),g.stateNode=l):g.memoizedState=lW(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return or(g),r===null&&pr&&(l=Cr(Vl.current),b=hr(),l=g.stateNode=oW(g.type,g.pendingProps,l,b,!1),I0||(b=_M(l,g.type,g.pendingProps,b),b!==null&&(k1(g,0).serverProps=b)),Ro=g,mv=!0,b=ig,kl(g.type)?(OH=b,ig=uv(l.firstChild)):ig=b),Ao(r,g,g.pendingProps.children,o),U2(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&pr&&(w=hr(),l=D4(g.type,w.ancestorInfo),b=ig,(O=!b)||(O=lz(b,g.type,g.pendingProps,mv),O!==null?(g.stateNode=O,I0||(w=_M(O,g.type,g.pendingProps,w),w!==null&&(k1(g,0).serverProps=w)),Ro=g,ig=uv(O.firstChild),mv=!1,w=!0):w=!1,O=!w),O&&(l&&se(g,b),ml(g))),or(g),b=g.type,w=g.pendingProps,O=r!==null?r.memoizedProps:null,l=w.children,U8(b,w)?l=null:O!==null&&U8(b,O)&&(g.flags|=32),g.memoizedState!==null&&(b=G6(r,g,eQ,null,null,o),Lw._currentValue=b),U2(r,g),Ao(r,g,l,o),g.child;case 6:return r===null&&pr&&(o=g.pendingProps,r=hr(),l=r.ancestorInfo.current,o=l!=null?Ve(o,l.tag,r.ancestorInfo.implicitRootScope):!0,r=ig,(l=!r)||(l=hz(r,g.pendingProps,mv),l!==null?(g.stateNode=l,Ro=g,ig=null,l=!0):l=!1,l=!l),l&&(o&&se(g,r),ml(g))),null;case 13:return mA(r,g,o);case 4:return k(g,g.stateNode.containerInfo),l=g.pendingProps,r===null?g.child=wh(g,null,l,o):Ao(r,g,l,o),g.child;case 11:return QA(r,g,g.type,g.pendingProps,o);case 7:return Ao(r,g,g.pendingProps,o),g.child;case 8:return Ao(r,g,g.pendingProps.children,o),g.child;case 12:return g.flags|=4,g.flags|=2048,l=g.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,Ao(r,g,g.pendingProps.children,o),g.child;case 10:return l=g.type,b=g.pendingProps,w=b.value,"value"in b||G7||(G7=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Nl(g,l,w),Ao(r,g,b.children,o),g.child;case 9:return b=g.type._context,l=g.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),V1(g),b=Lg(b),l=LO(l,b,void 0),g.flags|=1,Ao(r,g,l,o),g.child;case 14:return zA(r,g,g.type,g.pendingProps,o);case 15:return KA(r,g,g.type,g.pendingProps,o);case 19:return BA(r,g,o);case 31:return MQ(r,g,o);case 22:return $A(r,g,o,g.pendingProps);case 24:return V1(g),l=Lg(jg),r===null?(b=O6(),b===null&&(b=Gg,w=w6(),b.pooledCache=w,_1(w),w!==null&&(b.pooledCacheLanes|=o),b=w),g.memoizedState={parent:l,cache:b},P6(g),Nl(g,jg,b)):((r.lanes&o)!==0&&(q6(r,g),Wb(g,null,null,o),Mb()),b=r.memoizedState,w=g.memoizedState,b.parent!==l?(b={parent:l,cache:l},g.memoizedState=b,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=b),Nl(g,jg,l)):(l=w.cache,Nl(g,jg,l),l!==b.cache&&b6(g,[jg],o,!0))),Ao(r,g,g.pendingProps.children,o),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function a0(r){r.flags|=4}function v8(r,g,o,l,b){if(g=(r.mode&CK)!==Lr)g=!1;if(g){if(r.flags|=16777216,(b&335544128)===b)if(r.stateNode.complete)r.flags|=8192;else if(PM())r.flags|=8192;else throw bh=Yu,IO}else r.flags&=-16777217}function ZA(r,g){if(g.type!=="stylesheet"||(g.state.loading&Cv)!==Gh)r.flags&=-16777217;else if(r.flags|=16777216,!uW(g))if(PM())r.flags|=8192;else throw bh=Yu,IO}function F2(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?Zh():536870912,r.lanes|=g,Ph|=g)}function Jb(r,g){if(!pr)switch(r.tailMode){case"hidden":g=r.tail;for(var o=null;g!==null;)g.alternate!==null&&(o=g),g=g.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function Jg(r){var g=r.alternate!==null&&r.alternate.child===r.child,o=0,l=0;if(g)if((r.mode&kr)!==Lr){for(var{selfBaseDuration:b,child:w}=r;w!==null;)o|=w.lanes|w.childLanes,l|=w.subtreeFlags&65011712,l|=w.flags&65011712,b+=w.treeBaseDuration,w=w.sibling;r.treeBaseDuration=b}else for(b=r.child;b!==null;)o|=b.lanes|b.childLanes,l|=b.subtreeFlags&65011712,l|=b.flags&65011712,b.return=r,b=b.sibling;else if((r.mode&kr)!==Lr){b=r.actualDuration,w=r.selfBaseDuration;for(var O=r.child;O!==null;)o|=O.lanes|O.childLanes,l|=O.subtreeFlags,l|=O.flags,b+=O.actualDuration,w+=O.treeBaseDuration,O=O.sibling;r.actualDuration=b,r.treeBaseDuration=w}else for(b=r.child;b!==null;)o|=b.lanes|b.childLanes,l|=b.subtreeFlags,l|=b.flags,b.return=r,b=b.sibling;return r.subtreeFlags|=l,r.childLanes=o,g}function RQ(r,g,o){var l=g.pendingProps;switch(o6(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jg(g),null;case 1:return Jg(g),null;case 3:if(o=g.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),g.memoizedState.cache!==l&&(g.flags|=2048),c0(jg,g),d(g),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)Sh(g)?(l6(),a0(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,v6());return Jg(g),null;case 26:var{type:b,memoizedState:w}=g;return r===null?(a0(g),w!==null?(Jg(g),ZA(g,w)):(Jg(g),v8(g,b,null,l,o))):w?w!==r.memoizedState?(a0(g),Jg(g),ZA(g,w)):(Jg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==l&&a0(g),Jg(g),v8(g,b,r,l,o)),null;case 27:if(Wr(g),o=Cr(Vl.current),b=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&a0(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Jg(g),null}r=hr(),Sh(g)?Qq(g,r):(r=oW(b,l,o,r,!0),g.stateNode=r,a0(g))}return Jg(g),null;case 5:if(Wr(g),b=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&a0(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Jg(g),null}var O=hr();if(Sh(g))Qq(g,O);else{switch(w=Cr(Vl.current),D4(b,O.ancestorInfo),O=O.context,w=n2(w),O){case x5:w=w.createElementNS(h5,b);break;case yu:w=w.createElementNS(gu,b);break;default:switch(b){case"svg":w=w.createElementNS(h5,b);break;case"math":w=w.createElementNS(gu,b);break;case"script":w=w.createElement("div"),w.innerHTML="<script></script>",w=w.removeChild(w.firstChild);break;case"select":w=typeof l.is==="string"?w.createElement("select",{is:l.is}):w.createElement("select"),l.multiple?w.multiple=!0:l.size&&(w.size=l.size);break;default:w=typeof l.is==="string"?w.createElement(b,{is:l.is}):w.createElement(b),b.indexOf("-")===-1&&(b!==b.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",b),Object.prototype.toString.call(w)!=="[object HTMLUnknownElement]"||Vv.call(D7,b)||(D7[b]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",b)))}}w[Wo]=g,w[Bo]=l;r:for(O=g.child;O!==null;){if(O.tag===5||O.tag===6)w.appendChild(O.stateNode);else if(O.tag!==4&&O.tag!==27&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===g)break r;for(;O.sibling===null;){if(O.return===null||O.return===g)break r;O=O.return}O.sibling.return=O.return,O=O.sibling}g.stateNode=w;r:switch(Mo(w,b,l),b){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&a0(g)}}return Jg(g),v8(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,o),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==l&&a0(g);else{if(typeof l!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Cr(Vl.current),o=hr(),Sh(g)){if(r=g.stateNode,o=g.memoizedProps,b=!I0,l=null,w=Ro,w!==null)switch(w.tag){case 3:b&&(b=rW(r,o,l),b!==null&&(k1(g,0).serverProps=b));break;case 27:case 5:l=w.memoizedProps,b&&(b=rW(r,o,l),b!==null&&(k1(g,0).serverProps=b))}r[Wo]=g,r=r.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||SM(r.nodeValue,o)?!0:!1,r||ml(g,!0)}else b=o.ancestorInfo.current,b!=null&&Ve(l,b.tag,o.ancestorInfo.implicitRootScope),r=n2(r).createTextNode(l),r[Wo]=g,g.stateNode=r}return Jg(g),null;case 31:if(o=g.memoizedState,r===null||r.memoizedState!==null){if(l=Sh(g),o!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Wo]=g,Jg(g),(g.mode&kr)!==Lr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else l6(),D1(),(g.flags&128)===0&&(o=g.memoizedState=null),g.flags|=4,Jg(g),(g.mode&kr)!==Lr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=v6(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(g.flags&256)return wv(g),g;return wv(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Jg(g),null;case 13:if(l=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(b=l,w=Sh(g),b!==null&&b.dehydrated!==null){if(r===null){if(!w)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(w=g.memoizedState,w=w!==null?w.dehydrated:null,!w)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");w[Wo]=g,Jg(g),(g.mode&kr)!==Lr&&b!==null&&(b=g.child,b!==null&&(g.treeBaseDuration-=b.treeBaseDuration))}else l6(),D1(),(g.flags&128)===0&&(b=g.memoizedState=null),g.flags|=4,Jg(g),(g.mode&kr)!==Lr&&b!==null&&(b=g.child,b!==null&&(g.treeBaseDuration-=b.treeBaseDuration));b=!1}else b=v6(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=b),b=!0;if(!b){if(g.flags&256)return wv(g),g;return wv(g),null}}if(wv(g),(g.flags&128)!==0)return g.lanes=o,(g.mode&kr)!==Lr&&Pb(g),g;return o=l!==null,r=r!==null&&r.memoizedState!==null,o&&(l=g.child,b=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(b=l.alternate.memoizedState.cachePool.pool),w=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(w=l.memoizedState.cachePool.pool),w!==b&&(l.flags|=2048)),o!==r&&o&&(g.child.flags|=8192),F2(g,g.updateQueue),Jg(g),(g.mode&kr)!==Lr&&o&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return d(g),r===null&&Y8(g.stateNode.containerInfo),Jg(g),null;case 10:return c0(g.type,g),Jg(g),null;case 19:if(Rr(Dg,g),l=g.memoizedState,l===null)return Jg(g),null;if(b=(g.flags&128)!==0,w=l.rendering,w===null)if(b)Jb(l,!1);else{if(Ng!==Hl||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(w=P2(r),w!==null){g.flags|=128,Jb(l,!1),r=w.updateQueue,g.updateQueue=r,F2(g,r),g.subtreeFlags=0,r=o;for(o=g.child;o!==null;)Wq(o,r),o=o.sibling;return Qr(Dg,Dg.current&z5|Ow,g),pr&&y0(g,l.treeForkCount),g.child}r=r.sibling}l.tail!==null&&bo()>Bu&&(g.flags|=128,b=!0,Jb(l,!1),g.lanes=4194304)}else{if(!b)if(r=P2(w),r!==null){if(g.flags|=128,b=!0,r=r.updateQueue,g.updateQueue=r,F2(g,r),Jb(l,!0),l.tail===null&&l.tailMode==="hidden"&&!w.alternate&&!pr)return Jg(g),null}else 2*bo()-l.renderingStartTime>Bu&&o!==536870912&&(g.flags|=128,b=!0,Jb(l,!1),g.lanes=4194304);l.isBackwards?(w.sibling=g.child,g.child=w):(r=l.last,r!==null?r.sibling=w:g.child=w,l.last=w)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=bo(),r.sibling=null,o=Dg.current,o=b?o&z5|Ow:o&z5,Qr(Dg,o,g),pr&&y0(g,l.treeForkCount),r;return Jg(g),null;case 22:case 23:return wv(g),M6(g),l=g.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(g.flags|=8192):l&&(g.flags|=8192),l?(o&536870912)!==0&&(g.flags&128)===0&&(Jg(g),g.subtreeFlags&6&&(g.flags|=8192)):Jg(g),o=g.updateQueue,o!==null&&F2(g,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),l=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(l=g.memoizedState.cachePool.pool),l!==o&&(g.flags|=2048),r!==null&&Rr(lh,g),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),g.memoizedState.cache!==o&&(g.flags|=2048),c0(jg,g),Jg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function GQ(r,g){switch(o6(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Pb(g),g):null;case 3:return c0(jg,g),d(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Wr(g),null;case 31:if(g.memoizedState!==null){if(wv(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D1()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Pb(g),g):null;case 13:if(wv(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D1()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Pb(g),g):null;case 19:return Rr(Dg,g),null;case 4:return d(g),null;case 10:return c0(g.type,g),null;case 22:case 23:return wv(g),M6(g),r!==null&&Rr(lh,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Pb(g),g):null;case 24:return c0(jg,g),null;case 25:return null;default:return null}}function xA(r,g){switch(o6(g),g.tag){case 3:c0(jg,g),d(g);break;case 26:case 27:case 5:Wr(g);break;case 4:d(g);break;case 31:g.memoizedState!==null&&wv(g);break;case 13:wv(g);break;case 19:Rr(Dg,g);break;case 10:c0(g.type,g);break;case 22:case 23:wv(g),M6(g),r!==null&&Rr(lh,g);break;case 24:c0(jg,g)}}function R0(r){return(r.mode&kr)!==Lr}function CA(r,g){R0(r)?(W0(),Qb(g,r),M0()):Qb(g,r)}function l8(r,g,o){R0(r)?(W0(),Eh(o,r,g),M0()):Eh(o,r,g)}function Qb(r,g){try{var o=g.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var b=l.next;o=b;do{if((o.tag&r)===r&&(l=void 0,(r&To)!==Qu&&(N5=!0),l=er(g,kK,o),(r&To)!==Qu&&(N5=!1),l!==void 0&&typeof l!=="function")){var w=void 0;w=(o.tag&Mv)!==0?"useLayoutEffect":(o.tag&To)!==0?"useInsertionEffect":"useEffect";var O=void 0;O=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+w+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+w+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,er(g,function(P,W){console.error("%s must not return anything besides a function, which is used for clean-up.%s",P,W)},w,O)}o=o.next}while(o!==b)}}catch(P){wg(g,g.return,P)}}function Eh(r,g,o){try{var l=g.updateQueue,b=l!==null?l.lastEffect:null;if(b!==null){var w=b.next;l=w;do{if((l.tag&r)===r){var O=l.inst,P=O.destroy;P!==void 0&&(O.destroy=void 0,(r&To)!==Qu&&(N5=!0),b=g,er(b,DK,b,o,P),(r&To)!==Qu&&(N5=!1))}l=l.next}while(l!==w)}}catch(W){wg(g,g.return,W)}}function TA(r,g){R0(r)?(W0(),Qb(g,r),M0()):Qb(g,r)}function h8(r,g,o){R0(r)?(W0(),Eh(o,r,g),M0()):Eh(o,r,g)}function nA(r){var g=r.updateQueue;if(g!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||U5||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",n(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",n(r)||"instance"));try{er(r,tq,g,o)}catch(l){wg(r,r.return,l)}}}function XQ(r,g,o){return r.getSnapshotBeforeUpdate(g,o)}function YQ(r,g){var{memoizedProps:o,memoizedState:l}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||U5||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",n(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",n(r)||"instance"));try{var b=j1(r.type,o),w=er(r,XQ,g,b,l);o=X7,w!==void 0||o.has(r.type)||(o.add(r.type),er(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",n(r))})),g.__reactInternalSnapshotBeforeUpdate=w}catch(O){wg(r,r.return,O)}}function SA(r,g,o){o.props=j1(r.type,r.memoizedProps),o.state=r.memoizedState,R0(r)?(W0(),er(r,n9,r,g,o),M0()):er(r,n9,r,g,o)}function JQ(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof g==="function")if(R0(r))try{W0(),r.refCleanup=g(o)}finally{M0()}else r.refCleanup=g(o);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",n(r)),g.current=o}}function zb(r,g){try{er(r,JQ,r)}catch(o){wg(r,g,o)}}function G0(r,g){var{ref:o,refCleanup:l}=r;if(o!==null)if(typeof l==="function")try{if(R0(r))try{W0(),er(r,l)}finally{M0(r)}else er(r,l)}catch(b){wg(r,g,b)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(R0(r))try{W0(),er(r,o,null)}finally{M0(r)}else er(r,o,null)}catch(b){wg(r,g,b)}else o.current=null}function tA(r,g,o,l){var b=r.memoizedProps,w=b.id,O=b.onCommit;b=b.onRender,g=g===null?"mount":"update",Wu&&(g="nested-update"),typeof b==="function"&&b(w,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof O==="function"&&O(w,g,l,o)}function QQ(r,g,o,l){var b=r.memoizedProps;r=b.id,b=b.onPostCommit,g=g===null?"mount":"update",Wu&&(g="nested-update"),typeof b==="function"&&b(r,g,l,o)}function kA(r){var{type:g,memoizedProps:o,stateNode:l}=r;try{er(r,yQ,l,g,o,r)}catch(b){wg(r,r.return,b)}}function b8(r,g,o){try{er(r,jQ,r.stateNode,r.type,o,g,r)}catch(l){wg(r,r.return,l)}}function DA(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&kl(r.type)||r.tag===4}function w8(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||DA(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&kl(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function e8(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?(fM(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,g)):(fM(o),g=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,g.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||g.onclick!==null||(g.onclick=_0));else if(l!==4&&(l===27&&kl(r.type)&&(o=r.stateNode,g=null),r=r.child,r!==null))for(e8(r,g,o),r=r.sibling;r!==null;)e8(r,g,o),r=r.sibling}function I2(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?o.insertBefore(r,g):o.appendChild(r);else if(l!==4&&(l===27&&kl(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(I2(r,g,o),r=r.sibling;r!==null;)I2(r,g,o),r=r.sibling}function zQ(r){for(var g,o=r.return;o!==null;){if(DA(o)){g=o;break}o=o.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,o=w8(r),I2(r,o,g);break;case 5:o=g.stateNode,g.flags&32&&(jM(o),g.flags&=-33),g=w8(r),I2(r,g,o);break;case 3:case 4:g=g.stateNode.containerInfo,o=w8(r),e8(r,o,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function VA(r){var{stateNode:g,memoizedProps:o}=r;try{er(r,Oz,r.type,o,g,r)}catch(l){wg(r,r.return,l)}}function _A(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function KQ(r,g){if(r=r.containerInfo,wH=au,r=bq(r),E4(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var{anchorOffset:b,focusNode:w}=l;l=l.focusOffset;try{o.nodeType,w.nodeType}catch(br){o=null;break r}var O=0,P=-1,W=-1,G=0,F=0,I=r,$=null;g:for(;;){for(var B;;){if(I!==o||b!==0&&I.nodeType!==3||(P=O+b),I!==w||l!==0&&I.nodeType!==3||(W=O+l),I.nodeType===3&&(O+=I.nodeValue.length),(B=I.firstChild)===null)break;$=I,I=B}for(;;){if(I===r)break g;if($===o&&++G===b&&(P=O),$===w&&++F===l&&(W=O),(B=I.nextSibling)!==null)break;I=$,$=I.parentNode}I=B}o=P===-1||W===-1?null:{start:P,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;eH={focusedElem:r,selectionRange:o},au=!1;for(eo=g;eo!==null;)if(g=eo,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,eo=r;else for(;eo!==null;){switch(r=g=eo,o=r.alternate,b=r.flags,r.tag){case 0:if((b&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)b=r[o],b.ref.impl=b.nextImpl;break;case 11:case 15:break;case 1:(b&1024)!==0&&o!==null&&YQ(r,o);break;case 3:if((b&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)L8(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":L8(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((b&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,eo=r;break}eo=g.return}}function EA(r,g,o){var l=hv(),b=H0(),w=q0(),O=A0(),P=o.flags;switch(o.tag){case 0:case 11:case 15:X0(r,o),P&4&&CA(o,Mv|Zv);break;case 1:if(X0(r,o),P&4)if(r=o.stateNode,g===null)o.type.defaultProps||"ref"in o.memoizedProps||U5||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",n(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",n(o)||"instance")),R0(o)?(W0(),er(o,FO,o,r),M0()):er(o,FO,o,r);else{var W=j1(o.type,g.memoizedProps);g=g.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||U5||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",n(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",n(o)||"instance")),R0(o)?(W0(),er(o,x9,o,r,W,g,r.__reactInternalSnapshotBeforeUpdate),M0()):er(o,x9,o,r,W,g,r.__reactInternalSnapshotBeforeUpdate)}P&64&&nA(o),P&512&&zb(o,o.return);break;case 3:if(g=j0(),X0(r,o),P&64&&(P=o.updateQueue,P!==null)){if(W=null,o.child!==null)switch(o.child.tag){case 27:case 5:W=o.child.stateNode;break;case 1:W=o.child.stateNode}try{er(o,tq,P,W)}catch(F){wg(o,o.return,F)}}r.effectDuration+=v2(g);break;case 27:g===null&&P&4&&VA(o);case 26:case 5:if(X0(r,o),g===null){if(P&4)kA(o);else if(P&64){r=o.type,g=o.memoizedProps,W=o.stateNode;try{er(o,cQ,W,r,g,o)}catch(F){wg(o,o.return,F)}}}P&512&&zb(o,o.return);break;case 12:if(P&4){P=j0(),X0(r,o),r=o.stateNode,r.effectDuration+=Hb(P);try{er(o,tA,o,g,pl,r.effectDuration)}catch(F){wg(o,o.return,F)}}else X0(r,o);break;case 31:X0(r,o),P&4&&jA(r,o);break;case 13:X0(r,o),P&4&&fA(r,o),P&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(P=BQ.bind(null,o),bz(r,P))));break;case 22:if(P=o.memoizedState!==null||Ol,!P){g=g!==null&&g.memoizedState!==null||dg,W=Ol;var G=dg;Ol=P,(dg=g)&&!G?(Y0(r,o,(o.subtreeFlags&8772)!==0),(o.mode&kr)!==Lr&&0<=ir&&0<=Ur&&0.05<Ur-ir&&ce(o,ir,Ur)):X0(r,o),Ol=W,dg=G}break;case 30:break;default:X0(r,o)}(o.mode&kr)!==Lr&&0<=ir&&0<=Ur&&((xg||0.05<mg)&&u0(o,ir,Ur,mg,Fg),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<Ur-ir&&(_A(o.return.alternate,o.return)||e0(o,ir,Ur,"Mount"))),bv(l),P0(b),Fg=w,xg=O}function yA(r){var g=r.alternate;g!==null&&(r.alternate=null,yA(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&ur(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function p0(r,g,o){for(o=o.child;o!==null;)cA(r,g,o),o=o.sibling}function cA(r,g,o){if(io&&typeof io.onCommitFiberUnmount==="function")try{io.onCommitFiberUnmount(v5,o)}catch(G){i0||(i0=!0,console.error("React instrumentation encountered an error: %o",G))}var l=hv(),b=H0(),w=q0(),O=A0();switch(o.tag){case 26:dg||G0(o,g),p0(r,g,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:dg||G0(o,g);var P=sg,W=fo;kl(o.type)&&(sg=o.stateNode,fo=!1),p0(r,g,o),er(o,Nb,o.stateNode),sg=P,fo=W;break;case 5:dg||G0(o,g);case 6:if(P=sg,W=fo,sg=null,p0(r,g,o),sg=P,fo=W,sg!==null)if(fo)try{er(o,pQ,sg,o.stateNode)}catch(G){wg(o,g,G)}else try{er(o,aQ,sg,o.stateNode)}catch(G){wg(o,g,G)}break;case 18:sg!==null&&(fo?(r=sg,aM(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),sh(r)):aM(sg,o.stateNode));break;case 4:P=sg,W=fo,sg=o.stateNode.containerInfo,fo=!0,p0(r,g,o),sg=P,fo=W;break;case 0:case 11:case 14:case 15:Eh(To,o,g),dg||l8(o,g,Mv),p0(r,g,o);break;case 1:dg||(G0(o,g),P=o.stateNode,typeof P.componentWillUnmount==="function"&&SA(o,g,P)),p0(r,g,o);break;case 21:p0(r,g,o);break;case 22:dg=(P=dg)||o.memoizedState!==null,p0(r,g,o),dg=P;break;default:p0(r,g,o)}(o.mode&kr)!==Lr&&0<=ir&&0<=Ur&&(xg||0.05<mg)&&u0(o,ir,Ur,mg,Fg),bv(l),P0(b),Fg=w,xg=O}function jA(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{er(g,ez,r)}catch(o){wg(g,g.return,o)}}}function fA(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{er(g,uz,r)}catch(o){wg(g,g.return,o)}}function $Q(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new Y7),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new Y7),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function m2(r,g){var o=$Q(r);g.forEach(function(l){if(!o.has(l)){if(o.add(l),U0)if(L5!==null&&F5!==null)Ub(F5,L5);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var b=ZQ.bind(null,r,l);l.then(b,b)}})}function co(r,g){var o=g.deletions;if(o!==null)for(var l=0;l<o.length;l++){var b=r,w=g,O=o[l],P=hv(),W=w;r:for(;W!==null;){switch(W.tag){case 27:if(kl(W.type)){sg=W.stateNode,fo=!1;break r}break;case 5:sg=W.stateNode,fo=!1;break r;case 3:case 4:sg=W.stateNode.containerInfo,fo=!0;break r}W=W.return}if(sg===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");cA(b,w,O),sg=null,fo=!1,(O.mode&kr)!==Lr&&0<=ir&&0<=Ur&&0.05<Ur-ir&&e0(O,ir,Ur,"Unmount"),bv(P),b=O,w=b.alternate,w!==null&&(w.return=null),b.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)aA(g,r),g=g.sibling}function aA(r,g){var o=hv(),l=H0(),b=q0(),w=A0(),O=r.alternate,P=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:co(g,r),jo(r),P&4&&(Eh(To|Zv,r,r.return),Qb(To|Zv,r),l8(r,r.return,Mv|Zv));break;case 1:if(co(g,r),jo(r),P&512&&(dg||O===null||G0(O,O.return)),P&64&&Ol&&(P=r.updateQueue,P!==null&&(O=P.callbacks,O!==null))){var W=P.shared.hiddenCallbacks;P.shared.hiddenCallbacks=W===null?O:W.concat(O)}break;case 26:if(W=jv,co(g,r),jo(r),P&512&&(dg||O===null||G0(O,O.return)),P&4){var G=O!==null?O.memoizedState:null;if(P=r.memoizedState,O===null)if(P===null)if(r.stateNode===null){r:{P=r.type,O=r.memoizedProps,W=W.ownerDocument||W;g:switch(P){case"title":if(G=W.getElementsByTagName("title")[0],!G||G[Sb]||G[Wo]||G.namespaceURI===h5||G.hasAttribute("itemprop"))G=W.createElement(P),W.head.insertBefore(G,W.querySelector("head > title"));Mo(G,P,O),G[Wo]=r,$r(G),P=G;break r;case"link":var F=wW("link","href",W).get(P+(O.href||""));if(F){for(var I=0;I<F.length;I++)if(G=F[I],G.getAttribute("href")===(O.href==null||O.href===""?null:O.href)&&G.getAttribute("rel")===(O.rel==null?null:O.rel)&&G.getAttribute("title")===(O.title==null?null:O.title)&&G.getAttribute("crossorigin")===(O.crossOrigin==null?null:O.crossOrigin)){F.splice(I,1);break g}}G=W.createElement(P),Mo(G,P,O),W.head.appendChild(G);break;case"meta":if(F=wW("meta","content",W).get(P+(O.content||""))){for(I=0;I<F.length;I++)if(G=F[I],qg(O.content,"content"),G.getAttribute("content")===(O.content==null?null:""+O.content)&&G.getAttribute("name")===(O.name==null?null:O.name)&&G.getAttribute("property")===(O.property==null?null:O.property)&&G.getAttribute("http-equiv")===(O.httpEquiv==null?null:O.httpEquiv)&&G.getAttribute("charset")===(O.charSet==null?null:O.charSet)){F.splice(I,1);break g}}G=W.createElement(P),Mo(G,P,O),W.head.appendChild(G);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+P+'". This is a bug in React.')}G[Wo]=r,$r(G),P=G}r.stateNode=P}else eW(W,r.type,r.stateNode);else r.stateNode=bW(W,P,r.memoizedProps);else G!==P?(G===null?O.stateNode!==null&&(O=O.stateNode,O.parentNode.removeChild(O)):G.count--,P===null?eW(W,r.type,r.stateNode):bW(W,P,r.memoizedProps)):P===null&&r.stateNode!==null&&b8(r,r.memoizedProps,O.memoizedProps)}break;case 27:co(g,r),jo(r),P&512&&(dg||O===null||G0(O,O.return)),O!==null&&P&4&&b8(r,r.memoizedProps,O.memoizedProps);break;case 5:if(co(g,r),jo(r),P&512&&(dg||O===null||G0(O,O.return)),r.flags&32){W=r.stateNode;try{er(r,jM,W)}catch(Ar){wg(r,r.return,Ar)}}P&4&&r.stateNode!=null&&(W=r.memoizedProps,b8(r,W,O!==null?O.memoizedProps:W)),P&1024&&(DO=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(co(g,r),jo(r),P&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");P=r.memoizedProps,O=O!==null?O.memoizedProps:P,W=r.stateNode;try{er(r,fQ,W,O,P)}catch(Ar){wg(r,r.return,Ar)}}break;case 3:if(W=j0(),cu=null,G=jv,jv=S2(g.containerInfo),co(g,r),jv=G,jo(r),P&4&&O!==null&&O.memoizedState.isDehydrated)try{er(r,wz,g.containerInfo)}catch(Ar){wg(r,r.return,Ar)}DO&&(DO=!1,pA(r)),g.effectDuration+=v2(W);break;case 4:P=jv,jv=S2(r.stateNode.containerInfo),co(g,r),jo(r),jv=P;break;case 12:P=j0(),co(g,r),jo(r),r.stateNode.effectDuration+=Hb(P);break;case 31:co(g,r),jo(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,m2(r,P)));break;case 13:co(g,r),jo(r),r.child.flags&8192&&r.memoizedState!==null!==(O!==null&&O.memoizedState!==null)&&(Nu=bo()),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,m2(r,P)));break;case 22:W=r.memoizedState!==null;var $=O!==null&&O.memoizedState!==null,B=Ol,br=dg;if(Ol=B||W,dg=br||$,co(g,r),dg=br,Ol=B,$&&!W&&!B&&!br&&(r.mode&kr)!==Lr&&0<=ir&&0<=Ur&&0.05<Ur-ir&&ce(r,ir,Ur),jo(r),P&8192)r:for(g=r.stateNode,g._visibility=W?g._visibility&~jb:g._visibility|jb,!W||O===null||$||Ol||dg||(f1(r),(r.mode&kr)!==Lr&&0<=ir&&0<=Ur&&0.05<Ur-ir&&e0(r,ir,Ur,"Disconnect")),O=null,g=r;;){if(g.tag===5||g.tag===26){if(O===null){$=O=g;try{G=$.stateNode,W?er($,sQ,G):er($,oz,$.stateNode,$.memoizedProps)}catch(Ar){wg($,$.return,Ar)}}}else if(g.tag===6){if(O===null){$=g;try{F=$.stateNode,W?er($,rz,F):er($,vz,F,$.memoizedProps)}catch(Ar){wg($,$.return,Ar)}}}else if(g.tag===18){if(O===null){$=g;try{I=$.stateNode,W?er($,dQ,I):er($,gz,$.stateNode)}catch(Ar){wg($,$.return,Ar)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;O===g&&(O=null),g=g.return}O===g&&(O=null),g.sibling.return=g.return,g=g.sibling}P&4&&(P=r.updateQueue,P!==null&&(O=P.retryQueue,O!==null&&(P.retryQueue=null,m2(r,O))));break;case 19:co(g,r),jo(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,m2(r,P)));break;case 30:break;case 21:break;default:co(g,r),jo(r)}(r.mode&kr)!==Lr&&0<=ir&&0<=Ur&&((xg||0.05<mg)&&u0(r,ir,Ur,mg,Fg),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Ur-ir&&(_A(r.return.alternate,r.return)||e0(r,ir,Ur,"Mount"))),bv(o),P0(l),Fg=b,xg=w}function jo(r){var g=r.flags;if(g&2){try{er(r,zQ,r)}catch(o){wg(r,r.return,o)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function pA(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;pA(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function X0(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)EA(r,g.alternate,g),g=g.sibling}function dA(r){var g=hv(),o=H0(),l=q0(),b=A0();switch(r.tag){case 0:case 11:case 14:case 15:l8(r,r.return,Mv),f1(r);break;case 1:G0(r,r.return);var w=r.stateNode;typeof w.componentWillUnmount==="function"&&SA(r,r.return,w),f1(r);break;case 27:er(r,Nb,r.stateNode);case 26:case 5:G0(r,r.return),f1(r);break;case 22:r.memoizedState===null&&f1(r);break;case 30:f1(r);break;default:f1(r)}(r.mode&kr)!==Lr&&0<=ir&&0<=Ur&&(xg||0.05<mg)&&u0(r,ir,Ur,mg,Fg),bv(g),P0(o),Fg=l,xg=b}function f1(r){for(r=r.child;r!==null;)dA(r),r=r.sibling}function sA(r,g,o,l){var b=hv(),w=H0(),O=q0(),P=A0(),W=o.flags;switch(o.tag){case 0:case 11:case 15:Y0(r,o,l),CA(o,Mv);break;case 1:if(Y0(r,o,l),g=o.stateNode,typeof g.componentDidMount==="function"&&er(o,FO,o,g),g=o.updateQueue,g!==null){r=o.stateNode;try{er(o,wQ,g,r)}catch(G){wg(o,o.return,G)}}l&&W&64&&nA(o),zb(o,o.return);break;case 27:VA(o);case 26:case 5:Y0(r,o,l),l&&g===null&&W&4&&kA(o),zb(o,o.return);break;case 12:if(l&&W&4){W=j0(),Y0(r,o,l),l=o.stateNode,l.effectDuration+=Hb(W);try{er(o,tA,o,g,pl,l.effectDuration)}catch(G){wg(o,o.return,G)}}else Y0(r,o,l);break;case 31:Y0(r,o,l),l&&W&4&&jA(r,o);break;case 13:Y0(r,o,l),l&&W&4&&fA(r,o);break;case 22:o.memoizedState===null&&Y0(r,o,l),zb(o,o.return);break;case 30:break;default:Y0(r,o,l)}(o.mode&kr)!==Lr&&0<=ir&&0<=Ur&&(xg||0.05<mg)&&u0(o,ir,Ur,mg,Fg),bv(b),P0(w),Fg=O,xg=P}function Y0(r,g,o){o=o&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)sA(r,g.alternate,g,o),g=g.sibling}function u8(r,g){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==o&&(r!=null&&_1(r),o!=null&&Ob(o))}function O8(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_1(g),r!=null&&Ob(r))}function Dv(r,g,o,l,b){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var w=g.sibling;rM(r,g,o,l,w!==null?w.actualStartTime:b),g=w}}function rM(r,g,o,l,b){var w=hv(),O=H0(),P=q0(),W=A0(),G=cl,F=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&kr)!==Lr&&0<g.actualStartTime&&(g.flags&1)!==0&&je(g,g.actualStartTime,b,vo,o),Dv(r,g,o,l,b),F&2048&&TA(g,no|Zv);break;case 1:(g.mode&kr)!==Lr&&0<g.actualStartTime&&((g.flags&128)!==0?c4(g,g.actualStartTime,b,[]):(g.flags&1)!==0&&je(g,g.actualStartTime,b,vo,o)),Dv(r,g,o,l,b);break;case 3:var I=j0(),$=vo;vo=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,Dv(r,g,o,l,b),vo=$,F&2048&&(o=null,g.alternate!==null&&(o=g.alternate.memoizedState.cache),l=g.memoizedState.cache,l!==o&&(_1(l),o!=null&&Ob(o))),r.passiveEffectDuration+=v2(I);break;case 12:if(F&2048){F=j0(),Dv(r,g,o,l,b),r=g.stateNode,r.passiveEffectDuration+=Hb(F);try{er(g,QQ,g,g.alternate,pl,r.passiveEffectDuration)}catch(B){wg(g,g.return,B)}}else Dv(r,g,o,l,b);break;case 31:F=vo,I=g.alternate!==null?g.alternate.memoizedState:null,$=g.memoizedState,I!==null&&$===null?($=g.deletions,$!==null&&0<$.length&&$[0].tag===18?(vo=!1,I=I.hydrationErrors,I!==null&&c4(g,g.actualStartTime,b,I)):vo=!0):vo=!1,Dv(r,g,o,l,b),vo=F;break;case 13:F=vo,I=g.alternate!==null?g.alternate.memoizedState:null,$=g.memoizedState,I===null||I.dehydrated===null||$!==null&&$.dehydrated!==null?vo=!1:($=g.deletions,$!==null&&0<$.length&&$[0].tag===18?(vo=!1,I=I.hydrationErrors,I!==null&&c4(g,g.actualStartTime,b,I)):vo=!0),Dv(r,g,o,l,b),vo=F;break;case 23:break;case 22:$=g.stateNode,I=g.alternate,g.memoizedState!==null?$._visibility&rl?Dv(r,g,o,l,b):Kb(r,g,o,l,b):$._visibility&rl?Dv(r,g,o,l,b):($._visibility|=rl,yh(r,g,o,l,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),b),(g.mode&kr)===Lr||vo||(r=g.actualStartTime,0<=r&&0.05<b-r&&ce(g,r,b),0<=ir&&0<=Ur&&0.05<Ur-ir&&ce(g,ir,Ur))),F&2048&&u8(I,g);break;case 24:Dv(r,g,o,l,b),F&2048&&O8(g.alternate,g);break;default:Dv(r,g,o,l,b)}if((g.mode&kr)!==Lr){if(r=!vo&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)o=g.actualStartTime,0<=o&&0.05<b-o&&e0(g,o,b,"Mount");0<=ir&&0<=Ur&&((xg||0.05<mg)&&u0(g,ir,Ur,mg,Fg),r&&0.05<Ur-ir&&e0(g,ir,Ur,"Mount"))}bv(w),P0(O),Fg=P,xg=W,cl=G}function yh(r,g,o,l,b,w){b=b&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var O=g.sibling;gM(r,g,o,l,b,O!==null?O.actualStartTime:w),g=O}}function gM(r,g,o,l,b,w){var O=hv(),P=H0(),W=q0(),G=A0(),F=cl;b&&(g.mode&kr)!==Lr&&0<g.actualStartTime&&(g.flags&1)!==0&&je(g,g.actualStartTime,w,vo,o);var I=g.flags;switch(g.tag){case 0:case 11:case 15:yh(r,g,o,l,b,w),TA(g,no);break;case 23:break;case 22:var $=g.stateNode;g.memoizedState!==null?$._visibility&rl?yh(r,g,o,l,b,w):Kb(r,g,o,l,w):($._visibility|=rl,yh(r,g,o,l,b,w)),b&&I&2048&&u8(g.alternate,g);break;case 24:yh(r,g,o,l,b,w),b&&I&2048&&O8(g.alternate,g);break;default:yh(r,g,o,l,b,w)}(g.mode&kr)!==Lr&&0<=ir&&0<=Ur&&(xg||0.05<mg)&&u0(g,ir,Ur,mg,Fg),bv(O),P0(P),Fg=W,xg=G,cl=F}function Kb(r,g,o,l,b){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var w=g.child;w!==null;){g=w.sibling;var O=r,P=o,W=l,G=g!==null?g.actualStartTime:b,F=cl;(w.mode&kr)!==Lr&&0<w.actualStartTime&&(w.flags&1)!==0&&je(w,w.actualStartTime,G,vo,P);var I=w.flags;switch(w.tag){case 22:Kb(O,w,P,W,G),I&2048&&u8(w.alternate,w);break;case 24:Kb(O,w,P,W,G),I&2048&&O8(w.alternate,w);break;default:Kb(O,w,P,W,G)}cl=F,w=g}}function ch(r,g,o){if(r.subtreeFlags&Aw)for(r=r.child;r!==null;)oM(r,g,o),r=r.sibling}function oM(r,g,o){switch(r.tag){case 26:ch(r,g,o),r.flags&Aw&&r.memoizedState!==null&&qz(o,jv,r.memoizedState,r.memoizedProps);break;case 5:ch(r,g,o);break;case 3:case 4:var l=jv;jv=S2(r.stateNode.containerInfo),ch(r,g,o),jv=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Aw,Aw=16777216,ch(r,g,o),Aw=l):ch(r,g,o));break;default:ch(r,g,o)}}function vM(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function $b(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],b=hv();eo=l,bM(l,r),(l.mode&kr)!==Lr&&0<=ir&&0<=Ur&&0.05<Ur-ir&&e0(l,ir,Ur,"Unmount"),bv(b)}vM(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)lM(r),r=r.sibling}function lM(r){var g=hv(),o=H0(),l=q0(),b=A0();switch(r.tag){case 0:case 11:case 15:$b(r),r.flags&2048&&h8(r,r.return,no|Zv);break;case 3:var w=j0();$b(r),r.stateNode.passiveEffectDuration+=v2(w);break;case 12:w=j0(),$b(r),r.stateNode.passiveEffectDuration+=Hb(w);break;case 22:w=r.stateNode,r.memoizedState!==null&&w._visibility&rl&&(r.return===null||r.return.tag!==13)?(w._visibility&=~rl,N2(r),(r.mode&kr)!==Lr&&0<=ir&&0<=Ur&&0.05<Ur-ir&&e0(r,ir,Ur,"Disconnect")):$b(r);break;default:$b(r)}(r.mode&kr)!==Lr&&0<=ir&&0<=Ur&&(xg||0.05<mg)&&u0(r,ir,Ur,mg,Fg),bv(g),P0(o),xg=b,Fg=l}function N2(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],b=hv();eo=l,bM(l,r),(l.mode&kr)!==Lr&&0<=ir&&0<=Ur&&0.05<Ur-ir&&e0(l,ir,Ur,"Unmount"),bv(b)}vM(r)}for(r=r.child;r!==null;)hM(r),r=r.sibling}function hM(r){var g=hv(),o=H0(),l=q0(),b=A0();switch(r.tag){case 0:case 11:case 15:h8(r,r.return,no),N2(r);break;case 22:var w=r.stateNode;w._visibility&rl&&(w._visibility&=~rl,N2(r));break;default:N2(r)}(r.mode&kr)!==Lr&&0<=ir&&0<=Ur&&(xg||0.05<mg)&&u0(r,ir,Ur,mg,Fg),bv(g),P0(o),xg=b,Fg=l}function bM(r,g){for(;eo!==null;){var o=eo,l=o,b=g,w=hv(),O=H0(),P=q0(),W=A0();switch(l.tag){case 0:case 11:case 15:h8(l,b,no);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(b=l.memoizedState.cachePool.pool,b!=null&&_1(b));break;case 24:Ob(l.memoizedState.cache)}if((l.mode&kr)!==Lr&&0<=ir&&0<=Ur&&(xg||0.05<mg)&&u0(l,ir,Ur,mg,Fg),bv(w),P0(O),xg=W,Fg=P,l=o.child,l!==null)l.return=o,eo=l;else r:for(o=r;eo!==null;){if(l=eo,w=l.sibling,O=l.return,yA(l),l===o){eo=null;break r}if(w!==null){w.return=O,eo=w;break r}eo=O}}}function iQ(){cK.forEach(function(r){return r()})}function wM(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||T.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function ev(r){if((og&lo)!==uo&&Vr!==0)return Vr&-Vr;var g=T.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),G8()):N()}function eM(){if(po===0)if((Vr&536870912)===0||pr){var r=p2;p2<<=1,(p2&3932160)===0&&(p2=262144),po=r}else po=536870912;return r=Av.current,r!==null&&(r.flags|=32),po}function Zg(r,g,o){if(N5&&console.error("useInsertionEffect must not schedule updates."),sO&&(Cu=!0),r===Gg&&(Hg===Oh||Hg===Hh)||r.cancelPendingCommit!==null)fh(r,0),Sl(r,Vr,po,!1);if(Ul(r,o),(og&lo)!==uo&&r===Gg){if($0)switch(g.tag){case 0:case 11:case 15:r=Er&&n(Er)||"Unknown",x7.has(r)||(x7.add(r),g=n(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:Z7||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),Z7=!0)}}else U0&&s5(r,g,o),CQ(g),r===Gg&&((og&lo)===uo&&(b1|=o),Ng===v1&&Sl(r,Vr,po,!1)),J0(r)}function uM(r,g,o){if((og&(lo|Wv))!==uo)throw Error("Should not already be working.");if(Vr!==0&&Er!==null){var l=Er,b=bo();switch(U9){case Rw:case Oh:var w=rw;$g&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",w,b,iv,void 0,"primary-light")):console.timeStamp("Suspended",w,b,iv,void 0,"primary-light"));break;case Hh:w=rw,$g&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",w,b,iv,void 0,"primary-light")):console.timeStamp("Action",w,b,iv,void 0,"primary-light"));break;default:$g&&(l=b-rw,3>l||console.timeStamp("Blocked",rw,b,iv,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}w=(o=!o&&(g&127)===0&&(g&r.expiredLanes)===0||m1(r,g))?LQ(r,g):P8(r,g,!0);var O=o;do{if(w===Hl){I5&&!o&&Sl(r,g,0,!1),g=Hg,rw=fg(),U9=g;break}else{if(l=bo(),b=r.current.alternate,O&&!UQ(b)){vv(g),b=wo,w=l,!$g||w<=b||(Sg?Sg.run(console.timeStamp.bind(console,"Teared Render",b,w,fr,jr,"error")):console.timeStamp("Teared Render",b,w,fr,jr,"error")),a1(g,l),w=P8(r,g,!1),O=!1;continue}if(w===uh){if(O=g,r.errorRecoveryDisabledLanes&O)var P=0;else P=r.pendingLanes&-536870913,P=P!==0?P:P&536870912?536870912:0;if(P!==0){vv(g),j4(wo,l,g,Sg),a1(g,l),g=P;r:{l=r,w=O,O=Xw;var W=l.current.memoizedState.isDehydrated;if(W&&(fh(l,P).flags|=256),P=P8(l,P,!1),P!==uh){if(EO&&!W){l.errorRecoveryDisabledLanes|=w,b1|=w,w=v1;break r}l=So,So=O,l!==null&&(So===null?So=l:So.push.apply(So,l))}w=P}if(O=!1,w!==uh)continue;else l=bo()}}if(w===Ww){vv(g),j4(wo,l,g,Sg),a1(g,l),fh(r,0),Sl(r,g,0,!0);break}r:{switch(o=r,w){case Hl:case Ww:throw Error("Root did not complete. This is a bug in React.");case v1:if((g&4194048)!==g)break;case Lu:vv(g),uq(wo,l,g,Sg),a1(g,l),b=g,(b&127)!==0?qu=l:(b&4194048)!==0&&(Au=l),Sl(o,g,po,!l1);break r;case uh:So=null;break;case Uu:case J7:break;default:throw Error("Unknown root exit status.")}if(T.actQueue!==null)q8(o,b,g,So,Yw,mu,po,b1,Ph,w,null,null,wo,l);else{if((g&62914560)===g&&(O=Nu+K7-bo(),10<O)){if(Sl(o,g,po,!l1),I1(o,0,!0)!==0)break r;fv=g,o.timeoutHandle=V7(OM.bind(null,o,b,So,Yw,mu,g,po,b1,Ph,l1,w,"Throttled",wo,l),O);break r}OM(o,b,So,Yw,mu,g,po,b1,Ph,l1,w,null,wo,l)}}}break}while(1);J0(r)}function OM(r,g,o,l,b,w,O,P,W,G,F,I,$,B){r.timeoutHandle=Rh;var br=g.subtreeFlags,Ar=null;if(br&8192||(br&16785408)===16785408){if(Ar={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_0},oM(g,w,Ar),br=(w&62914560)===w?Nu-bo():(w&4194048)===w?z7-bo():0,br=Az(Ar,br),br!==null){fv=w,r.cancelPendingCommit=br(q8.bind(null,r,g,w,o,l,b,O,P,W,F,Ar,Ar.waitingForViewTransition?"Waiting for the previous Animation":0<Ar.count?0<Ar.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Ar.imgCount===1?"Suspended on an Image":0<Ar.imgCount?"Suspended on Images":null,$,B)),Sl(r,w,O,!G);return}}q8(r,g,w,o,l,b,O,P,W,F,Ar,I,$,B)}function UQ(r){for(var g=r;;){var o=g.tag;if((o===0||o===11||o===15)&&g.flags&16384&&(o=g.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var b=o[l],w=b.getSnapshot;b=b.value;try{if(!xo(w(),b))return!1}catch(O){return!1}}if(o=g.child,g.subtreeFlags&16384&&o!==null)o.return=g,g=o;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function Sl(r,g,o,l){g&=~yO,g&=~b1,r.suspendedLanes|=g,r.pingedLanes&=~g,l&&(r.warmLanes|=g),l=r.expirationTimes;for(var b=g;0<b;){var w=31-No(b),O=1<<w;l[w]=-1,b&=~O}o!==0&&N1(r,o,g)}function jh(){return(og&(lo|Wv))===uo?(Lb(0,!1),!1):!0}function H8(){if(Er!==null){if(Hg===ao)var r=Er.return;else r=Er,r2(),Q6(r),J5=null,uw=0,r=Er;for(;r!==null;)xA(r.alternate,r),r=r.return;Er=null}}function a1(r,g){(r&127)!==0&&(dl=g),(r&4194048)!==0&&(N0=g),(r&62914560)!==0&&($9=g),(r&2080374784)!==0&&(i9=g)}function fh(r,g){$g&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jr,"primary-light"));var o=wo;if(wo=fg(),Vr!==0&&0<o){if(vv(Vr),Ng===Uu||Ng===v1)uq(o,wo,g,Sg);else{var l=wo,b=Sg;if($g&&!(l<=o)){var w=(g&738197653)===g?"tertiary-dark":"primary-dark",O=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";b?b.run(console.timeStamp.bind(console,O,o,l,fr,jr,w)):console.timeStamp(O,o,l,fr,jr,w)}}a1(Vr,wo)}if(o=Sg,Sg=null,(g&127)!==0){Sg=pb,b=0<=m0&&m0<dl?dl:m0,l=0<=gh&&gh<dl?dl:gh,w=0<=l?l:0<=b?b:wo,0<=qu?(vv(2),Oq(qu,w,g,o)):(Mu&127)!==0&&(vv(2),eb(dl,w,bl)),o=b;var P=l,W=db,G=0<G5,F=sl===ab,I=sl===Pu;if(b=wo,l=pb,w=KO,O=$O,$g){if(fr="Blocking",0<o?o>b&&(o=b):o=b,0<P?P>o&&(P=o):P=o,W!==null&&o>P){var $=G?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,G?"Consecutive":"Event: "+W,P,o,fr,jr,$)):console.timeStamp(G?"Consecutive":"Event: "+W,P,o,fr,jr,$)}b>o&&(P=F?"error":(g&738197653)===g?"tertiary-light":"primary-light",F=I?"Promise Resolved":F?"Cascading Update":5<b-o?"Update Blocked":"Update",I=[],O!=null&&I.push(["Component name",O]),w!=null&&I.push(["Method name",w]),o={start:o,end:b,detail:{devtools:{properties:I,track:fr,trackGroup:jr,color:P}}},l?l.run(performance.measure.bind(performance,F,o)):performance.measure(F,o))}m0=-1.1,sl=0,$O=KO=null,qu=-1.1,G5=gh,gh=-1.1,dl=fg()}if((g&4194048)!==0&&(Sg=sb,b=0<=hl&&hl<N0?N0:hl,o=0<=Nv&&Nv<N0?N0:Nv,l=0<=r1&&r1<N0?N0:r1,w=0<=l?l:0<=o?o:wo,0<=Au?(vv(256),Oq(Au,w,g,Sg)):(Mu&4194048)!==0&&(vv(256),eb(N0,w,bl)),I=l,P=oh,W=0<g1,G=iO===Pu,w=wo,l=sb,O=z9,F=K9,$g&&(fr="Transition",0<o?o>w&&(o=w):o=w,0<b?b>o&&(b=o):b=o,0<I?I>b&&(I=b):I=b,b>I&&P!==null&&($=W?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,W?"Consecutive":"Event: "+P,I,b,fr,jr,$)):console.timeStamp(W?"Consecutive":"Event: "+P,I,b,fr,jr,$)),o>b&&(l?l.run(console.timeStamp.bind(console,"Action",b,o,fr,jr,"primary-dark")):console.timeStamp("Action",b,o,fr,jr,"primary-dark")),w>o&&(b=G?"Promise Resolved":5<w-o?"Update Blocked":"Update",I=[],F!=null&&I.push(["Component name",F]),O!=null&&I.push(["Method name",O]),o={start:o,end:w,detail:{devtools:{properties:I,track:fr,trackGroup:jr,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,b,o)):performance.measure(b,o))),Nv=hl=-1.1,iO=0,Au=-1.1,g1=r1,r1=-1.1,N0=fg()),(g&62914560)!==0&&(Mu&62914560)!==0&&(vv(4194304),eb($9,wo,bl)),(g&2080374784)!==0&&(Mu&2080374784)!==0&&(vv(268435456),eb(i9,wo,bl)),o=r.timeoutHandle,o!==Rh&&(r.timeoutHandle=Rh,b$(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),fv=0,H8(),Gg=r,Er=o=E0(r.current,null),Vr=g,Hg=ao,Rv=null,l1=!1,I5=m1(r,g),EO=!1,Ng=Hl,Ph=po=yO=b1=h1=0,So=Xw=null,mu=!1,(g&8)!==0&&(g|=g&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=g;0<l;)b=31-No(l),w=1<<b,g|=r[b],l&=~w;return Z0=g,fe(),r=R9(),1000<r-W9&&(T.recentlyCreatedOwnerStacks=0,W9=r),yv.discardPendingWarnings(),o}function HM(r,g){Fr=null,T.H=qw,T.getCurrentStack=null,$0=!1,Hv=null,g===Y5||g===Xu?(g=Nq(),Hg=Rw):g===IO?(g=Nq(),Hg=Q7):Hg=g===tO?_O:g!==null&&typeof g==="object"&&typeof g.then==="function"?Gw:Fu,Rv=g;var o=Er;o===null?(Ng=Ww,$2(r,lv(g,r.current))):o.mode&kr&&u6(o)}function PM(){var r=Av.current;return r===null?!0:(Vr&4194048)===Vr?Bv===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Bv:!1}function qM(){var r=T.H;return T.H=qw,r===null?qw:r}function AM(){var r=T.A;return T.A=yK,r}function B2(r){Sg===null&&(Sg=r._debugTask==null?null:r._debugTask)}function Z2(){Ng=v1,l1||(Vr&4194048)!==Vr&&Av.current!==null||(I5=!0),(h1&134217727)===0&&(b1&134217727)===0||Gg===null||Sl(Gg,Vr,po,!1)}function P8(r,g,o){var l=og;og|=lo;var b=qM(),w=AM();if(Gg!==r||Vr!==g){if(U0){var O=r.memoizedUpdaters;0<O.size&&(Ub(r,Vr),O.clear()),Ll(r,g)}Yw=null,fh(r,g)}g=!1,O=Ng;r:do try{if(Hg!==ao&&Er!==null){var P=Er,W=Rv;switch(Hg){case _O:H8(),O=Lu;break r;case Rw:case Oh:case Hh:case Gw:Av.current===null&&(g=!0);var G=Hg;if(Hg=ao,Rv=null,ah(r,P,W,G),o&&I5){O=Hl;break r}break;default:G=Hg,Hg=ao,Rv=null,ah(r,P,W,G)}}MM(),O=Ng;break}catch(F){HM(r,F)}while(1);return g&&r.shellSuspendCounter++,r2(),og=l,T.H=b,T.A=w,Er===null&&(Gg=null,Vr=0,fe()),O}function MM(){for(;Er!==null;)WM(Er)}function LQ(r,g){var o=og;og|=lo;var l=qM(),b=AM();if(Gg!==r||Vr!==g){if(U0){var w=r.memoizedUpdaters;0<w.size&&(Ub(r,Vr),w.clear()),Ll(r,g)}Yw=null,Bu=bo()+$7,fh(r,g)}else I5=m1(r,g);r:do try{if(Hg!==ao&&Er!==null)g:switch(g=Er,w=Rv,Hg){case Fu:Hg=ao,Rv=null,ah(r,g,w,Fu);break;case Oh:case Hh:if(Iq(w)){Hg=ao,Rv=null,RM(g);break}g=function(){Hg!==Oh&&Hg!==Hh||Gg!==r||(Hg=Iu),J0(r)},w.then(g,g);break r;case Rw:Hg=Iu;break r;case Q7:Hg=VO;break r;case Iu:Iq(w)?(Hg=ao,Rv=null,RM(g)):(Hg=ao,Rv=null,ah(r,g,w,Iu));break;case VO:var O=null;switch(Er.tag){case 26:O=Er.memoizedState;case 5:case 27:var P=Er;if(O?uW(O):P.stateNode.complete){Hg=ao,Rv=null;var W=P.sibling;if(W!==null)Er=W;else{var G=P.return;G!==null?(Er=G,x2(G)):Er=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}Hg=ao,Rv=null,ah(r,g,w,VO);break;case Gw:Hg=ao,Rv=null,ah(r,g,w,Gw);break;case _O:H8(),Ng=Lu;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}T.actQueue!==null?MM():FQ();break}catch(F){HM(r,F)}while(1);if(r2(),T.H=l,T.A=b,og=o,Er!==null)return Hl;return Gg=null,Vr=0,fe(),Ng}function FQ(){for(;Er!==null&&!Uz();)WM(Er)}function WM(r){var g=r.alternate;(r.mode&kr)!==Lr?(e6(r),g=er(r,o8,g,r,Z0),u6(r)):g=er(r,o8,g,r,Z0),r.memoizedProps=r.pendingProps,g===null?x2(r):Er=g}function RM(r){var g=er(r,IQ,r);r.memoizedProps=r.pendingProps,g===null?x2(r):Er=g}function IQ(r){var g=r.alternate,o=(r.mode&kr)!==Lr;switch(o&&e6(r),r.tag){case 15:case 0:g=LA(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=LA(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Q6(r);default:xA(g,r),r=Er=Wq(r,Z0),g=o8(g,r,Z0)}return o&&u6(r),g}function ah(r,g,o,l){r2(),Q6(g),J5=null,uw=0;var b=g.return;try{if(AQ(r,b,g,o,Vr)){Ng=Ww,$2(r,lv(o,r.current)),Er=null;return}}catch(w){if(b!==null)throw Er=b,w;Ng=Ww,$2(r,lv(o,r.current)),Er=null;return}if(g.flags&32768){if(pr||l===Fu)r=!0;else if(I5||(Vr&536870912)!==0)r=!1;else if(l1=r=!0,l===Oh||l===Hh||l===Rw||l===Gw)l=Av.current,l!==null&&l.tag===13&&(l.flags|=16384);GM(g,r)}else x2(g)}function x2(r){var g=r;do{if((g.flags&32768)!==0){GM(g,l1);return}var o=g.alternate;if(r=g.return,e6(g),o=er(g,RQ,o,g,Z0),(g.mode&kr)!==Lr&&$q(g),o!==null){Er=o;return}if(g=g.sibling,g!==null){Er=g;return}Er=g=r}while(g!==null);Ng===Hl&&(Ng=J7)}function GM(r,g){do{var o=GQ(r.alternate,r);if(o!==null){o.flags&=32767,Er=o;return}if((r.mode&kr)!==Lr){$q(r),o=r.actualDuration;for(var l=r.child;l!==null;)o+=l.actualDuration,l=l.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!g&&(r=r.sibling,r!==null)){Er=r;return}Er=r=o}while(r!==null);Ng=Lu,Er=null}function q8(r,g,o,l,b,w,O,P,W,G,F,I,$,B){r.cancelPendingCommit=null;do ib();while(ro!==e1);if(yv.flushLegacyContextWarning(),yv.flushPendingUnsafeLifecycleWarnings(),(og&(lo|Wv))!==uo)throw Error("Should not already be working.");if(vv(o),G===uh?j4($,B,o,Sg):l!==null?gQ($,B,o,l,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,Sg):rQ($,B,o,Sg),g!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(w=g.lanes|g.childLanes,w|=XO,ne(r,o,w,O,P,W),r===Gg&&(Er=Gg=null,Vr=0),m5=g,u1=r,fv=o,fO=w,pO=b,m7=l,aO=B,N7=I,av=Zu,B7=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,xQ(o5,function(){return iw=window.event,av===Zu&&(av=jO),zM(),null})):(r.callbackNode=null,r.callbackPriority=0),ll=null,pl=fg(),I!==null&&oQ(B,pl,I,Sg),l=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,b=eg.p,eg.p=Pv,O=og,og|=Wv;try{KQ(r,g,o)}finally{og=O,eg.p=b,T.T=l}}ro=U7,XM(),YM(),JM()}}function XM(){if(ro===U7){ro=e1;var r=u1,g=m5,o=fv,l=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var b=eg.p;eg.p=Pv;var w=og;og|=Wv;try{L5=o,F5=r,l2(),aA(g,r),F5=L5=null,o=eH;var O=bq(r.containerInfo),P=o.focusedElem,W=o.selectionRange;if(O!==P&&P&&P.ownerDocument&&hq(P.ownerDocument.documentElement,P)){if(W!==null&&E4(P)){var{start:G,end:F}=W;if(F===void 0&&(F=G),"selectionStart"in P)P.selectionStart=G,P.selectionEnd=Math.min(F,P.value.length);else{var I=P.ownerDocument||document,$=I&&I.defaultView||window;if($.getSelection){var B=$.getSelection(),br=P.textContent.length,Ar=Math.min(W.start,br),Qg=W.end===void 0?Ar:Math.min(W.end,br);!B.extend&&Ar>Qg&&(O=Qg,Qg=Ar,Ar=O);var sr=lq(P,Ar),K=lq(P,Qg);if(sr&&K&&(B.rangeCount!==1||B.anchorNode!==sr.node||B.anchorOffset!==sr.offset||B.focusNode!==K.node||B.focusOffset!==K.offset)){var i=I.createRange();i.setStart(sr.node,sr.offset),B.removeAllRanges(),Ar>Qg?(B.addRange(i),B.extend(K.node,K.offset)):(i.setEnd(K.node,K.offset),B.addRange(i))}}}}I=[];for(B=P;B=B.parentNode;)B.nodeType===1&&I.push({element:B,left:B.scrollLeft,top:B.scrollTop});typeof P.focus==="function"&&P.focus();for(P=0;P<I.length;P++){var L=I[P];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}au=!!wH,eH=wH=null}finally{og=w,eg.p=b,T.T=l}}r.current=g,ro=L7}}function YM(){if(ro===L7){ro=e1;var r=B7;if(r!==null){pl=fg();var g=vl,o=pl;!$g||o<=g||(bl?bl.run(console.timeStamp.bind(console,r,g,o,fr,jr,"secondary-light")):console.timeStamp(r,g,o,fr,jr,"secondary-light"))}r=u1,g=m5,o=fv;var l=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var b=eg.p;eg.p=Pv;var w=og;og|=Wv;try{L5=o,F5=r,l2(),EA(r,g.alternate,g),F5=L5=null}finally{og=w,eg.p=b,T.T=l}}r=aO,g=N7,vl=fg(),r=g===null?r:pl,g=vl,o=av===cO,l=Sg,ll!==null?Hq(r,g,ll,!1,l):!$g||g<=r||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")),ro=F7}}function JM(){if(ro===I7||ro===F7){if(ro===I7){var r=vl;vl=fg();var g=vl,o=av===cO;!$g||g<=r||(bl?bl.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?" error":"secondary-light")),av!==cO&&(av=i7)}ro=e1,Lz(),r=u1;var l=m5;g=fv,o=m7;var b=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;b?ro=xu:(ro=e1,m5=u1=null,QM(r,r.pendingLanes),qh=0,Qw=null);var w=r.pendingLanes;if(w===0&&(w1=null),b||UM(r),w=X(g),l=l.stateNode,io&&typeof io.onCommitFiberRoot==="function")try{var O=(l.current.flags&128)===128;switch(w){case Pv:var P=p8;break;case _v:P=d8;break;case L0:P=o5;break;case s2:P=s8;break;default:P=o5}io.onCommitFiberRoot(v5,l,P,O)}catch(I){i0||(i0=!0,console.error("React instrumentation encountered an error: %o",I))}if(U0&&r.memoizedUpdaters.clear(),iQ(),o!==null){O=T.T,P=eg.p,eg.p=Pv,T.T=null;try{var W=r.onRecoverableError;for(l=0;l<o.length;l++){var G=o[l],F=mQ(G.stack);er(G.source,W,G.value,F)}}finally{T.T=O,eg.p=P}}(fv&3)!==0&&ib(),J0(r),w=r.pendingLanes,(g&261930)!==0&&(w&42)!==0?(Ru=!0,r===dO?Jw++:(Jw=0,dO=r)):Jw=0,b||a1(g,vl),Lb(0,!1)}}function mQ(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function QM(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,Ob(g)))}function ib(){return XM(),YM(),JM(),zM()}function zM(){if(ro!==xu)return!1;var r=u1,g=fO;fO=0;var o=X(fv),l=L0===0||L0>o?L0:o;o=T.T;var b=eg.p;try{eg.p=l,T.T=null;var w=pO;pO=null,l=u1;var O=fv;if(ro=e1,m5=u1=null,fv=0,(og&(lo|Wv))!==uo)throw Error("Cannot flush passive effects while already rendering.");vv(O),sO=!0,Cu=!1;var P=0;if(ll=null,P=bo(),av===i7)eb(vl,P,bl);else{var W=vl,G=P,F=av===jO;!$g||G<=W||(Sg?Sg.run(console.timeStamp.bind(console,F?"Waiting for Paint":"Waiting",W,G,fr,jr,"secondary-light")):console.timeStamp(F?"Waiting for Paint":"Waiting",W,G,fr,jr,"secondary-light"))}W=og,og|=Wv;var I=l.current;l2(),lM(I);var $=l.current;I=aO,l2(),rM(l,$,O,w,I),UM(l),og=W;var B=bo();if($=P,I=Sg,ll!==null?Hq($,B,ll,!0,I):!$g||B<=$||(I?I.run(console.timeStamp.bind(console,"Remaining Effects",$,B,fr,jr,"secondary-dark")):console.timeStamp("Remaining Effects",$,B,fr,jr,"secondary-dark")),a1(O,B),Lb(0,!1),Cu?l===Qw?qh++:(qh=0,Qw=l):qh=0,Cu=sO=!1,io&&typeof io.onPostCommitFiberRoot==="function")try{io.onPostCommitFiberRoot(v5,l)}catch(Ar){i0||(i0=!0,console.error("React instrumentation encountered an error: %o",Ar))}var br=l.current.stateNode;return br.effectDuration=0,br.passiveEffectDuration=0,!0}finally{eg.p=b,T.T=o,QM(r,g)}}function KM(r,g,o){g=lv(o,g),iq(g),g=E6(r.stateNode,g,2),r=xl(r,g,2),r!==null&&(Ul(r,2),J0(r))}function wg(r,g,o){if(N5=!1,r.tag===3)KM(r,r,o);else{for(;g!==null;){if(g.tag===3){KM(g,r,o);return}if(g.tag===1){var l=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(w1===null||!w1.has(l))){r=lv(o,r),iq(r),o=y6(2),l=xl(g,o,2),l!==null&&(c6(o,l,g,r),Ul(l,2),J0(l));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function A8(r,g,o){var l=r.pingCache;if(l===null){l=r.pingCache=new jK;var b=new Set;l.set(g,b)}else b=l.get(g),b===void 0&&(b=new Set,l.set(g,b));b.has(o)||(EO=!0,b.add(o),l=NQ.bind(null,r,g,o),U0&&Ub(r,o),g.then(l,l))}function NQ(r,g,o){var l=r.pingCache;l!==null&&l.delete(g),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>m0&&(dl=m0=fg(),pb=Hu("Promise Resolved"),sl=Pu):(o&4194048)!==0&&0>Nv&&(N0=Nv=fg(),sb=Hu("Promise Resolved"),iO=Pu),wM()&&T.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Gg===r&&(Vr&o)===o&&(Ng===v1||Ng===Uu&&(Vr&62914560)===Vr&&bo()-Nu<K7?(og&lo)===uo&&fh(r,0):yO|=o,Ph===Vr&&(Ph=0)),J0(r)}function $M(r,g){g===0&&(g=Zh()),r=$o(r,g),r!==null&&(Ul(r,g),J0(r))}function BQ(r){var g=r.memoizedState,o=0;g!==null&&(o=g.retryLane),$M(r,o)}function ZQ(r,g){var o=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:b}=r;b!==null&&(o=b.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(g),$M(r,o)}function M8(r,g,o){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var l=r,b=g,w=b.type===c2;w=o||w,b.tag!==22?b.flags&67108864?w&&er(b,iM,l,b):M8(l,b,w):b.memoizedState===null&&(w&&b.flags&8192?er(b,iM,l,b):b.subtreeFlags&67108864&&er(b,M8,l,b,w)),g=g.sibling}}function iM(r,g){Yg(!0);try{dA(g),hM(g),sA(r,g.alternate,g,!1),gM(r,g,0,null,!1,0)}finally{Yg(!1)}}function UM(r){var g=!0;r.current.mode&(Uo|Ev)||(g=!1),M8(r,r.current,g)}function LM(r){if((og&lo)===uo){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=n(r)||"ReactComponent",Tu!==null){if(Tu.has(g))return;Tu.add(g)}else Tu=new Set([g]);er(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Ub(r,g){U0&&r.memoizedUpdaters.forEach(function(o){s5(r,o,g)})}function xQ(r,g){var o=T.actQueue;return o!==null?(o.push(g),pK):a8(r,g)}function CQ(r){wM()&&T.actQueue===null&&er(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,n(r))})}function J0(r){r!==B5&&r.next===null&&(B5===null?nu=B5=r:B5=B5.next=r),Su=!0,T.actQueue!==null?gH||(gH=!0,NM()):rH||(rH=!0,NM())}function Lb(r,g){if(!oH&&Su){oH=!0;do{var o=!1;for(var l=nu;l!==null;){if(!g)if(r!==0){var b=l.pendingLanes;if(b===0)var w=0;else{var{suspendedLanes:O,pingedLanes:P}=l;w=(1<<31-No(42|r)+1)-1,w&=b&~(O&~P),w=w&201326741?w&201326741|1:w?w|2:0}w!==0&&(o=!0,mM(l,w))}else w=Vr,w=I1(l,l===Gg?w:0,l.cancelPendingCommit!==null||l.timeoutHandle!==Rh),(w&3)===0||m1(l,w)||(o=!0,mM(l,w));l=l.next}}while(o);oH=!1}}function TQ(){iw=window.event,W8()}function W8(){Su=gH=rH=!1;var r=0;O1!==0&&_Q()&&(r=O1);for(var g=bo(),o=null,l=nu;l!==null;){var b=l.next,w=FM(l,g);if(w===0)l.next=null,o===null?nu=b:o.next=b,b===null&&(B5=o);else if(o=l,r!==0||(w&3)!==0)Su=!0;l=b}ro!==e1&&ro!==xu||Lb(r,!1),O1!==0&&(O1=0)}function FM(r,g){for(var{suspendedLanes:o,pingedLanes:l,expirationTimes:b}=r,w=r.pendingLanes&-62914561;0<w;){var O=31-No(w),P=1<<O,W=b[O];if(W===-1){if((P&o)===0||(P&l)!==0)b[O]=Z4(P,g)}else W<=g&&(r.expiredLanes|=P);w&=~P}if(g=Gg,o=Vr,o=I1(r,r===g?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Rh),l=r.callbackNode,o===0||r===g&&(Hg===Oh||Hg===Hh)||r.cancelPendingCommit!==null)return l!==null&&R8(l),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||m1(r,o)){if(g=o&-o,g!==r.callbackPriority||T.actQueue!==null&&l!==vH)R8(l);else return g;switch(X(o)){case Pv:case _v:o=d8;break;case L0:o=o5;break;case s2:o=s8;break;default:o=o5}return l=IM.bind(null,r),T.actQueue!==null?(T.actQueue.push(l),o=vH):o=a8(o,l),r.callbackPriority=g,r.callbackNode=o,g}return l!==null&&R8(l),r.callbackPriority=2,r.callbackNode=null,2}function IM(r,g){if(Ru=Wu=!1,iw=window.event,ro!==e1&&ro!==xu)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(av===Zu&&(av=jO),ib()&&r.callbackNode!==o)return null;var l=Vr;if(l=I1(r,r===Gg?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Rh),l===0)return null;return uM(r,l,g),FM(r,bo()),r.callbackNode!=null&&r.callbackNode===o?IM.bind(null,r):null}function mM(r,g){if(ib())return null;Wu=Ru,Ru=!1,uM(r,g,!0)}function R8(r){r!==vH&&r!==null&&iz(r)}function NM(){T.actQueue!==null&&T.actQueue.push(function(){return W8(),null}),w$(function(){(og&(lo|Wv))!==uo?a8(p8,TQ):W8()})}function G8(){if(O1===0){var r=vh;r===0&&(r=a2,a2<<=1,(a2&261888)===0&&(a2=256)),O1=r}return O1}function BM(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return qg(r,"action"),hb(""+r)}function ZM(r,g){var o=g.ownerDocument.createElement("input");return o.name=g.name,o.value=g.value,r.id&&o.setAttribute("form",r.id),g.parentNode.insertBefore(o,g),r=new FormData(r),o.parentNode.removeChild(o),r}function nQ(r,g,o,l,b){if(g==="submit"&&o&&o.stateNode===b){var w=BM((b[Bo]||null).action),O=l.submitter;O&&(g=(g=O[Bo]||null)?BM(g.formAction):O.getAttribute("formAction"),g!==null&&(w=g,O=null));var P=new lu("action","action",null,l,b);r.push({event:P,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(O1!==0){var W=O?ZM(b,O):new FormData(b),G={pending:!0,data:W,method:b.method,action:w};Object.freeze(G),n6(o,G,null,W)}}else typeof w==="function"&&(P.preventDefault(),W=O?ZM(b,O):new FormData(b),G={pending:!0,data:W,method:b.method,action:w},Object.freeze(G),n6(o,G,w,W))},currentTarget:b}]})}}function C2(r,g,o){r.currentTarget=o;try{g(r)}catch(l){MO(l)}r.currentTarget=null}function xM(r,g){g=(g&4)!==0;for(var o=0;o<r.length;o++){var l=r[o];r:{var b=void 0,w=l.event;if(l=l.listeners,g)for(var O=l.length-1;0<=O;O--){var P=l[O],W=P.instance,G=P.currentTarget;if(P=P.listener,W!==b&&w.isPropagationStopped())break r;W!==null?er(W,C2,w,P,G):C2(w,P,G),b=W}else for(O=0;O<l.length;O++){if(P=l[O],W=P.instance,G=P.currentTarget,P=P.listener,W!==b&&w.isPropagationStopped())break r;W!==null?er(W,C2,w,P,G):C2(w,P,G),b=W}}}}function dr(r,g){lH.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=g[rO];o===void 0&&(o=g[rO]=new Set);var l=r+"__bubble";o.has(l)||(CM(g,r,2,!1),o.add(l))}function X8(r,g,o){lH.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;g&&(l|=4),CM(o,r,l,g)}function Y8(r){if(!r[tu]){r[tu]=!0,NW.forEach(function(o){o!=="selectionchange"&&(lH.has(o)||X8(o,!1,r),X8(o,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[tu]||(g[tu]=!0,X8("selectionchange",!1,g))}}function CM(r,g,o,l){switch(MW(g)){case Pv:var b=Gz;break;case _v:b=Xz;break;default:b=C8}o=b.bind(null,g,o,r),b=void 0,!hO||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(b=!0),l?b!==void 0?r.addEventListener(g,o,{capture:!0,passive:b}):r.addEventListener(g,o,!0):b!==void 0?r.addEventListener(g,o,{passive:b}):r.addEventListener(g,o,!1)}function J8(r,g,o,l,b){var w=l;if((g&1)===0&&(g&2)===0&&l!==null)r:for(;;){if(l===null)return;var O=l.tag;if(O===3||O===4){var P=l.stateNode.containerInfo;if(P===b)break;if(O===4)for(O=l.return;O!==null;){var W=O.tag;if((W===3||W===4)&&O.stateNode.containerInfo===b)return;O=O.return}for(;P!==null;){if(O=Xr(P),O===null)return;if(W=O.tag,W===5||W===6||W===26||W===27){l=w=O;continue r}P=P.parentNode}}l=l.return}cP(function(){var G=w,F=V4(o),I=[];r:{var $=M9.get(r);if($!==void 0){var B=lu,br=r;switch(r){case"keypress":if(_e(o)===0)break r;case"keydown":case"keyup":B=qK;break;case"focusin":br="focus",B=uO;break;case"focusout":br="blur",B=uO;break;case"beforeblur":case"afterblur":B=uO;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=g9;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=gK;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=WK;break;case H9:case P9:case q9:B=lK;break;case A9:B=GK;break;case"scroll":case"scrollend":B=sz;break;case"wheel":B=YK;break;case"copy":case"cut":case"paste":B=bK;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=v9;break;case"toggle":case"beforetoggle":B=QK}var Ar=(g&4)!==0,Qg=!Ar&&(r==="scroll"||r==="scrollend"),sr=Ar?$!==null?$+"Capture":null:$;Ar=[];for(var K=G,i;K!==null;){var L=K;if(i=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||i===null||sr===null||(L=bb(K,sr),L!=null&&Ar.push(Fb(K,L,i))),Qg)break;K=K.return}0<Ar.length&&($=new B($,br,null,o,F),I.push({event:$,listeners:Ar}))}}if((g&7)===0){r:{if($=r==="mouseover"||r==="pointerover",B=r==="mouseout"||r==="pointerout",$&&o!==tb&&(br=o.relatedTarget||o.fromElement)&&(Xr(br)||br[El]))break r;if(B||$){if($=F.window===F?F:($=F.ownerDocument)?$.defaultView||$.parentWindow:window,B){if(br=o.relatedTarget||o.toElement,B=G,br=br?Xr(br):null,br!==null&&(Qg=rr(br),Ar=br.tag,br!==Qg||Ar!==5&&Ar!==27&&Ar!==6))br=null}else B=null,br=G;if(B!==br){if(Ar=g9,L="onMouseLeave",sr="onMouseEnter",K="mouse",r==="pointerout"||r==="pointerover")Ar=v9,L="onPointerLeave",sr="onPointerEnter",K="pointer";if(Qg=B==null?$:Zr(B),i=br==null?$:Zr(br),$=new Ar(L,K+"leave",B,o,F),$.target=Qg,$.relatedTarget=i,L=null,Xr(F)===G&&(Ar=new Ar(sr,K+"enter",br,o,F),Ar.target=i,Ar.relatedTarget=Qg,L=Ar),Qg=L,B&&br)g:{Ar=SQ,sr=B,K=br,i=0;for(L=sr;L;L=Ar(L))i++;L=0;for(var D=K;D;D=Ar(D))L++;for(;0<i-L;)sr=Ar(sr),i--;for(;0<L-i;)K=Ar(K),L--;for(;i--;){if(sr===K||K!==null&&sr===K.alternate){Ar=sr;break g}sr=Ar(sr),K=Ar(K)}Ar=null}else Ar=null;B!==null&&TM(I,$,B,Ar,!1),br!==null&&Qg!==null&&TM(I,Qg,br,Ar,!0)}}}r:{if($=G?Zr(G):window,B=$.nodeName&&$.nodeName.toLowerCase(),B==="select"||B==="input"&&$.type==="file")var Or=rq;else if(dP($))if(u9)Or=pJ;else{Or=fJ;var Ir=jJ}else B=$.nodeName,!B||B.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?G&&lb(G.elementType)&&(Or=rq):Or=aJ;if(Or&&(Or=Or(r,G))){sP(I,Or,o,F);break r}Ir&&Ir(r,$,G),r==="focusout"&&G&&$.type==="number"&&G.memoizedProps.value!=null&&T4($,"number",$.value)}switch(Ir=G?Zr(G):window,r){case"focusin":if(dP(Ir)||Ir.contentEditable==="true")O5=Ir,HO=G,cb=null;break;case"focusout":cb=HO=O5=null;break;case"mousedown":PO=!0;break;case"contextmenu":case"mouseup":case"dragend":PO=!1,wq(I,o,F);break;case"selectionchange":if(iK)break;case"keydown":case"keyup":wq(I,o,F)}var Kr;if(OO)r:{switch(r){case"compositionstart":var Yr="onCompositionStart";break r;case"compositionend":Yr="onCompositionEnd";break r;case"compositionupdate":Yr="onCompositionUpdate";break r}Yr=void 0}else u5?aP(r,o)&&(Yr="onCompositionEnd"):r==="keydown"&&o.keyCode===l9&&(Yr="onCompositionStart");if(Yr&&(h9&&o.locale!=="ko"&&(u5||Yr!=="onCompositionStart"?Yr==="onCompositionEnd"&&u5&&(Kr=jP()):(yl=F,bO=("value"in yl)?yl.value:yl.textContent,u5=!0)),Ir=T2(G,Yr),0<Ir.length&&(Yr=new o9(Yr,r,null,o,F),I.push({event:Yr,listeners:Ir}),Kr?Yr.data=Kr:(Kr=pP(o),Kr!==null&&(Yr.data=Kr)))),Kr=KK?_J(r,o):EJ(r,o))Yr=T2(G,"onBeforeInput"),0<Yr.length&&(Ir=new eK("onBeforeInput","beforeinput",null,o,F),I.push({event:Ir,listeners:Yr}),Ir.data=Kr);nQ(I,r,G,o,F)}xM(I,g)})}function Fb(r,g,o){return{instance:r,listener:g,currentTarget:o}}function T2(r,g){for(var o=g+"Capture",l=[];r!==null;){var b=r,w=b.stateNode;if(b=b.tag,b!==5&&b!==26&&b!==27||w===null||(b=bb(r,o),b!=null&&l.unshift(Fb(r,b,w)),b=bb(r,g),b!=null&&l.push(Fb(r,b,w))),r.tag===3)return l;r=r.return}return[]}function SQ(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function TM(r,g,o,l,b){for(var w=g._reactName,O=[];o!==null&&o!==l;){var P=o,W=P.alternate,G=P.stateNode;if(P=P.tag,W!==null&&W===l)break;P!==5&&P!==26&&P!==27||G===null||(W=G,b?(G=bb(o,w),G!=null&&O.unshift(Fb(o,G,W))):b||(G=bb(o,w),G!=null&&O.push(Fb(o,G,W)))),o=o.return}O.length!==0&&r.push({event:g,listeners:O})}function Q8(r,g){tJ(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||sW||(sW=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:p1,possibleRegistrationNames:gO};lb(r)||typeof g.is==="string"||DJ(r,g,o),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function ho(r,g,o,l){g!==o&&(o=tl(o),tl(g)!==o&&(l[r]=g))}function tQ(r,g,o){g.forEach(function(l){o[tM(l)]=l==="style"?K8(r):r.getAttribute(l)})}function Q0(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function nM(r,g){return r=r.namespaceURI===gu||r.namespaceURI===h5?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function tl(r){return rv(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",zo(r)),cg(r)),(typeof r==="string"?r:""+r).replace(dK,`
`).replace(sK,"")}function SM(r,g){return g=tl(g),tl(r)===g?!0:!1}function Wg(r,g,o,l,b,w){switch(o){case"children":if(typeof l==="string")Ve(l,g,!1),g==="body"||g==="textarea"&&l===""||vb(r,l);else if(typeof l==="number"||typeof l==="bigint")Ve(""+l,g,!1),g!=="body"&&vb(r,""+l);break;case"className":te(r,"class",l);break;case"tabIndex":te(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":te(r,o,l);break;case"style":_P(r,l,w);break;case"data":if(g!=="object"){te(r,"data",l);break}case"src":case"href":if(l===""&&(g!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}qg(l,o),l=hb(""+l),r.setAttribute(o,l);break;case"action":case"formAction":if(l!=null&&(g==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(b.encType==null&&b.method==null||Vu||(Vu=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),b.target==null||Du||(Du=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||b.type==="submit"||b.type==="image"||ku?g!=="button"||b.type==null||b.type==="submit"||ku?typeof l==="function"&&(b.name==null||n7||(n7=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),b.formEncType==null&&b.formMethod==null||Vu||(Vu=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),b.formTarget==null||Du||(Du=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(ku=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(ku=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof w==="function"&&(o==="formAction"?(g!=="input"&&Wg(r,g,"name",b.name,b,null),Wg(r,g,"formEncType",b.formEncType,b,null),Wg(r,g,"formMethod",b.formMethod,b,null),Wg(r,g,"formTarget",b.formTarget,b,null)):(Wg(r,g,"encType",b.encType,b,null),Wg(r,g,"method",b.method,b,null),Wg(r,g,"target",b.target,b,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}qg(l,o),l=hb(""+l),r.setAttribute(o,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Q0(o,l),r.onclick=_0);break;case"onScroll":l!=null&&(typeof l!=="function"&&Q0(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Q0(o,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(b.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}qg(l,o),o=hb(""+l),r.setAttributeNS(Ah,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(qg(l,o),r.setAttribute(o,""+l)):r.removeAttribute(o);break;case"inert":l!==""||_u[o]||(_u[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":l===!0?r.setAttribute(o,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(qg(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(qg(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(o):(qg(l,o),r.setAttribute(o,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),Se(r,"popover",l);break;case"xlinkActuate":V0(r,Ah,"xlink:actuate",l);break;case"xlinkArcrole":V0(r,Ah,"xlink:arcrole",l);break;case"xlinkRole":V0(r,Ah,"xlink:role",l);break;case"xlinkShow":V0(r,Ah,"xlink:show",l);break;case"xlinkTitle":V0(r,Ah,"xlink:title",l);break;case"xlinkType":V0(r,Ah,"xlink:type",l);break;case"xmlBase":V0(r,hH,"xml:base",l);break;case"xmlLang":V0(r,hH,"xml:lang",l);break;case"xmlSpace":V0(r,hH,"xml:space",l);break;case"is":w!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),Se(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":S7||l==null||typeof l!=="object"||(S7=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=EP(o),Se(r,o,l)):p1.hasOwnProperty(o)&&l!=null&&typeof l!=="function"&&Q0(o,l)}}function z8(r,g,o,l,b,w){switch(o){case"style":_P(r,l,w);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(b.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof l==="string"?vb(r,l):(typeof l==="number"||typeof l==="bigint")&&vb(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Q0(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Q0(o,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Q0(o,l),r.onclick=_0);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(p1.hasOwnProperty(o))l!=null&&typeof l!=="function"&&Q0(o,l);else r:{if(o[0]==="o"&&o[1]==="n"&&(b=o.endsWith("Capture"),g=o.slice(2,b?o.length-7:void 0),w=r[Bo]||null,w=w!=null?w[o]:null,typeof w==="function"&&r.removeEventListener(g,w,b),typeof l==="function")){typeof w!=="function"&&w!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(g,l,b);break r}o in r?r[o]=l:l===!0?r.setAttribute(o,""):Se(r,o,l)}}}function Mo(r,g,o){switch(Q8(g,o),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,b=!1,w;for(w in o)if(o.hasOwnProperty(w)){var O=o[w];if(O!=null)switch(w){case"src":l=!0;break;case"srcSet":b=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Wg(r,g,w,O,o,null)}}b&&Wg(r,g,"srcSet",o.srcSet,o,null),l&&Wg(r,g,"src",o.src,o,null);return;case"input":Fl("input",o),dr("invalid",r);var P=w=O=b=null,W=null,G=null;for(l in o)if(o.hasOwnProperty(l)){var F=o[l];if(F!=null)switch(l){case"name":b=F;break;case"type":O=F;break;case"checked":W=F;break;case"defaultChecked":G=F;break;case"value":w=F;break;case"defaultValue":P=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Wg(r,g,l,F,o,null)}}LP(r,o),FP(r,w,P,W,G,O,b,!1);return;case"select":Fl("select",o),dr("invalid",r),l=O=w=null;for(b in o)if(o.hasOwnProperty(b)&&(P=o[b],P!=null))switch(b){case"value":w=P;break;case"defaultValue":O=P;break;case"multiple":l=P;default:Wg(r,g,b,P,o,null)}NP(r,o),g=w,o=O,r.multiple=!!l,g!=null?Ch(r,!!l,g,!1):o!=null&&Ch(r,!!l,o,!0);return;case"textarea":Fl("textarea",o),dr("invalid",r),w=b=l=null;for(O in o)if(o.hasOwnProperty(O)&&(P=o[O],P!=null))switch(O){case"value":l=P;break;case"defaultValue":b=P;break;case"children":w=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Wg(r,g,O,P,o,null)}BP(r,o),xP(r,l,b,w);return;case"option":IP(r,o);for(W in o)if(o.hasOwnProperty(W)&&(l=o[W],l!=null))switch(W){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Wg(r,g,W,l,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<zw.length;l++)dr(zw[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in o)if(o.hasOwnProperty(G)&&(l=o[G],l!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Wg(r,g,G,l,o,null)}return;default:if(lb(g)){for(F in o)o.hasOwnProperty(F)&&(l=o[F],l!==void 0&&z8(r,g,F,l,o,void 0));return}}for(P in o)o.hasOwnProperty(P)&&(l=o[P],l!=null&&Wg(r,g,P,l,o,null))}function kQ(r,g,o,l){switch(Q8(g,l),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var b=null,w=null,O=null,P=null,W=null,G=null,F=null;for(B in o){var I=o[B];if(o.hasOwnProperty(B)&&I!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":W=I;default:l.hasOwnProperty(B)||Wg(r,g,B,null,l,I)}}for(var $ in l){var B=l[$];if(I=o[$],l.hasOwnProperty($)&&(B!=null||I!=null))switch($){case"type":w=B;break;case"name":b=B;break;case"checked":G=B;break;case"defaultChecked":F=B;break;case"value":O=B;break;case"defaultValue":P=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:B!==I&&Wg(r,g,$,B,l,I)}}g=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,g||!l||T7||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),T7=!0),!g||l||C7||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),C7=!0),C4(r,O,P,W,G,F,w,b);return;case"select":B=O=P=$=null;for(w in o)if(W=o[w],o.hasOwnProperty(w)&&W!=null)switch(w){case"value":break;case"multiple":B=W;default:l.hasOwnProperty(w)||Wg(r,g,w,null,l,W)}for(b in l)if(w=l[b],W=o[b],l.hasOwnProperty(b)&&(w!=null||W!=null))switch(b){case"value":$=w;break;case"defaultValue":P=w;break;case"multiple":O=w;default:w!==W&&Wg(r,g,b,w,l,W)}l=P,g=O,o=B,$!=null?Ch(r,!!g,$,!1):!!o!==!!g&&(l!=null?Ch(r,!!g,l,!0):Ch(r,!!g,g?[]:"",!1));return;case"textarea":B=$=null;for(P in o)if(b=o[P],o.hasOwnProperty(P)&&b!=null&&!l.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:Wg(r,g,P,null,l,b)}for(O in l)if(b=l[O],w=o[O],l.hasOwnProperty(O)&&(b!=null||w!=null))switch(O){case"value":$=b;break;case"defaultValue":B=b;break;case"children":break;case"dangerouslySetInnerHTML":if(b!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:b!==w&&Wg(r,g,O,b,l,w)}ZP(r,$,B);return;case"option":for(var br in o)if($=o[br],o.hasOwnProperty(br)&&$!=null&&!l.hasOwnProperty(br))switch(br){case"selected":r.selected=!1;break;default:Wg(r,g,br,null,l,$)}for(W in l)if($=l[W],B=o[W],l.hasOwnProperty(W)&&$!==B&&($!=null||B!=null))switch(W){case"selected":r.selected=$&&typeof $!=="function"&&typeof $!=="symbol";break;default:Wg(r,g,W,$,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ar in o)$=o[Ar],o.hasOwnProperty(Ar)&&$!=null&&!l.hasOwnProperty(Ar)&&Wg(r,g,Ar,null,l,$);for(G in l)if($=l[G],B=o[G],l.hasOwnProperty(G)&&$!==B&&($!=null||B!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Wg(r,g,G,$,l,B)}return;default:if(lb(g)){for(var Qg in o)$=o[Qg],o.hasOwnProperty(Qg)&&$!==void 0&&!l.hasOwnProperty(Qg)&&z8(r,g,Qg,void 0,l,$);for(F in l)$=l[F],B=o[F],!l.hasOwnProperty(F)||$===B||$===void 0&&B===void 0||z8(r,g,F,$,l,B);return}}for(var sr in o)$=o[sr],o.hasOwnProperty(sr)&&$!=null&&!l.hasOwnProperty(sr)&&Wg(r,g,sr,null,l,$);for(I in l)$=l[I],B=o[I],!l.hasOwnProperty(I)||$===B||$==null&&B==null||Wg(r,g,I,$,l,B)}function tM(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function K8(r){var g={};r=r.style;for(var o=0;o<r.length;o++){var l=r[o];g[l]=r.getPropertyValue(l)}return g}function kM(r,g,o){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,b=l="",w;for(w in g)if(g.hasOwnProperty(w)){var O=g[w];O!=null&&typeof O!=="boolean"&&O!==""&&(w.indexOf("--")===0?(d5(O,w),l+=b+w+":"+(""+O).trim()):typeof O!=="number"||O===0||pW.has(w)?(d5(O,w),l+=b+w.replace(yW,"-$1").toLowerCase().replace(cW,"-ms-")+":"+(""+O).trim()):l+=b+w.replace(yW,"-$1").toLowerCase().replace(cW,"-ms-")+":"+O+"px",b=";")}l=l||null,g=r.getAttribute("style"),g!==l&&(l=tl(l),tl(g)!==l&&(o.style=K8(r)))}}function $v(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(qg(l,g),r===""+l)return}ho(g,r,l,w)}function DM(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}ho(g,r,l,w)}function $8(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(qg(l,o),r===""+l)return}ho(g,r,l,w)}function VM(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(qg(l,g),r===""+l))return}ho(g,r,l,w)}function i8(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(qg(l,g),o=hb(""+l),r===o)return}ho(g,r,l,w)}function _M(r,g,o,l){for(var b={},w=new Set,O=r.attributes,P=0;P<O.length;P++)switch(O[P].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:w.add(O[P].name)}if(lb(g)){for(var W in o)if(o.hasOwnProperty(W)){var G=o[W];if(G!=null){if(p1.hasOwnProperty(W))typeof G!=="function"&&Q0(W,G);else if(o.suppressHydrationWarning!==!0)switch(W){case"children":typeof G!=="string"&&typeof G!=="number"||ho("children",r.textContent,G,b);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":O=r.innerHTML,G=G?G.__html:void 0,G!=null&&(G=nM(r,G),ho(W,O,G,b));continue;case"style":w.delete(W),kM(r,G,b);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":w.delete(W.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",W);continue;case"className":w.delete("class"),O=$P(r,"class",G),ho("className",O,G,b);continue;default:l.context===Pl&&g!=="svg"&&g!=="math"?w.delete(W.toLowerCase()):w.delete(W),O=$P(r,W,G),ho(W,O,G,b)}}}}else for(G in o)if(o.hasOwnProperty(G)&&(W=o[G],W!=null)){if(p1.hasOwnProperty(G))typeof W!=="function"&&Q0(G,W);else if(o.suppressHydrationWarning!==!0)switch(G){case"children":typeof W!=="string"&&typeof W!=="number"||ho("children",r.textContent,W,b);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":O=r.innerHTML,W=W?W.__html:void 0,W!=null&&(W=nM(r,W),O!==W&&(b[G]={__html:O}));continue;case"className":$v(r,G,"class",W,w,b);continue;case"tabIndex":$v(r,G,"tabindex",W,w,b);continue;case"style":w.delete(G),kM(r,W,b);continue;case"multiple":w.delete(G),ho(G,r.multiple,W,b);continue;case"muted":w.delete(G),ho(G,r.muted,W,b);continue;case"autoFocus":w.delete("autofocus"),ho(G,r.autofocus,W,b);continue;case"data":if(g!=="object"){w.delete(G),O=r.getAttribute("data"),ho(G,O,W,b);continue}case"src":case"href":if(!(W!==""||g==="a"&&G==="href"||g==="object"&&G==="data")){G==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',G,G):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',G,G);continue}i8(r,G,G,W,w,b);continue;case"action":case"formAction":if(O=r.getAttribute(G),typeof W==="function"){w.delete(G.toLowerCase()),G==="formAction"?(w.delete("name"),w.delete("formenctype"),w.delete("formmethod"),w.delete("formtarget")):(w.delete("enctype"),w.delete("method"),w.delete("target"));continue}else if(O===r$){w.delete(G.toLowerCase()),ho(G,"function",W,b);continue}i8(r,G,G.toLowerCase(),W,w,b);continue;case"xlinkHref":i8(r,G,"xlink:href",W,w,b);continue;case"contentEditable":$8(r,G,"contenteditable",W,w,b);continue;case"spellCheck":$8(r,G,"spellcheck",W,w,b);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":$8(r,G,G,W,w,b);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":DM(r,G,G.toLowerCase(),W,w,b);continue;case"capture":case"download":r:{P=r;var F=O=G,I=b;if(w.delete(F),P=P.getAttribute(F),P===null)switch(typeof W){case"undefined":case"function":case"symbol":break r;default:if(W===!1)break r}else if(W!=null)switch(typeof W){case"function":case"symbol":break;case"boolean":if(W===!0&&P==="")break r;break;default:if(qg(W,O),P===""+W)break r}ho(O,P,W,I)}continue;case"cols":case"rows":case"size":case"span":r:{if(P=r,F=O=G,I=b,w.delete(F),P=P.getAttribute(F),P===null)switch(typeof W){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(W)||1>W)break r}else if(W!=null)switch(typeof W){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(W)||1>W)&&(qg(W,O),P===""+W))break r}ho(O,P,W,I)}continue;case"rowSpan":VM(r,G,"rowspan",W,w,b);continue;case"start":VM(r,G,G,W,w,b);continue;case"xHeight":$v(r,G,"x-height",W,w,b);continue;case"xlinkActuate":$v(r,G,"xlink:actuate",W,w,b);continue;case"xlinkArcrole":$v(r,G,"xlink:arcrole",W,w,b);continue;case"xlinkRole":$v(r,G,"xlink:role",W,w,b);continue;case"xlinkShow":$v(r,G,"xlink:show",W,w,b);continue;case"xlinkTitle":$v(r,G,"xlink:title",W,w,b);continue;case"xlinkType":$v(r,G,"xlink:type",W,w,b);continue;case"xmlBase":$v(r,G,"xml:base",W,w,b);continue;case"xmlLang":$v(r,G,"xml:lang",W,w,b);continue;case"xmlSpace":$v(r,G,"xml:space",W,w,b);continue;case"inert":W!==""||_u[G]||(_u[G]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",G)),DM(r,G,G,W,w,b);continue;default:if(!(2<G.length)||G[0]!=="o"&&G[0]!=="O"||G[1]!=="n"&&G[1]!=="N"){P=EP(G),O=!1,l.context===Pl&&g!=="svg"&&g!=="math"?w.delete(P.toLowerCase()):(F=G.toLowerCase(),F=ou.hasOwnProperty(F)?ou[F]||null:null,F!==null&&F!==G&&(O=!0,w.delete(F)),w.delete(P));r:if(F=r,I=P,P=W,rb(I))if(F.hasAttribute(I))F=F.getAttribute(I),qg(P,I),P=F===""+P?P:F;else{switch(typeof P){case"function":case"symbol":break r;case"boolean":if(F=I.toLowerCase().slice(0,5),F!=="data-"&&F!=="aria-")break r}P=P===void 0?void 0:null}else P=void 0;O||ho(G,P,W,b)}}}return 0<w.size&&o.suppressHydrationWarning!==!0&&tQ(r,w,b),Object.keys(b).length===0?null:b}function DQ(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function EM(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VQ(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var b=o[l],w=b.transferSize,O=b.initiatorType,P=b.duration;if(w&&P&&EM(O)){O=0,P=b.responseEnd;for(l+=1;l<o.length;l++){var W=o[l],G=W.startTime;if(G>P)break;var{transferSize:F,initiatorType:I}=W;F&&EM(I)&&(W=W.responseEnd,O+=F*(W<P?1:(P-G)/(W-G)))}if(--l,g+=8*(w+O)/(b.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function n2(r){return r.nodeType===9?r:r.ownerDocument}function yM(r){switch(r){case h5:return x5;case gu:return yu;default:return Pl}}function cM(r,g){if(r===Pl)switch(g){case"svg":return x5;case"math":return yu;default:return Pl}return r===x5&&g==="foreignObject"?Pl:r}function U8(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function _Q(){var r=window.event;if(r&&r.type==="popstate"){if(r===uH)return!1;return uH=r,!0}return uH=null,!1}function Ib(){var r=window.event;return r&&r!==iw?r.type:null}function mb(){var r=window.event;return r&&r!==iw?r.timeStamp:-1.1}function EQ(r){setTimeout(function(){throw r})}function yQ(r,g,o){switch(g){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function cQ(){}function jQ(r,g,o,l){kQ(r,g,o,l),r[Bo]=l}function jM(r){vb(r,"")}function fQ(r,g,o){r.nodeValue=o}function fM(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[Bo]||null;if(g!==null){var o=Br(r);o!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,er(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,er(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function kl(r){return r==="head"}function aQ(r,g){r.removeChild(g)}function pQ(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function aM(r,g){var o=g,l=0;do{var b=o.nextSibling;if(r.removeChild(o),b&&b.nodeType===8)if(o=b.data,o===$w||o===Eu){if(l===0){r.removeChild(b),sh(g);return}l--}else if(o===Kw||o===H1||o===Wh||o===Z5||o===Mh)l++;else if(o===o$)Nb(r.ownerDocument.documentElement);else if(o===l$){o=r.ownerDocument.head,Nb(o);for(var w=o.firstChild;w;){var{nextSibling:O,nodeName:P}=w;w[Sb]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=O}}else o===v$&&Nb(r.ownerDocument.body);o=b}while(o);sh(g)}function pM(r,g){var o=r;r=0;do{var l=o.nextSibling;if(o.nodeType===1?g?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(g?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o===$w)if(r===0)break;else r--;else o!==Kw&&o!==H1&&o!==Wh&&o!==Z5||r++;o=l}while(o)}function dQ(r){pM(r,!0)}function sQ(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function rz(r){r.nodeValue=""}function gz(r){pM(r,!1)}function oz(r,g){g=g[h$],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function vz(r,g){r.nodeValue=g}function L8(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var o=g;switch(g=g.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":L8(o),ur(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function lz(r,g,o,l){for(;r.nodeType===1;){var b=o;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(g==="input"&&r.type==="hidden"){qg(b.name,"name");var w=b.name==null?null:""+b.name;if(b.type==="hidden"&&r.getAttribute("name")===w)return r}else return r;else if(!r[Sb])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(w=r.getAttribute("rel"),w==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(w!==b.rel||r.getAttribute("href")!==(b.href==null||b.href===""?null:b.href)||r.getAttribute("crossorigin")!==(b.crossOrigin==null?null:b.crossOrigin)||r.getAttribute("title")!==(b.title==null?null:b.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(w=r.getAttribute("src"),(w!==(b.src==null?null:b.src)||r.getAttribute("type")!==(b.type==null?null:b.type)||r.getAttribute("crossorigin")!==(b.crossOrigin==null?null:b.crossOrigin))&&w&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=uv(r.nextSibling),r===null)break}return null}function hz(r,g,o){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function dM(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function F8(r){return r.data===H1||r.data===Wh}function I8(r){return r.data===Z5||r.data===H1&&r.ownerDocument.readyState!==k7}function bz(r,g){var o=r.ownerDocument;if(r.data===Wh)r._reactRetry=g;else if(r.data!==H1||o.readyState!==k7)g();else{var l=function(){g(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function uv(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===Kw||g===Z5||g===H1||g===Wh||g===Mh||g===bH||g===t7)break;if(g===$w||g===Eu)return null}}return r}function sM(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),o={},l=r.attributes,b=0;b<l.length;b++){var w=l[b];o[tM(w.name)]=w.name.toLowerCase()==="style"?K8(r):w.value}return{type:g,props:o}}return r.nodeType===8?r.data===Mh?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function rW(r,g,o){return o===null||o[g$]!==!0?(r.nodeValue===g?r=null:(g=tl(g),r=tl(r.nodeValue)===g?null:r.nodeValue),r):null}function m8(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===$w||o===Eu){if(g===0)return uv(r.nextSibling);g--}else o!==Kw&&o!==Z5&&o!==H1&&o!==Wh&&o!==Mh||g++}r=r.nextSibling}return null}function gW(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===Kw||o===Z5||o===H1||o===Wh||o===Mh){if(g===0)return r;g--}else o!==$w&&o!==Eu||g++}r=r.previousSibling}return null}function wz(r){sh(r)}function ez(r){sh(r)}function uz(r){sh(r)}function oW(r,g,o,l,b){switch(b&&D4(r,l.ancestorInfo),g=n2(o),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function Oz(r,g,o,l){if(!o[El]&&Br(o)){var b=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",b,b,b)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(b=o.attributes;b.length;)o.removeAttributeNode(b[0]);Mo(o,r,g),o[Wo]=l,o[Bo]=g}function Nb(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);ur(r)}function S2(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function vW(r,g,o){var l=C5;if(l&&typeof g==="string"&&g){var b=Kv(g);b='link[rel="'+r+'"][href="'+b+'"]',typeof o==="string"&&(b+='[crossorigin="'+o+'"]'),c7.has(b)||(c7.add(b),r={rel:r,crossOrigin:o,href:g},l.querySelector(b)===null&&(g=l.createElement("link"),Mo(g,"link",r),$r(g),l.head.appendChild(g)))}}function lW(r,g,o,l){var b=(b=Vl.current)?S2(b):null;if(!b)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=ph(o.href),g=vg(b).hoistableStyles,l=g.get(o),l||(l={type:"style",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=ph(o.href);var w=vg(b).hoistableStyles,O=w.get(r);if(!O&&(b=b.ownerDocument||b,O={type:"stylesheet",instance:null,count:0,state:{loading:Gh,preload:null}},w.set(r,O),(w=b.querySelector(Bb(r)))&&!w._p&&(O.instance=w,O.state.loading=Uw|Cv),!Tv.has(r))){var P={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};Tv.set(r,P),w||Hz(b,r,P,O.state)}if(g&&l===null)throw o=`

  - `+t2(g)+`
  + `+t2(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return O}if(g&&l!==null)throw o=`

  - `+t2(g)+`
  + `+t2(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return g=o.async,o=o.src,typeof o==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(o=dh(o),g=vg(b).hoistableScripts,l=g.get(o),l||(l={type:"script",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function t2(r){var g=0,o="<link";return typeof r.rel==="string"?(g++,o+=' rel="'+r.rel+'"'):Vv.call(r,"rel")&&(g++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,o+=' href="'+r.href+'"'):Vv.call(r,"href")&&(g++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,o+=' precedence="'+r.precedence+'"'):Vv.call(r,"precedence")&&(g++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(o+=" ..."),o+" />"}function ph(r){return'href="'+Kv(r)+'"'}function Bb(r){return'link[rel="stylesheet"]['+r+"]"}function hW(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function Hz(r,g,o,l){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?l.loading=Uw:(g=r.createElement("link"),l.preload=g,g.addEventListener("load",function(){return l.loading|=Uw}),g.addEventListener("error",function(){return l.loading|=E7}),Mo(g,"link",o),$r(g),r.head.appendChild(g))}function dh(r){return'[src="'+Kv(r)+'"]'}function Zb(r){return"script[async]"+r}function bW(r,g,o){if(g.count++,g.instance===null)switch(g.type){case"style":var l=r.querySelector('style[data-href~="'+Kv(o.href)+'"]');if(l)return g.instance=l,$r(l),l;var b=cr({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),$r(l),Mo(l,"style",b),k2(l,o.precedence,r),g.instance=l;case"stylesheet":b=ph(o.href);var w=r.querySelector(Bb(b));if(w)return g.state.loading|=Cv,g.instance=w,$r(w),w;l=hW(o),(b=Tv.get(b))&&N8(l,b),w=(r.ownerDocument||r).createElement("link"),$r(w);var O=w;return O._p=new Promise(function(P,W){O.onload=P,O.onerror=W}),Mo(w,"link",l),g.state.loading|=Cv,k2(w,o.precedence,r),g.instance=w;case"script":if(w=dh(o.src),b=r.querySelector(Zb(w)))return g.instance=b,$r(b),b;if(l=o,b=Tv.get(w))l=cr({},o),B8(l,b);return r=r.ownerDocument||r,b=r.createElement("script"),$r(b),Mo(b,"link",l),r.head.appendChild(b),g.instance=b;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&Cv)===Gh&&(l=g.instance,g.state.loading|=Cv,k2(l,o.precedence,r));return g.instance}function k2(r,g,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),b=l.length?l[l.length-1]:null,w=b,O=0;O<l.length;O++){var P=l[O];if(P.dataset.precedence===g)w=P;else if(w!==b)break}w?w.parentNode.insertBefore(r,w.nextSibling):(g=o.nodeType===9?o.head:o,g.insertBefore(r,g.firstChild))}function N8(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function B8(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function wW(r,g,o){if(cu===null){var l=new Map,b=cu=new Map;b.set(o,l)}else b=cu,l=b.get(o),l||(l=new Map,b.set(o,l));if(l.has(r))return l;l.set(r,null),o=o.getElementsByTagName(r);for(b=0;b<o.length;b++){var w=o[b];if(!(w[Sb]||w[Wo]||r==="link"&&w.getAttribute("rel")==="stylesheet")&&w.namespaceURI!==h5){var O=w.getAttribute(g)||"";O=r+O;var P=l.get(O);P?P.push(w):l.set(O,[w])}}return l}function eW(r,g,o){r=r.ownerDocument||r,r.head.insertBefore(o,g==="title"?r.querySelector("head > title"):null)}function Pz(r,g,o){var l=!o.ancestorInfo.containerTagInScope;if(o.context===x5||g.itemProp!=null)return!l||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:b,disabled:w}=g;o=[],g.onLoad&&o.push("`onLoad`"),b&&o.push("`onError`"),w!=null&&o.push("`disabled`"),b=DQ(o,"and"),b+=o.length===1?" prop":" props",w=o.length===1?"an "+b:"the "+b,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,w,b)}l&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){l&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function uW(r){return r.type==="stylesheet"&&(r.state.loading&y7)===Gh?!1:!0}function qz(r,g,o,l){if(o.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&Cv)===Gh){if(o.instance===null){var b=ph(l.href),w=g.querySelector(Bb(b));if(w){g=w._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=D2.bind(r),g.then(r,r)),o.state.loading|=Cv,o.instance=w,$r(w);return}w=g.ownerDocument||g,l=hW(l),(b=Tv.get(b))&&N8(l,b),w=w.createElement("link"),$r(w);var O=w;O._p=new Promise(function(P,W){O.onload=P,O.onerror=W}),Mo(w,"link",l),o.instance=w}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,g),(g=o.state.preload)&&(o.state.loading&y7)===Gh&&(r.count++,o=D2.bind(r),g.addEventListener("load",o),g.addEventListener("error",o))}}function Az(r,g){return r.stylesheets&&r.count===0&&V2(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var l=setTimeout(function(){if(r.stylesheets&&V2(r,r.stylesheets),r.unsuspend){var w=r.unsuspend;r.unsuspend=null,w()}},e$+g);0<r.imgBytes&&HH===0&&(HH=125*VQ()*O$);var b=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&V2(r,r.stylesheets),r.unsuspend)){var w=r.unsuspend;r.unsuspend=null,w()}},(r.imgBytes>HH?50:u$)+g);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(b)}}:null}function D2(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)V2(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function V2(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,ju=new Map,g.forEach(Mz,r),ju=null,D2.call(r))}function Mz(r,g){if(!(g.state.loading&Cv)){var o=ju.get(r);if(o)var l=o.get(PH);else{o=new Map,ju.set(r,o);for(var b=r.querySelectorAll("link[data-precedence],style[data-precedence]"),w=0;w<b.length;w++){var O=b[w];if(O.nodeName==="LINK"||O.getAttribute("media")!=="not all")o.set(O.dataset.precedence,O),l=O}l&&o.set(PH,l)}b=g.instance,O=b.getAttribute("data-precedence"),w=o.get(O)||l,w===l&&o.set(PH,b),o.set(O,b),this.count++,l=D2.bind(this),b.addEventListener("load",l),b.addEventListener("error",l),w?w.parentNode.insertBefore(b,w.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(b,r.firstChild)),g.state.loading|=Cv}}function Wz(r,g,o,l,b,w,O,P,W){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Rh,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xh(0),this.hiddenUpdates=xh(null),this.identifierPrefix=l,this.onUncaughtError=b,this.onCaughtError=w,this.onRecoverableError=O,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function OW(r,g,o,l,b,w,O,P,W,G,F,I){return r=new Wz(r,g,o,O,W,G,F,I,P),g=xK,w===!0&&(g|=Uo|Ev),g|=kr,w=z(3,null,null,g),r.current=w,w.stateNode=r,g=w6(),_1(g),r.pooledCache=g,_1(g),w.memoizedState={element:l,isDehydrated:o,cache:g},P6(w),r}function HW(r){if(!r)return fl;return r=fl,r}function Z8(r,g,o,l,b,w){if(io&&typeof io.onScheduleFiberRoot==="function")try{io.onScheduleFiberRoot(v5,l,o)}catch(O){i0||(i0=!0,console.error("React instrumentation encountered an error: %o",O))}b=HW(b),l.context===null?l.context=b:l.pendingContext=b,$0&&Hv!==null&&!p7&&(p7=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,n(Hv)||"Unknown")),l=Zl(g),l.payload={element:o},w=w===void 0?null:w,w!==null&&(typeof w!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",w),l.callback=w),o=xl(r,l,g),o!==null&&(O0(g,"root.render()",null),Zg(o,r,g),Ab(o,r,g))}function PW(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<g?o:g}}function x8(r,g){PW(r,g),(r=r.alternate)&&PW(r,g)}function qW(r){if(r.tag===13||r.tag===31){var g=$o(r,67108864);g!==null&&Zg(g,r,67108864),x8(r,67108864)}}function AW(r){if(r.tag===13||r.tag===31){var g=ev(r);g=x1(g);var o=$o(r,g);o!==null&&Zg(o,r,g),x8(r,g)}}function Rz(){return Hv}function Gz(r,g,o,l){var b=T.T;T.T=null;var w=eg.p;try{eg.p=Pv,C8(r,g,o,l)}finally{eg.p=w,T.T=b}}function Xz(r,g,o,l){var b=T.T;T.T=null;var w=eg.p;try{eg.p=_v,C8(r,g,o,l)}finally{eg.p=w,T.T=b}}function C8(r,g,o,l){if(au){var b=T8(l);if(b===null)J8(r,g,l,pu,o),WW(r,l);else if(Yz(b,r,g,o,l))l.stopPropagation();else if(WW(r,l),g&4&&-1<P$.indexOf(r)){for(;b!==null;){var w=Br(b);if(w!==null)switch(w.tag){case 3:if(w=w.stateNode,w.current.memoizedState.isDehydrated){var O=b0(w.pendingLanes);if(O!==0){var P=w;P.pendingLanes|=2;for(P.entangledLanes|=2;O;){var W=1<<31-No(O);P.entanglements[1]|=W,O&=~W}J0(w),(og&(lo|Wv))===uo&&(Bu=bo()+$7,Lb(0,!1))}}break;case 31:case 13:P=$o(w,2),P!==null&&Zg(P,w,2),jh(),x8(w,2)}if(w=T8(l),w===null&&J8(r,g,l,pu,o),w===b)break;b=w}b!==null&&l.stopPropagation()}else J8(r,g,l,null,o)}}function T8(r){return r=V4(r),n8(r)}function n8(r){if(pu=null,r=Xr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var o=g.tag;if(o===13){if(r=Pr(g),r!==null)return r;r=null}else if(o===31){if(r=vr(g),r!==null)return r;r=null}else if(o===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return pu=r,null}function MW(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Pv;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _v;case"message":switch(Fz()){case p8:return Pv;case d8:return _v;case o5:case Iz:return L0;case s8:return s2;default:return L0}default:return L0}}function WW(r,g){switch(r){case"focusin":case"focusout":P1=null;break;case"dragenter":case"dragleave":q1=null;break;case"mouseover":case"mouseout":A1=null;break;case"pointerover":case"pointerout":Fw.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":Iw.delete(g.pointerId)}}function xb(r,g,o,l,b,w){if(r===null||r.nativeEvent!==w)return r={blockedOn:g,domEventName:o,eventSystemFlags:l,nativeEvent:w,targetContainers:[b]},g!==null&&(g=Br(g),g!==null&&qW(g)),r;return r.eventSystemFlags|=l,g=r.targetContainers,b!==null&&g.indexOf(b)===-1&&g.push(b),r}function Yz(r,g,o,l,b){switch(g){case"focusin":return P1=xb(P1,r,g,o,l,b),!0;case"dragenter":return q1=xb(q1,r,g,o,l,b),!0;case"mouseover":return A1=xb(A1,r,g,o,l,b),!0;case"pointerover":var w=b.pointerId;return Fw.set(w,xb(Fw.get(w)||null,r,g,o,l,b)),!0;case"gotpointercapture":return w=b.pointerId,Iw.set(w,xb(Iw.get(w)||null,r,g,o,l,b)),!0}return!1}function RW(r){var g=Xr(r.target);if(g!==null){var o=rr(g);if(o!==null){if(g=o.tag,g===13){if(g=Pr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){AW(o)});return}}else if(g===31){if(g=vr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){AW(o)});return}}else if(g===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function _2(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var o=T8(r.nativeEvent);if(o===null){o=r.nativeEvent;var l=new o.constructor(o.type,o),b=l;tb!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),tb=b,o.target.dispatchEvent(l),tb===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),tb=null}else return g=Br(o),g!==null&&qW(g),r.blockedOn=o,!1;g.shift()}return!0}function GW(r,g,o){_2(r)&&o.delete(g)}function Jz(){qH=!1,P1!==null&&_2(P1)&&(P1=null),q1!==null&&_2(q1)&&(q1=null),A1!==null&&_2(A1)&&(A1=null),Fw.forEach(GW),Iw.forEach(GW)}function E2(r,g){r.blockedOn===g&&(r.blockedOn=null,qH||(qH=!0,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,Jz)))}function XW(r){du!==r&&(du=r,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,function(){du===r&&(du=null);for(var g=0;g<r.length;g+=3){var o=r[g],l=r[g+1],b=r[g+2];if(typeof l!=="function")if(n8(l||o)===null)continue;else break;var w=Br(o);w!==null&&(r.splice(g,3),g-=3,o={pending:!0,data:b,method:o.method,action:l},Object.freeze(o),n6(w,o,l,b))}}))}function sh(r){function g(W){return E2(W,r)}P1!==null&&E2(P1,r),q1!==null&&E2(q1,r),A1!==null&&E2(A1,r),Fw.forEach(g),Iw.forEach(g);for(var o=0;o<M1.length;o++){var l=M1[o];l.blockedOn===r&&(l.blockedOn=null)}for(;0<M1.length&&(o=M1[0],o.blockedOn===null);)RW(o),o.blockedOn===null&&M1.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var b=o[l],w=o[l+1],O=b[Bo]||null;if(typeof w==="function")O||XW(o);else if(O){var P=null;if(w&&w.hasAttribute("formAction")){if(b=w,O=w[Bo]||null)P=O.formAction;else if(n8(b)!==null)continue}else P=O.action;typeof P==="function"?o[l+1]=P:(o.splice(l,3),l-=3),XW(o)}}}function YW(){function r(w){w.canIntercept&&w.info==="react-transition"&&w.intercept({handler:function(){return new Promise(function(O){return b=O})},focusReset:"manual",scroll:"manual"})}function g(){b!==null&&(b(),b=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var w=navigation.currentEntry;w&&w.url!=null&&navigation.navigate(w.url,{state:w.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,b=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),b!==null&&(b(),b=null)}}}function S8(r){this._internalRoot=r}function y2(r){this._internalRoot=r}function JW(r){r[El]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,Qz=Symbol.for("react.element"),z0=Symbol.for("react.transitional.element"),r5=Symbol.for("react.portal"),g5=Symbol.for("react.fragment"),c2=Symbol.for("react.strict_mode"),t8=Symbol.for("react.profiler"),k8=Symbol.for("react.consumer"),K0=Symbol.for("react.context"),Cb=Symbol.for("react.forward_ref"),D8=Symbol.for("react.suspense"),V8=Symbol.for("react.suspense_list"),j2=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),_8=Symbol.for("react.activity"),zz=Symbol.for("react.memo_cache_sentinel"),QW=Symbol.iterator,Kz=Symbol.for("react.client.reference"),oo=Array.isArray,T=n5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,eg=WH.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$z=Object.freeze({pending:!1,data:null,method:null,action:null}),E8=[],y8=[],d0=-1,Dl=Jr(null),Tb=Jr(null),Vl=Jr(null),f2=Jr(null),nb=0,zW,KW,$W,iW,UW,LW,FW;S.__reactDisabledLog=!0;var c8,IW,j8=!1,f8=new(typeof WeakMap==="function"?WeakMap:Map),Hv=null,$0=!1,Vv=Object.prototype.hasOwnProperty,a8=lg.unstable_scheduleCallback,iz=lg.unstable_cancelCallback,Uz=lg.unstable_shouldYield,Lz=lg.unstable_requestPaint,bo=lg.unstable_now,Fz=lg.unstable_getCurrentPriorityLevel,p8=lg.unstable_ImmediatePriority,d8=lg.unstable_UserBlockingPriority,o5=lg.unstable_NormalPriority,Iz=lg.unstable_LowPriority,s8=lg.unstable_IdlePriority,mz=lg.log,Nz=lg.unstable_setDisableYieldValue,v5=null,io=null,i0=!1,U0=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",No=Math.clz32?Math.clz32:Te,Bz=Math.log,Zz=Math.LN2,a2=256,p2=262144,d2=4194304,Pv=2,_v=8,L0=32,s2=268435456,_l=Math.random().toString(36).slice(2),Wo="__reactFiber$"+_l,Bo="__reactProps$"+_l,El="__reactContainer$"+_l,rO="__reactEvents$"+_l,xz="__reactListeners$"+_l,Cz="__reactHandles$"+_l,mW="__reactResources$"+_l,Sb="__reactMarker$"+_l,NW=new Set,p1={},gO={},Tz={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},nz=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),BW={},ZW={},Sz=/[\n"\\]/g,xW=!1,CW=!1,TW=!1,nW=!1,SW=!1,tW=!1,kW=["value","defaultValue"],DW=!1,VW=/["'&<>\n\t]|^\s|\s$/,tz="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),_W="applet caption html table td th marquee object template foreignObject desc title".split(" "),kz=_W.concat(["button"]),Dz="dd dt li option optgroup p rp rt".split(" "),EW={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},ru={},oO={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},yW=/([A-Z])/g,cW=/^ms-/,Vz=/^(?:webkit|moz|o)[A-Z]/,_z=/^-ms-/,Ez=/-(.)/g,jW=/;\s*$/,l5={},vO={},fW=!1,aW=!1,pW=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),gu="http://www.w3.org/1998/Math/MathML",h5="http://www.w3.org/2000/svg",yz=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ou={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},dW={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},b5={},cz=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jz=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sW=!1,Zo={},r9=/^on./,fz=/^on[^A-Z]/,az=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pz=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dz=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,tb=null,w5=null,e5=null,lO=!1,F0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hO=!1;if(F0)try{var kb={};Object.defineProperty(kb,"passive",{get:function(){hO=!0}}),window.addEventListener("test",kb,kb),window.removeEventListener("test",kb,kb)}catch(r){hO=!1}var yl=null,bO=null,vu=null,d1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=Eo(d1),Db=cr({},d1,{view:0,detail:0}),sz=Eo(Db),wO,eO,Vb,hu=cr({},Db,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_4,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==Vb&&(Vb&&r.type==="mousemove"?(wO=r.screenX-Vb.screenX,eO=r.screenY-Vb.screenY):eO=wO=0,Vb=r),wO},movementY:function(r){return"movementY"in r?r.movementY:eO}}),g9=Eo(hu),rK=cr({},hu,{dataTransfer:0}),gK=Eo(rK),oK=cr({},Db,{relatedTarget:0}),uO=Eo(oK),vK=cr({},d1,{animationName:0,elapsedTime:0,pseudoElement:0}),lK=Eo(vK),hK=cr({},d1,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),bK=Eo(hK),wK=cr({},d1,{data:0}),o9=Eo(wK),eK=o9,uK={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OK={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HK={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},PK=cr({},Db,{key:function(r){if(r.key){var g=uK[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=_e(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?OK[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_4,charCode:function(r){return r.type==="keypress"?_e(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?_e(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),qK=Eo(PK),AK=cr({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v9=Eo(AK),MK=cr({},Db,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_4}),WK=Eo(MK),RK=cr({},d1,{propertyName:0,elapsedTime:0,pseudoElement:0}),GK=Eo(RK),XK=cr({},hu,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),YK=Eo(XK),JK=cr({},d1,{newState:0,oldState:0}),QK=Eo(JK),zK=[9,13,27,32],l9=229,OO=F0&&"CompositionEvent"in window,_b=null;F0&&"documentMode"in document&&(_b=document.documentMode);var KK=F0&&"TextEvent"in window&&!_b,h9=F0&&(!OO||_b&&8<_b&&11>=_b),b9=32,w9=String.fromCharCode(b9),e9=!1,u5=!1,$K={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Eb=null,yb=null,u9=!1;F0&&(u9=yJ("input")&&(!document.documentMode||9<document.documentMode));var xo=typeof Object.is==="function"?Object.is:dJ,iK=F0&&"documentMode"in document&&11>=document.documentMode,O5=null,HO=null,cb=null,PO=!1,H5={animationend:T1("Animation","AnimationEnd"),animationiteration:T1("Animation","AnimationIteration"),animationstart:T1("Animation","AnimationStart"),transitionrun:T1("Transition","TransitionRun"),transitionstart:T1("Transition","TransitionStart"),transitioncancel:T1("Transition","TransitionCancel"),transitionend:T1("Transition","TransitionEnd")},qO={},O9={};F0&&(O9=document.createElement("div").style,("AnimationEvent"in window)||(delete H5.animationend.animation,delete H5.animationiteration.animation,delete H5.animationstart.animation),("TransitionEvent"in window)||delete H5.transitionend.transition);var H9=n1("animationend"),P9=n1("animationiteration"),q9=n1("animationstart"),UK=n1("transitionrun"),LK=n1("transitionstart"),FK=n1("transitioncancel"),A9=n1("transitionend"),M9=new Map,AO="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");AO.push("scrollEnd");var W9=0;if(typeof performance==="object"&&typeof performance.now==="function")var IK=performance,R9=function(){return IK.now()};else{var mK=Date;R9=function(){return mK.now()}}var MO=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},NK="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",bu=0,WO=1,RO=2,GO=3,wu="– ",eu="+ ",G9="  ",$g=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",iv="Components ⚛",jr="Scheduler ⚛",fr="Blocking",cl=!1,s0={color:"primary",properties:null,tooltipText:"",track:iv},jl={start:-0,end:-0,detail:{devtools:s0}},BK=["Changed Props",""],X9="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",ZK=["Changed Props",X9],jb=1,rl=2,Uv=[],P5=0,XO=0,fl={};Object.freeze(fl);var Lv=null,q5=null,Lr=0,xK=1,kr=2,Uo=8,Ev=16,CK=32,Y9=!1;try{var J9=Object.preventExtensions({})}catch(r){Y9=!0}var YO=new WeakMap,A5=[],M5=0,uu=null,fb=0,Fv=[],Iv=0,s1=null,gl=1,ol="",Ro=null,ig=null,pr=!1,I0=!1,qv=null,al=null,mv=!1,JO=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),QO=Jr(null),zO=Jr(null),Q9={},Ou=null,W5=null,R5=!1,TK=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(o,l){r.push(l)}};this.abort=function(){g.aborted=!0,r.forEach(function(o){return o()})}},nK=lg.unstable_scheduleCallback,SK=lg.unstable_NormalPriority,jg={$$typeof:K0,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},fg=lg.unstable_now,Hu=console.createTask?console.createTask:function(){return null},ab=1,Pu=2,wo=-0,pl=-0,vl=-0,ll=null,Co=-1.1,rh=-0,mg=-0,ir=-1.1,Ur=-1.1,Fg=null,xg=!1,dl=-0,m0=-1.1,pb=null,sl=0,KO=null,$O=null,gh=-1.1,db=null,G5=-1.1,qu=-1.1,N0=-0,hl=-1.1,Nv=-1.1,iO=0,sb=null,z9=null,K9=null,r1=-1.1,oh=null,g1=-1.1,Au=-1.1,$9=-0,i9=-0,Mu=0,bl=null,U9=0,rw=-1.1,Wu=!1,Ru=!1,gw=null,UO=0,vh=0,X5=null,L9=T.S;T.S=function(r,g){if(z7=bo(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>hl&&0>Nv){hl=fg();var o=mb(),l=Ib();if(o!==g1||l!==oh)g1=-1.1;r1=o,oh=l}hQ(r,g)}L9!==null&&L9(r,g)};var lh=Jr(null),yv={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},ow=[],vw=[],lw=[],hw=[],bw=[],ww=[],hh=new Set;yv.recordUnsafeLifecycleWarnings=function(r,g){hh.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&ow.push(r),r.mode&Uo&&typeof g.UNSAFE_componentWillMount==="function"&&vw.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&lw.push(r),r.mode&Uo&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&hw.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&bw.push(r),r.mode&Uo&&typeof g.UNSAFE_componentWillUpdate==="function"&&ww.push(r))},yv.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<ow.length&&(ow.forEach(function(P){r.add(n(P)||"Component"),hh.add(P.type)}),ow=[]);var g=new Set;0<vw.length&&(vw.forEach(function(P){g.add(n(P)||"Component"),hh.add(P.type)}),vw=[]);var o=new Set;0<lw.length&&(lw.forEach(function(P){o.add(n(P)||"Component"),hh.add(P.type)}),lw=[]);var l=new Set;0<hw.length&&(hw.forEach(function(P){l.add(n(P)||"Component"),hh.add(P.type)}),hw=[]);var b=new Set;0<bw.length&&(bw.forEach(function(P){b.add(n(P)||"Component"),hh.add(P.type)}),bw=[]);var w=new Set;if(0<ww.length&&(ww.forEach(function(P){w.add(n(P)||"Component"),hh.add(P.type)}),ww=[]),0<g.size){var O=R(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,O)}0<l.size&&(O=R(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,O)),0<w.size&&(O=R(w),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,O)),0<r.size&&(O=R(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,O)),0<o.size&&(O=R(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,O)),0<b.size&&(O=R(b),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,O))};var Gu=new Map,F9=new Set;yv.recordLegacyContextWarning=function(r,g){var o=null;for(var l=r;l!==null;)l.mode&Uo&&(o=l),l=l.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!F9.has(r.type)&&(l=Gu.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(l===void 0&&(l=[],Gu.set(o,l)),l.push(r))},yv.flushLegacyContextWarning=function(){Gu.forEach(function(r){if(r.length!==0){var g=r[0],o=new Set;r.forEach(function(b){o.add(n(b)||"Component"),F9.add(b.type)});var l=R(o);er(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},yv.discardPendingWarnings=function(){ow=[],vw=[],lw=[],hw=[],bw=[],ww=[],Gu=new Map};var I9={react_stack_bottom_frame:function(r,g,o){var l=$0;$0=!0;try{return r(g,o)}finally{$0=l}}},LO=I9.react_stack_bottom_frame.bind(I9),m9={react_stack_bottom_frame:function(r){var g=$0;$0=!0;try{return r.render()}finally{$0=g}}},N9=m9.react_stack_bottom_frame.bind(m9),B9={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(o){wg(r,r.return,o)}}},FO=B9.react_stack_bottom_frame.bind(B9),Z9={react_stack_bottom_frame:function(r,g,o,l,b){try{g.componentDidUpdate(o,l,b)}catch(w){wg(r,r.return,w)}}},x9=Z9.react_stack_bottom_frame.bind(Z9),C9={react_stack_bottom_frame:function(r,g){var o=g.stack;r.componentDidCatch(g.value,{componentStack:o!==null?o:""})}},tK=C9.react_stack_bottom_frame.bind(C9),T9={react_stack_bottom_frame:function(r,g,o){try{o.componentWillUnmount()}catch(l){wg(r,g,l)}}},n9=T9.react_stack_bottom_frame.bind(T9),S9={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},kK=S9.react_stack_bottom_frame.bind(S9),t9={react_stack_bottom_frame:function(r,g,o){try{o()}catch(l){wg(r,g,l)}}},DK=t9.react_stack_bottom_frame.bind(t9),k9={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},VK=k9.react_stack_bottom_frame.bind(k9),Y5=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),IO=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Xu=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Yu={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},bh=null,ew=!1,J5=null,uw=0,Dr=null,mO,D9=mO=!1,V9={},_9={},E9={};J=function(r,g,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var l=n(r),b=l||"null";if(!V9[b]){V9[b]=!0,o=o._owner,r=r._debugOwner;var w="";r&&typeof r.tag==="number"&&(b=n(r))&&(w=`

Check the render method of \``+b+"`."),w||l&&(w=`

Check the top-level render call using <`+l+">.");var O="";o!=null&&r!==o&&(l=null,typeof o.tag==="number"?l=n(o):typeof o.name==="string"&&(l=o.name),l&&(O=" It was passed a child from "+l+".")),er(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',w,O)})}}};var wh=Tq(!0),y9=Tq(!1),c9=0,j9=1,f9=2,NO=3,o1=!1,a9=!1,BO=null,ZO=!1,Q5=Jr(null),Ju=Jr(0),Av=Jr(null),Bv=null,z5=1,Ow=2,Dg=Jr(0),Qu=0,Zv=1,To=2,Mv=4,no=8,K5,p9=new Set,d9=new Set,xO=new Set,s9=new Set,wl=0,Fr=null,Rg=null,ag=null,zu=!1,$5=!1,eh=!1,Ku=0,Hw=0,el=null,_K=0,EK=25,x=null,xv=null,ul=-1,Pw=!1,qw={readContext:Lg,use:nl,useCallback:ng,useContext:ng,useEffect:ng,useImperativeHandle:ng,useLayoutEffect:ng,useInsertionEffect:ng,useMemo:ng,useReducer:ng,useRef:ng,useState:ng,useDebugValue:ng,useDeferredValue:ng,useTransition:ng,useSyncExternalStore:ng,useId:ng,useHostTransitionStatus:ng,useFormState:ng,useActionState:ng,useOptimistic:ng,useMemoCache:ng,useCacheRefresh:ng};qw.useEffectEvent=ng;var CO=null,r7=null,TO=null,g7=null,B0=null,cv=null,$u=null;CO={readContext:function(r){return Lg(r)},use:nl,useCallback:function(r,g){return x="useCallback",yr(),kh(g),Z6(r,g)},useContext:function(r){return x="useContext",yr(),Lg(r)},useEffect:function(r,g){return x="useEffect",yr(),kh(g),G2(r,g)},useImperativeHandle:function(r,g,o){return x="useImperativeHandle",yr(),kh(o),B6(r,g,o)},useInsertionEffect:function(r,g){x="useInsertionEffect",yr(),kh(g),y1(4,To,r,g)},useLayoutEffect:function(r,g){return x="useLayoutEffect",yr(),kh(g),N6(r,g)},useMemo:function(r,g){x="useMemo",yr(),kh(g);var o=T.H;T.H=B0;try{return x6(r,g)}finally{T.H=o}},useReducer:function(r,g,o){x="useReducer",yr();var l=T.H;T.H=B0;try{return z6(r,g,o)}finally{T.H=l}},useRef:function(r){return x="useRef",yr(),I6(r)},useState:function(r){x="useState",yr();var g=T.H;T.H=B0;try{return U6(r)}finally{T.H=g}},useDebugValue:function(){x="useDebugValue",yr()},useDeferredValue:function(r,g){return x="useDeferredValue",yr(),C6(r,g)},useTransition:function(){return x="useTransition",yr(),S6()},useSyncExternalStore:function(r,g,o){return x="useSyncExternalStore",yr(),$6(r,g,o)},useId:function(){return x="useId",yr(),t6()},useFormState:function(r,g){return x="useFormState",yr(),q2(),Vh(r,g)},useActionState:function(r,g){return x="useActionState",yr(),Vh(r,g)},useOptimistic:function(r){return x="useOptimistic",yr(),L6(r)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return x="useCacheRefresh",yr(),k6()},useEffectEvent:function(r){return x="useEffectEvent",yr(),m6(r)}},r7={readContext:function(r){return Lg(r)},use:nl,useCallback:function(r,g){return x="useCallback",p(),Z6(r,g)},useContext:function(r){return x="useContext",p(),Lg(r)},useEffect:function(r,g){return x="useEffect",p(),G2(r,g)},useImperativeHandle:function(r,g,o){return x="useImperativeHandle",p(),B6(r,g,o)},useInsertionEffect:function(r,g){x="useInsertionEffect",p(),y1(4,To,r,g)},useLayoutEffect:function(r,g){return x="useLayoutEffect",p(),N6(r,g)},useMemo:function(r,g){x="useMemo",p();var o=T.H;T.H=B0;try{return x6(r,g)}finally{T.H=o}},useReducer:function(r,g,o){x="useReducer",p();var l=T.H;T.H=B0;try{return z6(r,g,o)}finally{T.H=l}},useRef:function(r){return x="useRef",p(),I6(r)},useState:function(r){x="useState",p();var g=T.H;T.H=B0;try{return U6(r)}finally{T.H=g}},useDebugValue:function(){x="useDebugValue",p()},useDeferredValue:function(r,g){return x="useDeferredValue",p(),C6(r,g)},useTransition:function(){return x="useTransition",p(),S6()},useSyncExternalStore:function(r,g,o){return x="useSyncExternalStore",p(),$6(r,g,o)},useId:function(){return x="useId",p(),t6()},useActionState:function(r,g){return x="useActionState",p(),Vh(r,g)},useFormState:function(r,g){return x="useFormState",p(),q2(),Vh(r,g)},useOptimistic:function(r){return x="useOptimistic",p(),L6(r)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return x="useCacheRefresh",p(),k6()},useEffectEvent:function(r){return x="useEffectEvent",p(),m6(r)}},TO={readContext:function(r){return Lg(r)},use:nl,useCallback:function(r,g){return x="useCallback",p(),J2(r,g)},useContext:function(r){return x="useContext",p(),Lg(r)},useEffect:function(r,g){x="useEffect",p(),yo(2048,no,r,g)},useImperativeHandle:function(r,g,o){return x="useImperativeHandle",p(),Y2(r,g,o)},useInsertionEffect:function(r,g){return x="useInsertionEffect",p(),yo(4,To,r,g)},useLayoutEffect:function(r,g){return x="useLayoutEffect",p(),yo(4,Mv,r,g)},useMemo:function(r,g){x="useMemo",p();var o=T.H;T.H=cv;try{return Q2(r,g)}finally{T.H=o}},useReducer:function(r,g,o){x="useReducer",p();var l=T.H;T.H=cv;try{return Dh(r,g,o)}finally{T.H=l}},useRef:function(){return x="useRef",p(),Og().memoizedState},useState:function(){x="useState",p();var r=T.H;T.H=cv;try{return Dh(kv)}finally{T.H=r}},useDebugValue:function(){x="useDebugValue",p()},useDeferredValue:function(r,g){return x="useDeferredValue",p(),hA(r,g)},useTransition:function(){return x="useTransition",p(),HA()},useSyncExternalStore:function(r,g,o){return x="useSyncExternalStore",p(),M2(r,g,o)},useId:function(){return x="useId",p(),Og().memoizedState},useFormState:function(r){return x="useFormState",p(),q2(),W2(r)},useActionState:function(r){return x="useActionState",p(),W2(r)},useOptimistic:function(r,g){return x="useOptimistic",p(),fq(r,g)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return x="useCacheRefresh",p(),Og().memoizedState},useEffectEvent:function(r){return x="useEffectEvent",p(),X2(r)}},g7={readContext:function(r){return Lg(r)},use:nl,useCallback:function(r,g){return x="useCallback",p(),J2(r,g)},useContext:function(r){return x="useContext",p(),Lg(r)},useEffect:function(r,g){x="useEffect",p(),yo(2048,no,r,g)},useImperativeHandle:function(r,g,o){return x="useImperativeHandle",p(),Y2(r,g,o)},useInsertionEffect:function(r,g){return x="useInsertionEffect",p(),yo(4,To,r,g)},useLayoutEffect:function(r,g){return x="useLayoutEffect",p(),yo(4,Mv,r,g)},useMemo:function(r,g){x="useMemo",p();var o=T.H;T.H=$u;try{return Q2(r,g)}finally{T.H=o}},useReducer:function(r,g,o){x="useReducer",p();var l=T.H;T.H=$u;try{return Gb(r,g,o)}finally{T.H=l}},useRef:function(){return x="useRef",p(),Og().memoizedState},useState:function(){x="useState",p();var r=T.H;T.H=$u;try{return Gb(kv)}finally{T.H=r}},useDebugValue:function(){x="useDebugValue",p()},useDeferredValue:function(r,g){return x="useDeferredValue",p(),bA(r,g)},useTransition:function(){return x="useTransition",p(),PA()},useSyncExternalStore:function(r,g,o){return x="useSyncExternalStore",p(),M2(r,g,o)},useId:function(){return x="useId",p(),Og().memoizedState},useFormState:function(r){return x="useFormState",p(),q2(),R2(r)},useActionState:function(r){return x="useActionState",p(),R2(r)},useOptimistic:function(r,g){return x="useOptimistic",p(),pq(r,g)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return x="useCacheRefresh",p(),Og().memoizedState},useEffectEvent:function(r){return x="useEffectEvent",p(),X2(r)}},B0={readContext:function(r){return Y(),Lg(r)},use:function(r){return M(),nl(r)},useCallback:function(r,g){return x="useCallback",M(),yr(),Z6(r,g)},useContext:function(r){return x="useContext",M(),yr(),Lg(r)},useEffect:function(r,g){return x="useEffect",M(),yr(),G2(r,g)},useImperativeHandle:function(r,g,o){return x="useImperativeHandle",M(),yr(),B6(r,g,o)},useInsertionEffect:function(r,g){x="useInsertionEffect",M(),yr(),y1(4,To,r,g)},useLayoutEffect:function(r,g){return x="useLayoutEffect",M(),yr(),N6(r,g)},useMemo:function(r,g){x="useMemo",M(),yr();var o=T.H;T.H=B0;try{return x6(r,g)}finally{T.H=o}},useReducer:function(r,g,o){x="useReducer",M(),yr();var l=T.H;T.H=B0;try{return z6(r,g,o)}finally{T.H=l}},useRef:function(r){return x="useRef",M(),yr(),I6(r)},useState:function(r){x="useState",M(),yr();var g=T.H;T.H=B0;try{return U6(r)}finally{T.H=g}},useDebugValue:function(){x="useDebugValue",M(),yr()},useDeferredValue:function(r,g){return x="useDeferredValue",M(),yr(),C6(r,g)},useTransition:function(){return x="useTransition",M(),yr(),S6()},useSyncExternalStore:function(r,g,o){return x="useSyncExternalStore",M(),yr(),$6(r,g,o)},useId:function(){return x="useId",M(),yr(),t6()},useFormState:function(r,g){return x="useFormState",M(),yr(),Vh(r,g)},useActionState:function(r,g){return x="useActionState",M(),yr(),Vh(r,g)},useOptimistic:function(r){return x="useOptimistic",M(),yr(),L6(r)},useMemoCache:function(r){return M(),E1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return x="useCacheRefresh",yr(),k6()},useEffectEvent:function(r){return x="useEffectEvent",M(),yr(),m6(r)}},cv={readContext:function(r){return Y(),Lg(r)},use:function(r){return M(),nl(r)},useCallback:function(r,g){return x="useCallback",M(),p(),J2(r,g)},useContext:function(r){return x="useContext",M(),p(),Lg(r)},useEffect:function(r,g){x="useEffect",M(),p(),yo(2048,no,r,g)},useImperativeHandle:function(r,g,o){return x="useImperativeHandle",M(),p(),Y2(r,g,o)},useInsertionEffect:function(r,g){return x="useInsertionEffect",M(),p(),yo(4,To,r,g)},useLayoutEffect:function(r,g){return x="useLayoutEffect",M(),p(),yo(4,Mv,r,g)},useMemo:function(r,g){x="useMemo",M(),p();var o=T.H;T.H=cv;try{return Q2(r,g)}finally{T.H=o}},useReducer:function(r,g,o){x="useReducer",M(),p();var l=T.H;T.H=cv;try{return Dh(r,g,o)}finally{T.H=l}},useRef:function(){return x="useRef",M(),p(),Og().memoizedState},useState:function(){x="useState",M(),p();var r=T.H;T.H=cv;try{return Dh(kv)}finally{T.H=r}},useDebugValue:function(){x="useDebugValue",M(),p()},useDeferredValue:function(r,g){return x="useDeferredValue",M(),p(),hA(r,g)},useTransition:function(){return x="useTransition",M(),p(),HA()},useSyncExternalStore:function(r,g,o){return x="useSyncExternalStore",M(),p(),M2(r,g,o)},useId:function(){return x="useId",M(),p(),Og().memoizedState},useFormState:function(r){return x="useFormState",M(),p(),W2(r)},useActionState:function(r){return x="useActionState",M(),p(),W2(r)},useOptimistic:function(r,g){return x="useOptimistic",M(),p(),fq(r,g)},useMemoCache:function(r){return M(),E1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return x="useCacheRefresh",p(),Og().memoizedState},useEffectEvent:function(r){return x="useEffectEvent",M(),p(),X2(r)}},$u={readContext:function(r){return Y(),Lg(r)},use:function(r){return M(),nl(r)},useCallback:function(r,g){return x="useCallback",M(),p(),J2(r,g)},useContext:function(r){return x="useContext",M(),p(),Lg(r)},useEffect:function(r,g){x="useEffect",M(),p(),yo(2048,no,r,g)},useImperativeHandle:function(r,g,o){return x="useImperativeHandle",M(),p(),Y2(r,g,o)},useInsertionEffect:function(r,g){return x="useInsertionEffect",M(),p(),yo(4,To,r,g)},useLayoutEffect:function(r,g){return x="useLayoutEffect",M(),p(),yo(4,Mv,r,g)},useMemo:function(r,g){x="useMemo",M(),p();var o=T.H;T.H=cv;try{return Q2(r,g)}finally{T.H=o}},useReducer:function(r,g,o){x="useReducer",M(),p();var l=T.H;T.H=cv;try{return Gb(r,g,o)}finally{T.H=l}},useRef:function(){return x="useRef",M(),p(),Og().memoizedState},useState:function(){x="useState",M(),p();var r=T.H;T.H=cv;try{return Gb(kv)}finally{T.H=r}},useDebugValue:function(){x="useDebugValue",M(),p()},useDeferredValue:function(r,g){return x="useDeferredValue",M(),p(),bA(r,g)},useTransition:function(){return x="useTransition",M(),p(),PA()},useSyncExternalStore:function(r,g,o){return x="useSyncExternalStore",M(),p(),M2(r,g,o)},useId:function(){return x="useId",M(),p(),Og().memoizedState},useFormState:function(r){return x="useFormState",M(),p(),R2(r)},useActionState:function(r){return x="useActionState",M(),p(),R2(r)},useOptimistic:function(r,g){return x="useOptimistic",M(),p(),pq(r,g)},useMemoCache:function(r){return M(),E1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return x="useCacheRefresh",p(),Og().memoizedState},useEffectEvent:function(r){return x="useEffectEvent",M(),p(),X2(r)}};var o7={},v7=new Set,l7=new Set,h7=new Set,b7=new Set,w7=new Set,e7=new Set,u7=new Set,O7=new Set,H7=new Set,P7=new Set;Object.freeze(o7);var nO={enqueueSetState:function(r,g,o){r=r._reactInternals;var l=ev(r),b=Zl(l);b.payload=g,o!==void 0&&o!==null&&(V6(o),b.callback=o),g=xl(r,b,l),g!==null&&(O0(l,"this.setState()",r),Zg(g,r,l),Ab(g,r,l))},enqueueReplaceState:function(r,g,o){r=r._reactInternals;var l=ev(r),b=Zl(l);b.tag=j9,b.payload=g,o!==void 0&&o!==null&&(V6(o),b.callback=o),g=xl(r,b,l),g!==null&&(O0(l,"this.replaceState()",r),Zg(g,r,l),Ab(g,r,l))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var o=ev(r),l=Zl(o);l.tag=f9,g!==void 0&&g!==null&&(V6(g),l.callback=g),g=xl(r,l,o),g!==null&&(O0(o,"this.forceUpdate()",r),Zg(g,r,o),Ab(g,r,o))}},i5=null,SO=null,tO=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),pg=!1,q7={},A7={},M7={},W7={},U5=!1,R7={},iu={},kO={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},G7=!1,X7=null;X7=new Set;var Ol=!1,dg=!1,DO=!1,Y7=typeof WeakSet==="function"?WeakSet:Set,eo=null,L5=null,F5=null,sg=null,fo=!1,jv=null,vo=!1,Aw=8192,yK={getCacheForType:function(r){var g=Lg(jg),o=g.data.get(r);return o===void 0&&(o=r(),g.data.set(r,o)),o},cacheSignal:function(){return Lg(jg).controller.signal},getOwner:function(){return Hv}};if(typeof Symbol==="function"&&Symbol.for){var Mw=Symbol.for;Mw("selector.component"),Mw("selector.has_pseudo_class"),Mw("selector.role"),Mw("selector.test_id"),Mw("selector.text")}var cK=[],jK=typeof WeakMap==="function"?WeakMap:Map,uo=0,lo=2,Wv=4,Hl=0,Ww=1,uh=2,Uu=3,v1=4,Lu=6,J7=5,og=uo,Gg=null,Er=null,Vr=0,ao=0,Fu=1,Oh=2,Rw=3,Q7=4,VO=5,Gw=6,Iu=7,_O=8,Hh=9,Hg=ao,Rv=null,l1=!1,I5=!1,EO=!1,Z0=0,Ng=Hl,h1=0,b1=0,yO=0,po=0,Ph=0,Xw=null,So=null,mu=!1,Nu=0,z7=0,K7=300,Bu=1/0,$7=500,Yw=null,Sg=null,w1=null,Zu=0,cO=1,jO=2,i7=3,e1=0,U7=1,L7=2,F7=3,I7=4,xu=5,ro=0,u1=null,m5=null,fv=0,fO=0,aO=-0,pO=null,m7=null,N7=null,av=Zu,B7=null,fK=50,Jw=0,dO=null,sO=!1,Cu=!1,aK=50,qh=0,Qw=null,N5=!1,Tu=null,Z7=!1,x7=new Set,pK={},nu=null,B5=null,rH=!1,gH=!1,Su=!1,oH=!1,O1=0,vH={};(function(){for(var r=0;r<AO.length;r++){var g=AO[r],o=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),tv(o,"on"+g)}tv(H9,"onAnimationEnd"),tv(P9,"onAnimationIteration"),tv(q9,"onAnimationStart"),tv("dblclick","onDoubleClick"),tv("focusin","onFocus"),tv("focusout","onBlur"),tv(UK,"onTransitionRun"),tv(LK,"onTransitionStart"),tv(FK,"onTransitionCancel"),tv(A9,"onTransitionEnd")})(),gv("onMouseEnter",["mouseout","mouseover"]),gv("onMouseLeave",["mouseout","mouseover"]),gv("onPointerEnter",["pointerout","pointerover"]),gv("onPointerLeave",["pointerout","pointerover"]),Ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ko("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zw="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lH=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zw)),tu="_reactListening"+Math.random().toString(36).slice(2),C7=!1,T7=!1,ku=!1,n7=!1,Du=!1,Vu=!1,S7=!1,_u={},dK=/\r\n?/g,sK=/\u0000|\uFFFD/g,Ah="http://www.w3.org/1999/xlink",hH="http://www.w3.org/XML/1998/namespace",r$="javascript:throw new Error('React form unexpectedly submitted.')",g$="suppressHydrationWarning",Mh="&",Eu="/&",Kw="$",$w="/$",H1="$?",Wh="$~",Z5="$!",o$="html",v$="body",l$="head",bH="F!",t7="F",k7="loading",h$="style",Pl=0,x5=1,yu=2,wH=null,eH=null,D7={dialog:!0,webview:!0},uH=null,iw=void 0,V7=typeof setTimeout==="function"?setTimeout:void 0,b$=typeof clearTimeout==="function"?clearTimeout:void 0,Rh=-1,_7=typeof Promise==="function"?Promise:void 0,w$=typeof queueMicrotask==="function"?queueMicrotask:typeof _7<"u"?function(r){return _7.resolve(null).then(r).catch(EQ)}:V7,OH=null,Gh=0,Uw=1,E7=2,y7=3,Cv=4,Tv=new Map,c7=new Set,ql=eg.d;eg.d={f:function(){var r=ql.f(),g=jh();return r||g},r:function(r){var g=Br(r);g!==null&&g.tag===5&&g.type==="form"?OA(g):ql.r(r)},D:function(r){ql.D(r),vW("dns-prefetch",r,null)},C:function(r,g){ql.C(r,g),vW("preconnect",r,g)},L:function(r,g,o){ql.L(r,g,o);var l=C5;if(l&&r&&g){var b='link[rel="preload"][as="'+Kv(g)+'"]';g==="image"?o&&o.imageSrcSet?(b+='[imagesrcset="'+Kv(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(b+='[imagesizes="'+Kv(o.imageSizes)+'"]')):b+='[href="'+Kv(r)+'"]':b+='[href="'+Kv(r)+'"]';var w=b;switch(g){case"style":w=ph(r);break;case"script":w=dh(r)}Tv.has(w)||(r=cr({rel:"preload",href:g==="image"&&o&&o.imageSrcSet?void 0:r,as:g},o),Tv.set(w,r),l.querySelector(b)!==null||g==="style"&&l.querySelector(Bb(w))||g==="script"&&l.querySelector(Zb(w))||(g=l.createElement("link"),Mo(g,"link",r),$r(g),l.head.appendChild(g)))}},m:function(r,g){ql.m(r,g);var o=C5;if(o&&r){var l=g&&typeof g.as==="string"?g.as:"script",b='link[rel="modulepreload"][as="'+Kv(l)+'"][href="'+Kv(r)+'"]',w=b;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":w=dh(r)}if(!Tv.has(w)&&(r=cr({rel:"modulepreload",href:r},g),Tv.set(w,r),o.querySelector(b)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zb(w)))return}l=o.createElement("link"),Mo(l,"link",r),$r(l),o.head.appendChild(l)}}},X:function(r,g){ql.X(r,g);var o=C5;if(o&&r){var l=vg(o).hoistableScripts,b=dh(r),w=l.get(b);w||(w=o.querySelector(Zb(b)),w||(r=cr({src:r,async:!0},g),(g=Tv.get(b))&&B8(r,g),w=o.createElement("script"),$r(w),Mo(w,"link",r),o.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},l.set(b,w))}},S:function(r,g,o){ql.S(r,g,o);var l=C5;if(l&&r){var b=vg(l).hoistableStyles,w=ph(r);g=g||"default";var O=b.get(w);if(!O){var P={loading:Gh,preload:null};if(O=l.querySelector(Bb(w)))P.loading=Uw|Cv;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},o),(o=Tv.get(w))&&N8(r,o);var W=O=l.createElement("link");$r(W),Mo(W,"link",r),W._p=new Promise(function(G,F){W.onload=G,W.onerror=F}),W.addEventListener("load",function(){P.loading|=Uw}),W.addEventListener("error",function(){P.loading|=E7}),P.loading|=Cv,k2(O,g,l)}O={type:"stylesheet",instance:O,count:1,state:P},b.set(w,O)}}},M:function(r,g){ql.M(r,g);var o=C5;if(o&&r){var l=vg(o).hoistableScripts,b=dh(r),w=l.get(b);w||(w=o.querySelector(Zb(b)),w||(r=cr({src:r,async:!0,type:"module"},g),(g=Tv.get(b))&&B8(r,g),w=o.createElement("script"),$r(w),Mo(w,"link",r),o.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},l.set(b,w))}}};var C5=typeof document>"u"?null:document,cu=null,e$=60000,u$=800,O$=500,HH=0,PH=null,ju=null,Xh=$z,Lw={$$typeof:K0,Provider:null,Consumer:null,_currentValue:Xh,_currentValue2:Xh,_threadCount:0},j7="%c%s%c",f7="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",a7="",fu=" ",H$=Function.prototype.bind,p7=!1,d7=null,s7=null,rR=null,gR=null,oR=null,vR=null,lR=null,hR=null,bR=null,wR=null;d7=function(r,g,o,l){g=v(r,g),g!==null&&(o=h(g.memoizedState,o,0,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=$o(r,2),o!==null&&Zg(o,r,2))},s7=function(r,g,o){g=v(r,g),g!==null&&(o=H(g.memoizedState,o,0),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=$o(r,2),o!==null&&Zg(o,r,2))},rR=function(r,g,o,l){g=v(r,g),g!==null&&(o=e(g.memoizedState,o,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=$o(r,2),o!==null&&Zg(o,r,2))},gR=function(r,g,o){r.pendingProps=h(r.memoizedProps,g,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$o(r,2),g!==null&&Zg(g,r,2)},oR=function(r,g){r.pendingProps=H(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$o(r,2),g!==null&&Zg(g,r,2)},vR=function(r,g,o){r.pendingProps=e(r.memoizedProps,g,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$o(r,2),g!==null&&Zg(g,r,2)},lR=function(r){var g=$o(r,2);g!==null&&Zg(g,r,2)},hR=function(r){var g=Zh(),o=$o(r,g);o!==null&&Zg(o,r,g)},bR=function(r){A=r},wR=function(r){q=r};var au=!0,pu=null,qH=!1,P1=null,q1=null,A1=null,Fw=new Map,Iw=new Map,M1=[],P$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),du=null;if(y2.prototype.render=S8.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):y(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var l=g.current,b=ev(l);Z8(l,b,o,g,null,null)},y2.prototype.unmount=S8.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(og&(lo|Wv))!==uo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Z8(r.current,2,null,r,null,null),jh(),g[El]=null}},y2.prototype.unstable_scheduleHydration=function(r){if(r){var g=N();r={blockedOn:null,target:r,priority:g};for(var o=0;o<M1.length&&g!==0&&g<M1[o].priority;o++);M1.splice(o,0,r),o===0&&RW(r)}},function(){var r=n5.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),eg.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=s(g),r=r!==null?lr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.5"};return r.overrideHookState=d7,r.overrideHookStateDeletePath=s7,r.overrideHookStateRenamePath=rR,r.overrideProps=gR,r.overridePropsDeletePath=oR,r.overridePropsRenamePath=vR,r.scheduleUpdate=lR,r.scheduleRetry=hR,r.setErrorHandler=bR,r.setSuspenseHandler=wR,r.scheduleRefresh=j,r.scheduleRoot=m,r.setRefreshHandler=Z,r.getCurrentFiber=Rz,Bh(r)}()&&F0&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var eR=window.location.protocol;/^(https?|file):$/.test(eR)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(eR==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}U$.createRoot=function(r,g){if(!y(r))throw Error("Target container is not a DOM element.");JW(r);var o=!1,l="",b=GA,w=XA,O=YA;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===z0&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(o=!0),g.identifierPrefix!==void 0&&(l=g.identifierPrefix),g.onUncaughtError!==void 0&&(b=g.onUncaughtError),g.onCaughtError!==void 0&&(w=g.onCaughtError),g.onRecoverableError!==void 0&&(O=g.onRecoverableError)),g=OW(r,1,!1,null,null,o,l,null,b,w,O,YW),r[El]=g.current,Y8(r),new S8(g)},U$.hydrateRoot=function(r,g,o){if(!y(r))throw Error("Target container is not a DOM element.");JW(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,b="",w=GA,O=XA,P=YA,W=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(b=o.identifierPrefix),o.onUncaughtError!==void 0&&(w=o.onUncaughtError),o.onCaughtError!==void 0&&(O=o.onCaughtError),o.onRecoverableError!==void 0&&(P=o.onRecoverableError),o.formState!==void 0&&(W=o.formState)),g=OW(r,1,!0,g,o!=null?o:null,l,b,W,w,O,P,YW),g.context=HW(null),o=g.current,l=ev(o),l=x1(l),b=Zl(l),b.callback=null,xl(o,b,l),O0(l,"hydrateRoot()",null),o=l,g.current.lanes=o,Ul(g,o),J0(g),r[El]=g.current,Y8(r),new y2(g)},U$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var AR=Yh((EN,qR)=>{qR.exports=PR()});var rg=Yh((ki)=>{var ih=qr(hg());(function(){function v(S){if(S==null)return null;if(typeof S==="function")return S.$$typeof===n?null:S.displayName||S.name||null;if(typeof S==="string")return S;switch(S){case Z:return"Fragment";case rr:return"Profiler";case y:return"StrictMode";case s:return"Suspense";case lr:return"SuspenseList";case c:return"Activity"}if(typeof S==="object")switch(typeof S.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),S.$$typeof){case j:return"Portal";case vr:return S.displayName||"Context";case Pr:return(S._context.displayName||"Context")+".Consumer";case a:var t=S.render;return S=S.displayName,S||(S=t.displayName||t.name||"",S=S!==""?"ForwardRef("+S+")":"ForwardRef"),S;case C:return t=S.displayName||null,t!==null?t:v(S.type)||"Memo";case V:t=S._payload,S=S._init;try{return v(S(t))}catch(Hr){}}return null}function h(S){return""+S}function e(S){try{h(S);var t=!1}catch(Gr){t=!0}if(t){t=console;var Hr=t.error,zr=typeof Symbol==="function"&&Symbol.toStringTag&&S[Symbol.toStringTag]||S.constructor.name||"Object";return Hr.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",zr),h(S)}}function u(S){if(S===Z)return"<>";if(typeof S==="object"&&S!==null&&S.$$typeof===V)return"<...>";try{var t=v(S);return t?"<"+t+">":"<...>"}catch(Hr){return"<...>"}}function H(){var S=Jr.A;return S===null?null:S.getOwner()}function q(){return Error("react-stack-top-frame")}function A(S){if(Rr.call(S,"key")){var t=Object.getOwnPropertyDescriptor(S,"key").get;if(t&&t.isReactWarning)return!1}return S.key!==void 0}function M(S,t){function Hr(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}Hr.isReactWarning=!0,Object.defineProperty(S,"key",{get:Hr,configurable:!0})}function Y(){var S=v(this.type);return d[S]||(d[S]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),S=this.props.ref,S!==void 0?S:null}function Q(S,t,Hr,zr,Gr,Tr){var wr=Hr.ref;return S={$$typeof:m,type:S,key:t,props:Hr,_owner:zr},(wr!==void 0?wr:null)!==null?Object.defineProperty(S,"ref",{enumerable:!1,get:Y}):Object.defineProperty(S,"ref",{enumerable:!1,value:null}),S._store={},Object.defineProperty(S._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(S,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(S,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Gr}),Object.defineProperty(S,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Tr}),Object.freeze&&(Object.freeze(S.props),Object.freeze(S)),S}function J(S,t,Hr,zr,Gr,Tr){var wr=t.children;if(wr!==void 0)if(zr)if(Qr(wr)){for(zr=0;zr<wr.length;zr++)R(wr[zr]);Object.freeze&&Object.freeze(wr)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else R(wr);if(Rr.call(t,"key")){wr=v(S);var nr=Object.keys(t).filter(function(Xg){return Xg!=="key"});zr=0<nr.length?"{key: someKey, "+nr.join(": ..., ")+": ...}":"{key: someKey}",Wr[wr+zr]||(nr=0<nr.length?"{"+nr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,zr,wr,nr,wr),Wr[wr+zr]=!0)}if(wr=null,Hr!==void 0&&(e(Hr),wr=""+Hr),A(t)&&(e(t.key),wr=""+t.key),"key"in t){Hr={};for(var ar in t)ar!=="key"&&(Hr[ar]=t[ar])}else Hr=t;return wr&&M(Hr,typeof S==="function"?S.displayName||S.name||"Unknown":S),Q(S,wr,Hr,H(),Gr,Tr)}function R(S){z(S)?S._store&&(S._store.validated=1):typeof S==="object"&&S!==null&&S.$$typeof===V&&(S._payload.status==="fulfilled"?z(S._payload.value)&&S._payload.value._store&&(S._payload.value._store.validated=1):S._store&&(S._store.validated=1))}function z(S){return typeof S==="object"&&S!==null&&S.$$typeof===m}var m=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),Pr=Symbol.for("react.consumer"),vr=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),lr=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),c=Symbol.for("react.activity"),n=Symbol.for("react.client.reference"),Jr=ih.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rr=Object.prototype.hasOwnProperty,Qr=Array.isArray,Cr=console.createTask?console.createTask:function(){return null};ih={react_stack_bottom_frame:function(S){return S()}};var k,d={},hr=ih.react_stack_bottom_frame.bind(ih,q)(),or=Cr(u(q)),Wr={};ki.Fragment=Z,ki.jsxDEV=function(S,t,Hr,zr){var Gr=1e4>Jr.recentlyCreatedOwnerStacks++;return J(S,t,Hr,zr,Gr?Error("react-stack-top-frame"):hr,Gr?Cr(u(S)):or)}})()});var zP=qr(hg(),1),KP=qr(AR(),1);var MR=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var WR=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var RR=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var GR=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var XR=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var YR=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var JR=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var QR=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var zR=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var KR=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var $R=MR+WR+RR+GR+XR+YR+JR+QR+zR+KR;var Kg=qr(hg(),1);var o4=qr(hg(),1);var r4=(...v)=>v.filter((h,e,u)=>{return Boolean(h)&&h.trim()!==""&&u.indexOf(h)===e}).join(" ").trim();var iR=(v)=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var UR=(v)=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,e,u)=>u?u.toUpperCase():e.toLowerCase());var RH=(v)=>{let h=UR(v);return h.charAt(0).toUpperCase()+h.slice(1)};var mw=qr(hg(),1);var g4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var LR=(v)=>{for(let h in v)if(h.startsWith("aria-")||h==="role"||h==="title")return!0;return!1};var S5=qr(hg(),1),n$=S5.createContext({});var FR=()=>S5.useContext(n$);var IR=mw.forwardRef(({color:v,size:h,strokeWidth:e,absoluteStrokeWidth:u,className:H="",children:q,iconNode:A,...M},Y)=>{let{size:Q=24,strokeWidth:J=2,absoluteStrokeWidth:R=!1,color:z="currentColor",className:m=""}=FR()??{},j=u??R?Number(e??J)*24/Number(h??Q):e??J;return mw.createElement("svg",{ref:Y,...g4,width:h??Q??g4.width,height:h??Q??g4.height,stroke:v??z,strokeWidth:j,className:r4("lucide",m,H),...!q&&!LR(M)&&{"aria-hidden":"true"},...M},[...A.map(([Z,y])=>mw.createElement(Z,y)),...Array.isArray(q)?q:[q]])});var E=(v,h)=>{let e=o4.forwardRef(({className:u,...H},q)=>o4.createElement(IR,{ref:q,iconNode:h,className:r4(`lucide-${iR(RH(v))}`,`lucide-${v}`,u),...H}));return e.displayName=RH(v),e};var S$=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],x0=E("braces",S$);var t$=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],W1=E("chart-column",t$);var k$=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Go=E("code-xml",k$);var D$=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],C0=E("file-code-corner",D$);var V$=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],R1=E("layers",V$);var _$=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],G1=E("loader-circle",_$);var E$=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],nv=E("triangle-alert",E$);var y$=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],X1=E("user-round",y$);var c$=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Nw=E("activity",c$);var j$=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Bw=E("arrow-down-to-line",j$);var f$=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Zw=E("arrow-up-to-line",f$);var a$=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],xw=E("blocks",a$);var p$=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Qh=E("book-marked",p$);var d$=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Cw=E("book-open",d$);var s$=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Tw=E("calendar",s$);var ri=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],nw=E("check",ri);var gi=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xo=E("chevron-down",gi);var oi=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Sw=E("chevron-left",oi);var vi=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ml=E("chevron-right",vi);var li=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Gv=E("chevron-up",li);var hi=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],tw=E("chevrons-up-down",hi);var bi=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],kw=E("clock",bi);var wi=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pv=E("copy",wi);var ei=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dv=E("database",ei);var ui=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],zh=E("download",ui);var Oi=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Dw=E("eye",Oi);var Hi=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Kh=E("folder-open",Hi);var Pi=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Vw=E("hash",Pi);var qi=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],_w=E("link-2",qi);var Ai=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],Ew=E("list-ordered",Ai);var Mi=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],yw=E("list",Mi);var Wi=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],cw=E("lock",Wi);var Ri=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],t5=E("message-square-plus",Ri);var Gi=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],jw=E("message-square",Gi);var Xi=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],fw=E("package",Xi);var Yi=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sv=E("pencil",Yi);var Ji=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],aw=E("play",Ji);var Qi=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],pw=E("plus",Qi);var zi=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],dw=E("radio",zi);var Ki=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Wl=E("refresh-cw",Ki);var $i=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],sw=E("save",$i);var ii=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Y1=E("search",ii);var Ui=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],k5=E("shield-alert",Ui);var Li=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],re=E("shield",Li);var Fi=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],ge=E("syringe",Fi);var Ii=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],T0=E("terminal",Ii);var mi=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],$h=E("timer",mi);var Ni=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],oe=E("toggle-left",Ni);var Bi=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],ve=E("toggle-right",Bi);var Zi=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Lo=E("trash-2",Zi);var xi=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],le=E("type",xi);var Ci=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],he=E("upload",Ci);var Ti=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],D5=E("user-plus",Ti);var ni=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],be=E("wrench",ni);var Si=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],to=E("x",Si);var ti=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Rl=E("zap",ti);var v4={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var m4=qr(hg(),1);var Ke=qr(hg(),1);var Cg=qr(rg(),1),Di={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},mR=({script:v,selected:h,dot:e,duration:u,onSelect:H,onEdit:q,sendToBackend:A})=>{let M=(z)=>{z.stopPropagation(),A({type:"update_script",id:v.id,patch:{enabled:!v.enabled}})},Y=(z)=>{z.stopPropagation(),A({type:"duplicate_script",id:v.id})},Q=(z)=>{if(z.stopPropagation(),!window.confirm(`Delete "${v.name}"?`))return;A({type:"delete_script",id:v.id})},J=(z)=>{z.stopPropagation(),q()},R=v.bindings?.length??0;return Cg.jsxDEV("div",{className:`ls-item${h?" ls-selected":""}${!v.enabled&&v.type!=="library"?" ls-disabled":""}`,onClick:H,children:[Cg.jsxDEV("span",{className:Di[e],title:e},void 0,!1,void 0,this),Cg.jsxDEV("div",{className:"ls-item-body",children:[Cg.jsxDEV("div",{className:"ls-item-name",title:v.name,children:v.name},void 0,!1,void 0,this),Cg.jsxDEV("div",{className:"ls-item-meta",children:[v.type!=="library"&&Cg.jsxDEV("span",{children:v.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),u!==void 0&&e!=="running"&&Cg.jsxDEV("span",{style:{color:e==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[u,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.type!=="library"&&R>0&&Cg.jsxDEV("div",{className:"ls-item-bindings",children:v.bindings.map((z,m)=>Cg.jsxDEV("span",{className:"ls-binding-badge",children:[z.type==="character"?Cg.jsxDEV(X1,{size:9},void 0,!1,void 0,this):Cg.jsxDEV(jw,{size:9},void 0,!1,void 0,this),Cg.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:z.displayName},void 0,!1,void 0,this)]},m,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cg.jsxDEV("div",{className:"ls-item-actions",children:[Cg.jsxDEV("button",{className:"ls-icon-btn",onClick:J,title:"Edit script",children:Cg.jsxDEV(sv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),v.type!=="library"&&Cg.jsxDEV("button",{className:"ls-icon-btn",onClick:M,title:v.enabled?"Disable":"Enable",children:v.enabled?Cg.jsxDEV(ve,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Cg.jsxDEV(oe,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Cg.jsxDEV("button",{className:"ls-icon-btn",onClick:Y,title:"Duplicate",children:Cg.jsxDEV(pv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Cg.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:Q,title:"Delete",children:Cg.jsxDEV(Lo,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Tg=Uint8Array,Xv=Uint16Array,LH=Int32Array,h4=new Tg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),b4=new Tg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),QH=new Tg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),TR=function(v,h){var e=new Xv(31);for(var u=0;u<31;++u)e[u]=h+=1<<v[u-1];var H=new LH(e[30]);for(var u=1;u<30;++u)for(var q=e[u];q<e[u+1];++q)H[q]=q-e[u]<<5|u;return{b:e,r:H}},nR=TR(h4,2),SR=nR.b,zH=nR.r;SR[28]=258,zH[258]=28;var tR=TR(b4,0),Vi=tR.b,NR=tR.r,KH=new Xv(32768);for(gg=0;gg<32768;++gg)n0=(gg&43690)>>1|(gg&21845)<<1,n0=(n0&52428)>>2|(n0&13107)<<2,n0=(n0&61680)>>4|(n0&3855)<<4,KH[gg]=((n0&65280)>>8|(n0&255)<<8)>>1;var n0,gg,t0=function(v,h,e){var u=v.length,H=0,q=new Xv(h);for(;H<u;++H)if(v[H])++q[v[H]-1];var A=new Xv(h);for(H=1;H<h;++H)A[H]=A[H-1]+q[H-1]<<1;var M;if(e){M=new Xv(1<<h);var Y=15-h;for(H=0;H<u;++H)if(v[H]){var Q=H<<4|v[H],J=h-v[H],R=A[v[H]-1]++<<J;for(var z=R|(1<<J)-1;R<=z;++R)M[KH[R]>>Y]=Q}}else{M=new Xv(u);for(H=0;H<u;++H)if(v[H])M[H]=KH[A[v[H]-1]++]>>15-v[H]}return M},J1=new Tg(288);for(gg=0;gg<144;++gg)J1[gg]=8;var gg;for(gg=144;gg<256;++gg)J1[gg]=9;var gg;for(gg=256;gg<280;++gg)J1[gg]=7;var gg;for(gg=280;gg<288;++gg)J1[gg]=8;var gg,ue=new Tg(32);for(gg=0;gg<32;++gg)ue[gg]=5;var gg,_i=t0(J1,9,0),Ei=t0(J1,9,1),yi=t0(ue,5,0),ci=t0(ue,5,1),GH=function(v){var h=v[0];for(var e=1;e<v.length;++e)if(v[e]>h)h=v[e];return h},r0=function(v,h,e){var u=h/8|0;return(v[u]|v[u+1]<<8)>>(h&7)&e},XH=function(v,h){var e=h/8|0;return(v[e]|v[e+1]<<8|v[e+2]<<16)>>(h&7)},FH=function(v){return(v+7)/8|0},Oe=function(v,h,e){if(h==null||h<0)h=0;if(e==null||e>v.length)e=v.length;return new Tg(v.subarray(h,e))};var ji=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ko=function(v,h,e){var u=Error(h||ji[v]);if(u.code=v,Error.captureStackTrace)Error.captureStackTrace(u,ko);if(!e)throw u;return u},fi=function(v,h,e,u){var H=v.length,q=u?u.length:0;if(!H||h.f&&!h.l)return e||new Tg(0);var A=!e,M=A||h.i!=2,Y=h.i;if(A)e=new Tg(H*3);var Q=function(er){var _o=e.length;if(er>_o){var zo=new Tg(Math.max(_o*2,er));zo.set(e),e=zo}},J=h.f||0,R=h.p||0,z=h.b||0,m=h.l,j=h.d,Z=h.m,y=h.n,rr=H*8;do{if(!m){J=r0(v,R,1);var Pr=r0(v,R+1,3);if(R+=3,!Pr){var vr=FH(R)+4,a=v[vr-4]|v[vr-3]<<8,s=vr+a;if(s>H){if(Y)ko(0);break}if(M)Q(z+a);e.set(v.subarray(vr,s),z),h.b=z+=a,h.p=R=s*8,h.f=J;continue}else if(Pr==1)m=Ei,j=ci,Z=9,y=5;else if(Pr==2){var lr=r0(v,R,31)+257,C=r0(v,R+10,15)+4,V=lr+r0(v,R+5,31)+1;R+=14;var c=new Tg(V),n=new Tg(19);for(var Jr=0;Jr<C;++Jr)n[QH[Jr]]=r0(v,R+Jr*3,7);R+=C*3;var Rr=GH(n),Qr=(1<<Rr)-1,Cr=t0(n,Rr,1);for(var Jr=0;Jr<V;){var k=Cr[r0(v,R,Qr)];R+=k&15;var vr=k>>4;if(vr<16)c[Jr++]=vr;else{var d=0,hr=0;if(vr==16)hr=3+r0(v,R,3),R+=2,d=c[Jr-1];else if(vr==17)hr=3+r0(v,R,7),R+=3;else if(vr==18)hr=11+r0(v,R,127),R+=7;while(hr--)c[Jr++]=d}}var or=c.subarray(0,lr),Wr=c.subarray(lr);Z=GH(or),y=GH(Wr),m=t0(or,Z,1),j=t0(Wr,y,1)}else ko(1);if(R>rr){if(Y)ko(0);break}}if(M)Q(z+131072);var S=(1<<Z)-1,t=(1<<y)-1,Hr=R;for(;;Hr=R){var d=m[XH(v,R)&S],zr=d>>4;if(R+=d&15,R>rr){if(Y)ko(0);break}if(!d)ko(2);if(zr<256)e[z++]=zr;else if(zr==256){Hr=R,m=null;break}else{var Gr=zr-254;if(zr>264){var Jr=zr-257,Tr=h4[Jr];Gr=r0(v,R,(1<<Tr)-1)+SR[Jr],R+=Tr}var wr=j[XH(v,R)&t],nr=wr>>4;if(!wr)ko(3);R+=wr&15;var Wr=Vi[nr];if(nr>3){var Tr=b4[nr];Wr+=XH(v,R)&(1<<Tr)-1,R+=Tr}if(R>rr){if(Y)ko(0);break}if(M)Q(z+131072);var ar=z+Gr;if(z<Wr){var Xg=q-Wr,Io=Math.min(Wr,ar);if(Xg+z<0)ko(3);for(;z<Io;++z)e[z]=u[Xg+z]}for(;z<ar;++z)e[z]=e[z-Wr]}}if(h.l=m,h.p=Hr,h.b=z,h.f=J,m)J=1,h.m=Z,h.d=j,h.n=y}while(!J);return z!=e.length&&A?Oe(e,0,z):e.subarray(0,z)},Gl=function(v,h,e){e<<=h&7;var u=h/8|0;v[u]|=e,v[u+1]|=e>>8},we=function(v,h,e){e<<=h&7;var u=h/8|0;v[u]|=e,v[u+1]|=e>>8,v[u+2]|=e>>16},YH=function(v,h){var e=[];for(var u=0;u<v.length;++u)if(v[u])e.push({s:u,f:v[u]});var H=e.length,q=e.slice();if(!H)return{t:DR,l:0};if(H==1){var A=new Tg(e[0].s+1);return A[e[0].s]=1,{t:A,l:1}}e.sort(function(s,lr){return s.f-lr.f}),e.push({s:-1,f:25001});var M=e[0],Y=e[1],Q=0,J=1,R=2;e[0]={s:-1,f:M.f+Y.f,l:M,r:Y};while(J!=H-1)M=e[e[Q].f<e[R].f?Q++:R++],Y=e[Q!=J&&e[Q].f<e[R].f?Q++:R++],e[J++]={s:-1,f:M.f+Y.f,l:M,r:Y};var z=q[0].s;for(var u=1;u<H;++u)if(q[u].s>z)z=q[u].s;var m=new Xv(z+1),j=$H(e[J-1],m,0);if(j>h){var u=0,Z=0,y=j-h,rr=1<<y;q.sort(function(lr,C){return m[C.s]-m[lr.s]||lr.f-C.f});for(;u<H;++u){var Pr=q[u].s;if(m[Pr]>h)Z+=rr-(1<<j-m[Pr]),m[Pr]=h;else break}Z>>=y;while(Z>0){var vr=q[u].s;if(m[vr]<h)Z-=1<<h-m[vr]++-1;else++u}for(;u>=0&&Z;--u){var a=q[u].s;if(m[a]==h)--m[a],++Z}j=h}return{t:new Tg(m),l:j}},$H=function(v,h,e){return v.s==-1?Math.max($H(v.l,h,e+1),$H(v.r,h,e+1)):h[v.s]=e},BR=function(v){var h=v.length;while(h&&!v[--h]);var e=new Xv(++h),u=0,H=v[0],q=1,A=function(Y){e[u++]=Y};for(var M=1;M<=h;++M)if(v[M]==H&&M!=h)++q;else{if(!H&&q>2){for(;q>138;q-=138)A(32754);if(q>2)A(q>10?q-11<<5|28690:q-3<<5|12305),q=0}else if(q>3){A(H),--q;for(;q>6;q-=6)A(8304);if(q>2)A(q-3<<5|8208),q=0}while(q--)A(H);q=1,H=v[M]}return{c:e.subarray(0,u),n:h}},ee=function(v,h){var e=0;for(var u=0;u<h.length;++u)e+=v[u]*h[u];return e},kR=function(v,h,e){var u=e.length,H=FH(h+2);v[H]=u&255,v[H+1]=u>>8,v[H+2]=v[H]^255,v[H+3]=v[H+1]^255;for(var q=0;q<u;++q)v[H+q+4]=e[q];return(H+4+u)*8},ZR=function(v,h,e,u,H,q,A,M,Y,Q,J){Gl(h,J++,e),++H[256];var R=YH(H,15),z=R.t,m=R.l,j=YH(q,15),Z=j.t,y=j.l,rr=BR(z),Pr=rr.c,vr=rr.n,a=BR(Z),s=a.c,lr=a.n,C=new Xv(19);for(var V=0;V<Pr.length;++V)++C[Pr[V]&31];for(var V=0;V<s.length;++V)++C[s[V]&31];var c=YH(C,7),n=c.t,Jr=c.l,Rr=19;for(;Rr>4&&!n[QH[Rr-1]];--Rr);var Qr=Q+5<<3,Cr=ee(H,J1)+ee(q,ue)+A,k=ee(H,z)+ee(q,Z)+A+14+3*Rr+ee(C,n)+2*C[16]+3*C[17]+7*C[18];if(Y>=0&&Qr<=Cr&&Qr<=k)return kR(h,J,v.subarray(Y,Y+Q));var d,hr,or,Wr;if(Gl(h,J,1+(k<Cr)),J+=2,k<Cr){d=t0(z,m,0),hr=z,or=t0(Z,y,0),Wr=Z;var S=t0(n,Jr,0);Gl(h,J,vr-257),Gl(h,J+5,lr-1),Gl(h,J+10,Rr-4),J+=14;for(var V=0;V<Rr;++V)Gl(h,J+3*V,n[QH[V]]);J+=3*Rr;var t=[Pr,s];for(var Hr=0;Hr<2;++Hr){var zr=t[Hr];for(var V=0;V<zr.length;++V){var Gr=zr[V]&31;if(Gl(h,J,S[Gr]),J+=n[Gr],Gr>15)Gl(h,J,zr[V]>>5&127),J+=zr[V]>>12}}}else d=_i,hr=J1,or=yi,Wr=ue;for(var V=0;V<M;++V){var Tr=u[V];if(Tr>255){var Gr=Tr>>18&31;if(we(h,J,d[Gr+257]),J+=hr[Gr+257],Gr>7)Gl(h,J,Tr>>23&31),J+=h4[Gr];var wr=Tr&31;if(we(h,J,or[wr]),J+=Wr[wr],wr>3)we(h,J,Tr>>5&8191),J+=b4[wr]}else we(h,J,d[Tr]),J+=hr[Tr]}return we(h,J,d[256]),J+hr[256]},ai=new LH([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),DR=new Tg(0),pi=function(v,h,e,u,H,q){var A=q.z||v.length,M=new Tg(u+A+5*(1+Math.ceil(A/7000))+H),Y=M.subarray(u,M.length-H),Q=q.l,J=(q.r||0)&7;if(h){if(J)Y[0]=q.r>>3;var R=ai[h-1],z=R>>13,m=R&8191,j=(1<<e)-1,Z=q.p||new Xv(32768),y=q.h||new Xv(j+1),rr=Math.ceil(e/3),Pr=2*rr,vr=function(rv){return(v[rv]^v[rv+1]<<rr^v[rv+2]<<Pr)&j},a=new LH(25000),s=new Xv(288),lr=new Xv(32),C=0,V=0,c=q.i||0,n=0,Jr=q.w||0,Rr=0;for(;c+2<A;++c){var Qr=vr(c),Cr=c&32767,k=y[Qr];if(Z[Cr]=k,y[Qr]=Cr,Jr<=c){var d=A-c;if((C>7000||n>24576)&&(d>423||!Q)){J=ZR(v,Y,0,a,s,lr,V,n,Rr,c-Rr,J),n=C=V=0,Rr=c;for(var hr=0;hr<286;++hr)s[hr]=0;for(var hr=0;hr<30;++hr)lr[hr]=0}var or=2,Wr=0,S=m,t=Cr-k&32767;if(d>2&&Qr==vr(c-t)){var Hr=Math.min(z,d)-1,zr=Math.min(32767,c),Gr=Math.min(258,d);while(t<=zr&&--S&&Cr!=k){if(v[c+or]==v[c+or-t]){var Tr=0;for(;Tr<Gr&&v[c+Tr]==v[c+Tr-t];++Tr);if(Tr>or){if(or=Tr,Wr=t,Tr>Hr)break;var wr=Math.min(t,Tr-2),nr=0;for(var hr=0;hr<wr;++hr){var ar=c-t+hr&32767,Xg=Z[ar],Io=ar-Xg&32767;if(Io>nr)nr=Io,k=ar}}}Cr=k,k=Z[Cr],t+=Cr-k&32767}}if(Wr){a[n++]=268435456|zH[or]<<18|NR[Wr];var er=zH[or]&31,_o=NR[Wr]&31;V+=h4[er]+b4[_o],++s[257+er],++lr[_o],Jr=c+or,++C}else a[n++]=v[c],++s[v[c]]}}for(c=Math.max(c,Jr);c<A;++c)a[n++]=v[c],++s[v[c]];if(J=ZR(v,Y,Q,a,s,lr,V,n,Rr,c-Rr,J),!Q)q.r=J&7|Y[J/8|0]<<3,J-=7,q.h=y,q.p=Z,q.i=c,q.w=Jr}else{for(var c=q.w||0;c<A+Q;c+=65535){var zo=c+65535;if(zo>=A)Y[J/8|0]=Q,zo=A;J=kR(Y,J+1,v.subarray(c,zo))}q.i=A}return Oe(M,0,u+FH(J)+H)},di=function(){var v=new Int32Array(256);for(var h=0;h<256;++h){var e=h,u=9;while(--u)e=(e&1&&-306674912)^e>>>1;v[h]=e}return v}(),si=function(){var v=-1;return{p:function(h){var e=v;for(var u=0;u<h.length;++u)e=di[e&255^h[u]]^e>>>8;v=e},d:function(){return~v}}};var rU=function(v,h,e,u,H){if(!H){if(H={l:1},h.dictionary){var q=h.dictionary.subarray(-32768),A=new Tg(q.length+v.length);A.set(q),A.set(v,q.length),v=A,H.w=q.length}}return pi(v,h.level==null?6:h.level,h.mem==null?H.l?Math.ceil(Math.max(8,Math.min(13,Math.log(v.length)))*1.5):20:12+h.mem,e,u,H)},VR=function(v,h){var e={};for(var u in v)e[u]=v[u];for(var u in h)e[u]=h[u];return e};var S0=function(v,h){return v[h]|v[h+1]<<8},g0=function(v,h){return(v[h]|v[h+1]<<8|v[h+2]<<16|v[h+3]<<24)>>>0},JH=function(v,h){return g0(v,h)+g0(v,h+4)*4294967296},Yo=function(v,h,e){for(;e;++h)v[h]=e,e>>>=8};function gU(v,h){return rU(v,h||{},0,0)}function oU(v,h){return fi(v,{i:2},h&&h.out,h&&h.dictionary)}var _R=function(v,h,e,u){for(var H in v){var q=v[H],A=h+H,M=u;if(Array.isArray(q))M=VR(u,q[1]),q=q[0];if(q instanceof Tg)e[A]=[q,M];else e[A+="/"]=[new Tg(0),M],_R(q,A,e,u)}},xR=typeof TextEncoder<"u"&&new TextEncoder,iH=typeof TextDecoder<"u"&&new TextDecoder,vU=0;try{iH.decode(DR,{stream:!0}),vU=1}catch(v){}var lU=function(v){for(var h="",e=0;;){var u=v[e++],H=(u>127)+(u>223)+(u>239);if(e+H>v.length)return{s:h,r:Oe(v,e-1)};if(!H)h+=String.fromCharCode(u);else if(H==3)u=((u&15)<<18|(v[e++]&63)<<12|(v[e++]&63)<<6|v[e++]&63)-65536,h+=String.fromCharCode(55296|u>>10,56320|u&1023);else if(H&1)h+=String.fromCharCode((u&31)<<6|v[e++]&63);else h+=String.fromCharCode((u&15)<<12|(v[e++]&63)<<6|v[e++]&63)}};function l4(v,h){if(h){var e=new Tg(v.length);for(var u=0;u<v.length;++u)e[u]=v.charCodeAt(u);return e}if(xR)return xR.encode(v);var H=v.length,q=new Tg(v.length+(v.length>>1)),A=0,M=function(J){q[A++]=J};for(var u=0;u<H;++u){if(A+5>q.length){var Y=new Tg(A+8+(H-u<<1));Y.set(q),q=Y}var Q=v.charCodeAt(u);if(Q<128||h)M(Q);else if(Q<2048)M(192|Q>>6),M(128|Q&63);else if(Q>55295&&Q<57344)Q=65536+(Q&1047552)|v.charCodeAt(++u)&1023,M(240|Q>>18),M(128|Q>>12&63),M(128|Q>>6&63),M(128|Q&63);else M(224|Q>>12),M(128|Q>>6&63),M(128|Q&63)}return Oe(q,0,A)}function IH(v,h){if(h){var e="";for(var u=0;u<v.length;u+=16384)e+=String.fromCharCode.apply(null,v.subarray(u,u+16384));return e}else if(iH)return iH.decode(v);else{var H=lU(v),q=H.s,e=H.r;if(e.length)ko(8);return q}}var hU=function(v,h){return h+30+S0(v,h+26)+S0(v,h+28)},bU=function(v,h,e){var u=S0(v,h+28),H=IH(v.subarray(h+46,h+46+u),!(S0(v,h+8)&2048)),q=h+46+u,A=g0(v,h+20),M=e&&A==4294967295?wU(v,q):[A,g0(v,h+24),g0(v,h+42)],Y=M[0],Q=M[1],J=M[2];return[S0(v,h+10),Y,Q,H,q+S0(v,h+30)+S0(v,h+32),J]},wU=function(v,h){for(;S0(v,h)!=1;h+=4+S0(v,h+2));return[JH(v,h+12),JH(v,h+4),JH(v,h+20)]},UH=function(v){var h=0;if(v)for(var e in v){var u=v[e].length;if(u>65535)ko(9);h+=u+4}return h},CR=function(v,h,e,u,H,q,A,M){var Y=u.length,Q=e.extra,J=M&&M.length,R=UH(Q);if(Yo(v,h,A!=null?33639248:67324752),h+=4,A!=null)v[h++]=20,v[h++]=e.os;v[h]=20,h+=2,v[h++]=e.flag<<1|(q<0&&8),v[h++]=H&&8,v[h++]=e.compression&255,v[h++]=e.compression>>8;var z=new Date(e.mtime==null?Date.now():e.mtime),m=z.getFullYear()-1980;if(m<0||m>119)ko(10);if(Yo(v,h,m<<25|z.getMonth()+1<<21|z.getDate()<<16|z.getHours()<<11|z.getMinutes()<<5|z.getSeconds()>>1),h+=4,q!=-1)Yo(v,h,e.crc),Yo(v,h+4,q<0?-q-2:q),Yo(v,h+8,e.size);if(Yo(v,h+12,Y),Yo(v,h+14,R),h+=16,A!=null)Yo(v,h,J),Yo(v,h+6,e.attrs),Yo(v,h+10,A),h+=14;if(v.set(u,h),h+=Y,R)for(var j in Q){var Z=Q[j],y=Z.length;Yo(v,h,+j),Yo(v,h+2,y),v.set(Z,h+4),h+=4+y}if(J)v.set(M,h),h+=J;return h},eU=function(v,h,e,u,H){Yo(v,h,101010256),Yo(v,h+8,e),Yo(v,h+10,e),Yo(v,h+12,u),Yo(v,h+16,H)};function ER(v,h){if(!h)h={};var e={},u=[];_R(v,"",e,h);var H=0,q=0;for(var A in e){var M=e[A],Y=M[0],Q=M[1],J=Q.level==0?0:8,R=l4(A),z=R.length,m=Q.comment,j=m&&l4(m),Z=j&&j.length,y=UH(Q.extra);if(z>65535)ko(11);var rr=J?gU(Y,Q):Y,Pr=rr.length,vr=si();vr.p(Y),u.push(VR(Q,{size:Y.length,crc:vr.d(),c:rr,f:R,m:j,u:z!=A.length||j&&m.length!=Z,o:H,compression:J})),H+=30+z+y+Pr,q+=76+2*(z+y)+(Z||0)+Pr}var a=new Tg(q+22),s=H,lr=q-H;for(var C=0;C<u.length;++C){var R=u[C];CR(a,R.o,R,R.f,R.u,R.c.length);var V=30+R.f.length+UH(R.extra);a.set(R.c,R.o+V),CR(a,H,R,R.f,R.u,R.c.length,R.o,R.m),H+=16+V+(R.m?R.m.length:0)}return eU(a,H,u.length,lr,s),a}function yR(v,h){var e={},u=v.length-22;for(;g0(v,u)!=101010256;--u)if(!u||v.length-u>65558)ko(13);var H=S0(v,u+8);if(!H)return{};var q=g0(v,u+16),A=q==4294967295||H==65535;if(A){var M=g0(v,u-12);if(A=g0(v,M)==101075792,A)H=g0(v,M+32),q=g0(v,M+48)}var Y=h&&h.filter;for(var Q=0;Q<H;++Q){var J=bU(v,q,A),R=J[0],z=J[1],m=J[2],j=J[3],Z=J[4],y=J[5],rr=hU(v,y);if(q=Z,!Y||Y({name:j,size:z,originalSize:m,compression:R}))if(!R)e[j]=Oe(v,rr,rr+z);else if(R==8)e[j]=oU(v.subarray(rr,rr+z),{out:new Tg(m)});else ko(14,"unknown compression type "+R)}return e}function mH(v){let h=v.map((u)=>({name:u.name,code:u.code,type:u.type,triggers:u.triggers,bindings:u.bindings,folder:u.folder,metadata:u.metadata})),e={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:h};return ER({"pack.json":l4(JSON.stringify(e,null,2))})}function cR(v,h){let e=mH(v),u=new Blob([e.buffer],{type:"application/zip"}),H=URL.createObjectURL(u),q=document.createElement("a");q.href=H,q.download=`${h}.lumiscript.zip`,q.click(),URL.revokeObjectURL(H)}var aVg=Object.freeze({status:"aborted"});function _(v,h,e){function u(M,Y){if(!M._zod)Object.defineProperty(M,"_zod",{value:{def:Y,constr:A,traits:new Set},enumerable:!1});if(M._zod.traits.has(v))return;M._zod.traits.add(v),h(M,Y);let Q=A.prototype,J=Object.keys(Q);for(let R=0;R<J.length;R++){let z=J[R];if(!(z in M))M[z]=Q[z].bind(M)}}let H=e?.Parent??Object;class q extends H{}Object.defineProperty(q,"name",{value:v});function A(M){var Y;let Q=e?.Parent?new q:this;u(Q,M),(Y=Q._zod).deferred??(Y.deferred=[]);for(let J of Q._zod.deferred)J();return Q}return Object.defineProperty(A,"init",{value:u}),Object.defineProperty(A,Symbol.hasInstance,{value:(M)=>{if(e?.Parent&&M instanceof e.Parent)return!0;return M?._zod?.traits?.has(v)}}),Object.defineProperty(A,"name",{value:v}),A}var pVg=Symbol("zod_brand");class Xl extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class He extends Error{constructor(v){super(`Encountered unidirectional transform during encode: ${v}`);this.name="ZodEncodeError"}}var w4={};function Yl(v){if(v)Object.assign(w4,v);return w4}var Ag={};z$(Ag,{unwrapMessage:()=>Pe,uint8ArrayToHex:()=>xU,uint8ArrayToBase64url:()=>BU,uint8ArrayToBase64:()=>v3,stringifyPrimitive:()=>dR,slugify:()=>BH,shallowClone:()=>aR,safeExtend:()=>iU,required:()=>FU,randomString:()=>XU,propertyKeyTypes:()=>xH,promiseAllObject:()=>GU,primitiveTypes:()=>pR,prefixIssues:()=>Re,pick:()=>zU,partial:()=>LU,parsedType:()=>IU,optionalKeys:()=>CH,omit:()=>KU,objectClone:()=>MU,numKeys:()=>YU,nullish:()=>Me,normalizeParams:()=>_r,mergeDefs:()=>Jl,merge:()=>UU,jsonStringifyReplacer:()=>_5,joinValues:()=>AU,issue:()=>E5,isPlainObject:()=>Uh,isObject:()=>V5,hexToUint8Array:()=>ZU,getSizableOrigin:()=>g3,getParsedType:()=>JU,getLengthableOrigin:()=>Ge,getEnumValues:()=>qe,getElementAtPath:()=>RU,floatSafeRemainder:()=>fR,finalizeIssue:()=>k0,extend:()=>$U,escapeRegex:()=>Ql,esc:()=>e4,defineLazy:()=>Pg,createTransparentProxy:()=>QU,cloneDef:()=>WU,clone:()=>o0,cleanRegex:()=>We,cleanEnum:()=>mU,captureStackTrace:()=>u4,cached:()=>Ae,base64urlToUint8Array:()=>NU,base64ToUint8Array:()=>o3,assignProp:()=>Q1,assertNotEqual:()=>OU,assertNever:()=>PU,assertIs:()=>HU,assertEqual:()=>uU,assert:()=>qU,allowsEval:()=>ZH,aborted:()=>z1,NUMBER_FORMAT_RANGES:()=>sR,Class:()=>l3,BIGINT_FORMAT_RANGES:()=>r3});function uU(v){return v}function OU(v){return v}function HU(v){}function PU(v){throw Error("Unexpected value in exhaustive check")}function qU(v){}function qe(v){let h=Object.values(v).filter((u)=>typeof u==="number");return Object.entries(v).filter(([u,H])=>h.indexOf(+u)===-1).map(([u,H])=>H)}function AU(v,h="|"){return v.map((e)=>dR(e)).join(h)}function _5(v,h){if(typeof h==="bigint")return h.toString();return h}function Ae(v){return{get value(){{let e=v();return Object.defineProperty(this,"value",{value:e}),e}throw Error("cached value already set")}}}function Me(v){return v===null||v===void 0}function We(v){let h=v.startsWith("^")?1:0,e=v.endsWith("$")?v.length-1:v.length;return v.slice(h,e)}function fR(v,h){let e=(v.toString().split(".")[1]||"").length,u=h.toString(),H=(u.split(".")[1]||"").length;if(H===0&&/\d?e-\d?/.test(u)){let Y=u.match(/\d?e-(\d?)/);if(Y?.[1])H=Number.parseInt(Y[1])}let q=e>H?e:H,A=Number.parseInt(v.toFixed(q).replace(".","")),M=Number.parseInt(h.toFixed(q).replace(".",""));return A%M/10**q}var jR=Symbol("evaluating");function Pg(v,h,e){let u=void 0;Object.defineProperty(v,h,{get(){if(u===jR)return;if(u===void 0)u=jR,u=e();return u},set(H){Object.defineProperty(v,h,{value:H})},configurable:!0})}function MU(v){return Object.create(Object.getPrototypeOf(v),Object.getOwnPropertyDescriptors(v))}function Q1(v,h,e){Object.defineProperty(v,h,{value:e,writable:!0,enumerable:!0,configurable:!0})}function Jl(...v){let h={};for(let e of v){let u=Object.getOwnPropertyDescriptors(e);Object.assign(h,u)}return Object.defineProperties({},h)}function WU(v){return Jl(v._zod.def)}function RU(v,h){if(!h)return v;return h.reduce((e,u)=>e?.[u],v)}function GU(v){let h=Object.keys(v),e=h.map((u)=>v[u]);return Promise.all(e).then((u)=>{let H={};for(let q=0;q<h.length;q++)H[h[q]]=u[q];return H})}function XU(v=10){let e="";for(let u=0;u<v;u++)e+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return e}function e4(v){return JSON.stringify(v)}function BH(v){return v.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var u4="captureStackTrace"in Error?Error.captureStackTrace:(...v)=>{};function V5(v){return typeof v==="object"&&v!==null&&!Array.isArray(v)}var ZH=Ae(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(v){return!1}});function Uh(v){if(V5(v)===!1)return!1;let h=v.constructor;if(h===void 0)return!0;if(typeof h!=="function")return!0;let e=h.prototype;if(V5(e)===!1)return!1;if(Object.prototype.hasOwnProperty.call(e,"isPrototypeOf")===!1)return!1;return!0}function aR(v){if(Uh(v))return{...v};if(Array.isArray(v))return[...v];return v}function YU(v){let h=0;for(let e in v)if(Object.prototype.hasOwnProperty.call(v,e))h++;return h}var JU=(v)=>{let h=typeof v;switch(h){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(v)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(v))return"array";if(v===null)return"null";if(v.then&&typeof v.then==="function"&&v.catch&&typeof v.catch==="function")return"promise";if(typeof Map<"u"&&v instanceof Map)return"map";if(typeof Set<"u"&&v instanceof Set)return"set";if(typeof Date<"u"&&v instanceof Date)return"date";if(typeof File<"u"&&v instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${h}`)}},xH=new Set(["string","number","symbol"]),pR=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Ql(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o0(v,h,e){let u=new v._zod.constr(h??v._zod.def);if(!h||e?.parent)u._zod.parent=v;return u}function _r(v){let h=v;if(!h)return{};if(typeof h==="string")return{error:()=>h};if(h?.message!==void 0){if(h?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");h.error=h.message}if(delete h.message,typeof h.error==="string")return{...h,error:()=>h.error};return h}function QU(v){let h;return new Proxy({},{get(e,u,H){return h??(h=v()),Reflect.get(h,u,H)},set(e,u,H,q){return h??(h=v()),Reflect.set(h,u,H,q)},has(e,u){return h??(h=v()),Reflect.has(h,u)},deleteProperty(e,u){return h??(h=v()),Reflect.deleteProperty(h,u)},ownKeys(e){return h??(h=v()),Reflect.ownKeys(h)},getOwnPropertyDescriptor(e,u){return h??(h=v()),Reflect.getOwnPropertyDescriptor(h,u)},defineProperty(e,u,H){return h??(h=v()),Reflect.defineProperty(h,u,H)}})}function dR(v){if(typeof v==="bigint")return v.toString()+"n";if(typeof v==="string")return`"${v}"`;return`${v}`}function CH(v){return Object.keys(v).filter((h)=>{return v[h]._zod.optin==="optional"&&v[h]._zod.optout==="optional"})}var sR={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},r3={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function zU(v,h){let e=v._zod.def,u=e.checks;if(u&&u.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let q=Jl(v._zod.def,{get shape(){let A={};for(let M in h){if(!(M in e.shape))throw Error(`Unrecognized key: "${M}"`);if(!h[M])continue;A[M]=e.shape[M]}return Q1(this,"shape",A),A},checks:[]});return o0(v,q)}function KU(v,h){let e=v._zod.def,u=e.checks;if(u&&u.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let q=Jl(v._zod.def,{get shape(){let A={...v._zod.def.shape};for(let M in h){if(!(M in e.shape))throw Error(`Unrecognized key: "${M}"`);if(!h[M])continue;delete A[M]}return Q1(this,"shape",A),A},checks:[]});return o0(v,q)}function $U(v,h){if(!Uh(h))throw Error("Invalid input to extend: expected a plain object");let e=v._zod.def.checks;if(e&&e.length>0){let q=v._zod.def.shape;for(let A in h)if(Object.getOwnPropertyDescriptor(q,A)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let H=Jl(v._zod.def,{get shape(){let q={...v._zod.def.shape,...h};return Q1(this,"shape",q),q}});return o0(v,H)}function iU(v,h){if(!Uh(h))throw Error("Invalid input to safeExtend: expected a plain object");let e=Jl(v._zod.def,{get shape(){let u={...v._zod.def.shape,...h};return Q1(this,"shape",u),u}});return o0(v,e)}function UU(v,h){let e=Jl(v._zod.def,{get shape(){let u={...v._zod.def.shape,...h._zod.def.shape};return Q1(this,"shape",u),u},get catchall(){return h._zod.def.catchall},checks:[]});return o0(v,e)}function LU(v,h,e){let H=h._zod.def.checks;if(H&&H.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let A=Jl(h._zod.def,{get shape(){let M=h._zod.def.shape,Y={...M};if(e)for(let Q in e){if(!(Q in M))throw Error(`Unrecognized key: "${Q}"`);if(!e[Q])continue;Y[Q]=v?new v({type:"optional",innerType:M[Q]}):M[Q]}else for(let Q in M)Y[Q]=v?new v({type:"optional",innerType:M[Q]}):M[Q];return Q1(this,"shape",Y),Y},checks:[]});return o0(h,A)}function FU(v,h,e){let u=Jl(h._zod.def,{get shape(){let H=h._zod.def.shape,q={...H};if(e)for(let A in e){if(!(A in q))throw Error(`Unrecognized key: "${A}"`);if(!e[A])continue;q[A]=new v({type:"nonoptional",innerType:H[A]})}else for(let A in H)q[A]=new v({type:"nonoptional",innerType:H[A]});return Q1(this,"shape",q),q}});return o0(h,u)}function z1(v,h=0){if(v.aborted===!0)return!0;for(let e=h;e<v.issues.length;e++)if(v.issues[e]?.continue!==!0)return!0;return!1}function Re(v,h){return h.map((e)=>{var u;return(u=e).path??(u.path=[]),e.path.unshift(v),e})}function Pe(v){return typeof v==="string"?v:v?.message}function k0(v,h,e){let u={...v,path:v.path??[]};if(!v.message){let H=Pe(v.inst?._zod.def?.error?.(v))??Pe(h?.error?.(v))??Pe(e.customError?.(v))??Pe(e.localeError?.(v))??"Invalid input";u.message=H}if(delete u.inst,delete u.continue,!h?.reportInput)delete u.input;return u}function g3(v){if(v instanceof Set)return"set";if(v instanceof Map)return"map";if(v instanceof File)return"file";return"unknown"}function Ge(v){if(Array.isArray(v))return"array";if(typeof v==="string")return"string";return"unknown"}function IU(v){let h=typeof v;switch(h){case"number":return Number.isNaN(v)?"nan":"number";case"object":{if(v===null)return"null";if(Array.isArray(v))return"array";let e=v;if(e&&Object.getPrototypeOf(e)!==Object.prototype&&"constructor"in e&&e.constructor)return e.constructor.name}}return h}function E5(...v){let[h,e,u]=v;if(typeof h==="string")return{message:h,code:"custom",input:e,inst:u};return{...h}}function mU(v){return Object.entries(v).filter(([h,e])=>{return Number.isNaN(Number.parseInt(h,10))}).map((h)=>h[1])}function o3(v){let h=atob(v),e=new Uint8Array(h.length);for(let u=0;u<h.length;u++)e[u]=h.charCodeAt(u);return e}function v3(v){let h="";for(let e=0;e<v.length;e++)h+=String.fromCharCode(v[e]);return btoa(h)}function NU(v){let h=v.replace(/-/g,"+").replace(/_/g,"/"),e="=".repeat((4-h.length%4)%4);return o3(h+e)}function BU(v){return v3(v).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function ZU(v){let h=v.replace(/^0x/,"");if(h.length%2!==0)throw Error("Invalid hex string length");let e=new Uint8Array(h.length/2);for(let u=0;u<h.length;u+=2)e[u/2]=Number.parseInt(h.slice(u,u+2),16);return e}function xU(v){return Array.from(v).map((h)=>h.toString(16).padStart(2,"0")).join("")}class l3{constructor(...v){}}var h3=(v,h)=>{v.name="$ZodError",Object.defineProperty(v,"_zod",{value:v._zod,enumerable:!1}),Object.defineProperty(v,"issues",{value:h,enumerable:!1}),v.message=JSON.stringify(h,_5,2),Object.defineProperty(v,"toString",{value:()=>v.message,enumerable:!1})},O4=_("$ZodError",h3),TH=_("$ZodError",h3,{Parent:Error});function b3(v,h=(e)=>e.message){let e={},u=[];for(let H of v.issues)if(H.path.length>0)e[H.path[0]]=e[H.path[0]]||[],e[H.path[0]].push(h(H));else u.push(h(H));return{formErrors:u,fieldErrors:e}}function w3(v,h=(e)=>e.message){let e={_errors:[]},u=(H)=>{for(let q of H.issues)if(q.code==="invalid_union"&&q.errors.length)q.errors.map((A)=>u({issues:A}));else if(q.code==="invalid_key")u({issues:q.issues});else if(q.code==="invalid_element")u({issues:q.issues});else if(q.path.length===0)e._errors.push(h(q));else{let A=e,M=0;while(M<q.path.length){let Y=q.path[M];if(M!==q.path.length-1)A[Y]=A[Y]||{_errors:[]};else A[Y]=A[Y]||{_errors:[]},A[Y]._errors.push(h(q));A=A[Y],M++}}};return u(v),e}var H4=(v)=>(h,e,u,H)=>{let q=u?Object.assign(u,{async:!1}):{async:!1},A=h._zod.run({value:e,issues:[]},q);if(A instanceof Promise)throw new Xl;if(A.issues.length){let M=new(H?.Err??v)(A.issues.map((Y)=>k0(Y,q,Yl())));throw u4(M,H?.callee),M}return A.value};var P4=(v)=>async(h,e,u,H)=>{let q=u?Object.assign(u,{async:!0}):{async:!0},A=h._zod.run({value:e,issues:[]},q);if(A instanceof Promise)A=await A;if(A.issues.length){let M=new(H?.Err??v)(A.issues.map((Y)=>k0(Y,q,Yl())));throw u4(M,H?.callee),M}return A.value};var Xe=(v)=>(h,e,u)=>{let H=u?{...u,async:!1}:{async:!1},q=h._zod.run({value:e,issues:[]},H);if(q instanceof Promise)throw new Xl;return q.issues.length?{success:!1,error:new(v??O4)(q.issues.map((A)=>k0(A,H,Yl())))}:{success:!0,data:q.value}},e3=Xe(TH),Ye=(v)=>async(h,e,u)=>{let H=u?Object.assign(u,{async:!0}):{async:!0},q=h._zod.run({value:e,issues:[]},H);if(q instanceof Promise)q=await q;return q.issues.length?{success:!1,error:new v(q.issues.map((A)=>k0(A,H,Yl())))}:{success:!0,data:q.value}},u3=Ye(TH),O3=(v)=>(h,e,u)=>{let H=u?Object.assign(u,{direction:"backward"}):{direction:"backward"};return H4(v)(h,e,H)};var H3=(v)=>(h,e,u)=>{return H4(v)(h,e,u)};var P3=(v)=>async(h,e,u)=>{let H=u?Object.assign(u,{direction:"backward"}):{direction:"backward"};return P4(v)(h,e,H)};var q3=(v)=>async(h,e,u)=>{return P4(v)(h,e,u)};var A3=(v)=>(h,e,u)=>{let H=u?Object.assign(u,{direction:"backward"}):{direction:"backward"};return Xe(v)(h,e,H)};var M3=(v)=>(h,e,u)=>{return Xe(v)(h,e,u)};var W3=(v)=>async(h,e,u)=>{let H=u?Object.assign(u,{direction:"backward"}):{direction:"backward"};return Ye(v)(h,e,H)};var R3=(v)=>async(h,e,u)=>{return Ye(v)(h,e,u)};var G3=/^[cC][^\s-]{8,}$/,X3=/^[0-9a-z]+$/,Y3=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,J3=/^[0-9a-vA-V]{20}$/,Q3=/^[A-Za-z0-9]{27}$/,z3=/^[a-zA-Z0-9_-]{21}$/,K3=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var $3=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,nH=(v)=>{if(!v)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${v}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var i3=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var TU="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function U3(){return new RegExp(TU,"u")}var L3=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,F3=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var I3=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,m3=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,N3=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,SH=/^[A-Za-z0-9_-]*$/;var B3=/^\+[1-9]\d{6,14}$/,Z3="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",x3=new RegExp(`^${Z3}$`);function C3(v){return typeof v.precision==="number"?v.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":v.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${v.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function T3(v){return new RegExp(`^${C3(v)}$`)}function n3(v){let h=C3({precision:v.precision}),e=["Z"];if(v.local)e.push("");if(v.offset)e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let u=`${h}(?:${e.join("|")})`;return new RegExp(`^${Z3}T(?:${u})$`)}var S3=(v)=>{let h=v?`[\\s\\S]{${v?.minimum??0},${v?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${h}$`)};var t3=/^[^A-Z]*$/,k3=/^[^a-z]*$/;var Yv=_("$ZodCheck",(v,h)=>{var e;v._zod??(v._zod={}),v._zod.def=h,(e=v._zod).onattach??(e.onattach=[])});var D3=_("$ZodCheckMaxLength",(v,h)=>{var e;Yv.init(v,h),(e=v._zod.def).when??(e.when=(u)=>{let H=u.value;return!Me(H)&&H.length!==void 0}),v._zod.onattach.push((u)=>{let H=u._zod.bag.maximum??Number.POSITIVE_INFINITY;if(h.maximum<H)u._zod.bag.maximum=h.maximum}),v._zod.check=(u)=>{let H=u.value;if(H.length<=h.maximum)return;let A=Ge(H);u.issues.push({origin:A,code:"too_big",maximum:h.maximum,inclusive:!0,input:H,inst:v,continue:!h.abort})}}),V3=_("$ZodCheckMinLength",(v,h)=>{var e;Yv.init(v,h),(e=v._zod.def).when??(e.when=(u)=>{let H=u.value;return!Me(H)&&H.length!==void 0}),v._zod.onattach.push((u)=>{let H=u._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(h.minimum>H)u._zod.bag.minimum=h.minimum}),v._zod.check=(u)=>{let H=u.value;if(H.length>=h.minimum)return;let A=Ge(H);u.issues.push({origin:A,code:"too_small",minimum:h.minimum,inclusive:!0,input:H,inst:v,continue:!h.abort})}}),_3=_("$ZodCheckLengthEquals",(v,h)=>{var e;Yv.init(v,h),(e=v._zod.def).when??(e.when=(u)=>{let H=u.value;return!Me(H)&&H.length!==void 0}),v._zod.onattach.push((u)=>{let H=u._zod.bag;H.minimum=h.length,H.maximum=h.length,H.length=h.length}),v._zod.check=(u)=>{let H=u.value,q=H.length;if(q===h.length)return;let A=Ge(H),M=q>h.length;u.issues.push({origin:A,...M?{code:"too_big",maximum:h.length}:{code:"too_small",minimum:h.length},inclusive:!0,exact:!0,input:u.value,inst:v,continue:!h.abort})}}),Je=_("$ZodCheckStringFormat",(v,h)=>{var e,u;if(Yv.init(v,h),v._zod.onattach.push((H)=>{let q=H._zod.bag;if(q.format=h.format,h.pattern)q.patterns??(q.patterns=new Set),q.patterns.add(h.pattern)}),h.pattern)(e=v._zod).check??(e.check=(H)=>{if(h.pattern.lastIndex=0,h.pattern.test(H.value))return;H.issues.push({origin:"string",code:"invalid_format",format:h.format,input:H.value,...h.pattern?{pattern:h.pattern.toString()}:{},inst:v,continue:!h.abort})});else(u=v._zod).check??(u.check=()=>{})}),E3=_("$ZodCheckRegex",(v,h)=>{Je.init(v,h),v._zod.check=(e)=>{if(h.pattern.lastIndex=0,h.pattern.test(e.value))return;e.issues.push({origin:"string",code:"invalid_format",format:"regex",input:e.value,pattern:h.pattern.toString(),inst:v,continue:!h.abort})}}),y3=_("$ZodCheckLowerCase",(v,h)=>{h.pattern??(h.pattern=t3),Je.init(v,h)}),c3=_("$ZodCheckUpperCase",(v,h)=>{h.pattern??(h.pattern=k3),Je.init(v,h)}),j3=_("$ZodCheckIncludes",(v,h)=>{Yv.init(v,h);let e=Ql(h.includes),u=new RegExp(typeof h.position==="number"?`^.{${h.position}}${e}`:e);h.pattern=u,v._zod.onattach.push((H)=>{let q=H._zod.bag;q.patterns??(q.patterns=new Set),q.patterns.add(u)}),v._zod.check=(H)=>{if(H.value.includes(h.includes,h.position))return;H.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:h.includes,input:H.value,inst:v,continue:!h.abort})}}),f3=_("$ZodCheckStartsWith",(v,h)=>{Yv.init(v,h);let e=new RegExp(`^${Ql(h.prefix)}.*`);h.pattern??(h.pattern=e),v._zod.onattach.push((u)=>{let H=u._zod.bag;H.patterns??(H.patterns=new Set),H.patterns.add(e)}),v._zod.check=(u)=>{if(u.value.startsWith(h.prefix))return;u.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:h.prefix,input:u.value,inst:v,continue:!h.abort})}}),a3=_("$ZodCheckEndsWith",(v,h)=>{Yv.init(v,h);let e=new RegExp(`.*${Ql(h.suffix)}$`);h.pattern??(h.pattern=e),v._zod.onattach.push((u)=>{let H=u._zod.bag;H.patterns??(H.patterns=new Set),H.patterns.add(e)}),v._zod.check=(u)=>{if(u.value.endsWith(h.suffix))return;u.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:h.suffix,input:u.value,inst:v,continue:!h.abort})}});var p3=_("$ZodCheckOverwrite",(v,h)=>{Yv.init(v,h),v._zod.check=(e)=>{e.value=h.tx(e.value)}});class tH{constructor(v=[]){if(this.content=[],this.indent=0,this)this.args=v}indented(v){this.indent+=1,v(this),this.indent-=1}write(v){if(typeof v==="function"){v(this,{execution:"sync"}),v(this,{execution:"async"});return}let e=v.split(`
`).filter((q)=>q),u=Math.min(...e.map((q)=>q.length-q.trimStart().length)),H=e.map((q)=>q.slice(u)).map((q)=>" ".repeat(this.indent*2)+q);for(let q of H)this.content.push(q)}compile(){let v=Function,h=this?.args,u=[...(this?.content??[""]).map((H)=>`  ${H}`)];return new v(...h,u.join(`
`))}}var s3={major:4,minor:3,patch:6};var _g=_("$ZodType",(v,h)=>{var e;v??(v={}),v._zod.def=h,v._zod.bag=v._zod.bag||{},v._zod.version=s3;let u=[...v._zod.def.checks??[]];if(v._zod.traits.has("$ZodCheck"))u.unshift(v);for(let H of u)for(let q of H._zod.onattach)q(v);if(u.length===0)(e=v._zod).deferred??(e.deferred=[]),v._zod.deferred?.push(()=>{v._zod.run=v._zod.parse});else{let H=(A,M,Y)=>{let Q=z1(A),J;for(let R of M){if(R._zod.def.when){if(!R._zod.def.when(A))continue}else if(Q)continue;let z=A.issues.length,m=R._zod.check(A);if(m instanceof Promise&&Y?.async===!1)throw new Xl;if(J||m instanceof Promise)J=(J??Promise.resolve()).then(async()=>{if(await m,A.issues.length===z)return;if(!Q)Q=z1(A,z)});else{if(A.issues.length===z)continue;if(!Q)Q=z1(A,z)}}if(J)return J.then(()=>{return A});return A},q=(A,M,Y)=>{if(z1(A))return A.aborted=!0,A;let Q=H(M,u,Y);if(Q instanceof Promise){if(Y.async===!1)throw new Xl;return Q.then((J)=>v._zod.parse(J,Y))}return v._zod.parse(Q,Y)};v._zod.run=(A,M)=>{if(M.skipChecks)return v._zod.parse(A,M);if(M.direction==="backward"){let Q=v._zod.parse({value:A.value,issues:[]},{...M,skipChecks:!0});if(Q instanceof Promise)return Q.then((J)=>{return q(J,A,M)});return q(Q,A,M)}let Y=v._zod.parse(A,M);if(Y instanceof Promise){if(M.async===!1)throw new Xl;return Y.then((Q)=>H(Q,u,M))}return H(Y,u,M)}}Pg(v,"~standard",()=>({validate:(H)=>{try{let q=e3(v,H);return q.success?{value:q.data}:{issues:q.error?.issues}}catch(q){return u3(v,H).then((A)=>A.success?{value:A.data}:{issues:A.error?.issues})}},vendor:"zod",version:1}))}),W4=_("$ZodString",(v,h)=>{_g.init(v,h),v._zod.pattern=[...v?._zod.bag?.patterns??[]].pop()??S3(v._zod.bag),v._zod.parse=(e,u)=>{if(h.coerce)try{e.value=String(e.value)}catch(H){}if(typeof e.value==="string")return e;return e.issues.push({expected:"string",code:"invalid_type",input:e.value,inst:v}),e}}),Ig=_("$ZodStringFormat",(v,h)=>{Je.init(v,h),W4.init(v,h)}),eG=_("$ZodGUID",(v,h)=>{h.pattern??(h.pattern=$3),Ig.init(v,h)}),uG=_("$ZodUUID",(v,h)=>{if(h.version){let u={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[h.version];if(u===void 0)throw Error(`Invalid UUID version: "${h.version}"`);h.pattern??(h.pattern=nH(u))}else h.pattern??(h.pattern=nH());Ig.init(v,h)}),OG=_("$ZodEmail",(v,h)=>{h.pattern??(h.pattern=i3),Ig.init(v,h)}),HG=_("$ZodURL",(v,h)=>{Ig.init(v,h),v._zod.check=(e)=>{try{let u=e.value.trim(),H=new URL(u);if(h.hostname){if(h.hostname.lastIndex=0,!h.hostname.test(H.hostname))e.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:h.hostname.source,input:e.value,inst:v,continue:!h.abort})}if(h.protocol){if(h.protocol.lastIndex=0,!h.protocol.test(H.protocol.endsWith(":")?H.protocol.slice(0,-1):H.protocol))e.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:h.protocol.source,input:e.value,inst:v,continue:!h.abort})}if(h.normalize)e.value=H.href;else e.value=u;return}catch(u){e.issues.push({code:"invalid_format",format:"url",input:e.value,inst:v,continue:!h.abort})}}}),PG=_("$ZodEmoji",(v,h)=>{h.pattern??(h.pattern=U3()),Ig.init(v,h)}),qG=_("$ZodNanoID",(v,h)=>{h.pattern??(h.pattern=z3),Ig.init(v,h)}),AG=_("$ZodCUID",(v,h)=>{h.pattern??(h.pattern=G3),Ig.init(v,h)}),MG=_("$ZodCUID2",(v,h)=>{h.pattern??(h.pattern=X3),Ig.init(v,h)}),WG=_("$ZodULID",(v,h)=>{h.pattern??(h.pattern=Y3),Ig.init(v,h)}),RG=_("$ZodXID",(v,h)=>{h.pattern??(h.pattern=J3),Ig.init(v,h)}),GG=_("$ZodKSUID",(v,h)=>{h.pattern??(h.pattern=Q3),Ig.init(v,h)}),XG=_("$ZodISODateTime",(v,h)=>{h.pattern??(h.pattern=n3(h)),Ig.init(v,h)}),YG=_("$ZodISODate",(v,h)=>{h.pattern??(h.pattern=x3),Ig.init(v,h)}),JG=_("$ZodISOTime",(v,h)=>{h.pattern??(h.pattern=T3(h)),Ig.init(v,h)}),QG=_("$ZodISODuration",(v,h)=>{h.pattern??(h.pattern=K3),Ig.init(v,h)}),zG=_("$ZodIPv4",(v,h)=>{h.pattern??(h.pattern=L3),Ig.init(v,h),v._zod.bag.format="ipv4"}),KG=_("$ZodIPv6",(v,h)=>{h.pattern??(h.pattern=F3),Ig.init(v,h),v._zod.bag.format="ipv6",v._zod.check=(e)=>{try{new URL(`http://[${e.value}]`)}catch{e.issues.push({code:"invalid_format",format:"ipv6",input:e.value,inst:v,continue:!h.abort})}}});var $G=_("$ZodCIDRv4",(v,h)=>{h.pattern??(h.pattern=I3),Ig.init(v,h)}),iG=_("$ZodCIDRv6",(v,h)=>{h.pattern??(h.pattern=m3),Ig.init(v,h),v._zod.check=(e)=>{let u=e.value.split("/");try{if(u.length!==2)throw Error();let[H,q]=u;if(!q)throw Error();let A=Number(q);if(`${A}`!==q)throw Error();if(A<0||A>128)throw Error();new URL(`http://[${H}]`)}catch{e.issues.push({code:"invalid_format",format:"cidrv6",input:e.value,inst:v,continue:!h.abort})}}});function UG(v){if(v==="")return!0;if(v.length%4!==0)return!1;try{return atob(v),!0}catch{return!1}}var LG=_("$ZodBase64",(v,h)=>{h.pattern??(h.pattern=N3),Ig.init(v,h),v._zod.bag.contentEncoding="base64",v._zod.check=(e)=>{if(UG(e.value))return;e.issues.push({code:"invalid_format",format:"base64",input:e.value,inst:v,continue:!h.abort})}});function nU(v){if(!SH.test(v))return!1;let h=v.replace(/[-_]/g,(u)=>u==="-"?"+":"/"),e=h.padEnd(Math.ceil(h.length/4)*4,"=");return UG(e)}var FG=_("$ZodBase64URL",(v,h)=>{h.pattern??(h.pattern=SH),Ig.init(v,h),v._zod.bag.contentEncoding="base64url",v._zod.check=(e)=>{if(nU(e.value))return;e.issues.push({code:"invalid_format",format:"base64url",input:e.value,inst:v,continue:!h.abort})}}),IG=_("$ZodE164",(v,h)=>{h.pattern??(h.pattern=B3),Ig.init(v,h)});function SU(v,h=null){try{let e=v.split(".");if(e.length!==3)return!1;let[u]=e;if(!u)return!1;let H=JSON.parse(atob(u));if("typ"in H&&H?.typ!=="JWT")return!1;if(!H.alg)return!1;if(h&&(!("alg"in H)||H.alg!==h))return!1;return!0}catch{return!1}}var mG=_("$ZodJWT",(v,h)=>{Ig.init(v,h),v._zod.check=(e)=>{if(SU(e.value,h.alg))return;e.issues.push({code:"invalid_format",format:"jwt",input:e.value,inst:v,continue:!h.abort})}});var NG=_("$ZodUnknown",(v,h)=>{_g.init(v,h),v._zod.parse=(e)=>e}),BG=_("$ZodNever",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{return e.issues.push({expected:"never",code:"invalid_type",input:e.value,inst:v}),e}});function rG(v,h,e){if(v.issues.length)h.issues.push(...Re(e,v.issues));h.value[e]=v.value}var ZG=_("$ZodArray",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{let H=e.value;if(!Array.isArray(H))return e.issues.push({expected:"array",code:"invalid_type",input:H,inst:v}),e;e.value=Array(H.length);let q=[];for(let A=0;A<H.length;A++){let M=H[A],Y=h.element._zod.run({value:M,issues:[]},u);if(Y instanceof Promise)q.push(Y.then((Q)=>rG(Q,e,A)));else rG(Y,e,A)}if(q.length)return Promise.all(q).then(()=>e);return e}});function M4(v,h,e,u,H){if(v.issues.length){if(H&&!(e in u))return;h.issues.push(...Re(e,v.issues))}if(v.value===void 0){if(e in u)h.value[e]=void 0}else h.value[e]=v.value}function xG(v){let h=Object.keys(v.shape);for(let u of h)if(!v.shape?.[u]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${u}": expected a Zod schema`);let e=CH(v.shape);return{...v,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(e)}}function CG(v,h,e,u,H,q){let A=[],M=H.keySet,Y=H.catchall._zod,Q=Y.def.type,J=Y.optout==="optional";for(let R in h){if(M.has(R))continue;if(Q==="never"){A.push(R);continue}let z=Y.run({value:h[R],issues:[]},u);if(z instanceof Promise)v.push(z.then((m)=>M4(m,e,R,h,J)));else M4(z,e,R,h,J)}if(A.length)e.issues.push({code:"unrecognized_keys",keys:A,input:h,inst:q});if(!v.length)return e;return Promise.all(v).then(()=>{return e})}var tU=_("$ZodObject",(v,h)=>{if(_g.init(v,h),!Object.getOwnPropertyDescriptor(h,"shape")?.get){let M=h.shape;Object.defineProperty(h,"shape",{get:()=>{let Y={...M};return Object.defineProperty(h,"shape",{value:Y}),Y}})}let u=Ae(()=>xG(h));Pg(v._zod,"propValues",()=>{let M=h.shape,Y={};for(let Q in M){let J=M[Q]._zod;if(J.values){Y[Q]??(Y[Q]=new Set);for(let R of J.values)Y[Q].add(R)}}return Y});let H=V5,q=h.catchall,A;v._zod.parse=(M,Y)=>{A??(A=u.value);let Q=M.value;if(!H(Q))return M.issues.push({expected:"object",code:"invalid_type",input:Q,inst:v}),M;M.value={};let J=[],R=A.shape;for(let z of A.keys){let m=R[z],j=m._zod.optout==="optional",Z=m._zod.run({value:Q[z],issues:[]},Y);if(Z instanceof Promise)J.push(Z.then((y)=>M4(y,M,z,Q,j)));else M4(Z,M,z,Q,j)}if(!q)return J.length?Promise.all(J).then(()=>M):M;return CG(J,Q,M,Y,u.value,v)}}),TG=_("$ZodObjectJIT",(v,h)=>{tU.init(v,h);let e=v._zod.parse,u=Ae(()=>xG(h)),H=(z)=>{let m=new tH(["shape","payload","ctx"]),j=u.value,Z=(vr)=>{let a=e4(vr);return`shape[${a}]._zod.run({ value: input[${a}], issues: [] }, ctx)`};m.write("const input = payload.value;");let y=Object.create(null),rr=0;for(let vr of j.keys)y[vr]=`key_${rr++}`;m.write("const newResult = {};");for(let vr of j.keys){let a=y[vr],s=e4(vr),C=z[vr]?._zod?.optout==="optional";if(m.write(`const ${a} = ${Z(vr)};`),C)m.write(`
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
        
      `);else m.write(`
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
        
      `)}m.write("payload.value = newResult;"),m.write("return payload;");let Pr=m.compile();return(vr,a)=>Pr(z,vr,a)},q,A=V5,M=!w4.jitless,Q=M&&ZH.value,J=h.catchall,R;v._zod.parse=(z,m)=>{R??(R=u.value);let j=z.value;if(!A(j))return z.issues.push({expected:"object",code:"invalid_type",input:j,inst:v}),z;if(M&&Q&&m?.async===!1&&m.jitless!==!0){if(!q)q=H(h.shape);if(z=q(z,m),!J)return z;return CG([],j,z,m,R,v)}return e(z,m)}});function gG(v,h,e,u){for(let q of v)if(q.issues.length===0)return h.value=q.value,h;let H=v.filter((q)=>!z1(q));if(H.length===1)return h.value=H[0].value,H[0];return h.issues.push({code:"invalid_union",input:h.value,inst:e,errors:v.map((q)=>q.issues.map((A)=>k0(A,u,Yl())))}),h}var nG=_("$ZodUnion",(v,h)=>{_g.init(v,h),Pg(v._zod,"optin",()=>h.options.some((H)=>H._zod.optin==="optional")?"optional":void 0),Pg(v._zod,"optout",()=>h.options.some((H)=>H._zod.optout==="optional")?"optional":void 0),Pg(v._zod,"values",()=>{if(h.options.every((H)=>H._zod.values))return new Set(h.options.flatMap((H)=>Array.from(H._zod.values)));return}),Pg(v._zod,"pattern",()=>{if(h.options.every((H)=>H._zod.pattern)){let H=h.options.map((q)=>q._zod.pattern);return new RegExp(`^(${H.map((q)=>We(q.source)).join("|")})$`)}return});let e=h.options.length===1,u=h.options[0]._zod.run;v._zod.parse=(H,q)=>{if(e)return u(H,q);let A=!1,M=[];for(let Y of h.options){let Q=Y._zod.run({value:H.value,issues:[]},q);if(Q instanceof Promise)M.push(Q),A=!0;else{if(Q.issues.length===0)return Q;M.push(Q)}}if(!A)return gG(M,H,v,q);return Promise.all(M).then((Y)=>{return gG(Y,H,v,q)})}});var SG=_("$ZodIntersection",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{let H=e.value,q=h.left._zod.run({value:H,issues:[]},u),A=h.right._zod.run({value:H,issues:[]},u);if(q instanceof Promise||A instanceof Promise)return Promise.all([q,A]).then(([Y,Q])=>{return oG(e,Y,Q)});return oG(e,q,A)}});function kH(v,h){if(v===h)return{valid:!0,data:v};if(v instanceof Date&&h instanceof Date&&+v===+h)return{valid:!0,data:v};if(Uh(v)&&Uh(h)){let e=Object.keys(h),u=Object.keys(v).filter((q)=>e.indexOf(q)!==-1),H={...v,...h};for(let q of u){let A=kH(v[q],h[q]);if(!A.valid)return{valid:!1,mergeErrorPath:[q,...A.mergeErrorPath]};H[q]=A.data}return{valid:!0,data:H}}if(Array.isArray(v)&&Array.isArray(h)){if(v.length!==h.length)return{valid:!1,mergeErrorPath:[]};let e=[];for(let u=0;u<v.length;u++){let H=v[u],q=h[u],A=kH(H,q);if(!A.valid)return{valid:!1,mergeErrorPath:[u,...A.mergeErrorPath]};e.push(A.data)}return{valid:!0,data:e}}return{valid:!1,mergeErrorPath:[]}}function oG(v,h,e){let u=new Map,H;for(let M of h.issues)if(M.code==="unrecognized_keys"){H??(H=M);for(let Y of M.keys){if(!u.has(Y))u.set(Y,{});u.get(Y).l=!0}}else v.issues.push(M);for(let M of e.issues)if(M.code==="unrecognized_keys")for(let Y of M.keys){if(!u.has(Y))u.set(Y,{});u.get(Y).r=!0}else v.issues.push(M);let q=[...u].filter(([,M])=>M.l&&M.r).map(([M])=>M);if(q.length&&H)v.issues.push({...H,keys:q});if(z1(v))return v;let A=kH(h.value,e.value);if(!A.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(A.mergeErrorPath)}`);return v.value=A.data,v}var tG=_("$ZodEnum",(v,h)=>{_g.init(v,h);let e=qe(h.entries),u=new Set(e);v._zod.values=u,v._zod.pattern=new RegExp(`^(${e.filter((H)=>xH.has(typeof H)).map((H)=>typeof H==="string"?Ql(H):H.toString()).join("|")})$`),v._zod.parse=(H,q)=>{let A=H.value;if(u.has(A))return H;return H.issues.push({code:"invalid_value",values:e,input:A,inst:v}),H}}),kG=_("$ZodLiteral",(v,h)=>{if(_g.init(v,h),h.values.length===0)throw Error("Cannot create literal schema with no valid values");let e=new Set(h.values);v._zod.values=e,v._zod.pattern=new RegExp(`^(${h.values.map((u)=>typeof u==="string"?Ql(u):u?Ql(u.toString()):String(u)).join("|")})$`),v._zod.parse=(u,H)=>{let q=u.value;if(e.has(q))return u;return u.issues.push({code:"invalid_value",values:h.values,input:q,inst:v}),u}});var DG=_("$ZodTransform",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{if(u.direction==="backward")throw new He(v.constructor.name);let H=h.transform(e.value,e);if(u.async)return(H instanceof Promise?H:Promise.resolve(H)).then((A)=>{return e.value=A,e});if(H instanceof Promise)throw new Xl;return e.value=H,e}});function vG(v,h){if(v.issues.length&&h===void 0)return{issues:[],value:void 0};return v}var DH=_("$ZodOptional",(v,h)=>{_g.init(v,h),v._zod.optin="optional",v._zod.optout="optional",Pg(v._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,void 0]):void 0}),Pg(v._zod,"pattern",()=>{let e=h.innerType._zod.pattern;return e?new RegExp(`^(${We(e.source)})?$`):void 0}),v._zod.parse=(e,u)=>{if(h.innerType._zod.optin==="optional"){let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((q)=>vG(q,e.value));return vG(H,e.value)}if(e.value===void 0)return e;return h.innerType._zod.run(e,u)}}),VG=_("$ZodExactOptional",(v,h)=>{DH.init(v,h),Pg(v._zod,"values",()=>h.innerType._zod.values),Pg(v._zod,"pattern",()=>h.innerType._zod.pattern),v._zod.parse=(e,u)=>{return h.innerType._zod.run(e,u)}}),_G=_("$ZodNullable",(v,h)=>{_g.init(v,h),Pg(v._zod,"optin",()=>h.innerType._zod.optin),Pg(v._zod,"optout",()=>h.innerType._zod.optout),Pg(v._zod,"pattern",()=>{let e=h.innerType._zod.pattern;return e?new RegExp(`^(${We(e.source)}|null)$`):void 0}),Pg(v._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,null]):void 0}),v._zod.parse=(e,u)=>{if(e.value===null)return e;return h.innerType._zod.run(e,u)}}),EG=_("$ZodDefault",(v,h)=>{_g.init(v,h),v._zod.optin="optional",Pg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);if(e.value===void 0)return e.value=h.defaultValue,e;let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((q)=>lG(q,h));return lG(H,h)}});function lG(v,h){if(v.value===void 0)v.value=h.defaultValue;return v}var yG=_("$ZodPrefault",(v,h)=>{_g.init(v,h),v._zod.optin="optional",Pg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);if(e.value===void 0)e.value=h.defaultValue;return h.innerType._zod.run(e,u)}}),cG=_("$ZodNonOptional",(v,h)=>{_g.init(v,h),Pg(v._zod,"values",()=>{let e=h.innerType._zod.values;return e?new Set([...e].filter((u)=>u!==void 0)):void 0}),v._zod.parse=(e,u)=>{let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((q)=>hG(q,v));return hG(H,v)}});function hG(v,h){if(!v.issues.length&&v.value===void 0)v.issues.push({code:"invalid_type",expected:"nonoptional",input:v.value,inst:h});return v}var jG=_("$ZodCatch",(v,h)=>{_g.init(v,h),Pg(v._zod,"optin",()=>h.innerType._zod.optin),Pg(v._zod,"optout",()=>h.innerType._zod.optout),Pg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((q)=>{if(e.value=q.value,q.issues.length)e.value=h.catchValue({...e,error:{issues:q.issues.map((A)=>k0(A,u,Yl()))},input:e.value}),e.issues=[];return e});if(e.value=H.value,H.issues.length)e.value=h.catchValue({...e,error:{issues:H.issues.map((q)=>k0(q,u,Yl()))},input:e.value}),e.issues=[];return e}});var fG=_("$ZodPipe",(v,h)=>{_g.init(v,h),Pg(v._zod,"values",()=>h.in._zod.values),Pg(v._zod,"optin",()=>h.in._zod.optin),Pg(v._zod,"optout",()=>h.out._zod.optout),Pg(v._zod,"propValues",()=>h.in._zod.propValues),v._zod.parse=(e,u)=>{if(u.direction==="backward"){let q=h.out._zod.run(e,u);if(q instanceof Promise)return q.then((A)=>A4(A,h.in,u));return A4(q,h.in,u)}let H=h.in._zod.run(e,u);if(H instanceof Promise)return H.then((q)=>A4(q,h.out,u));return A4(H,h.out,u)}});function A4(v,h,e){if(v.issues.length)return v.aborted=!0,v;return h._zod.run({value:v.value,issues:v.issues},e)}var aG=_("$ZodReadonly",(v,h)=>{_g.init(v,h),Pg(v._zod,"propValues",()=>h.innerType._zod.propValues),Pg(v._zod,"values",()=>h.innerType._zod.values),Pg(v._zod,"optin",()=>h.innerType?._zod?.optin),Pg(v._zod,"optout",()=>h.innerType?._zod?.optout),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then(bG);return bG(H)}});function bG(v){return v.value=Object.freeze(v.value),v}var pG=_("$ZodCustom",(v,h)=>{Yv.init(v,h),_g.init(v,h),v._zod.parse=(e,u)=>{return e},v._zod.check=(e)=>{let u=e.value,H=h.fn(u);if(H instanceof Promise)return H.then((q)=>wG(q,e,u,v));wG(H,e,u,v);return}});function wG(v,h,e,u){if(!v){let H={code:"custom",input:e,inst:u,path:[...u._zod.def.path??[]],continue:!u._zod.def.abort};if(u._zod.def.params)H.params=u._zod.def.params;h.issues.push(E5(H))}}var dG,G_g=Symbol("ZodOutput"),X_g=Symbol("ZodInput");class sG{constructor(){this._map=new WeakMap,this._idmap=new Map}add(v,...h){let e=h[0];if(this._map.set(v,e),e&&typeof e==="object"&&"id"in e)this._idmap.set(e.id,v);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(v){let h=this._map.get(v);if(h&&typeof h==="object"&&"id"in h)this._idmap.delete(h.id);return this._map.delete(v),this}get(v){let h=v._zod.parent;if(h){let e={...this.get(h)??{}};delete e.id;let u={...e,...this._map.get(v)};return Object.keys(u).length?u:void 0}return this._map.get(v)}has(v){return this._map.has(v)}}function kU(){return new sG}(dG=globalThis).__zod_globalRegistry??(dG.__zod_globalRegistry=kU());var Lh=globalThis.__zod_globalRegistry;function rX(v,h){return new v({type:"string",..._r(h)})}function gX(v,h){return new v({type:"string",format:"email",check:"string_format",abort:!1,..._r(h)})}function VH(v,h){return new v({type:"string",format:"guid",check:"string_format",abort:!1,..._r(h)})}function oX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(h)})}function vX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(h)})}function lX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(h)})}function hX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(h)})}function bX(v,h){return new v({type:"string",format:"url",check:"string_format",abort:!1,..._r(h)})}function wX(v,h){return new v({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(h)})}function eX(v,h){return new v({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(h)})}function uX(v,h){return new v({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(h)})}function OX(v,h){return new v({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(h)})}function HX(v,h){return new v({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(h)})}function PX(v,h){return new v({type:"string",format:"xid",check:"string_format",abort:!1,..._r(h)})}function qX(v,h){return new v({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(h)})}function AX(v,h){return new v({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(h)})}function MX(v,h){return new v({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(h)})}function WX(v,h){return new v({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(h)})}function RX(v,h){return new v({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(h)})}function GX(v,h){return new v({type:"string",format:"base64",check:"string_format",abort:!1,..._r(h)})}function XX(v,h){return new v({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(h)})}function YX(v,h){return new v({type:"string",format:"e164",check:"string_format",abort:!1,..._r(h)})}function JX(v,h){return new v({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(h)})}function QX(v,h){return new v({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(h)})}function zX(v,h){return new v({type:"string",format:"date",check:"string_format",..._r(h)})}function KX(v,h){return new v({type:"string",format:"time",check:"string_format",precision:null,..._r(h)})}function $X(v,h){return new v({type:"string",format:"duration",check:"string_format",..._r(h)})}function iX(v){return new v({type:"unknown"})}function UX(v,h){return new v({type:"never",..._r(h)})}function R4(v,h){return new D3({check:"max_length",..._r(h),maximum:v})}function y5(v,h){return new V3({check:"min_length",..._r(h),minimum:v})}function G4(v,h){return new _3({check:"length_equals",..._r(h),length:v})}function _H(v,h){return new E3({check:"string_format",format:"regex",..._r(h),pattern:v})}function EH(v){return new y3({check:"string_format",format:"lowercase",..._r(v)})}function yH(v){return new c3({check:"string_format",format:"uppercase",..._r(v)})}function cH(v,h){return new j3({check:"string_format",format:"includes",..._r(h),includes:v})}function jH(v,h){return new f3({check:"string_format",format:"starts_with",..._r(h),prefix:v})}function fH(v,h){return new a3({check:"string_format",format:"ends_with",..._r(h),suffix:v})}function K1(v){return new p3({check:"overwrite",tx:v})}function aH(v){return K1((h)=>h.normalize(v))}function pH(){return K1((v)=>v.trim())}function dH(){return K1((v)=>v.toLowerCase())}function sH(){return K1((v)=>v.toUpperCase())}function rP(){return K1((v)=>BH(v))}function LX(v,h,e){return new v({type:"array",element:h,..._r(e)})}function FX(v,h,e){return new v({type:"custom",check:"custom",fn:h,..._r(e)})}function IX(v){let h=DU((e)=>{return e.addIssue=(u)=>{if(typeof u==="string")e.issues.push(E5(u,e.value,h._zod.def));else{let H=u;if(H.fatal)H.continue=!1;H.code??(H.code="custom"),H.input??(H.input=e.value),H.inst??(H.inst=h),H.continue??(H.continue=!h._zod.def.abort),e.issues.push(E5(H))}},v(e.value,e)});return h}function DU(v,h){let e=new Yv({check:"custom",..._r(h)});return e._zod.check=v,e}function gP(v){let h=v?.target??"draft-2020-12";if(h==="draft-4")h="draft-04";if(h==="draft-7")h="draft-07";return{processors:v.processors??{},metadataRegistry:v?.metadata??Lh,target:h,unrepresentable:v?.unrepresentable??"throw",override:v?.override??(()=>{}),io:v?.io??"output",counter:0,seen:new Map,cycles:v?.cycles??"ref",reused:v?.reused??"inline",external:v?.external??void 0}}function Oo(v,h,e={path:[],schemaPath:[]}){var u;let H=v._zod.def,q=h.seen.get(v);if(q){if(q.count++,e.schemaPath.includes(v))q.cycle=e.path;return q.schema}let A={schema:{},count:1,cycle:void 0,path:e.path};h.seen.set(v,A);let M=v._zod.toJSONSchema?.();if(M)A.schema=M;else{let J={...e,schemaPath:[...e.schemaPath,v],path:e.path};if(v._zod.processJSONSchema)v._zod.processJSONSchema(h,A.schema,J);else{let z=A.schema,m=h.processors[H.type];if(!m)throw Error(`[toJSONSchema]: Non-representable type encountered: ${H.type}`);m(v,h,z,J)}let R=v._zod.parent;if(R){if(!A.ref)A.ref=R;Oo(R,h,J),h.seen.get(R).isParent=!0}}let Y=h.metadataRegistry.get(v);if(Y)Object.assign(A.schema,Y);if(h.io==="input"&&Do(v))delete A.schema.examples,delete A.schema.default;if(h.io==="input"&&A.schema._prefault)(u=A.schema).default??(u.default=A.schema._prefault);return delete A.schema._prefault,h.seen.get(v).schema}function oP(v,h){let e=v.seen.get(h);if(!e)throw Error("Unprocessed schema. This is a bug in Zod.");let u=new Map;for(let A of v.seen.entries()){let M=v.metadataRegistry.get(A[0])?.id;if(M){let Y=u.get(M);if(Y&&Y!==A[0])throw Error(`Duplicate schema id "${M}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);u.set(M,A[0])}}let H=(A)=>{let M=v.target==="draft-2020-12"?"$defs":"definitions";if(v.external){let R=v.external.registry.get(A[0])?.id,z=v.external.uri??((j)=>j);if(R)return{ref:z(R)};let m=A[1].defId??A[1].schema.id??`schema${v.counter++}`;return A[1].defId=m,{defId:m,ref:`${z("__shared")}#/${M}/${m}`}}if(A[1]===e)return{ref:"#"};let Q=`${"#"}/${M}/`,J=A[1].schema.id??`__schema${v.counter++}`;return{defId:J,ref:Q+J}},q=(A)=>{if(A[1].schema.$ref)return;let M=A[1],{ref:Y,defId:Q}=H(A);if(M.def={...M.schema},Q)M.defId=Q;let J=M.schema;for(let R in J)delete J[R];J.$ref=Y};if(v.cycles==="throw")for(let A of v.seen.entries()){let M=A[1];if(M.cycle)throw Error(`Cycle detected: #/${M.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let A of v.seen.entries()){let M=A[1];if(h===A[0]){q(A);continue}if(v.external){let Q=v.external.registry.get(A[0])?.id;if(h!==A[0]&&Q){q(A);continue}}if(v.metadataRegistry.get(A[0])?.id){q(A);continue}if(M.cycle){q(A);continue}if(M.count>1){if(v.reused==="ref"){q(A);continue}}}}function vP(v,h){let e=v.seen.get(h);if(!e)throw Error("Unprocessed schema. This is a bug in Zod.");let u=(A)=>{let M=v.seen.get(A);if(M.ref===null)return;let Y=M.def??M.schema,Q={...Y},J=M.ref;if(M.ref=null,J){u(J);let z=v.seen.get(J),m=z.schema;if(m.$ref&&(v.target==="draft-07"||v.target==="draft-04"||v.target==="openapi-3.0"))Y.allOf=Y.allOf??[],Y.allOf.push(m);else Object.assign(Y,m);if(Object.assign(Y,Q),A._zod.parent===J)for(let Z in Y){if(Z==="$ref"||Z==="allOf")continue;if(!(Z in Q))delete Y[Z]}if(m.$ref&&z.def)for(let Z in Y){if(Z==="$ref"||Z==="allOf")continue;if(Z in z.def&&JSON.stringify(Y[Z])===JSON.stringify(z.def[Z]))delete Y[Z]}}let R=A._zod.parent;if(R&&R!==J){u(R);let z=v.seen.get(R);if(z?.schema.$ref){if(Y.$ref=z.schema.$ref,z.def)for(let m in Y){if(m==="$ref"||m==="allOf")continue;if(m in z.def&&JSON.stringify(Y[m])===JSON.stringify(z.def[m]))delete Y[m]}}}v.override({zodSchema:A,jsonSchema:Y,path:M.path??[]})};for(let A of[...v.seen.entries()].reverse())u(A[0]);let H={};if(v.target==="draft-2020-12")H.$schema="https://json-schema.org/draft/2020-12/schema";else if(v.target==="draft-07")H.$schema="http://json-schema.org/draft-07/schema#";else if(v.target==="draft-04")H.$schema="http://json-schema.org/draft-04/schema#";else if(v.target==="openapi-3.0");if(v.external?.uri){let A=v.external.registry.get(h)?.id;if(!A)throw Error("Schema is missing an `id` property");H.$id=v.external.uri(A)}Object.assign(H,e.def??e.schema);let q=v.external?.defs??{};for(let A of v.seen.entries()){let M=A[1];if(M.def&&M.defId)q[M.defId]=M.def}if(v.external);else if(Object.keys(q).length>0)if(v.target==="draft-2020-12")H.$defs=q;else H.definitions=q;try{let A=JSON.parse(JSON.stringify(H));return Object.defineProperty(A,"~standard",{value:{...h["~standard"],jsonSchema:{input:Qe(h,"input",v.processors),output:Qe(h,"output",v.processors)}},enumerable:!1,writable:!1}),A}catch(A){throw Error("Error converting schema to JSON.")}}function Do(v,h){let e=h??{seen:new Set};if(e.seen.has(v))return!1;e.seen.add(v);let u=v._zod.def;if(u.type==="transform")return!0;if(u.type==="array")return Do(u.element,e);if(u.type==="set")return Do(u.valueType,e);if(u.type==="lazy")return Do(u.getter(),e);if(u.type==="promise"||u.type==="optional"||u.type==="nonoptional"||u.type==="nullable"||u.type==="readonly"||u.type==="default"||u.type==="prefault")return Do(u.innerType,e);if(u.type==="intersection")return Do(u.left,e)||Do(u.right,e);if(u.type==="record"||u.type==="map")return Do(u.keyType,e)||Do(u.valueType,e);if(u.type==="pipe")return Do(u.in,e)||Do(u.out,e);if(u.type==="object"){for(let H in u.shape)if(Do(u.shape[H],e))return!0;return!1}if(u.type==="union"){for(let H of u.options)if(Do(H,e))return!0;return!1}if(u.type==="tuple"){for(let H of u.items)if(Do(H,e))return!0;if(u.rest&&Do(u.rest,e))return!0;return!1}return!1}var mX=(v,h={})=>(e)=>{let u=gP({...e,processors:h});return Oo(v,u),oP(u,v),vP(u,v)},Qe=(v,h,e={})=>(u)=>{let{libraryOptions:H,target:q}=u??{},A=gP({...H??{},target:q,io:h,processors:e});return Oo(v,A),oP(A,v),vP(A,v)};var VU={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},NX=(v,h,e,u)=>{let H=e;H.type="string";let{minimum:q,maximum:A,format:M,patterns:Y,contentEncoding:Q}=v._zod.bag;if(typeof q==="number")H.minLength=q;if(typeof A==="number")H.maxLength=A;if(M){if(H.format=VU[M]??M,H.format==="")delete H.format;if(M==="time")delete H.format}if(Q)H.contentEncoding=Q;if(Y&&Y.size>0){let J=[...Y];if(J.length===1)H.pattern=J[0].source;else if(J.length>1)H.allOf=[...J.map((R)=>({...h.target==="draft-07"||h.target==="draft-04"||h.target==="openapi-3.0"?{type:"string"}:{},pattern:R.source}))]}};var BX=(v,h,e,u)=>{e.not={}};var ZX=(v,h,e,u)=>{};var xX=(v,h,e,u)=>{let H=v._zod.def,q=qe(H.entries);if(q.every((A)=>typeof A==="number"))e.type="number";if(q.every((A)=>typeof A==="string"))e.type="string";e.enum=q},CX=(v,h,e,u)=>{let H=v._zod.def,q=[];for(let A of H.values)if(A===void 0){if(h.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof A==="bigint")if(h.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else q.push(Number(A));else q.push(A);if(q.length===0);else if(q.length===1){let A=q[0];if(e.type=A===null?"null":typeof A,h.target==="draft-04"||h.target==="openapi-3.0")e.enum=[A];else e.const=A}else{if(q.every((A)=>typeof A==="number"))e.type="number";if(q.every((A)=>typeof A==="string"))e.type="string";if(q.every((A)=>typeof A==="boolean"))e.type="boolean";if(q.every((A)=>A===null))e.type="null";e.enum=q}};var TX=(v,h,e,u)=>{if(h.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var nX=(v,h,e,u)=>{if(h.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var SX=(v,h,e,u)=>{let H=e,q=v._zod.def,{minimum:A,maximum:M}=v._zod.bag;if(typeof A==="number")H.minItems=A;if(typeof M==="number")H.maxItems=M;H.type="array",H.items=Oo(q.element,h,{...u,path:[...u.path,"items"]})},tX=(v,h,e,u)=>{let H=e,q=v._zod.def;H.type="object",H.properties={};let A=q.shape;for(let Q in A)H.properties[Q]=Oo(A[Q],h,{...u,path:[...u.path,"properties",Q]});let M=new Set(Object.keys(A)),Y=new Set([...M].filter((Q)=>{let J=q.shape[Q]._zod;if(h.io==="input")return J.optin===void 0;else return J.optout===void 0}));if(Y.size>0)H.required=Array.from(Y);if(q.catchall?._zod.def.type==="never")H.additionalProperties=!1;else if(!q.catchall){if(h.io==="output")H.additionalProperties=!1}else if(q.catchall)H.additionalProperties=Oo(q.catchall,h,{...u,path:[...u.path,"additionalProperties"]})},kX=(v,h,e,u)=>{let H=v._zod.def,q=H.inclusive===!1,A=H.options.map((M,Y)=>Oo(M,h,{...u,path:[...u.path,q?"oneOf":"anyOf",Y]}));if(q)e.oneOf=A;else e.anyOf=A},DX=(v,h,e,u)=>{let H=v._zod.def,q=Oo(H.left,h,{...u,path:[...u.path,"allOf",0]}),A=Oo(H.right,h,{...u,path:[...u.path,"allOf",1]}),M=(Q)=>("allOf"in Q)&&Object.keys(Q).length===1,Y=[...M(q)?q.allOf:[q],...M(A)?A.allOf:[A]];e.allOf=Y};var VX=(v,h,e,u)=>{let H=v._zod.def,q=Oo(H.innerType,h,u),A=h.seen.get(v);if(h.target==="openapi-3.0")A.ref=H.innerType,e.nullable=!0;else e.anyOf=[q,{type:"null"}]},_X=(v,h,e,u)=>{let H=v._zod.def;Oo(H.innerType,h,u);let q=h.seen.get(v);q.ref=H.innerType},EX=(v,h,e,u)=>{let H=v._zod.def;Oo(H.innerType,h,u);let q=h.seen.get(v);q.ref=H.innerType,e.default=JSON.parse(JSON.stringify(H.defaultValue))},yX=(v,h,e,u)=>{let H=v._zod.def;Oo(H.innerType,h,u);let q=h.seen.get(v);if(q.ref=H.innerType,h.io==="input")e._prefault=JSON.parse(JSON.stringify(H.defaultValue))},cX=(v,h,e,u)=>{let H=v._zod.def;Oo(H.innerType,h,u);let q=h.seen.get(v);q.ref=H.innerType;let A;try{A=H.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}e.default=A},jX=(v,h,e,u)=>{let H=v._zod.def,q=h.io==="input"?H.in._zod.def.type==="transform"?H.out:H.in:H.out;Oo(q,h,u);let A=h.seen.get(v);A.ref=q},fX=(v,h,e,u)=>{let H=v._zod.def;Oo(H.innerType,h,u);let q=h.seen.get(v);q.ref=H.innerType,e.readOnly=!0};var lP=(v,h,e,u)=>{let H=v._zod.def;Oo(H.innerType,h,u);let q=h.seen.get(v);q.ref=H.innerType};var gL=_("ZodISODateTime",(v,h)=>{XG.init(v,h),Bg.init(v,h)});function aX(v){return QX(gL,v)}var oL=_("ZodISODate",(v,h)=>{YG.init(v,h),Bg.init(v,h)});function pX(v){return zX(oL,v)}var vL=_("ZodISOTime",(v,h)=>{JG.init(v,h),Bg.init(v,h)});function dX(v){return KX(vL,v)}var lL=_("ZodISODuration",(v,h)=>{QG.init(v,h),Bg.init(v,h)});function sX(v){return $X(lL,v)}var rY=(v,h)=>{O4.init(v,h),v.name="ZodError",Object.defineProperties(v,{format:{value:(e)=>w3(v,e)},flatten:{value:(e)=>b3(v,e)},addIssue:{value:(e)=>{v.issues.push(e),v.message=JSON.stringify(v.issues,_5,2)}},addIssues:{value:(e)=>{v.issues.push(...e),v.message=JSON.stringify(v.issues,_5,2)}},isEmpty:{get(){return v.issues.length===0}}})},s_g=_("ZodError",rY),Jv=_("ZodError",rY,{Parent:Error});var gY=H4(Jv),oY=P4(Jv),vY=Xe(Jv),lY=Ye(Jv),hY=O3(Jv),bY=H3(Jv),wY=P3(Jv),eY=q3(Jv),uY=A3(Jv),OY=M3(Jv),HY=W3(Jv),PY=R3(Jv);var go=_("ZodType",(v,h)=>{return _g.init(v,h),Object.assign(v["~standard"],{jsonSchema:{input:Qe(v,"input"),output:Qe(v,"output")}}),v.toJSONSchema=mX(v,{}),v.def=h,v.type=h.type,Object.defineProperty(v,"_def",{value:h}),v.check=(...e)=>{return v.clone(Ag.mergeDefs(h,{checks:[...h.checks??[],...e.map((u)=>typeof u==="function"?{_zod:{check:u,def:{check:"custom"},onattach:[]}}:u)]}),{parent:!0})},v.with=v.check,v.clone=(e,u)=>o0(v,e,u),v.brand=()=>v,v.register=(e,u)=>{return e.add(v,u),v},v.parse=(e,u)=>gY(v,e,u,{callee:v.parse}),v.safeParse=(e,u)=>vY(v,e,u),v.parseAsync=async(e,u)=>oY(v,e,u,{callee:v.parseAsync}),v.safeParseAsync=async(e,u)=>lY(v,e,u),v.spa=v.safeParseAsync,v.encode=(e,u)=>hY(v,e,u),v.decode=(e,u)=>bY(v,e,u),v.encodeAsync=async(e,u)=>wY(v,e,u),v.decodeAsync=async(e,u)=>eY(v,e,u),v.safeEncode=(e,u)=>uY(v,e,u),v.safeDecode=(e,u)=>OY(v,e,u),v.safeEncodeAsync=async(e,u)=>HY(v,e,u),v.safeDecodeAsync=async(e,u)=>PY(v,e,u),v.refine=(e,u)=>v.check(dL(e,u)),v.superRefine=(e)=>v.check(sL(e)),v.overwrite=(e)=>v.check(K1(e)),v.optional=()=>MY(v),v.exactOptional=()=>SL(v),v.nullable=()=>WY(v),v.nullish=()=>MY(WY(v)),v.nonoptional=(e)=>EL(v,e),v.array=()=>zl(v),v.or=(e)=>NL([v,e]),v.and=(e)=>ZL(v,e),v.transform=(e)=>RY(v,TL(e)),v.default=(e)=>DL(v,e),v.prefault=(e)=>_L(v,e),v.catch=(e)=>cL(v,e),v.pipe=(e)=>RY(v,e),v.readonly=()=>aL(v),v.describe=(e)=>{let u=v.clone();return Lh.add(u,{description:e}),u},Object.defineProperty(v,"description",{get(){return Lh.get(v)?.description},configurable:!0}),v.meta=(...e)=>{if(e.length===0)return Lh.get(v);let u=v.clone();return Lh.add(u,e[0]),u},v.isOptional=()=>v.safeParse(void 0).success,v.isNullable=()=>v.safeParse(null).success,v.apply=(e)=>e(v),v}),GY=_("_ZodString",(v,h)=>{W4.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,H,q)=>NX(v,u,H,q);let e=v._zod.bag;v.format=e.format??null,v.minLength=e.minimum??null,v.maxLength=e.maximum??null,v.regex=(...u)=>v.check(_H(...u)),v.includes=(...u)=>v.check(cH(...u)),v.startsWith=(...u)=>v.check(jH(...u)),v.endsWith=(...u)=>v.check(fH(...u)),v.min=(...u)=>v.check(y5(...u)),v.max=(...u)=>v.check(R4(...u)),v.length=(...u)=>v.check(G4(...u)),v.nonempty=(...u)=>v.check(y5(1,...u)),v.lowercase=(u)=>v.check(EH(u)),v.uppercase=(u)=>v.check(yH(u)),v.trim=()=>v.check(pH()),v.normalize=(...u)=>v.check(aH(...u)),v.toLowerCase=()=>v.check(dH()),v.toUpperCase=()=>v.check(sH()),v.slugify=()=>v.check(rP())}),eL=_("ZodString",(v,h)=>{W4.init(v,h),GY.init(v,h),v.email=(e)=>v.check(gX(uL,e)),v.url=(e)=>v.check(bX(OL,e)),v.jwt=(e)=>v.check(JX($L,e)),v.emoji=(e)=>v.check(wX(HL,e)),v.guid=(e)=>v.check(VH(qY,e)),v.uuid=(e)=>v.check(oX(Y4,e)),v.uuidv4=(e)=>v.check(vX(Y4,e)),v.uuidv6=(e)=>v.check(lX(Y4,e)),v.uuidv7=(e)=>v.check(hX(Y4,e)),v.nanoid=(e)=>v.check(eX(PL,e)),v.guid=(e)=>v.check(VH(qY,e)),v.cuid=(e)=>v.check(uX(qL,e)),v.cuid2=(e)=>v.check(OX(AL,e)),v.ulid=(e)=>v.check(HX(ML,e)),v.base64=(e)=>v.check(GX(QL,e)),v.base64url=(e)=>v.check(XX(zL,e)),v.xid=(e)=>v.check(PX(WL,e)),v.ksuid=(e)=>v.check(qX(RL,e)),v.ipv4=(e)=>v.check(AX(GL,e)),v.ipv6=(e)=>v.check(MX(XL,e)),v.cidrv4=(e)=>v.check(WX(YL,e)),v.cidrv6=(e)=>v.check(RX(JL,e)),v.e164=(e)=>v.check(YX(KL,e)),v.datetime=(e)=>v.check(aX(e)),v.date=(e)=>v.check(pX(e)),v.time=(e)=>v.check(dX(e)),v.duration=(e)=>v.check(sX(e))});function Eg(v){return rX(eL,v)}var Bg=_("ZodStringFormat",(v,h)=>{Ig.init(v,h),GY.init(v,h)}),uL=_("ZodEmail",(v,h)=>{OG.init(v,h),Bg.init(v,h)});var qY=_("ZodGUID",(v,h)=>{eG.init(v,h),Bg.init(v,h)});var Y4=_("ZodUUID",(v,h)=>{uG.init(v,h),Bg.init(v,h)});var OL=_("ZodURL",(v,h)=>{HG.init(v,h),Bg.init(v,h)});var HL=_("ZodEmoji",(v,h)=>{PG.init(v,h),Bg.init(v,h)});var PL=_("ZodNanoID",(v,h)=>{qG.init(v,h),Bg.init(v,h)});var qL=_("ZodCUID",(v,h)=>{AG.init(v,h),Bg.init(v,h)});var AL=_("ZodCUID2",(v,h)=>{MG.init(v,h),Bg.init(v,h)});var ML=_("ZodULID",(v,h)=>{WG.init(v,h),Bg.init(v,h)});var WL=_("ZodXID",(v,h)=>{RG.init(v,h),Bg.init(v,h)});var RL=_("ZodKSUID",(v,h)=>{GG.init(v,h),Bg.init(v,h)});var GL=_("ZodIPv4",(v,h)=>{zG.init(v,h),Bg.init(v,h)});var XL=_("ZodIPv6",(v,h)=>{KG.init(v,h),Bg.init(v,h)});var YL=_("ZodCIDRv4",(v,h)=>{$G.init(v,h),Bg.init(v,h)});var JL=_("ZodCIDRv6",(v,h)=>{iG.init(v,h),Bg.init(v,h)});var QL=_("ZodBase64",(v,h)=>{LG.init(v,h),Bg.init(v,h)});var zL=_("ZodBase64URL",(v,h)=>{FG.init(v,h),Bg.init(v,h)});var KL=_("ZodE164",(v,h)=>{IG.init(v,h),Bg.init(v,h)});var $L=_("ZodJWT",(v,h)=>{mG.init(v,h),Bg.init(v,h)});var iL=_("ZodUnknown",(v,h)=>{NG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>ZX(v,e,u,H)});function AY(){return iX(iL)}var UL=_("ZodNever",(v,h)=>{BG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>BX(v,e,u,H)});function LL(v){return UX(UL,v)}var FL=_("ZodArray",(v,h)=>{ZG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>SX(v,e,u,H),v.element=h.element,v.min=(e,u)=>v.check(y5(e,u)),v.nonempty=(e)=>v.check(y5(1,e)),v.max=(e,u)=>v.check(R4(e,u)),v.length=(e,u)=>v.check(G4(e,u)),v.unwrap=()=>v.element});function zl(v,h){return LX(FL,v,h)}var IL=_("ZodObject",(v,h)=>{TG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>tX(v,e,u,H),Ag.defineLazy(v,"shape",()=>{return h.shape}),v.keyof=()=>ze(Object.keys(v._zod.def.shape)),v.catchall=(e)=>v.clone({...v._zod.def,catchall:e}),v.passthrough=()=>v.clone({...v._zod.def,catchall:AY()}),v.loose=()=>v.clone({...v._zod.def,catchall:AY()}),v.strict=()=>v.clone({...v._zod.def,catchall:LL()}),v.strip=()=>v.clone({...v._zod.def,catchall:void 0}),v.extend=(e)=>{return Ag.extend(v,e)},v.safeExtend=(e)=>{return Ag.safeExtend(v,e)},v.merge=(e)=>Ag.merge(v,e),v.pick=(e)=>Ag.pick(v,e),v.omit=(e)=>Ag.omit(v,e),v.partial=(...e)=>Ag.partial(XY,v,e[0]),v.required=(...e)=>Ag.required(YY,v,e[0])});function Fh(v,h){let e={type:"object",shape:v??{},...Ag.normalizeParams(h)};return new IL(e)}var mL=_("ZodUnion",(v,h)=>{nG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>kX(v,e,u,H),v.options=h.options});function NL(v,h){return new mL({type:"union",options:v,...Ag.normalizeParams(h)})}var BL=_("ZodIntersection",(v,h)=>{SG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>DX(v,e,u,H)});function ZL(v,h){return new BL({type:"intersection",left:v,right:h})}var hP=_("ZodEnum",(v,h)=>{tG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,H,q)=>xX(v,u,H,q),v.enum=h.entries,v.options=Object.values(h.entries);let e=new Set(Object.keys(h.entries));v.extract=(u,H)=>{let q={};for(let A of u)if(e.has(A))q[A]=h.entries[A];else throw Error(`Key ${A} not found in enum`);return new hP({...h,checks:[],...Ag.normalizeParams(H),entries:q})},v.exclude=(u,H)=>{let q={...h.entries};for(let A of u)if(e.has(A))delete q[A];else throw Error(`Key ${A} not found in enum`);return new hP({...h,checks:[],...Ag.normalizeParams(H),entries:q})}});function ze(v,h){let e=Array.isArray(v)?Object.fromEntries(v.map((u)=>[u,u])):v;return new hP({type:"enum",entries:e,...Ag.normalizeParams(h)})}var xL=_("ZodLiteral",(v,h)=>{kG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>CX(v,e,u,H),v.values=new Set(h.values),Object.defineProperty(v,"value",{get(){if(h.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return h.values[0]}})});function bP(v,h){return new xL({type:"literal",values:Array.isArray(v)?v:[v],...Ag.normalizeParams(h)})}var CL=_("ZodTransform",(v,h)=>{DG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>nX(v,e,u,H),v._zod.parse=(e,u)=>{if(u.direction==="backward")throw new He(v.constructor.name);e.addIssue=(q)=>{if(typeof q==="string")e.issues.push(Ag.issue(q,e.value,h));else{let A=q;if(A.fatal)A.continue=!1;A.code??(A.code="custom"),A.input??(A.input=e.value),A.inst??(A.inst=v),e.issues.push(Ag.issue(A))}};let H=h.transform(e.value,e);if(H instanceof Promise)return H.then((q)=>{return e.value=q,e});return e.value=H,e}});function TL(v){return new CL({type:"transform",transform:v})}var XY=_("ZodOptional",(v,h)=>{DH.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>lP(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function MY(v){return new XY({type:"optional",innerType:v})}var nL=_("ZodExactOptional",(v,h)=>{VG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>lP(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function SL(v){return new nL({type:"optional",innerType:v})}var tL=_("ZodNullable",(v,h)=>{_G.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>VX(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function WY(v){return new tL({type:"nullable",innerType:v})}var kL=_("ZodDefault",(v,h)=>{EG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>EX(v,e,u,H),v.unwrap=()=>v._zod.def.innerType,v.removeDefault=v.unwrap});function DL(v,h){return new kL({type:"default",innerType:v,get defaultValue(){return typeof h==="function"?h():Ag.shallowClone(h)}})}var VL=_("ZodPrefault",(v,h)=>{yG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>yX(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function _L(v,h){return new VL({type:"prefault",innerType:v,get defaultValue(){return typeof h==="function"?h():Ag.shallowClone(h)}})}var YY=_("ZodNonOptional",(v,h)=>{cG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>_X(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function EL(v,h){return new YY({type:"nonoptional",innerType:v,...Ag.normalizeParams(h)})}var yL=_("ZodCatch",(v,h)=>{jG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>cX(v,e,u,H),v.unwrap=()=>v._zod.def.innerType,v.removeCatch=v.unwrap});function cL(v,h){return new yL({type:"catch",innerType:v,catchValue:typeof h==="function"?h:()=>h})}var jL=_("ZodPipe",(v,h)=>{fG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>jX(v,e,u,H),v.in=h.in,v.out=h.out});function RY(v,h){return new jL({type:"pipe",in:v,out:h})}var fL=_("ZodReadonly",(v,h)=>{aG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>fX(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function aL(v){return new fL({type:"readonly",innerType:v})}var pL=_("ZodCustom",(v,h)=>{pG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>TX(v,e,u,H)});function dL(v,h={}){return FX(pL,v,h)}function sL(v){return IX(v)}var JY=Fh({type:ze(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),QY=Fh({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:zl(Eg()).optional()}),rF=Fh({name:Eg().min(1).max(200),code:Eg(),type:ze(["trigger","library"]),triggers:zl(Eg()).optional(),bindings:zl(JY).optional(),folder:Eg().optional(),metadata:QY.optional()}),zY=Fh({format:bP("lumiscript-pack-v1"),exportedAt:Eg(),scripts:zl(rF).min(1).max(100)}),gF=Fh({name:Eg().min(1).max(200),file:Eg().min(1),type:ze(["trigger","library"]),triggers:zl(Eg()).optional(),bindings:zl(JY).optional(),folder:Eg().optional(),metadata:QY.optional()}),Qyg=Fh({format:bP("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:zl(gF).min(1).max(100)});var KY=1048576;async function $Y(v){let h=new Uint8Array(await v.arrayBuffer()),e;try{e=yR(h)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let u=e["pack.json"];if(!u)throw Error("Invalid script pack: missing pack.json");if(u.byteLength>KY)throw Error(`Pack exceeds the ${KY/1024/1024} MB decompressed size limit`);let H=IH(u),q;try{q=JSON.parse(H)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return zY.parse(q).scripts}var bg=qr(rg(),1);function oF(v){let e="";for(let u=0;u<v.length;u+=32768)e+=String.fromCharCode(...v.subarray(u,u+32768));return btoa(e)}function vF(v){let h=new Map;for(let H of v){let q=H.folder??"";if(!h.has(q))h.set(q,[]);h.get(q).push(H)}let e=new Map;if(h.has(""))e.set("",h.get(""));let u=[...h.keys()].filter((H)=>H!=="").sort();for(let H of u)e.set(H,h.get(H));return e}var J4=({scripts:v,selectedId:h,execInfo:e,onSelect:u,onEdit:H,sendToBackend:q})=>{let[A,M]=Ke.useState("trigger"),[Y,Q]=Ke.useState(new Set),J=Ke.useRef(null),R=v.filter((a)=>a.type===A),z=vF(R),m=z.size>1||z.size===1&&!z.has(""),j=(a)=>{Q((s)=>{let lr=new Set(s);if(lr.has(a))lr.delete(a);else lr.add(a);return lr})},Z=()=>{let a=A==="library"?"Library name:":"Script name:",s=window.prompt(a);if(!s?.trim())return;q({type:"create_script",name:s.trim(),scriptType:A})},y=(a)=>{if(R.length===0)return;if(a.shiftKey){let lr=mH(R);q({type:"save_pack_to_disk",bytesB64:oF(lr),scriptType:A});return}let s=window.prompt("Pack name:","my-scripts");if(!s?.trim())return;cR(R,s.trim())},rr=()=>{J.current?.click()},Pr=async(a)=>{let s=a.target.files?.[0];if(!s)return;a.target.value="";try{let lr=await $Y(s),C=(n)=>n==="library"?"[L]":"[T]",V=lr.map((n)=>`  ${C(n.type)} ${n.name}`).join(`
`);if(!window.confirm(`Import ${lr.length} script${lr.length>1?"s":""}?

${V}

Imported scripts will be disabled. Review and enable them manually.`))return;q({type:"import_scripts",entries:lr})}catch(lr){window.alert(`Import failed: ${lr instanceof Error?lr.message:String(lr)}`)}},vr=(a)=>{let s=e[a.id];return bg.jsxDEV(mR,{script:a,selected:a.id===h,dot:s?.dot??"idle",duration:s?.duration,onSelect:()=>u(a.id),onEdit:()=>H(a.id),sendToBackend:q},a.id,!1,void 0,this)};return bg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[bg.jsxDEV("div",{className:"ls-list-header",children:[bg.jsxDEV("div",{className:"ls-list-type-tabs",children:[bg.jsxDEV("button",{className:`ls-type-tab${A==="trigger"?" ls-active":""}`,onClick:()=>M("trigger"),title:"Scripts",children:bg.jsxDEV(Go,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("button",{className:`ls-type-tab${A==="library"?" ls-active":""}`,onClick:()=>M("library"),title:"Libraries",children:bg.jsxDEV(Qh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bg.jsxDEV("div",{className:"ls-list-actions",children:[bg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:bg.jsxDEV(he,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("button",{className:"ls-icon-btn",onClick:y,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:R.length===0,children:bg.jsxDEV(zh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("button",{className:"ls-icon-btn",onClick:Z,title:"New script",children:bg.jsxDEV(pw,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bg.jsxDEV("input",{ref:J,type:"file",accept:".zip",style:{display:"none"},onChange:Pr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bg.jsxDEV("div",{className:"ls-list-body",children:R.length===0?bg.jsxDEV("div",{className:"ls-list-empty",children:[bg.jsxDEV(C0,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),bg.jsxDEV("p",{children:["No ",A==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),bg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):m?[...z.entries()].map(([a,s])=>{let lr=Y.has(a);return a===""?bg.jsxDEV("div",{children:s.map(vr)},"__unfiled",!1,void 0,this):bg.jsxDEV("div",{className:"ls-folder-group",children:[bg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>j(a),children:[lr?bg.jsxDEV(Ml,{size:11},void 0,!1,void 0,this):bg.jsxDEV(Xo,{size:11},void 0,!1,void 0,this),bg.jsxDEV(Kh,{size:11},void 0,!1,void 0,this),bg.jsxDEV("span",{className:"ls-folder-name",children:a},void 0,!1,void 0,this),bg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(C)=>{C.stopPropagation();let V=window.prompt("Rename folder:",a);if(V===null||V.trim()===""||V.trim()===a)return;for(let c of s)q({type:"update_script",id:c.id,patch:{folder:V.trim()}})},children:bg.jsxDEV(sv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("span",{className:"ls-folder-count",children:s.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!lr&&s.map(vr)]},`folder-${a}`,!0,void 0,this)}):R.map(vr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Fe=qr(hg(),1),OJ=qr(T5(),1);var Jo=qr(hg(),1);function iY(v,h){(h==null||h>v.length)&&(h=v.length);for(var e=0,u=Array(h);e<h;e++)u[e]=v[e];return u}function lF(v){if(Array.isArray(v))return v}function hF(v,h,e){return(h=OF(h))in v?Object.defineProperty(v,h,{value:e,enumerable:!0,configurable:!0,writable:!0}):v[h]=e,v}function bF(v,h){var e=v==null?null:typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(e!=null){var u,H,q,A,M=[],Y=!0,Q=!1;try{if(q=(e=e.call(v)).next,h===0);else for(;!(Y=(u=q.call(e)).done)&&(M.push(u.value),M.length!==h);Y=!0);}catch(J){Q=!0,H=J}finally{try{if(!Y&&e.return!=null&&(A=e.return(),Object(A)!==A))return}finally{if(Q)throw H}}return M}}function wF(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UY(v,h){var e=Object.keys(v);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(v);h&&(u=u.filter(function(H){return Object.getOwnPropertyDescriptor(v,H).enumerable})),e.push.apply(e,u)}return e}function wP(v){for(var h=1;h<arguments.length;h++){var e=arguments[h]!=null?arguments[h]:{};h%2?UY(Object(e),!0).forEach(function(u){hF(v,u,e[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(e)):UY(Object(e)).forEach(function(u){Object.defineProperty(v,u,Object.getOwnPropertyDescriptor(e,u))})}return v}function LY(v,h){if(v==null)return{};var e,u,H=eF(v,h);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(v);for(u=0;u<q.length;u++)e=q[u],h.indexOf(e)===-1&&{}.propertyIsEnumerable.call(v,e)&&(H[e]=v[e])}return H}function eF(v,h){if(v==null)return{};var e={};for(var u in v)if({}.hasOwnProperty.call(v,u)){if(h.indexOf(u)!==-1)continue;e[u]=v[u]}return e}function FY(v,h){return lF(v)||bF(v,h)||HF(v,h)||wF()}function uF(v,h){if(typeof v!="object"||!v)return v;var e=v[Symbol.toPrimitive];if(e!==void 0){var u=e.call(v,h);if(typeof u!="object")return u;throw TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(v)}function OF(v){var h=uF(v,"string");return typeof h=="symbol"?h:h+""}function HF(v,h){if(v){if(typeof v=="string")return iY(v,h);var e={}.toString.call(v).slice(8,-1);return e==="Object"&&v.constructor&&(e=v.constructor.name),e==="Map"||e==="Set"?Array.from(v):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?iY(v,h):void 0}}function PF(v,h,e){if(h in v)Object.defineProperty(v,h,{value:e,enumerable:!0,configurable:!0,writable:!0});else v[h]=e;return v}function IY(v,h){var e=Object.keys(v);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(v);if(h)u=u.filter(function(H){return Object.getOwnPropertyDescriptor(v,H).enumerable});e.push.apply(e,u)}return e}function mY(v){for(var h=1;h<arguments.length;h++){var e=arguments[h]!=null?arguments[h]:{};if(h%2)IY(Object(e),!0).forEach(function(u){PF(v,u,e[u])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(v,Object.getOwnPropertyDescriptors(e));else IY(Object(e)).forEach(function(u){Object.defineProperty(v,u,Object.getOwnPropertyDescriptor(e,u))})}return v}function qF(){for(var v=arguments.length,h=Array(v),e=0;e<v;e++)h[e]=arguments[e];return function(u){return h.reduceRight(function(H,q){return q(H)},u)}}function $e(v){return function h(){var e=this;for(var u=arguments.length,H=Array(u),q=0;q<u;q++)H[q]=arguments[q];return H.length>=v.length?v.apply(this,H):function(){for(var A=arguments.length,M=Array(A),Y=0;Y<A;Y++)M[Y]=arguments[Y];return h.apply(e,[].concat(H,M))}}}function z4(v){return{}.toString.call(v).includes("Object")}function AF(v){return!Object.keys(v).length}function ie(v){return typeof v==="function"}function MF(v,h){return Object.prototype.hasOwnProperty.call(v,h)}function WF(v,h){if(!z4(h))$1("changeType");if(Object.keys(h).some(function(e){return!MF(v,e)}))$1("changeField");return h}function RF(v){if(!ie(v))$1("selectorType")}function GF(v){if(!(ie(v)||z4(v)))$1("handlerType");if(z4(v)&&Object.values(v).some(function(h){return!ie(h)}))$1("handlersType")}function XF(v){if(!v)$1("initialIsRequired");if(!z4(v))$1("initialType");if(AF(v))$1("initialContent")}function YF(v,h){throw Error(v[h]||v.default)}var JF={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},$1=$e(YF)(JF),Q4={changes:WF,selector:RF,handler:GF,initial:XF};function QF(v){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Q4.initial(v),Q4.handler(h);var e={current:v},u=$e($F)(e,h),H=$e(KF)(e),q=$e(Q4.changes)(v),A=$e(zF)(e);function M(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(J){return J};return Q4.selector(Q),Q(e.current)}function Y(Q){qF(u,H,q,A)(Q)}return[M,Y]}function zF(v,h){return ie(h)?h(v.current):h}function KF(v,h){return v.current=mY(mY({},v.current),h),h}function $F(v,h,e){return ie(h)?h(v.current):Object.keys(e).forEach(function(u){var H;return(H=h[u])===null||H===void 0?void 0:H.call(h,v.current[u])}),e}var iF={create:QF},NY=iF;var BY={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function ZY(v){return function h(){var e=this;for(var u=arguments.length,H=Array(u),q=0;q<u;q++)H[q]=arguments[q];return H.length>=v.length?v.apply(this,H):function(){for(var A=arguments.length,M=Array(A),Y=0;Y<A;Y++)M[Y]=arguments[Y];return h.apply(e,[].concat(H,M))}}}function xY(v){return{}.toString.call(v).includes("Object")}function UF(v){if(!v)CY("configIsRequired");if(!xY(v))CY("configType");if(v.urls)return LF(),{paths:{vs:v.urls.monacoBase}};return v}function LF(){console.warn(TY.deprecation)}function FF(v,h){throw Error(v[h]||v.default)}var TY={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},CY=ZY(FF)(TY),nY={config:UF};var SY=function(){for(var h=arguments.length,e=Array(h),u=0;u<h;u++)e[u]=arguments[u];return function(H){return e.reduceRight(function(q,A){return A(q)},H)}};function eP(v,h){return Object.keys(h).forEach(function(e){if(h[e]instanceof Object){if(v[e])Object.assign(h[e],eP(v[e],h[e]))}}),wP(wP({},v),h)}var IF={type:"cancelation",msg:"operation is manually canceled"};function K4(v){var h=!1,e=new Promise(function(u,H){v.then(function(q){return h?H(IF):u(q)}),v.catch(H)});return e.cancel=function(){return h=!0},e}var mF=["monaco"],NF=NY.create({config:BY,isInitialized:!1,resolve:null,reject:null,monaco:null}),tY=FY(NF,2),Ue=tY[0],$4=tY[1];function BF(v){var h=nY.config(v),e=h.monaco,u=LY(h,mF);$4(function(H){return{config:eP(H.config,u),monaco:e}})}function ZF(){var v=Ue(function(h){var{monaco:e,isInitialized:u,resolve:H}=h;return{monaco:e,isInitialized:u,resolve:H}});if(!v.isInitialized){if($4({isInitialized:!0}),v.monaco)return v.resolve(v.monaco),K4(uP);if(window.monaco&&window.monaco.editor)return kY(window.monaco),v.resolve(window.monaco),K4(uP);SY(xF,TF)(nF)}return K4(uP)}function xF(v){return document.body.appendChild(v)}function CF(v){var h=document.createElement("script");return v&&(h.src=v),h}function TF(v){var h=Ue(function(u){var{config:H,reject:q}=u;return{config:H,reject:q}}),e=CF("".concat(h.config.paths.vs,"/loader.js"));return e.onload=function(){return v()},e.onerror=h.reject,e}function nF(){var v=Ue(function(e){var{config:u,resolve:H,reject:q}=e;return{config:u,resolve:H,reject:q}}),h=window.require;h.config(v.config),h(["vs/editor/editor.main"],function(e){var u=e.m||e;kY(u),v.resolve(u)},function(e){v.reject(e)})}function kY(v){if(!Ue().monaco)$4({monaco:v})}function SF(){return Ue(function(v){var h=v.monaco;return h})}var uP=new Promise(function(v,h){return $4({resolve:v,reject:h})}),Ih={config:BF,init:ZF,__getMonacoInstance:SF};var DY=qr(hg(),1),Ho=qr(hg(),1);var VY=qr(hg(),1),U4=qr(hg(),1),_Y=qr(hg(),1),yY=qr(hg(),1),L4=qr(hg(),1),rI=qr(hg(),1);var fY=qr(hg(),1),tg=qr(hg(),1);var F4=qr(hg(),1),tF={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},OP=tF,kF={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},DF=kF;function VF({children:v}){return _Y.default.createElement("div",{style:DF.container},v)}var _F=VF,EF=_F;function yF({width:v,height:h,isEditorReady:e,loading:u,_ref:H,className:q,wrapperProps:A}){return U4.default.createElement("section",{style:{...OP.wrapper,width:v,height:h},...A},!e&&U4.default.createElement(EF,null,u),U4.default.createElement("div",{ref:H,style:{...OP.fullWidth,...!e&&OP.hide},className:q}))}var cF=yF,EY=VY.memo(cF);function jF(v){yY.useEffect(v,[])}var cY=jF;function fF(v,h,e=!0){let u=L4.useRef(!0);L4.useEffect(u.current||!e?()=>{u.current=!1}:v,h)}var Qv=fF;function Le(){}function c5(v,h,e,u){return aF(v,u)||pF(v,h,e,u)}function aF(v,h){return v.editor.getModel(jY(v,h))}function pF(v,h,e,u){return v.editor.createModel(h,e,u?jY(v,u):void 0)}function jY(v,h){return v.Uri.parse(h)}function dF({original:v,modified:h,language:e,originalLanguage:u,modifiedLanguage:H,originalModelPath:q,modifiedModelPath:A,keepCurrentOriginalModel:M=!1,keepCurrentModifiedModel:Y=!1,theme:Q="light",loading:J="Loading...",options:R={},height:z="100%",width:m="100%",className:j,wrapperProps:Z={},beforeMount:y=Le,onMount:rr=Le}){let[Pr,vr]=Ho.useState(!1),[a,s]=Ho.useState(!0),lr=Ho.useRef(null),C=Ho.useRef(null),V=Ho.useRef(null),c=Ho.useRef(rr),n=Ho.useRef(y),Jr=Ho.useRef(!1);cY(()=>{let k=Ih.init();return k.then((d)=>(C.current=d)&&s(!1)).catch((d)=>d?.type!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>lr.current?Cr():k.cancel()}),Qv(()=>{if(lr.current&&C.current){let k=lr.current.getOriginalEditor(),d=c5(C.current,v||"",u||e||"text",q||"");d!==k.getModel()&&k.setModel(d)}},[q],Pr),Qv(()=>{if(lr.current&&C.current){let k=lr.current.getModifiedEditor(),d=c5(C.current,h||"",H||e||"text",A||"");d!==k.getModel()&&k.setModel(d)}},[A],Pr),Qv(()=>{let k=lr.current.getModifiedEditor();k.getOption(C.current.editor.EditorOption.readOnly)?k.setValue(h||""):h!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:h||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[h],Pr),Qv(()=>{lr.current?.getModel()?.original.setValue(v||"")},[v],Pr),Qv(()=>{let{original:k,modified:d}=lr.current.getModel();C.current.editor.setModelLanguage(k,u||e||"text"),C.current.editor.setModelLanguage(d,H||e||"text")},[e,u,H],Pr),Qv(()=>{C.current?.editor.setTheme(Q)},[Q],Pr),Qv(()=>{lr.current?.updateOptions(R)},[R],Pr);let Rr=Ho.useCallback(()=>{if(!C.current)return;n.current(C.current);let k=c5(C.current,v||"",u||e||"text",q||""),d=c5(C.current,h||"",H||e||"text",A||"");lr.current?.setModel({original:k,modified:d})},[e,h,H,v,u,q,A]),Qr=Ho.useCallback(()=>{!Jr.current&&V.current&&(lr.current=C.current.editor.createDiffEditor(V.current,{automaticLayout:!0,...R}),Rr(),C.current?.editor.setTheme(Q),vr(!0),Jr.current=!0)},[R,Q,Rr]);Ho.useEffect(()=>{Pr&&c.current(lr.current,C.current)},[Pr]),Ho.useEffect(()=>{!a&&!Pr&&Qr()},[a,Pr,Qr]);function Cr(){let k=lr.current?.getModel();M||k?.original?.dispose(),Y||k?.modified?.dispose(),lr.current?.dispose()}return Ho.default.createElement(EY,{width:m,height:z,isEditorReady:Pr,loading:J,_ref:V,className:j,wrapperProps:Z})}var sF=dF,vcg=DY.memo(sF);function gI(v){let h=F4.useRef();return F4.useEffect(()=>{h.current=v},[v]),h.current}var oI=gI,i4=new Map;function vI({defaultValue:v,defaultLanguage:h,defaultPath:e,value:u,language:H,path:q,theme:A="light",line:M,loading:Y="Loading...",options:Q={},overrideServices:J={},saveViewState:R=!0,keepCurrentModel:z=!1,width:m="100%",height:j="100%",className:Z,wrapperProps:y={},beforeMount:rr=Le,onMount:Pr=Le,onChange:vr,onValidate:a=Le}){let[s,lr]=tg.useState(!1),[C,V]=tg.useState(!0),c=tg.useRef(null),n=tg.useRef(null),Jr=tg.useRef(null),Rr=tg.useRef(Pr),Qr=tg.useRef(rr),Cr=tg.useRef(),k=tg.useRef(u),d=oI(q),hr=tg.useRef(!1),or=tg.useRef(!1);cY(()=>{let t=Ih.init();return t.then((Hr)=>(c.current=Hr)&&V(!1)).catch((Hr)=>Hr?.type!=="cancelation"&&console.error("Monaco initialization: error:",Hr)),()=>n.current?S():t.cancel()}),Qv(()=>{let t=c5(c.current,v||u||"",h||H||"",q||e||"");t!==n.current?.getModel()&&(R&&i4.set(d,n.current?.saveViewState()),n.current?.setModel(t),R&&n.current?.restoreViewState(i4.get(q)))},[q],s),Qv(()=>{n.current?.updateOptions(Q)},[Q],s),Qv(()=>{!n.current||u===void 0||(n.current.getOption(c.current.editor.EditorOption.readOnly)?n.current.setValue(u):u!==n.current.getValue()&&(or.current=!0,n.current.executeEdits("",[{range:n.current.getModel().getFullModelRange(),text:u,forceMoveMarkers:!0}]),n.current.pushUndoStop(),or.current=!1))},[u],s),Qv(()=>{let t=n.current?.getModel();t&&H&&c.current?.editor.setModelLanguage(t,H)},[H],s),Qv(()=>{M!==void 0&&n.current?.revealLine(M)},[M],s),Qv(()=>{c.current?.editor.setTheme(A)},[A],s);let Wr=tg.useCallback(()=>{if(!(!Jr.current||!c.current)&&!hr.current){Qr.current(c.current);let t=q||e,Hr=c5(c.current,u||v||"",h||H||"",t||"");n.current=c.current?.editor.create(Jr.current,{model:Hr,automaticLayout:!0,...Q},J),R&&n.current.restoreViewState(i4.get(t)),c.current.editor.setTheme(A),M!==void 0&&n.current.revealLine(M),lr(!0),hr.current=!0}},[v,h,e,u,H,q,Q,J,R,A,M]);tg.useEffect(()=>{s&&Rr.current(n.current,c.current)},[s]),tg.useEffect(()=>{!C&&!s&&Wr()},[C,s,Wr]),k.current=u,tg.useEffect(()=>{s&&vr&&(Cr.current?.dispose(),Cr.current=n.current?.onDidChangeModelContent((t)=>{or.current||vr(n.current.getValue(),t)}))},[s,vr]),tg.useEffect(()=>{if(s){let t=c.current.editor.onDidChangeMarkers((Hr)=>{let zr=n.current.getModel()?.uri;if(zr&&Hr.find((Gr)=>Gr.path===zr.path)){let Gr=c.current.editor.getModelMarkers({resource:zr});a?.(Gr)}});return()=>{t?.dispose()}}return()=>{}},[s,a]);function S(){Cr.current?.dispose(),z?R&&i4.set(q,n.current.saveViewState()):n.current.getModel()?.dispose(),n.current.dispose()}return tg.default.createElement(EY,{width:m,height:j,isEditorReady:s,loading:Y,_ref:Jr,className:Z,wrapperProps:y})}var lI=vI,hI=fY.memo(lI),aY=hI;var j5=qr(hg(),1);var Po=qr(rg(),1),bI={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},pY=({entries:v,isRunning:h,onClear:e})=>{let[u,H]=j5.useState(!1),q=j5.useRef(null);j5.useEffect(()=>{if(!u&&q.current)q.current.scrollTop=q.current.scrollHeight},[v,u]);let A=()=>{let M=v.filter((Y)=>Y.type!=="separator").map((Y)=>`[${Y.timestamp}] ${Y.type.toUpperCase()}: ${Y.message}`).join(`
`);navigator.clipboard.writeText(M).catch(()=>{})};return Po.jsxDEV("div",{className:`ls-console${u?" ls-collapsed":""}`,children:[Po.jsxDEV("div",{className:"ls-console-header",onClick:()=>H((M)=>!M),children:[Po.jsxDEV(T0,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-console-title",children:["Console",h?" — running…":v.length>0?` (${v.length})`:""]},void 0,!0,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(M)=>{M.stopPropagation(),A()},title:"Copy output",disabled:v.length===0,children:Po.jsxDEV(pv,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(M)=>{M.stopPropagation(),e()},title:"Clear console",disabled:v.length===0,children:Po.jsxDEV(Lo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),u?Po.jsxDEV(Xo,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Po.jsxDEV(Gv,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&Po.jsxDEV("div",{className:"ls-console-output",ref:q,children:v.length===0?Po.jsxDEV("div",{className:"ls-console-empty",children:h?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):v.map((M,Y)=>M.type==="separator"?Po.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},Y,!1,void 0,this):Po.jsxDEV("div",{className:`ls-entry ${bI[M.type]??"ls-log"}`,children:[Po.jsxDEV("span",{className:"ls-entry-time",children:M.timestamp},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-type",children:M.type.toUpperCase()},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-msg",children:M.message},void 0,!1,void 0,this)]},Y,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Vo=qr(rg(),1),dY=({bindings:v,activeContext:h,onAdd:e,onRemove:u})=>{let H=()=>{let{characterId:A,characterName:M}=h;if(!A)return;if(v.some((Y)=>Y.type==="character"&&Y.characterId===A))return;e({type:"character",characterId:A,displayName:M??A})},q=()=>{let{chatId:A,characterName:M}=h;if(!A)return;if(v.some((Q)=>Q.type==="chat"&&Q.chatId===A))return;let Y=M?`${M} — ${A.slice(0,8)}`:A.slice(0,8);e({type:"chat",chatId:A,displayName:Y})};return Vo.jsxDEV("div",{className:"ls-bindings",children:Vo.jsxDEV("div",{className:"ls-bindings-row",children:[Vo.jsxDEV(_w,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),v.length===0?Vo.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):v.map((A,M)=>Vo.jsxDEV("span",{className:"ls-binding-chip",children:[A.type==="character"?Vo.jsxDEV(D5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Vo.jsxDEV(t5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),Vo.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:A.displayName},void 0,!1,void 0,this),Vo.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>u(M),title:"Remove binding",children:Vo.jsxDEV(to,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},M,!0,void 0,this)),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:H,disabled:!h.characterId,title:h.characterId?"Bind to current character":"Open a chat first",children:[Vo.jsxDEV(D5,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:q,disabled:!h.chatId,title:h.chatId?"Bind to current chat":"Open a chat first",children:[Vo.jsxDEV(t5,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var sY=qr(hg(),1);var so=qr(rg(),1),rJ=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use SETTINGS_UPDATED (key=activeChatId) for open/close."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:'A setting was updated. Chat navigation: data.key=="activeChatId", data.value=chatId (opened) or null (closed).'},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Acg=rJ.flatMap((v)=>v.events.map((h)=>h.name)),gJ=({scriptId:v,triggers:h,sendToBackend:e})=>{let[u,H]=sY.useState(!0),q=new Set(h),A=(M)=>{let Y=q.has(M)?h.filter((Q)=>Q!==M):[...h,M];e({type:"update_script",id:v,patch:{triggers:Y}})};return so.jsxDEV("div",{className:`ls-triggers${u?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>H((M)=>!M),children:[so.jsxDEV(Rl,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),q.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:q.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:u?so.jsxDEV(Xo,{size:12},void 0,!1,void 0,this):so.jsxDEV(Gv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&so.jsxDEV("div",{className:"ls-triggers-body",children:rJ.map((M)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:M.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:M.events.map((Y)=>so.jsxDEV("button",{className:`ls-trigger-chip${q.has(Y.name)?" ls-trigger-chip-active":""}`,onClick:()=>A(Y.name),title:Y.description,children:Y.name},Y.name,!1,void 0,this))},void 0,!1,void 0,this)]},M.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var oJ=`
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
`;var bJ=qr(hg(),1);function vJ(v){return v.split("`").map((e,u)=>{if(u%2===1)return e;return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function wI(v){return v.split("`").map((u,H)=>{if(H%2===1)return u;return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function i1(v,h){let e=`| ${v.join(" | ")} |`,u=`| ${v.map(()=>"---").join(" | ")} |`,H=h.map((q)=>`| ${q.map(wI).join(" | ")} |`);return[e,u,...H].join(`
`)}function eI(v){return v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field}function uI(v){if(v==="silent")return"*silent*";if(v==="boolean")return'`"true" / "false"`';return"`string`"}function OI(v){return v.aliases==="—"?"—":`\`${v.aliases}\``}function HI(v){let h=v.perms.length===0&&!v.note?"*none*":v.perms.map((e)=>`\`${e}\``).join(", ");return v.note?`${h}${v.perms.length?" ":""}${v.note}`:h}function PI(){return`## Lumiverse Events

${i1(["Event","Group","Payload shape"],HP.map((h)=>[`\`${h.name}\``,h.group,`\`${h.payload}\``]))}`}function qI(){return`## Permission Matrix

${PP.map((h)=>{let e=i1(["Method","Required permissions"],h.rows.map((u)=>[`\`${u.method}\``,HI(u)]));return`### ${h.group}

${e}`}).join(`

`)}`}function AI(){let v=i1(["Event","Payload fields","Emitted by"],qP.map((e)=>[`\`${e.name}\``,`\`${e.payload}\``,e.emittedBy])),h="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${v}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function MI(){let v=AP.map((e)=>{let u=i1(["Macro","Aliases","Returns","Description"],e.rows.map((q)=>[`\`${q.macro}\``,OI(q),uI(q.returns),q.desc])),H=[`### ${e.label}`];if(e.description)H.push(`*${e.description}*`);return H.push(u),H.join(`

`)}),h='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${v.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function WI(){return`## Key Types

${MP.map((v)=>lJ(v)).join(`

`)}`}function lJ(v,h="###"){let e=vJ(v.name),u=v.note?`*${vJ(v.note)}*

`:"",H=i1(["Field","Type","Description"],v.fields.map((q)=>[`\`${eI(q)}\``,`\`${q.type}\``,q.desc]));return`${h} ${e}

${u}${H}`}function RI(){return`## API Functions

${WP.map((h)=>{let e=i1(["Method","Arguments","Description"],h.rows.map((u)=>[`\`${u.name}\``,u.args,u.desc]));return`### ${h.group}

${e}`}).join(`

`)}`}function GI(){let h=i1(["Method","Arguments","Description"],RP.map((H)=>[`\`${H.name}\``,H.args,H.desc])),e=i1(["Method","Arguments","Description"],GP.map((H)=>[`\`${H.name}\``,H.args,H.desc])),u=XP.map((H)=>lJ(H,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",h,"","### ls:council-prompt","",e,"","### Built-in types","",u].join(`
`)}function XI(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function YI(){let h=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,e=[PI(),qI(),AI(),MI(),WI(),RI(),GI(),XI()];return`${h}

---

${e.join(`

---

`)}
`}function hJ(){let v=YI(),e=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,u=new Blob([v],{type:"text/markdown;charset=utf-8"}),H=URL.createObjectURL(u),q=document.createElement("a");q.href=H,q.download=e,q.click(),URL.revokeObjectURL(H)}var U=qr(rg(),1),U1=({icon:v,title:h,defaultOpen:e=!1,children:u})=>{let[H,q]=bJ.useState(e);return U.jsxDEV("div",{className:"ls-ref-section",children:[U.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>q((A)=>!A),children:[U.jsxDEV("span",{className:"ls-ref-section-title",children:[v,h]},void 0,!0,void 0,this),H?U.jsxDEV(Xo,{size:12},void 0,!1,void 0,this):U.jsxDEV(Ml,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H&&U.jsxDEV("div",{className:"ls-ref-section-body",children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Mg=({children:v})=>U.jsxDEV("code",{className:"ls-ref-code",children:v},void 0,!1,void 0,this),JI=({children:v})=>U.jsxDEV("span",{className:"ls-ref-perm",children:v},void 0,!1,void 0,this),QI=()=>U.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),zI=()=>U.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),f5=({label:v,cols:h})=>U.jsxDEV("tr",{children:U.jsxDEV("td",{colSpan:h,className:"ls-ref-group-header",children:v},void 0,!1,void 0,this)},void 0,!1,void 0,this),HP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],KI=()=>{let v="";return U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:HP.map((h)=>{let e=h.group!==v?h.group:"";return v=h.group,U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:e},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},PP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],$I=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:PP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV(f5,{label:v.group,cols:2},`hdr-${v.group}`,!1,void 0,this),v.rows.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:h.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:[h.perms.length===0&&!h.note?U.jsxDEV(QI,{},void 0,!1,void 0,this):null,h.perms.map((e)=>U.jsxDEV(JI,{children:e},e,!1,void 0,this)),h.note?U.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:h.perms.length?4:0},children:h.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},h.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],iI=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:qP.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),AP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],UI=({type:v})=>{if(v==="silent")return U.jsxDEV(zI,{},void 0,!1,void 0,this);if(v==="boolean")return U.jsxDEV(Mg,{children:'"true" / "false"'},void 0,!1,void 0,this);return U.jsxDEV(Mg,{children:"string"},void 0,!1,void 0,this)},LI=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:AP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV(f5,{label:v.description?U.jsxDEV(U.Fragment,{children:[v.label," — ",U.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:v.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):v.label,cols:4},`hdr-${v.label}`,!1,void 0,this),v.rows.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:h.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:h.aliases==="—"?U.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):U.jsxDEV(Mg,{children:h.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:U.jsxDEV(UI,{type:h.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update'",optional:!1,desc:"Which write path triggered this invocation. 'create' includes auto-greetings."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],FI=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:MP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV("tr",{children:U.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&U.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],II=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:WP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV(f5,{label:v.group,cols:3},`hdr-${v.group}`,!1,void 0,this),v.rows.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.group}-${h.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],GP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],mI=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],XP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],NI=()=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",U.jsxDEV(Mg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",U.jsxDEV(Mg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",U.jsxDEV(Mg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",U.jsxDEV(Mg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",U.jsxDEV(Mg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",U.jsxDEV(Mg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:[U.jsxDEV(f5,{label:"ls:components",cols:3},void 0,!1,void 0,this),RP.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),U.jsxDEV(f5,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),GP.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),U.jsxDEV(f5,{label:"ls:icons",cols:3},void 0,!1,void 0,this),mI.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:XP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV("tr",{children:U.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&U.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Mg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),wJ=()=>U.jsxDEV("div",{className:"ls-ref",children:[U.jsxDEV("div",{className:"ls-ref-toolbar",children:U.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>hJ(),title:"Download the current reference as a Markdown file",children:[U.jsxDEV(zh,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(Rl,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:U.jsxDEV(KI,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(cw,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:U.jsxDEV($I,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(dw,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[U.jsxDEV(iI,{},void 0,!1,void 0,this),U.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",U.jsxDEV(Mg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(Vw,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[U.jsxDEV(LI,{},void 0,!1,void 0,this),U.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",U.jsxDEV(Mg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",U.jsxDEV(Mg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(x0,{size:11},void 0,!1,void 0,this),title:"Key Types",children:U.jsxDEV(FI,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(yw,{size:11},void 0,!1,void 0,this),title:"API Functions",children:U.jsxDEV(II,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(xw,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:U.jsxDEV(NI,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(U1,{icon:U.jsxDEV(fw,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[U.jsxDEV("p",{className:"ls-ref-muted",children:[U.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",U.jsxDEV(Mg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",U.jsxDEV(Mg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",U.jsxDEV(Mg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",U.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),U.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[U.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",U.jsxDEV(Mg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",U.jsxDEV(Mg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",U.jsxDEV(Mg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",U.jsxDEV(Mg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var mr=qr(rg(),1),eJ=!1,uJ=({script:v,allScripts:h,activeContext:e,isRunning:u,consoleEntries:H,editorFontSize:q,autosaveDebounceMs:A,onClearConsole:M,sendToBackend:Y})=>{let[Q,J]=Jo.useState(v.code),[R,z]=Jo.useState(!1),[m,j]=Jo.useState(!1),[Z,y]=Jo.useState(v.name),[rr,Pr]=Jo.useState("code"),[vr,a]=Jo.useState(!1),[s,lr]=Jo.useState(!1),C=Jo.useRef(null),V=Jo.useRef(null);Jo.useEffect(()=>{J(v.code),z(!1),y(v.name),lr(!1)},[v.id,v.code,v.name]),Jo.useEffect(()=>{Y({type:"get_active_context"})},[v.id,Y]),Jo.useEffect(()=>{let or=setInterval(()=>{Y({type:"get_active_context"})},2000);return()=>clearInterval(or)},[Y]);let c=Jo.useCallback((or)=>{Y({type:"update_script",id:v.id,patch:{code:or}}),z(!1)},[v.id,Y]),n=(or)=>{if(or===void 0)return;if(J(or),z(or!==v.code),C.current)clearTimeout(C.current);C.current=setTimeout(()=>c(or),A)},Jr=(or,Wr)=>{if(V.current=or,!eJ){eJ=!0;let S=Wr.languages.typescript.javascriptDefaults;S.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),S.setCompilerOptions({target:Wr.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),S.addExtraLib(oJ,"ts:lumiverse/lumiscript-api.d.ts")}or.addCommand(Wr.KeyMod.CtrlCmd|Wr.KeyCode.KeyS,()=>{if(C.current)clearTimeout(C.current);c(or.getValue())}),or.getModel()?.setEOL(Wr.editor.EndOfLineSequence.LF)},Rr=()=>{if(u)return;if(C.current)clearTimeout(C.current),C.current=null;if(R)c(V.current?.getValue()??Q);Y({type:"run_script",id:v.id})},Qr=()=>{let or=Z.trim();if(or&&or!==v.name)Y({type:"update_script",id:v.id,patch:{name:or}});j(!1)},Cr=(or)=>{let Wr=v.bindings??[];Y({type:"update_script",id:v.id,patch:{bindings:[...Wr,or]}})},k=(or)=>{Y({type:"update_script",id:v.id,patch:{bindings:(v.bindings??[]).filter((Wr,S)=>S!==or)}})},d=()=>{if(v.allowDangerous)Y({type:"update_script",id:v.id,patch:{allowDangerous:!1}});else if(s)lr(!1),Y({type:"update_script",id:v.id,patch:{allowDangerous:!0}});else lr(!0)},hr=(or)=>new Date(or).toLocaleString();return mr.jsxDEV("div",{className:"ls-editor-root",children:[mr.jsxDEV("div",{className:"ls-editor-topbar",children:[m?mr.jsxDEV("input",{className:"ls-editor-name-input",value:Z,autoFocus:!0,onChange:(or)=>y(or.target.value),onBlur:Qr,onKeyDown:(or)=>{if(or.key==="Enter")Qr();if(or.key==="Escape")y(v.name),j(!1)}},void 0,!1,void 0,this):mr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>j(!0),title:"Click to rename",style:{cursor:"text"},children:v.name},void 0,!1,void 0,this),R&&mr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),mr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>Pr("code"),title:"Code editor",children:[mr.jsxDEV(Go,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),mr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>Pr("docs"),title:"API reference",children:[mr.jsxDEV(Cw,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),v.type!=="library"&&mr.jsxDEV("button",{className:`ls-btn${u?"":" ls-accent"}`,onClick:Rr,disabled:u,children:[u?mr.jsxDEV(G1,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):mr.jsxDEV(aw,{size:15},void 0,!1,void 0,this),u?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&mr.jsxDEV("div",{className:"ls-editor-monaco",children:mr.jsxDEV(aY,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:Q,onChange:n,onMount:Jr,options:{minimap:{enabled:!1},fontSize:q,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},v.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&mr.jsxDEV("div",{className:"ls-editor-docs",children:mr.jsxDEV(wJ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&mr.jsxDEV(pY,{entries:H,isRunning:u,onClear:M},void 0,!1,void 0,this),v.type==="trigger"&&mr.jsxDEV(gJ,{scriptId:v.id,triggers:v.triggers??[],sendToBackend:Y},void 0,!1,void 0,this),v.type==="trigger"&&mr.jsxDEV(dY,{bindings:v.bindings??[],activeContext:e,onAdd:Cr,onRemove:k},void 0,!1,void 0,this),s&&mr.jsxDEV("div",{className:"ls-danger-confirm",children:[mr.jsxDEV(k5,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),mr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:d,children:"Enable"},void 0,!1,void 0,this),mr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>lr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("div",{className:"ls-meta-footer",children:[mr.jsxDEV("span",{className:"ls-meta-item",children:mr.jsxDEV("button",{className:"ls-danger-btn",onClick:d,title:"Toggle dangerous mode",children:[v.allowDangerous?mr.jsxDEV(k5,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):mr.jsxDEV(re,{size:11},void 0,!1,void 0,this),mr.jsxDEV("span",{className:v.allowDangerous?"ls-dangerous":"",children:v.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[mr.jsxDEV(Kh,{size:10},void 0,!1,void 0,this),mr.jsxDEV("select",{className:"ls-folder-select",value:v.folder??"",onChange:(or)=>{let Wr=or.target.value;if(Wr==="__new__"){let S=window.prompt("New folder name:");if(S?.trim())Y({type:"update_script",id:v.id,patch:{folder:S.trim()}})}else Y({type:"update_script",id:v.id,patch:{folder:Wr}})},children:[mr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(h.map((or)=>or.folder).filter((or)=>!!or))].sort().map((or)=>mr.jsxDEV("option",{value:or,children:or},or,!1,void 0,this)),mr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item",children:[mr.jsxDEV(kw,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{children:["Updated ",hr(v.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item",children:[mr.jsxDEV(Tw,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{children:["Created ",hr(v.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:v.id,onClick:()=>{navigator.clipboard.writeText(v.id).catch(()=>{}),a(!0),setTimeout(()=>a(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[vr?mr.jsxDEV(nw,{size:10},void 0,!1,void 0,this):mr.jsxDEV(pv,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{children:["ID ",v.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Fo=qr(rg(),1),HJ=({scripts:v,initialScriptId:h,activeContext:e,execInfo:u,activeRunScriptId:H,isRunning:q,consoleHistory:A,editorFontSize:M,autosaveDebounceMs:Y,onClearConsole:Q,onClose:J,sendToBackend:R})=>{let[z,m]=Fe.useState(h),j=v.find((vr)=>vr.id===z)??null;Fe.useEffect(()=>{m(h)},[h]),Fe.useEffect(()=>{let vr=(a)=>{if(a.key==="Escape")J()};return document.addEventListener("keydown",vr),()=>document.removeEventListener("keydown",vr)},[J]);let Z=j?A[j.id]??[]:[],y=q&&j?.id===H;return OJ.createPortal(Fo.jsxDEV("div",{className:"ls-modal-overlay",onClick:(vr)=>{if(vr.target===vr.currentTarget)J()},children:Fo.jsxDEV("div",{className:"ls-modal-card",onClick:(vr)=>vr.stopPropagation(),children:[Fo.jsxDEV("div",{className:"ls-modal-header",children:[Fo.jsxDEV("span",{className:"ls-modal-title",children:[Fo.jsxDEV(T0,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),Fo.jsxDEV("button",{className:"ls-modal-close",onClick:J,title:"Close (Esc)",children:Fo.jsxDEV(to,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Fo.jsxDEV("div",{className:"ls-modal-body",children:[Fo.jsxDEV("div",{className:"ls-modal-sidebar",children:Fo.jsxDEV(J4,{scripts:v,selectedId:z,execInfo:u,onSelect:m,onEdit:m,sendToBackend:R},void 0,!1,void 0,this)},void 0,!1,void 0,this),Fo.jsxDEV("div",{className:"ls-modal-main",children:j?Fo.jsxDEV(uJ,{script:j,allScripts:v,activeContext:e,isRunning:y,consoleEntries:Z,editorFontSize:M,autosaveDebounceMs:Y,onClearConsole:()=>{if(j)Q(j.id)},sendToBackend:R},void 0,!1,void 0,this):Fo.jsxDEV("div",{className:"ls-placeholder",children:[Fo.jsxDEV(T0,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),Fo.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var I4=qr(rg(),1),PJ=({scripts:v,activeContext:h,execInfo:e,activeRunScriptId:u,isRunning:H,consoleHistory:q,editorFontSize:A,autosaveDebounceMs:M,onClearConsole:Y,onScriptOpened:Q,sendToBackend:J})=>{let[R,z]=m4.useState(null);return m4.useEffect(()=>{if(R&&Q)Q(R)},[R,Q]),I4.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[I4.jsxDEV(J4,{scripts:v,selectedId:R,execInfo:e,onSelect:()=>{},onEdit:z,sendToBackend:J},void 0,!1,void 0,this),R!==null&&I4.jsxDEV(HJ,{scripts:v,initialScriptId:R,activeContext:h,execInfo:e,activeRunScriptId:u,isRunning:H,consoleHistory:q,editorFontSize:A,autosaveDebounceMs:M,onClearConsole:Y,onClose:()=>z(null),sendToBackend:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var qJ=qr(hg(),1);var yg=qr(rg(),1),BI=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function ZI(v){if(v===void 0)return"undefined";if(v===null)return"null";if(typeof v==="string")return v.length>80?v.slice(0,77)+"…":v;try{let h=JSON.stringify(v);return h.length>80?h.slice(0,77)+"…":h}catch{return String(v)}}var AJ=({variables:v,sendToBackend:h})=>{let[e,u]=qJ.useState(new Set(["local","global","chat","character"])),H=(A)=>{u((M)=>{let Y=new Set(M);if(Y.has(A))Y.delete(A);else Y.add(A);return Y})},q=v?Object.values(v).reduce((A,M)=>A+Object.keys(M).length,0):0;return yg.jsxDEV("div",{className:"ls-status-section",children:[yg.jsxDEV("div",{className:"ls-inject-header",children:[yg.jsxDEV(dv,{size:10},void 0,!1,void 0,this),"Variables",q>0&&yg.jsxDEV("span",{className:"ls-inject-count",children:q},void 0,!1,void 0,this),yg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>h({type:"get_variables"}),children:yg.jsxDEV(Wl,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),yg.jsxDEV("div",{className:"ls-status-section-body",children:!v?yg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):q===0?yg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):BI.map(({key:A,label:M,hint:Y})=>{let Q=v[A],J=Object.keys(Q),R=e.has(A);if(J.length===0)return null;return yg.jsxDEV("div",{className:"ls-vars-scope",children:[yg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>H(A),children:[R?yg.jsxDEV(Xo,{size:10},void 0,!1,void 0,this):yg.jsxDEV(Gv,{size:10},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-name",children:M},void 0,!1,void 0,this),Y&&yg.jsxDEV("span",{className:"ls-vars-scope-hint",children:Y},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-count",children:J.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),R&&yg.jsxDEV("div",{className:"ls-vars-scope-body",children:J.sort().map((z)=>yg.jsxDEV("div",{className:"ls-vars-entry",children:[yg.jsxDEV("span",{className:"ls-vars-key",children:z},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-value",title:String(Q[z]),children:ZI(Q[z])},void 0,!1,void 0,this)]},z,!0,void 0,this))},void 0,!1,void 0,this)]},A,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var L1=qr(hg(),1);function N4(v){if(!Number.isFinite(v)||v<=0)return"0 B";let h=["B","KB","MB","GB"],e=Math.min(h.length-1,Math.floor(Math.log(v)/Math.log(1024))),u=v/Math.pow(1024,e);return`${e===0?u.toFixed(0):u.toFixed(1)} ${h[e]}`}function Ie(v){let h;if(typeof v==="number")h=v;else{if(!v)return"—";h=new Date(v).getTime()}if(!Number.isFinite(h)||h<=0)return"—";let e=Date.now()-h;if(e<60000)return"just now";if(e<3600000)return`${Math.floor(e/60000)}m ago`;if(e<86400000)return`${Math.floor(e/3600000)}h ago`;if(e<2592000000)return`${Math.floor(e/86400000)}d ago`;return new Date(h).toISOString().slice(0,10)}var YP={script:"script",character:"char",chat:"chat"},MJ={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function B4(v){return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(e,u,H,q,A,M,Y)=>{if(u)return`<span class="ls-json-key">${u}</span>${H}`;if(q)return`<span class="ls-json-string">${q}</span>`;if(A)return`<span class="ls-json-bool">${A}</span>`;if(M)return`<span class="ls-json-null">${M}</span>`;if(Y)return`<span class="ls-json-number">${Y}</span>`;return e})}async function JP(v){try{return await navigator.clipboard.writeText(v),!0}catch{return!1}}var Nr=qr(rg(),1),a5=["script","character","chat"],xI=10485760,CI=41943040,TI=52428800;function nI(v){if(v>=CI)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(v>=xI)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function SI(v){if(v.scope==="character"){if(v.characterName)return`character: ${v.characterName} (${v.characterId})
${v.path}`;if(v.characterId)return`character: ${v.characterId} (not currently loaded)
${v.path}`}if(v.scope==="chat"){if(v.chatName)return`chat: ${v.chatName} (${v.chatId})
${v.path}`;if(v.chatId)return`chat: ${v.chatId} (not currently loaded)
${v.path}`}return v.path}function tI(v,h,e,u){switch(e){case"name":return v.name.localeCompare(h.name,void 0,{sensitivity:"base"});case"scope":return v.scope.localeCompare(h.scope);case"owner":{let H=u.get(v.scriptId)??v.scriptId,q=u.get(h.scriptId)??h.scriptId;return H.localeCompare(q,void 0,{sensitivity:"base"})}case"size":return v.sizeBytes-h.sizeBytes;case"updated":return new Date(v.modifiedAt).getTime()-new Date(h.modifiedAt).getTime()}}var WJ=({collections:v,scripts:h,sendToBackend:e,onInspect:u,onDrop:H})=>{let[q,A]=L1.useState(""),[M,Y]=L1.useState(()=>new Set(a5)),[Q,J]=L1.useState(null),[R,z]=L1.useState("asc"),m=L1.useMemo(()=>{let C=new Map;for(let V of h)C.set(V.id,V.name);return C},[h]),j=L1.useMemo(()=>{if(!v)return null;let C=v;if(M.size<a5.length)C=C.filter((c)=>M.has(c.scope));let V=q.trim().toLowerCase();if(V)C=C.filter((c)=>c.name.toLowerCase().includes(V));if(Q){let c=R==="asc"?1:-1;C=C.slice().sort((n,Jr)=>tI(n,Jr,Q,m)*c)}return C},[v,M,q,Q,R,m]),Z=()=>e({type:"list_collections"}),y=(C)=>{Y((V)=>{let c=new Set(V);if(c.has(C))c.delete(C);else c.add(C);if(c.size===0)return new Set(a5);return c})},rr=(C)=>{if(Q!==C){J(C),z("asc");return}if(R==="asc"){z("desc");return}J(null)},Pr=()=>{A(""),Y(new Set(a5))},vr=v?.length??0,a=j?.length??0,s=q.trim().length>0||M.size<a5.length,lr=(C)=>{if(Q!==C)return Nr.jsxDEV(tw,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return R==="asc"?Nr.jsxDEV(Gv,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Nr.jsxDEV(Xo,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Nr.jsxDEV("div",{className:"ls-status-section",children:[Nr.jsxDEV("div",{className:"ls-inject-header",children:[Nr.jsxDEV(dv,{size:10},void 0,!1,void 0,this),"Collections",vr>0&&Nr.jsxDEV("span",{className:"ls-inject-count",children:vr},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:Z,children:Nr.jsxDEV(Wl,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-status-section-body",children:v===null?Nr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):v.length===0?Nr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Nr.jsxDEV(Nr.Fragment,{children:[Nr.jsxDEV("div",{className:"ls-collections-filter",children:[Nr.jsxDEV("div",{className:"ls-collections-filter-search",children:[Nr.jsxDEV(Y1,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:q,onChange:(C)=>A(C.target.value)},void 0,!1,void 0,this),q&&Nr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>A(""),children:Nr.jsxDEV(to,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-collections-filter-chips",children:a5.map((C)=>{let V=M.has(C);return Nr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":C,"aria-pressed":V,title:V?`Hide ${C}-scoped`:`Show ${C}-scoped`,onClick:()=>y(C),children:YP[C]},C,!1,void 0,this)})},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-filter-count",children:s?`${a}/${vr}`:vr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a===0?Nr.jsxDEV("div",{className:"ls-section-empty",children:[Nr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Nr.jsxDEV("button",{onClick:Pr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Nr.jsxDEV("div",{className:"ls-collections-list",children:[Nr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",lr("name")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",lr("scope")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",lr("owner")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",lr("size")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",lr("updated")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.map((C)=>{let V=m.get(C.scriptId)??`(${C.scriptId.slice(0,8)}…)`,c=!m.has(C.scriptId),n=c?`scriptId: ${C.scriptId} (not currently loaded)`:`${V} (${C.scriptId})`;return Nr.jsxDEV("div",{className:"ls-collections-row",children:[Nr.jsxDEV("span",{className:"ls-collections-name",title:C.name,children:C.name},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-scope","data-scope":C.scope,title:SI(C),children:YP[C.scope]},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:`ls-collections-owner${c?" ls-collections-owner-unknown":""}`,title:n,children:V},void 0,!1,void 0,this),(()=>{let Jr=nI(C.sizeBytes),Rr=(C.sizeBytes/TI*100).toFixed(C.sizeBytes<1048576?2:1),Qr=`${C.sizeBytes.toLocaleString()} bytes (${Rr}% of 50 MB cap)`;return Nr.jsxDEV("span",{className:"ls-collections-size","data-budget":Jr.tier,title:Qr,style:Jr.tier==="normal"?void 0:{color:Jr.color,fontWeight:600},children:N4(C.sizeBytes)},void 0,!1,void 0,this)})(),Nr.jsxDEV("span",{className:"ls-collections-updated",title:C.modifiedAt,children:Ie(C.modifiedAt)},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-actions",children:[Nr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>u(C.path),children:Nr.jsxDEV(Dw,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>H(C),children:Nr.jsxDEV(Lo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},C.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var kg=qr(hg(),1),XJ=qr(T5(),1);var v0=qr(hg(),1),RJ=qr(T5(),1);var zg=qr(rg(),1);function kI(v){let{id:h,createdAt:e,updatedAt:u,...H}=v;try{return JSON.stringify(H,null,2)}catch{return"{}"}}var GJ=({path:v,record:h,onClose:e,sendToBackend:u})=>{let[H,q]=v0.useState(()=>kI(h)),[A,M]=v0.useState(null),Y=v0.useRef(null),Q=v0.useRef(null),J=v0.useRef(null);v0.useEffect(()=>{let Z=(y)=>{if(y.key==="Escape")e()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[e]),v0.useEffect(()=>{let Z=(y)=>{if(y.key!=="Tab")return;let rr=Y.current;if(!rr)return;let Pr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(Pr.length===0)return;let vr=Pr[0],a=Pr[Pr.length-1],s=document.activeElement,lr=s!==null&&rr.contains(s);if(y.shiftKey){if(!lr||s===vr)y.preventDefault(),a.focus()}else if(!lr||s===a)y.preventDefault(),vr.focus()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[]),v0.useEffect(()=>{let Z=setTimeout(()=>Q.current?.focus(),0);return()=>clearTimeout(Z)},[]);let R=()=>{let Z;try{Z=JSON.parse(H)}catch(y){let rr=y instanceof Error?y.message:String(y);M(`JSON parse error: ${rr}`);return}if(Z===null||typeof Z!=="object"||Array.isArray(Z)){M("Record must be a JSON object — not an array, null, or primitive.");return}M(null),u({type:"update_record",path:v,recordId:String(h.id),patch:Z}),e()},z=(Z)=>{if((Z.metaKey||Z.ctrlKey)&&Z.key==="Enter")Z.preventDefault(),R()},m=String(h.id),j=zg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(Z)=>{if(Z.target===Z.currentTarget)e()},children:zg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:Y,onClick:(Z)=>Z.stopPropagation(),children:[zg.jsxDEV("div",{className:"ls-modal-header",children:[zg.jsxDEV("span",{className:"ls-modal-title",children:[zg.jsxDEV(sv,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),zg.jsxDEV("button",{className:"ls-modal-close",onClick:e,title:"Cancel (Esc)",children:zg.jsxDEV(to,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zg.jsxDEV("div",{className:"ls-edit-body",children:[zg.jsxDEV("div",{className:"ls-edit-meta",children:[zg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),zg.jsxDEV("code",{className:"ls-edit-meta-value",title:m,children:m},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",zg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",zg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",zg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",zg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),zg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[zg.jsxDEV("pre",{ref:J,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:B4(H)+`
`}},void 0,!1,void 0,this),zg.jsxDEV("textarea",{ref:Q,className:"ls-edit-textarea",value:H,onChange:(Z)=>{if(q(Z.target.value),A)M(null)},onKeyDown:z,onScroll:(Z)=>{let y=J.current;if(!y)return;y.scrollTop=Z.currentTarget.scrollTop,y.scrollLeft=Z.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A&&zg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[zg.jsxDEV(nv,{size:12},void 0,!1,void 0,this),zg.jsxDEV("span",{children:A},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zg.jsxDEV("div",{className:"ls-drop-actions",children:[zg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:e,children:"Cancel"},void 0,!1,void 0,this),zg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:R,title:"Save (Ctrl/Cmd+Enter)",children:[zg.jsxDEV(sw,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return RJ.createPortal(j,document.body)};var f=qr(rg(),1),mh=50,DI=150,VI=1200,_I=4000,YJ=({path:v,summary:h,records:e,total:u,error:H,stats:q,refreshToken:A,onClose:M,sendToBackend:Y})=>{let[Q,J]=kg.useState(""),[R,z]=kg.useState(""),[m,j]=kg.useState(0),[Z,y]=kg.useState("shallow"),[rr,Pr]=kg.useState(0),[vr,a]=kg.useState(()=>new Set),[s,lr]=kg.useState(null),[C,V]=kg.useState(null),[c,n]=kg.useState("records");kg.useEffect(()=>{let t=setTimeout(()=>z(Q),DI);return()=>clearTimeout(t)},[Q]),kg.useEffect(()=>{j(0)},[R,Z]),kg.useEffect(()=>{let t=R.trim();if(Z==="jsonquery")Y({type:"inspect_collection",path:v,jsonqueryFilter:t||void 0,limit:mh,offset:m*mh});else Y({type:"inspect_collection",path:v,textFilter:t||void 0,deepFilter:Z==="deep"||void 0,limit:mh,offset:m*mh})},[v,R,Z,m,A,rr,Y]),kg.useEffect(()=>{let t=(Hr)=>{if(Hr.key==="Escape")M()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[M]);let Jr=Math.max(1,Math.ceil(u/mh)),Rr=u===0?0:m*mh+1,Qr=Math.min(u,(m+1)*mh),Cr=kg.useMemo(()=>{let t=v.match(/\/([^/]+)\.json$/);return t?t[1]:v},[v]),k=kg.useMemo(()=>{if(!h)return null;if(h.scope==="character"&&h.characterName)return`character: ${h.characterName}`;if(h.scope==="chat"&&h.chatName)return`chat: ${h.chatName}`;return null},[h]),d=(t)=>{a((Hr)=>{let zr=new Set(Hr);return zr.add(t),zr}),setTimeout(()=>{a((Hr)=>{if(!Hr.has(t))return Hr;let zr=new Set(Hr);return zr.delete(t),zr})},VI)},hr=async(t)=>{if(await JP(String(t.id)))d(`${t.id}:id`)},or=async(t)=>{if(await JP(JSON.stringify(t,null,2)))d(`${t.id}:json`)};kg.useEffect(()=>{if(C===null)return;let t=setTimeout(()=>V(null),_I);return()=>clearTimeout(t)},[C]);let Wr=(t)=>{let Hr=String(t.id);if(C===Hr)Y({type:"delete_record",path:v,recordId:Hr}),V(null);else V(Hr)};kg.useEffect(()=>{V(null),lr(null)},[m,R,Z,v]),kg.useEffect(()=>{n("records")},[v]),kg.useEffect(()=>{if(c!=="stats")return;Y({type:"analyze_collection",path:v})},[c,v,A,rr,Y]);let S=f.jsxDEV("div",{className:"ls-modal-overlay",onClick:(t)=>{if(t.target===t.currentTarget)M()},children:f.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(t)=>t.stopPropagation(),children:[f.jsxDEV("div",{className:"ls-modal-header",children:[f.jsxDEV("span",{className:"ls-modal-title",children:[f.jsxDEV(dv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-name",children:Cr},void 0,!1,void 0,this),k&&f.jsxDEV("span",{className:"ls-inspect-title-path",title:v,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-path",title:v,children:v},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:()=>Pr((t)=>t+1),title:"Refresh records",style:{marginRight:4},children:f.jsxDEV(Wl,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:M,title:"Close (Esc)",children:f.jsxDEV(to,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":c==="records",onClick:()=>n("records"),children:[f.jsxDEV(Ew,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":c==="stats",onClick:()=>n("stats"),children:[f.jsxDEV(W1,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),c==="records"&&f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{className:"ls-inspect-toolbar",children:[f.jsxDEV("div",{className:"ls-inspect-search",children:[f.jsxDEV(Y1,{size:12},void 0,!1,void 0,this),f.jsxDEV("input",{type:Z==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:Z==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":Z==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:Q,onChange:(t)=>J(t.target.value),autoFocus:!0,spellCheck:Z!=="jsonquery",autoCorrect:Z==="jsonquery"?"off":"on",autoCapitalize:Z==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),f.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>y("shallow"),children:f.jsxDEV(Y1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>y("deep"),children:f.jsxDEV(R1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>y("jsonquery"),children:f.jsxDEV(Go,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-pager",children:[f.jsxDEV("span",{className:"ls-inspect-pager-status",children:u===0?"No matching records":f.jsxDEV(f.Fragment,{children:["Showing ",f.jsxDEV("strong",{children:Rr},void 0,!1,void 0,this),"–",f.jsxDEV("strong",{children:Qr},void 0,!1,void 0,this)," of ",f.jsxDEV("strong",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>j((t)=>Math.max(0,t-1)),disabled:m===0,title:"Previous page",children:f.jsxDEV(Sw,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>j((t)=>Math.min(Jr-1,t+1)),disabled:m>=Jr-1,title:"Next page",children:f.jsxDEV(Ml,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),H&&f.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[f.jsxDEV(nv,{size:12},void 0,!1,void 0,this),f.jsxDEV("span",{children:H},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-body",children:e===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):e.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:u===0&&R?f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{children:["No records match “",R,"”"]},void 0,!0,void 0,this),f.jsxDEV("button",{onClick:()=>J(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):u===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):f.jsxDEV("div",{className:"ls-inspect-records",children:e.map((t)=>{let Hr=String(t.id),zr=vr.has(`${t.id}:id`),Gr=vr.has(`${t.id}:json`);return f.jsxDEV("div",{className:"ls-inspect-record",children:[f.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${Hr}`,children:[f.jsxDEV("code",{children:[Hr.slice(0,12),"…"]},void 0,!0,void 0,this),f.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",f.jsxDEV("time",{title:new Date(t.createdAt).toISOString(),children:Ie(t.createdAt)},void 0,!1,void 0,this),t.updatedAt!==t.createdAt&&f.jsxDEV(f.Fragment,{children:[" · ","updated ",f.jsxDEV("time",{title:new Date(t.updatedAt).toISOString(),children:Ie(t.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:zr?"Copied!":"Copy ID",onClick:()=>hr(t),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:zr?"var(--lumiverse-accent)":"inherit",opacity:zr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(pv,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Gr?"Copied!":"Copy full JSON",onClick:()=>or(t),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Gr?"var(--lumiverse-accent)":"inherit",opacity:Gr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(x0,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>lr(t),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(sv,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action"+(C===Hr?" ls-inspect-record-action-confirm":""),title:C===Hr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Wr(t),style:{background:C===Hr?"rgba(246, 130, 130, 0.18)":"transparent",border:C===Hr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:C===Hr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:C===Hr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:C===Hr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:C===Hr?600:400,borderRadius:3},children:[f.jsxDEV(Lo,{size:11},void 0,!1,void 0,this),C===Hr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:B4(EI(t))}},void 0,!1,void 0,this)]},Hr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c==="stats"&&f.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:q===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):q.fields.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:q.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):f.jsxDEV(jI,{stats:q},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return f.jsxDEV(f.Fragment,{children:[XJ.createPortal(S,document.body),s&&f.jsxDEV(GJ,{path:v,record:s,onClose:()=>lr(null),sendToBackend:Y},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function EI(v){let{id:h,createdAt:e,updatedAt:u,...H}=v;try{return JSON.stringify(H,null,2)}catch{return String(v)}}var yI={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function cI(v){if(typeof v==="string")return`"${v.length>32?v.slice(0,30)+"…":v}"`;if(v===null)return"null";return String(v)}function QP(v){if(!Number.isFinite(v))return"—";return Number.isInteger(v)?String(v):v.toFixed(2)}var jI=({stats:v})=>{return f.jsxDEV("div",{className:"ls-inspect-stats",children:[f.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",f.jsxDEV("strong",{children:v.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",v.totalRecords===1?"record":"records"," ·"," ",f.jsxDEV("strong",{children:v.fields.length},void 0,!1,void 0,this)," ",v.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-grid",children:v.fields.map((h)=>f.jsxDEV(fI,{field:h,totalRecords:v.totalRecords},h.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},fI=({field:v,totalRecords:h})=>{let e=h===0?0:Math.round(v.presence/h*100),u=Object.entries(v.types);return u.sort((H,q)=>q[1]-H[1]),f.jsxDEV("div",{className:"ls-inspect-stats-card",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[f.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:v.name,children:v.name},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${v.presence} of ${h} records`,children:[e,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:u.map(([H,q])=>f.jsxDEV("span",{className:yI[H],children:[H," · ",q]},H,!0,void 0,this))},void 0,!1,void 0,this),v.numericRange&&f.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[f.jsxDEV("span",{children:["min ",f.jsxDEV("strong",{children:QP(v.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["max ",f.jsxDEV("strong",{children:QP(v.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["mean ",f.jsxDEV("strong",{children:QP(v.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.topValues.length>0&&f.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",v.topValues.length," of ",v.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:v.topValues.map((H,q)=>f.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(H.value),children:[f.jsxDEV("code",{children:cI(H.value)},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",H.count]},void 0,!0,void 0,this)]},q,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var me=qr(hg(),1),JJ=qr(T5(),1);var ug=qr(rg(),1);function aI(v){if(v.scope==="character"&&v.characterName&&v.characterId)return{label:"Character",name:v.characterName,id:v.characterId};if(v.scope==="chat"&&v.chatName&&v.chatId)return{label:"Chat",name:v.chatName,id:v.chatId};return null}var QJ=({target:v,recordCount:h,onConfirm:e,onCancel:u})=>{let H=me.useRef(null);me.useEffect(()=>{let A=(M)=>{if(M.key==="Escape")u()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[u]),me.useEffect(()=>{let A=(M)=>{if(M.key!=="Tab")return;let Y=H.current;if(!Y)return;let Q=Array.from(Y.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(Q.length===0)return;let J=Q[0],R=Q[Q.length-1],z=document.activeElement,m=z!==null&&Y.contains(z);if(M.shiftKey){if(!m||z===J)M.preventDefault(),R.focus()}else if(!m||z===R)M.preventDefault(),J.focus()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[]);let q=ug.jsxDEV("div",{className:"ls-modal-overlay",onClick:(A)=>{if(A.target===A.currentTarget)u()},children:ug.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:H,onClick:(A)=>A.stopPropagation(),children:[ug.jsxDEV("div",{className:"ls-modal-header",children:[ug.jsxDEV("span",{className:"ls-modal-title",children:[ug.jsxDEV(Lo,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),ug.jsxDEV("button",{className:"ls-modal-close",onClick:u,title:"Cancel (Esc)",children:ug.jsxDEV(to,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-body",children:[ug.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target",children:[ug.jsxDEV("div",{className:"ls-drop-target-name",children:v.name},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target-meta",children:[ug.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":v.scope,children:MJ[v.scope]},void 0,!1,void 0,this),ug.jsxDEV("span",{className:"ls-drop-target-size",children:N4(v.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let A=aI(v);if(!A)return null;return ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${A.label.toLowerCase()}Id: ${A.id}`,children:[A.label,": ",ug.jsxDEV("strong",{children:A.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),ug.jsxDEV("div",{className:"ls-drop-target-path",title:v.path,children:v.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h===null?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):h>=0?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:h===0?"Collection is currently empty.":ug.jsxDEV(ug.Fragment,{children:["Will delete ",ug.jsxDEV("strong",{children:h.toLocaleString()},void 0,!1,void 0,this)," ",h===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,ug.jsxDEV("div",{className:"ls-drop-warning",children:[ug.jsxDEV(nv,{size:12},void 0,!1,void 0,this),ug.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-actions",children:[ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:u,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:e,children:[ug.jsxDEV(Lo,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return JJ.createPortal(q,document.body)};var Kl=qr(rg(),1),zJ=({variables:v,collections:h,scripts:e,sendToBackend:u,inspectPath:H,inspectRecords:q,inspectTotal:A,inspectError:M,inspectStats:Y,inspectRefreshToken:Q,onInspect:J,dropTarget:R,dropTargetCount:z,onDrop:m,onDropConfirm:j})=>{return Kl.jsxDEV(Kl.Fragment,{children:[Kl.jsxDEV("div",{className:"ls-storage-list",children:[Kl.jsxDEV(AJ,{variables:v,sendToBackend:u},void 0,!1,void 0,this),Kl.jsxDEV(WJ,{collections:h,scripts:e,sendToBackend:u,onInspect:J,onDrop:m},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H!==null&&Kl.jsxDEV(YJ,{path:H,summary:h?.find((Z)=>Z.path===H),records:q,total:A,error:M,stats:Y,refreshToken:Q,onClose:()=>J(null),sendToBackend:u},void 0,!1,void 0,this),R!==null&&Kl.jsxDEV(QJ,{target:R,recordCount:z,onConfirm:j,onCancel:()=>m(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Mr=qr(rg(),1),KJ=({onBackendMessage:v,sendToBackend:h})=>{let[e,u]=Kg.useState("manage"),[H,q]=Kg.useState([]),[A,M]=Kg.useState(v4),[Y,Q]=Kg.useState({characterId:null,characterName:null,chatId:null}),[J,R]=Kg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[z,m]=Kg.useState([]),[j,Z]=Kg.useState([]),[y,rr]=Kg.useState(null),[Pr,vr]=Kg.useState(null),[a,s]=Kg.useState(null),[lr,C]=Kg.useState(null),[V,c]=Kg.useState(0),[n,Jr]=Kg.useState(null),[Rr,Qr]=Kg.useState(0),[Cr,k]=Kg.useState(null),[d,hr]=Kg.useState(null),[or,Wr]=Kg.useState(null),[S,t]=Kg.useState({});Kg.useEffect(()=>{let Gr=v((Tr)=>{let wr=Tr;switch(wr.type){case"scripts_updated":q(wr.scripts);break;case"script_patched":q((nr)=>nr.map((ar)=>ar.id===wr.script.id?wr.script:ar));break;case"settings_updated":M(wr.settings);break;case"active_context":Q({characterId:wr.characterId,characterName:wr.characterName,chatId:wr.chatId}),h({type:"get_variables"});break;case"variables_updated":rr(wr.variables);break;case"collections_list":vr(wr.collections);break;case"collection_records":C((nr)=>{return wr.records}),c(wr.total),Jr(wr.error??null);break;case"collection_stats":k((nr)=>{return wr.stats});break;case"collection_count":Wr((nr)=>{return wr.count});break;case"collections_updated":h({type:"list_collections"}),Qr((nr)=>nr+1);break;case"injections_updated":m(wr.injections);break;case"tools_updated":Z(wr.tools);break;case"execution_started":{let nr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};R((ar)=>{let Xg=ar.consoleHistory[wr.scriptId]??[],Io=Xg.length>0?[...Xg,nr]:Xg;return{...ar,activeScriptId:wr.scriptId,runId:wr.runId,isRunning:!0,consoleHistory:{...ar.consoleHistory,[wr.scriptId]:Io},scriptExecInfo:{...ar.scriptExecInfo,[wr.scriptId]:{...ar.scriptExecInfo[wr.scriptId],dot:"running"}}}}),t((ar)=>({...ar,[wr.scriptId]:(ar[wr.scriptId]??0)+1}));break}case"console_entry":{let nr=A.consoleHistoryLimit;R((ar)=>{let Xg=ar.consoleHistory[wr.scriptId]??[];if(Xg.length>=nr)return ar;let er=Xg.length===nr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${nr} entries. Clear the console to resume capture.]`}:wr.entry;return{...ar,consoleHistory:{...ar.consoleHistory,[wr.scriptId]:[...Xg,er]}}});break}case"execution_ended":R((nr)=>{let ar=nr.consoleHistory[wr.scriptId]??[],Xg=nr.scriptExecInfo[wr.scriptId],Io=!wr.success&&wr.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:wr.error}]:[],er=!wr.success?!0:Xg?.stickyError??!1,_o=!wr.success||er?"error":"success",zo=wr.duration??0,cg=wr.success&&zo===0&&(Xg?.duration??0)>0?Xg.duration:wr.duration;return{...nr,isRunning:!1,consoleHistory:Io.length?{...nr.consoleHistory,[wr.scriptId]:[...ar,...Io]}:nr.consoleHistory,scriptExecInfo:{...nr.scriptExecInfo,[wr.scriptId]:{dot:_o,duration:cg,error:wr.error??Xg?.error,stickyError:er}}}});break;case"error":console.warn("[LumiScript]",wr.message);break}});return h({type:"get_scripts"}),h({type:"get_settings"}),h({type:"get_active_context"}),h({type:"get_injections"}),h({type:"get_tools"}),Gr},[v,h]),Kg.useEffect(()=>{if(e==="storage")h({type:"list_collections"})},[e,h]),Kg.useEffect(()=>{if(Wr(null),d)h({type:"count_collection",path:d.path})},[d,h]);let Hr=Kg.useCallback((Gr)=>{R((Tr)=>({...Tr,consoleHistory:{...Tr.consoleHistory,[Gr]:[]}}))},[]),zr=Kg.useCallback((Gr)=>{R((Tr)=>{let wr=Tr.scriptExecInfo[Gr];if(!wr?.stickyError)return Tr;return{...Tr,scriptExecInfo:{...Tr.scriptExecInfo,[Gr]:{...wr,dot:"idle",stickyError:!1}}}})},[]);return Mr.jsxDEV("div",{className:"ls-panel",children:[Mr.jsxDEV("div",{className:"ls-tabs",children:[Mr.jsxDEV("button",{className:`ls-tab-pill${e==="manage"?" ls-active":""}`,onClick:()=>u("manage"),children:[Mr.jsxDEV(Go,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Mr.jsxDEV("button",{className:`ls-tab-pill${e==="status"?" ls-active":""}`,onClick:()=>u("status"),children:[Mr.jsxDEV(Nw,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Mr.jsxDEV("button",{className:`ls-tab-pill${e==="storage"?" ls-active":""}`,onClick:()=>u("storage"),children:[Mr.jsxDEV(dv,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[e==="manage"&&Mr.jsxDEV(PJ,{scripts:H,activeContext:Y,execInfo:J.scriptExecInfo,activeRunScriptId:J.activeScriptId,isRunning:J.isRunning,consoleHistory:J.consoleHistory,editorFontSize:A.editorFontSize,autosaveDebounceMs:A.autosaveDebounceMs,onClearConsole:Hr,onScriptOpened:zr,sendToBackend:h},void 0,!1,void 0,this),e==="status"&&Mr.jsxDEV(dI,{scripts:H,execInfo:J.scriptExecInfo,invocationCounts:S,injections:z,tools:j,sendToBackend:h},void 0,!1,void 0,this),e==="storage"&&Mr.jsxDEV(zJ,{variables:y,collections:Pr,scripts:H,sendToBackend:h,inspectPath:a,inspectRecords:lr,inspectTotal:V,inspectError:n,inspectStats:Cr,inspectRefreshToken:Rr,onInspect:(Gr)=>{s(Gr),C(null),c(0),k(null)},dropTarget:d,dropTargetCount:or,onDrop:hr,onDropConfirm:()=>{if(!d)return;let Gr=d.path;if(a===Gr)s(null),C(null),c(0),k(null);h({type:"drop_collection",path:Gr}),hr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},pI={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},dI=({scripts:v,execInfo:h,invocationCounts:e,injections:u,tools:H,sendToBackend:q})=>{let A=v.filter((R)=>R.type==="trigger"&&R.enabled),M=Object.fromEntries(v.map((R)=>[R.id,R.name])),[Y,Q]=Kg.useState(new Set),J=(R)=>{Q((z)=>{let m=new Set(z);if(m.has(R))m.delete(R);else m.add(R);return m})};return Mr.jsxDEV("div",{className:"ls-status-list",children:[Mr.jsxDEV("div",{className:"ls-status-section",children:[Mr.jsxDEV("div",{className:"ls-inject-header",children:[Mr.jsxDEV(Go,{size:10},void 0,!1,void 0,this),"Scripts",A.length>0&&Mr.jsxDEV("span",{className:"ls-inject-count",children:A.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section-body",children:A.length===0?Mr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):A.map((R)=>{let z=h[R.id],m=z?.dot??"idle",j={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[m],Z=R.triggers??[],y=e[R.id];return Mr.jsxDEV("div",{className:"ls-status-row",children:[Mr.jsxDEV("div",{className:"ls-status-row-main",children:[Mr.jsxDEV("span",{className:j,title:pI[m]},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-status-name",children:R.name},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-status-right",children:[y!==void 0&&y>0&&Mr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${y} time${y!==1?"s":""} this session`,children:["×",y]},void 0,!0,void 0,this),z?.duration!==void 0&&m!=="running"&&Mr.jsxDEV("span",{className:"ls-status-duration",style:{color:m==="error"?"#ef4444":void 0},children:[z.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Z.length>0?Mr.jsxDEV("div",{className:"ls-status-events",children:Z.map((rr)=>Mr.jsxDEV("span",{className:"ls-event-badge",children:[Mr.jsxDEV(Rl,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Mr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),m==="error"&&z?.error&&Mr.jsxDEV("div",{className:"ls-status-error-row",children:Mr.jsxDEV("span",{className:"ls-status-error-text",children:z.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},R.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section",children:[Mr.jsxDEV("div",{className:"ls-inject-header",children:[Mr.jsxDEV(be,{size:10},void 0,!1,void 0,this),"Active Tools",H.length>0&&Mr.jsxDEV("span",{className:"ls-inject-count",children:H.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section-body",children:H.length===0?Mr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):H.map((R)=>Mr.jsxDEV("div",{className:"ls-tool-row",children:[Mr.jsxDEV("div",{className:"ls-tool-name",title:R.description,children:R.name},void 0,!1,void 0,this),Mr.jsxDEV("div",{className:"ls-tool-meta",children:[R.council_eligible&&Mr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-inject-script",title:R.scriptId,children:R.scriptName},void 0,!1,void 0,this),Mr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${R.name}`,title:`Unregister "${R.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>q({type:"unregister_tool",name:R.name}),children:Mr.jsxDEV(Lo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},R.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section",children:[Mr.jsxDEV("div",{className:"ls-inject-header",children:[Mr.jsxDEV(ge,{size:10},void 0,!1,void 0,this),"Active Injections",u.length>0&&Mr.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?Mr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):u.map((R)=>{let z=Y.has(R.id);return Mr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>J(R.id),children:[Mr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${R.mode}`,title:R.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:R.mode==="intercept"?Mr.jsxDEV(Bw,{size:11},void 0,!1,void 0,this):Mr.jsxDEV(Zw,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Mr.jsxDEV("div",{className:"ls-inject-body",children:[Mr.jsxDEV("div",{className:"ls-inject-header-row",children:[Mr.jsxDEV("span",{className:"ls-inject-id",title:R.id,children:R.id},void 0,!1,void 0,this),Mr.jsxDEV("div",{className:"ls-inject-meta",children:[Mr.jsxDEV("span",{className:"ls-inject-role",children:R.role},void 0,!1,void 0,this),R.mode==="intercept"&&R.depth>0&&Mr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${R.depth} message${R.depth!==1?"s":""}`,children:["d:",R.depth]},void 0,!0,void 0,this),R.ephemeral&&Mr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Mr.jsxDEV($h,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-inject-script",title:R.scriptId,children:M[R.scriptId]??R.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("span",{className:"ls-inject-chevron",children:z?Mr.jsxDEV(Gv,{size:10},void 0,!1,void 0,this):Mr.jsxDEV(Xo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),z&&Mr.jsxDEV("div",{className:"ls-inject-content",onClick:(m)=>m.stopPropagation(),children:R.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},R.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Ne=qr(hg(),1);var xr=qr(rg(),1),$J=({onBackendMessage:v,sendToBackend:h})=>{let[e,u]=Ne.useState(v4),[H,q]=Ne.useState([]);Ne.useEffect(()=>{let Q=v((J)=>{let R=J;if(R.type==="scripts_updated")q(R.scripts);if(R.type==="settings_updated")u(R.settings)});return h({type:"get_settings"}),h({type:"get_scripts"}),Q},[v,h]);let A=H.filter((Q)=>Q.type==="trigger").length,M=H.filter((Q)=>Q.type==="library").length,Y=(Q)=>{h({type:"update_settings",patch:{enabled:Q}})};return xr.jsxDEV("div",{className:"ls-settings",children:[xr.jsxDEV("div",{className:"ls-settings-header",children:xr.jsxDEV("span",{className:"ls-settings-title",children:[xr.jsxDEV(T0,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),xr.jsxDEV("div",{className:"ls-toggle-row",children:[xr.jsxDEV("label",{className:"ls-toggle",children:[xr.jsxDEV("input",{type:"checkbox",checked:e.enabled,onChange:(Q)=>Y(Q.target.checked)},void 0,!1,void 0,this),xr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-counts",children:[xr.jsxDEV("div",{className:"ls-count-card",children:[xr.jsxDEV(Go,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),xr.jsxDEV("div",{className:"ls-count-num",children:A},void 0,!1,void 0,this),xr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-count-card",children:[xr.jsxDEV(Qh,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),xr.jsxDEV("div",{className:"ls-count-num",children:M},void 0,!1,void 0,this),xr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-section",children:[xr.jsxDEV("div",{className:"ls-settings-section-label",children:[xr.jsxDEV($h,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-field",children:[xr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),xr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(e.scriptTimeoutMs/1000),onChange:(Q)=>{let J=Math.max(5,Math.min(300,Number(Q.target.value)||60));h({type:"update_settings",patch:{scriptTimeoutMs:J*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-field",children:[xr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),xr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:e.consoleHistoryLimit,onChange:(Q)=>{let J=Math.max(50,Math.min(2000,Number(Q.target.value)||500));h({type:"update_settings",patch:{consoleHistoryLimit:J}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-section",children:[xr.jsxDEV("div",{className:"ls-settings-section-label",children:[xr.jsxDEV(le,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-field",children:[xr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),xr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:e.editorFontSize,onChange:(Q)=>{let J=Math.max(10,Math.min(24,Number(Q.target.value)||12));h({type:"update_settings",patch:{editorFontSize:J}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-field",children:[xr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),xr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:e.autosaveDebounceMs,onChange:(Q)=>{let J=Math.max(300,Math.min(5000,Number(Q.target.value)||1200));h({type:"update_settings",patch:{autosaveDebounceMs:J}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-section",children:[xr.jsxDEV("div",{className:"ls-settings-section-label",children:[xr.jsxDEV(C0,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-template-field",children:[xr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),xr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:e.defaultTriggerTemplate,onChange:(Q)=>h({type:"update_settings",patch:{defaultTriggerTemplate:Q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-settings-template-field",children:[xr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),xr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:e.defaultLibraryTemplate,onChange:(Q)=>h({type:"update_settings",patch:{defaultLibraryTemplate:Q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function sI(v){let h=v?.type;return typeof h==="string"&&h.startsWith("dom_")}var Qo=new Map;function p5(v,h){Qo.set(v,h)}function Sv(v){let h=Qo.get(v);for(let[e,u]of $l)if(u.elementId===v){if(h)h.removeEventListener(u.event,u.handler);$l.delete(e)}Qo.delete(v)}var xe=new Map,Be=new Map,Nh=new Map,Ze=new Map,$l=new Map;function iJ(v,h){return`${v}:${h}`}function rm(v){let h=v.target,e={type:v.type};if(h){if(h.id)e.targetId=h.id;if("value"in h)e.targetValue=h.value;if("checked"in h)e.targetChecked=h.checked;if(h.dataset&&Object.keys(h.dataset).length>0){let u={};for(let[H,q]of Object.entries(h.dataset))if(q!==void 0)u[H]=q;e.dataset=u}}if(v instanceof MouseEvent)e.clientX=v.clientX,e.clientY=v.clientY;else if(typeof TouchEvent<"u"&&v instanceof TouchEvent){let u=v.touches[0]??v.changedTouches[0];if(u)e.clientX=u.clientX,e.clientY=u.clientY}if(v instanceof CustomEvent&&v.detail!==void 0)try{JSON.stringify(v.detail),e.detail=v.detail}catch{}return e}function gm(v,h){return`@scope ([data-ls-script="${h}"]) {
${v}
}`}function om(v,h=5000){let e=document.querySelector(v);if(e)return Promise.resolve(e);return new Promise((u,H)=>{let q=!1,A=new MutationObserver(()=>{let M=document.querySelector(v);if(M&&!q)q=!0,A.disconnect(),u(M)});A.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!q)q=!0,A.disconnect(),H(Error(`waitForElement: timeout for "${v}"`))},h)})}function vm(v){return v.querySelector('[class*="_bubble_"]')}var l0=new Map,lm=50;function hm(v,h,e){if(l0.size>=lm){let u=l0.keys().next().value;if(u)l0.get(u)?.cancel(),l0.delete(u)}l0.set(v,{scriptId:h,cancel:e})}function bm(v){for(let[h,e]of l0)if(e.scriptId===v)e.cancel(),l0.delete(h)}function LJ(v,h,e){let u=h((H)=>{if(!sI(H))return;let q=H;switch(q.type){case"dom_inject":{let{scriptId:A,elementId:M,target:Y,html:Q,position:J,stableId:R,parentElementId:z}=q;if(Qo.has(M)){console.warn(`[LumiScript] dom_inject: elementId "${M}" already in elementMap — skipping duplicate insert`);break}let m=`<div data-ls-script="${A}" data-ls-el="${M}">${Q}</div>`,j=null;if(z){let Z=Qo.get(z);if(!Z){console.warn(`[LumiScript] dom_inject: parentElementId "${z}" not in elementMap — drop`);break}let y=Z.querySelector(Y);if(!y){console.warn(`[LumiScript] dom_inject: selector "${Y}" not found within parent "${z}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=m,y.insertAdjacentElement(J,rr),j=rr}else j=v.dom.inject(Y,m,J);if(j){if(Qo.set(M,j),xe.set(M,A),R)Be.set(iJ(A,R),M)}break}case"dom_inject_at_message":{let{scriptId:A,elementId:M,messageId:Y,html:Q,position:J,stableId:R}=q,z=(rr)=>{let Pr=rr.querySelector("[data-part]"),vr=Pr?.getAttribute("data-part")??"character",a=Pr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",s=J==="header"?` data-ls-tint="${vr}"`:"",lr=` data-ls-mode="${a}"`,C=`<div data-ls-script="${A}" data-ls-el="${M}"${s}${lr}>${Q}</div>`,V,c;if(J==="header")V=rr,c="afterbegin";else if(J==="footer"&&a==="minimal")V=rr,c="beforeend";else V=vm(rr)??rr,c="beforeend";let n=v.dom.inject(V,C,c);if(Qo.set(M,n),xe.set(M,A),R)Be.set(iJ(A,R),M)},m=`[data-message-id="${Y}"]`,j=document.querySelector(m);if(j){z(j);break}let Z=!1;hm(M,A,()=>{Z=!0}),om(m).then((rr)=>{if(l0.delete(M),Z)return;z(rr)}).catch(()=>{l0.delete(M)});break}case"dom_update":{let A=Qo.get(q.elementId);if(!A)break;let M=A.querySelector(`[data-ls-el="${q.elementId}"]`)??A;M.innerHTML=q.html;break}case"dom_remove":{UJ(q.elementId);break}case"dom_add_style":{let{scriptId:A,styleId:M,css:Y}=q,Q=gm(Y,A),J=v.dom.addStyle(Q);Nh.set(M,J),Ze.set(M,A);break}case"dom_remove_style":{let A=Nh.get(q.styleId);if(A)A(),Nh.delete(q.styleId),Ze.delete(q.styleId);break}case"dom_listen":{let{elementId:A,listenerId:M,event:Y,preventDefault:Q}=q,J=Qo.get(A);if(!J)break;let R=(z)=>{if(Q)z.preventDefault();let m=rm(z);e({type:"dom_event",elementId:A,listenerId:M,event:Y,data:m})};J.addEventListener(Y,R),$l.set(M,{elementId:A,event:Y,handler:R});break}case"dom_unlisten":{let A=$l.get(q.listenerId);if(!A)break;let M=Qo.get(A.elementId);if(M)M.removeEventListener(A.event,A.handler);$l.delete(q.listenerId);break}case"dom_cleanup_script":{let{scriptId:A}=q;bm(A);for(let[M,Y]of xe)if(Y===A)UJ(M);for(let[M,Y]of Ze)if(Y===A){let Q=Nh.get(M);if(Q)Q();Nh.delete(M),Ze.delete(M)}for(let[M]of Be)if(M.startsWith(A+":"))Be.delete(M);break}case"dom_make_draggable":{let{elementId:A,handleSelector:M}=q,Y=Qo.get(A);if(!Y)break;let Q=!1,J=!1;Y.addEventListener("pointerdown",(R)=>{if(R.button!==0)return;if(M&&!R.target.closest(M))return;let z=Y.firstElementChild?.firstElementChild??Y.firstElementChild??Y,m=z.getBoundingClientRect();z.style.transform="none",z.style.top=`${m.top}px`,z.style.left=`${m.left}px`,z.style.bottom="auto",z.style.right="auto",Q=!0,J=!1;let j=R.clientX-m.left,Z=R.clientY-m.top;z.style.cursor="grabbing";let y=(Pr)=>{if(!Q)return;J=!0,z.style.top=`${Pr.clientY-Z}px`,z.style.left=`${Pr.clientX-j}px`},rr=()=>{if(!Q)return;Q=!1,z.style.cursor="",document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",y),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),R.preventDefault()}),Y.addEventListener("click",(R)=>{if(J)R.stopImmediatePropagation(),R.preventDefault(),J=!1},!0);break}}});return()=>{u();for(let[,H]of l0)H.cancel();l0.clear();for(let[,H]of $l){let q=Qo.get(H.elementId);if(q)q.removeEventListener(H.event,H.handler)}$l.clear();for(let[,H]of Qo)try{H.remove()}catch{}Qo.clear(),xe.clear(),Be.clear();for(let[,H]of Nh)try{H()}catch{}Nh.clear(),Ze.clear()}}function UJ(v){for(let[e,u]of $l)if(u.elementId===v){let H=Qo.get(v);if(H)H.removeEventListener(u.event,u.handler);$l.delete(e)}let h=Qo.get(v);if(h)try{h.remove()}catch{}Qo.delete(v),xe.delete(v)}function wm(v){let h=v?.type;return h==="ls_modal_open"||h==="ls_modal_set_title"||h==="ls_modal_dismiss"}var F1=new Map;function FJ(v,h,e){let u=h((H)=>{if(!wm(H))return;let q=H;switch(q.type){case"ls_modal_open":{let{scriptId:A,modalId:M,rootElementId:Y,options:Q}=q;if(F1.has(M))break;let J;try{J=v.ui.showModal({title:Q.title,width:Q.width,maxHeight:Q.maxHeight,persistent:Q.persistent})}catch(z){console.warn("[LumiScript] ctx.ui.showModal failed:",z),e({type:"ls_modal_dismissed",modalId:M});break}p5(Y,J.root),J.root.setAttribute("data-ls-script",A),J.root.setAttribute("data-ls-modal",M);let R={modalId:M,rootElementId:Y,handle:J,echoed:!1};F1.set(M,R),J.onDismiss(()=>{if(R.echoed)return;R.echoed=!0,Sv(Y),F1.delete(M),e({type:"ls_modal_dismissed",modalId:M})});break}case"ls_modal_set_title":{let A=F1.get(q.modalId);if(!A)break;try{A.handle.setTitle(q.title)}catch{}break}case"ls_modal_dismiss":{let A=F1.get(q.modalId);if(!A)break;try{A.handle.dismiss()}catch{if(!A.echoed)A.echoed=!0,Sv(A.rootElementId),F1.delete(q.modalId),e({type:"ls_modal_dismissed",modalId:q.modalId})}break}}});return()=>{u();for(let H of F1.values()){try{H.handle.dismiss()}catch{}Sv(H.rootElementId)}F1.clear()}}function em(v){return v?.type==="ls_context_menu_show"}function IJ(v,h,e){let u=h(async(H)=>{if(!em(H))return;let q=H,A=null;try{A=(await v.ui.showContextMenu({position:q.options.position,items:q.options.items})).selectedKey}catch(M){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",M)}e({type:"ls_context_menu_result",requestId:q.requestId,selectedKey:A})});return()=>{u()}}function um(v){let h=v?.type;return h==="ls_input_bar_action_register"||h==="ls_input_bar_action_set_label"||h==="ls_input_bar_action_set_subtitle"||h==="ls_input_bar_action_set_enabled"||h==="ls_input_bar_action_destroy"}var D0=new Map;function Om(v,h){return`${v}:${h}`}function mJ(v,h,e){let u=h((H)=>{if(!um(H))return;let q=H,A=Om(q.scriptId,q.actionId);switch(q.type){case"ls_input_bar_action_register":{let M=D0.get(A);if(M){try{M.destroy()}catch{}D0.delete(A)}let Y;try{Y=v.ui.registerInputBarAction({id:q.actionId,label:q.options.label,subtitle:q.options.subtitle,iconSvg:q.options.iconSvg,iconUrl:q.options.iconUrl,enabled:q.options.enabled})}catch(Q){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",Q);break}D0.set(A,Y),Y.onClick(()=>{e({type:"ls_input_bar_action_click",scriptId:q.scriptId,actionId:q.actionId})});break}case"ls_input_bar_action_set_label":{let M=D0.get(A);if(!M)break;try{M.setLabel(q.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let M=D0.get(A);if(!M)break;if(typeof M.setSubtitle!=="function")break;try{M.setSubtitle(q.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let M=D0.get(A);if(!M)break;try{M.setEnabled(q.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let M=D0.get(A);if(!M)break;try{M.destroy()}catch{}D0.delete(A);break}}});return()=>{u();for(let H of D0.values())try{H.destroy()}catch{}D0.clear()}}function Hm(v){let h=v?.type;return h==="ls_float_widget_create"||h==="ls_float_widget_move"||h==="ls_float_widget_set_visible"||h==="ls_float_widget_destroy"}var il=new Map;function NJ(v,h,e){let u=h((H)=>{if(!Hm(H))return;let q=H;switch(q.type){case"ls_float_widget_create":{let{scriptId:A,widgetId:M,rootElementId:Y,options:Q}=q,J=il.get(M);if(J){try{J.handle.destroy()}catch{}Sv(J.rootElementId),il.delete(M)}let R;try{R=v.ui.createFloatWidget({width:Q.width,height:Q.height,initialPosition:Q.initialPosition,snapToEdge:Q.snapToEdge,tooltip:Q.tooltip,chromeless:Q.chromeless})}catch(z){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",z);break}p5(Y,R.root),R.root.setAttribute("data-ls-script",A),R.root.setAttribute("data-ls-widget",M),il.set(M,{widgetId:M,rootElementId:Y,handle:R}),R.onDragEnd((z)=>{e({type:"ls_float_widget_drag_end",widgetId:M,x:z.x,y:z.y})});break}case"ls_float_widget_move":{let A=il.get(q.widgetId);if(!A)break;try{A.handle.moveTo(q.x,q.y)}catch{}break}case"ls_float_widget_set_visible":{let A=il.get(q.widgetId);if(!A)break;try{A.handle.setVisible(q.visible)}catch{}break}case"ls_float_widget_destroy":{let A=il.get(q.widgetId);if(!A)break;try{A.handle.destroy()}catch{}Sv(A.rootElementId),il.delete(q.widgetId);break}}});return()=>{u();for(let H of il.values()){try{H.handle.destroy()}catch{}Sv(H.rootElementId)}il.clear()}}function Pm(v){let h=v?.type;return h==="ls_drawer_tab_register"||h==="ls_drawer_tab_set_title"||h==="ls_drawer_tab_set_short_name"||h==="ls_drawer_tab_set_badge"||h==="ls_drawer_tab_activate"||h==="ls_drawer_tab_destroy"}var h0=new Map;function qm(v,h){return`${v}:${h}`}function BJ(v,h,e){let u=h((H)=>{if(!Pm(H))return;let q=H,A=qm(q.scriptId,q.tabId);switch(q.type){case"ls_drawer_tab_register":{let M=h0.get(A);if(M){try{M.handle.destroy()}catch{}Sv(M.rootElementId),h0.delete(A)}let Y;try{Y=v.ui.registerDrawerTab({id:q.options.id,title:q.options.title,shortName:q.options.shortName,description:q.options.description,keywords:q.options.keywords,headerTitle:q.options.headerTitle,iconSvg:q.options.iconSvg,iconUrl:q.options.iconUrl})}catch(Q){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",Q);break}p5(q.rootElementId,Y.root),Y.root.setAttribute("data-ls-script",q.scriptId),Y.root.setAttribute("data-ls-tab",q.tabId),h0.set(A,{scriptId:q.scriptId,tabId:q.tabId,rootElementId:q.rootElementId,handle:Y}),Y.onActivate(()=>{e({type:"ls_drawer_tab_activated",scriptId:q.scriptId,tabId:q.tabId})});break}case"ls_drawer_tab_set_title":{let M=h0.get(A);if(!M)break;try{M.handle.setTitle(q.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let M=h0.get(A);if(!M)break;try{M.handle.setShortName(q.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let M=h0.get(A);if(!M)break;try{M.handle.setBadge(q.badge)}catch{}break}case"ls_drawer_tab_activate":{let M=h0.get(A);if(!M)break;try{M.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let M=h0.get(A);if(!M)break;try{M.handle.destroy()}catch{}Sv(M.rootElementId),h0.delete(A);break}}});return()=>{u();for(let H of h0.values()){try{H.handle.destroy()}catch{}Sv(H.rootElementId)}h0.clear()}}var Ce=qr(rg(),1);function Cjg(v){let h=[],e=v.dom.addStyle($R);h.push(e);let u=[],H=v.onBackendMessage((rr)=>{for(let Pr of u)Pr(rr)});h.push(H);let q=(rr)=>{return u.push(rr),()=>{let Pr=u.indexOf(rr);if(Pr!==-1)u.splice(Pr,1)}},A=(rr)=>{v.sendToBackend(rr)},M=LJ(v,q,A);h.push(M);let Y=FJ(v,q,A);h.push(Y);let Q=IJ(v,q,A);h.push(Q);let J=mJ(v,q,A);h.push(J);let R=NJ(v,q,A);h.push(R);let z=BJ(v,q,A);h.push(z),A({type:"frontend_ready"});let m=v.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),j=KP.createRoot(m.root);j.render(Ce.jsxDEV(zP.StrictMode,{children:Ce.jsxDEV(KJ,{onBackendMessage:q,sendToBackend:A},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>{try{j.unmount()}catch{}try{m.destroy()}catch{}});let Z=v.ui.mount("settings_extensions"),y=KP.createRoot(Z);return y.render(Ce.jsxDEV(zP.StrictMode,{children:Ce.jsxDEV($J,{onBackendMessage:q,sendToBackend:A},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>y.unmount()),()=>{for(let rr of h)try{rr()}catch{}v.dom.cleanup()}}export{Cjg as setup};
