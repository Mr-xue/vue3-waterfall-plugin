import{l as m,y as k,p,g as N,z,A as V,B as X,C as J,o as w,c as b,F as q,v as $,a as O,D as tt,E as et,G as F,m as nt,H as rt}from"./vendor.89609b2d.js";import{_ as D}from"./index.f6507150.js";var Mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABNBJREFUaEPtmV1oXEUUx//n3g1JRGqL9k1RsFq/6IMgSky8c2YTQyONiojWYumTQrWKSNH6oO1TS1EQFcTiQwsaK4qIbVdod+/M3Y0IteJDwVr1oVYFEfFFwUY2c2TCbrhZNptNduvuQgf2Ze85M+c359w5Z84l9PigHrcflwCqHrTWsoiUmLn8f3q1bR4wxggRlZxz00EQlCowf19smLYAxHF8NxFNA/gUgAKwGsApD5GC+eNiwLQL4GUi2gNgDIA31ENEKZhzIvK5h5mZmZkeHx//uV0wbQEwxpQADDPzgvny+fyNYRhO1MB42w9674RhWIqi6IdWYFoGMMbcBuA0ER1RSk3GcbyViB4HcBTAMWb+0RtYKpXWlMvlSSKaFBFdCTP/yIrIRxWY08uFaQfAswAeAPAaMx81xhwmojVpQ0TkSxH5QGt9tvp/kiQTzrlJAOsroeYfnXPOHQrD8JhS6qtmYFoGaGaRRjKFQuF6IhononsB+N9gSv4ggENKqYSIpN48cwCFQmF3EARPt2rMcvWZ+ao4ju/TWh+r6hpjRkVkYwXIh+d8qvEw/f39Hw4NDf1T/TMN8AqA/HKNWKk8EWmlVFjZvG0iUiSiIjO/W52zWCyuLZfLm4hoE4DxlHfmQi2bze6uBbih+tKt1LBm9Ky17wN4NAXgN29uiMi/HsS/2FrrA+n5isXi7bOzsx5mdyaTWT8yMvJ9XQC/K80YshIZv2uNAOrM+bWIHKjCWGuPi8g9zDzgZesC+LJgJcYtpeOc27MCAD/taWbeYIy5i4gKzjnvnW29BLCLmfcZY54H8GoQBONRFB3vGYByuXzt2NjYeWPMJwAeTGf8rg8hIvpTKXVlHMe3AogBnNFa+1prbnQ9gIi8rbXeHsfxE0T0DhE9qZSaP526HgDACDNPW2sPicjWvr6+VcPDw3/1jAd8vJ84ceKKTCbjj1NordelT7tu98BRZt5krd0sIlNEtFcp9VLPAIjIFq31lDHmLQBPBUGwIYqiBSV3xz1gjPFlRN3MXz0ujTHf+LKbmS+rTZZdC0BEJ5VSdxYKBR0EQYGIppRSW3oGAEA1++4F8KK/ySmljvQMQDX7Wmt9ZeqP0rqXr24NoZ+Y+TpjzDoiOuvvCszM9YrFbgV4nZmfi+N4JxHtJ6JnlFJv9hLAXPY1xuQAbASwlpnrNsY67oHKlXL+RgbgAjMP5nK5/oGBgd+DIPhNKeU7F3VHxwFq80Cl/fKYMeYRAIdFZL/W+oWeAQDwMDN/7PtLADzEHcx8qmcAUtn3FxFZrbW+vNFVteMhFMexj+/7faKqxP9okiRDzrkvALzHzL5NuejoOEDasiRJJqMo+sxau19EdgZB8FAURf4auTyARgrteJZuq9SbzxhzBsBNi2XfJcvpdhjZaI5GAEmSXOOcO09EsVIqu5QtHe/M1Rpord0hIm8A2MHM/h7QcHQjQMF/P3DOXZ3NZn/teoBKJr4AYLpSPviu4HfMfPNSxvvnCzzgnNvejFKrMmEYDi/S3LWVjx37mHlXM+vUhlAzOm2RISLnu9N+slwut2pwcHCCiCZExH+5mchmsyebWWgOwBgz3+lqRqldMszsd3zByOfzt4yOjn7b7Bod/8TUrKGLyV0CaHUHW9X/D9N93V6azvezAAAAAElFTkSuQmCC",Lt="data:image/png;base64,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";const ot=({breakpoints:t,wrapperWidth:e,gutter:n,hasAroundGutter:r,initWidth:o})=>{const s=Object.keys(t).map(c=>Number(c)).sort((c,A)=>c-A);let i=e,a=!1;for(const c of s)if(e<=c){i=c,a=!0;break}if(!a)return o;const u=t[i].rowPerView;return r?(e-n)/u-n:(e-(u-1)*n)/u};function it(t){const e=m(0),n=m(null);k(n,i=>{const a=i[0],{width:u}=a.contentRect;e.value=u});const r=p(()=>ot({wrapperWidth:e.value,breakpoints:t.breakpoints,gutter:t.gutter,hasAroundGutter:t.hasAroundGutter,initWidth:t.width})),o=p(()=>{const i=t.hasAroundGutter?-t.gutter:t.gutter;return Math.floor((e.value+i)/(r.value+t.gutter))}),s=p(()=>{if(t.align==="left")return 0;if(t.align==="center"){const i=t.hasAroundGutter?t.gutter:-t.gutter,a=o.value*(r.value+t.gutter)+i;return(e.value-a)/2}else{const i=t.hasAroundGutter?t.gutter:-t.gutter,a=o.value*(r.value+t.gutter)+i;return e.value-a}});return{waterfallWrapper:n,wrapperWidth:e,colWidth:r,cols:o,offsetX:s}}function _(t,e){return new RegExp(`(^|\\s)${e}(\\s|$)`).test(t.className)}function j(t,e){if(_(t,e))return;const n=t.className.split(/\s+/);n.push(e),t.className=n.join(" ")}const st=document.createElement("div").style,R=(()=>{const t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(const e in t){const n=t[e];if(st[n]!==void 0)return e}return!1})();function h(t){return R===!1?!1:R==="standard"?t:R+t.charAt(0).toUpperCase()+t.substr(1)}const B=h("transform"),M=h("animation-duration"),L=h("animation-delay"),x=h("transition"),C=h("animation-fill-mode");function at(t,e,n,r,o){const s=m([]),i=m(0),a=l=>{const f=t.hasAroundGutter?l+1:l;return t.gutter*f+e.value*l+r.value},u=()=>{s.value=new Array(n.value).fill(t.hasAroundGutter?t.gutter:0)},c=ut(t);return{wrapperHeight:i,layoutHandle:async()=>{u();const l=[];if(o&&o.value&&o.value.childNodes.forEach(f=>{f.className==="waterfall-item"&&l.push(f)}),l.length===0)return!1;for(let f=0;f<l.length;f++){const d=l[f],v=Math.min.apply(null,s.value),S=s.value.indexOf(v),U=a(S),E=d.style;B&&(E[B]=`translate3d(${U}px,${v}px, 0)`),E.width=`${e.value}px`;const{height:W}=d.getBoundingClientRect();s.value[S]+=W+t.gutter,c(d,()=>{const Z=t.animationDuration/1e3;x&&(E[x]=`transform ${Z}s`)})}i.value=Math.max.apply(null,s.value)}}}function ut(t){return(e,n)=>{const r=e.firstChild;if(r&&!_(r,t.animationPrefix)){const o=`${t.animationDuration/1e3}s`,s=`${t.animationDelay/1e3}s`,i=r.style;i.visibility="visible",M&&(i[M]=o),L&&(i[L]=s),C&&(i[C]="both"),j(r,t.animationPrefix),j(r,t.animationEffect),n&&setTimeout(()=>{n()},t.animationDuration+t.animationDelay)}}}const ct=typeof window!="undefined"&&window!==null,P=dt(),lt=Object.prototype.propertyIsEnumerable,T=Object.getOwnPropertySymbols;function ft(t,...e){return e.map(r=>r.replace(/\[(\w+)\]/g,".$1").split(".").reduce((o,s)=>o&&o[s],t))}function dt(){return ct&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function y(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function At(t){return typeof t=="object"?t===null:typeof t!="function"}function mt(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function gt(t,...e){if(!y(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof T!="function")return t;for(const n of e){const r=T(n);for(const o of r)lt.call(n,o)&&(t[o]=n[o])}return t}function G(t,...e){let n=0;for(At(t)&&(t=e[n++]),t||(t={});n<e.length;n++)if(y(e[n])){for(const r of Object.keys(e[n]))mt(r)&&(y(t[r])&&y(e[n][r])?G(t[r],e[n][r]):t[r]=e[n][r]);gt(t,e[n])}return t}function H(t,e){return new Promise((n,r)=>{const o=new Image;o.onload=()=>{n(o)},o.onerror=()=>{r(new Error("Image load error"))},e&&(o.crossOrigin="Anonymous"),o.src=t})}var g;(function(t){t.LOADING="loading",t.LOADED="loaded",t.ERROR="error"})(g||(g={}));const ht={rootMargin:"0px",threshold:0},K="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",yt="";class vt{constructor(e=!0,n,r=!0){this.lazyActive=!0,this.crossOrigin=!0,this.options={loading:K,error:yt,observerOptions:ht,log:!0},this._images=new WeakMap,this.lazyActive=e,this.crossOrigin=r,this.config(n)}config(e={}){G(this.options,e)}mount(e,n,r){const{src:o,loading:s,error:i}=this._valueFormatter(n);e.setAttribute("lazy",g.LOADING),e.setAttribute("src",s||K),this.lazyActive?(P||(this._setImageSrc(e,o,r,i),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,o,r,i)):this._setImageSrc(e,o,r,i)}resize(e,n){const r=e.getAttribute("lazy"),o=e.getAttribute("src");r&&r===g.LOADED&&o&&H(o,this.crossOrigin).then(s=>{const{width:i,height:a}=s,u=e.width/i*a;e.height=u;const c=e.style;c.height=`${u}px`,n()})}unmount(e){const n=this._realObserver(e);n&&n.unobserve(e),this._images.delete(e)}_setImageSrc(e,n,r,o){!n||e.getAttribute("src")===n||H(n,this.crossOrigin).then(i=>{const{width:a,height:u}=i,c=u/a,A=e.parentNode.parentNode;A.style.paddingBottom=`${c*100}%`,e.setAttribute("lazy",g.LOADED),e.removeAttribute("src"),e.setAttribute("src",n),r(!0)}).catch(()=>{const i=this._realObserver(e);i&&i.disconnect(),o&&(e.setAttribute("lazy",g.ERROR),e.setAttribute("src",o),r(!1)),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${n} `)})})}_isOpenLazy(){return P&&this.lazyActive}_initIntersectionObserver(e,n,r,o){const s=this.options.observerOptions;this._images.set(e,new IntersectionObserver(a=>{Array.prototype.forEach.call(a,u=>{if(u.isIntersecting){const c=this._realObserver(e);c&&c.unobserve(u.target),this._setImageSrc(e,n,r,o)}})},s));const i=this._realObserver(e);i&&i.observe(e)}_valueFormatter(e){let n=e,r=this.options.loading,o=this.options.error;return y(e)&&(n=e.src,r=e.loading||this.options.loading,o=e.error||this.options.error),{src:n,loading:r,error:o}}_log(e){this.options.log&&e()}_realObserver(e){return this._images.get(e)}}const I=N({props:{list:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},imgSelector:{type:String,default:"src"},width:{type:Number,default:200},breakpoints:{type:Object,default:()=>({1200:{rowPerView:3},800:{rowPerView:2},500:{rowPerView:1}})},gutter:{type:Number,default:10},hasAroundGutter:{type:Boolean,default:!0},animationPrefix:{type:String,default:"animate__animated"},animationEffect:{type:String,default:"fadeIn"},animationDuration:{type:Number,default:1e3},animationDelay:{type:Number,default:300},backgroundColor:{type:String,default:"#fff"},lazyload:{type:Boolean,default:!0},loadProps:{type:Object,default:()=>{}},crossOrigin:{type:Boolean,default:!0},delay:{type:Number,default:300},align:{type:String,default:"center"}},setup(t){const e=new vt(t.lazyload,t.loadProps,t.crossOrigin);z("lazy",e);const{waterfallWrapper:n,wrapperWidth:r,colWidth:o,cols:s,offsetX:i}=it(t),{wrapperHeight:a,layoutHandle:u}=at(t,o,s,i,n),c=V(()=>{u()},t.delay);X(()=>[r,o,t.list],()=>{r.value>0&&c()},{deep:!0});const A=m(0);return z("sizeChangeTime",A),z("imgLoaded",c),{waterfallWrapper:n,wrapperHeight:a,getRenderURL:d=>ft(d,t.imgSelector)[0],getKey:(d,v)=>d[t.rowKey]||v,renderer:c}}}),Q=()=>{J(t=>({b75bd1b4:t.backgroundColor}))},Y=I.setup;I.setup=Y?(t,e)=>(Q(),Y(t,e)):Q;const wt=I,bt={class:"waterfall-card"};function Et(t,e,n,r,o,s){return w(),b("div",{ref:"waterfallWrapper",class:"waterfall-list",style:et({height:`${t.wrapperHeight}px`})},[(w(!0),b(q,null,$(t.list,(i,a)=>(w(),b("div",{key:t.getKey(i,a),class:"waterfall-item"},[O("div",bt,[tt(t.$slots,"item",{item:i,index:a,url:t.getRenderURL(i)},void 0,!0)])]))),128))],4)}var xt=D(wt,[["render",Et],["__scopeId","data-v-6a0e9c4c"]]);const pt=N({props:{url:{type:String,default:""},title:{type:String,default:""},alt:{type:String,default:""}},setup(t,e){const n=F("imgLoaded"),r=F("lazy"),o=m(null);nt(()=>{s()}),rt(()=>{i()});function s(){!o.value||r.mount(o.value,t.url,u=>{n(),u?e.emit("success",t.url):e.emit("error",t.url)})}function i(){!o.value||r.unmount(o.value)}function a(){e.emit("load",t.url)}return{lazyRef:o,imageLoad:a}}}),zt={class:"lazy__box"},Ot={class:"lazy__resource"},Rt=["title","alt"];function It(t,e,n,r,o,s){return w(),b("div",zt,[O("div",Ot,[O("img",{ref:"lazyRef",class:"lazy__img",title:t.title,alt:t.alt,onLoad:e[0]||(e[0]=(...i)=>t.imageLoad&&t.imageLoad(...i))},null,40,Rt)])])}var Ct=D(pt,[["render",It],["__scopeId","data-v-392b4abe"]]);function St(t=6){return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)}const Nt=["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399"];function Ft(t,e){return Math.floor(Math.random()*(e-t+1))+t}function Dt(){return Nt[Ft(0,4)]}const _t="https://www.getphotoblanket.com",Pt=({page:t=1,pageSize:e=20})=>{const n=`${_t}/products.json?page=${t}&limit=${e}`;return fetch(n).then(r=>r.json()).then(r=>r.products).then(r=>r.map(o=>({id:St(),star:!1,price:o.variants[0].price,src:{original:Math.random()>.1?o.images[0].src:"https://www.example.com/non-existent-image.jpg"},backgroundColor:Dt(),name:o.title})))};export{Ct as L,xt as W,Lt as e,Pt as g,Mt as l};
