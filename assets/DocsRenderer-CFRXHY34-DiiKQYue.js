const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C85Sv9e8.js","assets/index-gZGoxvxh.js","assets/index-hQD1sIdd.js","assets/iframe-D-NImUrv.js","assets/index-DZVNkkTA.js","assets/index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-D-NImUrv.js";import{am as E,ag as s,an as d,ao as v,ap as R,af as n,aq as w}from"./index-hQD1sIdd.js";import"../sb-preview/runtime.js";import"./index-DZVNkkTA.js";import"./index-DrFu-skq.js";var m,l=E;m=l.createRoot,l.hydrateRoot;var a=new Map;function _(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var g=async(e,t,r)=>{let o=await y(t,r);if(_()){o.render(e);return}let{promise:i,resolve:c}=Promise.withResolvers();return o.render(s.createElement(f,{callback:c},e)),i},x=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},y=async(e,t)=>{let r=a.get(e);return r||(r=m(e,t),a.set(e,r)),r},D={code:d,a:v,...R},C=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},O=class{constructor(){this.render=async(e,t,r)=>{let o={...D,...t==null?void 0:t.components},i=w;return new Promise((c,p)=>{h(async()=>{const{MDXProvider:u}=await import("./index-C85Sv9e8.js");return{MDXProvider:u}},__vite__mapDeps([0,1,2,3,4,5])).then(({MDXProvider:u})=>g(n.createElement(C,{showException:p,key:Math.random()},n.createElement(u,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>c())})},this.unmount=e=>{x(e)}}};export{O as DocsRenderer,D as defaultComponents};
