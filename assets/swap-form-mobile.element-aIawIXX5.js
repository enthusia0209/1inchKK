const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/app.element-ClkamWJJ.js","assets/index-B2QKvsm8.js","assets/index.esm-BAN3DaXo.js","assets/index.esm-DhwY4kHm.js","assets/index.esm-OIwjBXxl.js","assets/index.esm-COc-PyqV.js","assets/combineLatest-Bzt_9bb6.js","assets/defer-BRewiDsk.js","assets/asap-D-qxMtYG.js","assets/index.esm-Dprb78cg.js","assets/index.esm-sEKBhePo.js","assets/index.esm-WgAxcldZ.js","assets/tap-DGvjHJum.js","assets/takeUntil-B9okj2Im.js","assets/index.esm-5Aerb1sL.js","assets/index.esm-BcUoR516.js","assets/index.esm-BlgOcQcg.js","assets/index.esm-2BadzZnc.js","assets/import-wrapper-prod-hit9ecK7.js","assets/index.esm-CzSQjreu.js","assets/firstValueFrom-RTAQ66ca.js","assets/index.esm-CdIPYCIr.js","assets/index.esm-NLrWFsiV.js"])))=>i.map(i=>d[i]);
import{_ as b,h as L,k as p,A as q,t as V}from"./index-B2QKvsm8.js";import{e as M,k as _,K as O,R as D,c as F,r as j}from"./index.esm-Dprb78cg.js";import{S as U}from"./index.esm-BlgOcQcg.js";import{g as W,j as S,k as $,l as x,A as z,p as B,f as m,m as P,e as K,B as N}from"./index.esm-DhwY4kHm.js";import{s as Y}from"./swap-form.style-GvSGyBlx.js";import{S as G}from"./app.element-ClkamWJJ.js";import{v as H,b as d,a as J}from"./index.esm-BAN3DaXo.js";import{getThemeChange as Q}from"./index.esm-sEKBhePo.js";import{C as X}from"./index.esm-BcUoR516.js";import{d as Z}from"./defer-BRewiDsk.js";import{f as ee,t as te}from"./takeUntil-B9okj2Im.js";import{s as ne,d as ae}from"./index.esm-WgAxcldZ.js";import{t as g}from"./tap-DGvjHJum.js";import{f as ie}from"./firstValueFrom-RTAQ66ca.js";import"./index.esm-5Aerb1sL.js";import"./index.esm-2BadzZnc.js";import"./import-wrapper-prod-hit9ecK7.js";import"./index.esm-COc-PyqV.js";import"./index.esm-CzSQjreu.js";import"./index.esm-OIwjBXxl.js";import"./combineLatest-Bzt_9bb6.js";import"./index.esm-CdIPYCIr.js";import"./asap-D-qxMtYG.js";var u={schedule:function(e){var n=requestAnimationFrame,t=cancelAnimationFrame,i=u.delegate;i&&(n=i.requestAnimationFrame,t=i.cancelAnimationFrame);var a=n(function(o){t=void 0,e(o)});return new W(function(){return t==null?void 0:t(a)})},requestAnimationFrame:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return requestAnimationFrame.apply(void 0,S([],$(e)))},cancelAnimationFrame:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=u.delegate;return((t==null?void 0:t.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,S([],$(e)))},delegate:void 0},oe=function(e){x(n,e);function n(t,i){var a=e.call(this,t,i)||this;return a.scheduler=t,a.work=i,a}return n.prototype.requestAsyncId=function(t,i,a){return a===void 0&&(a=0),a!==null&&a>0?e.prototype.requestAsyncId.call(this,t,i,a):(t.actions.push(this),t._scheduled||(t._scheduled=u.requestAnimationFrame(function(){return t.flush(void 0)})))},n.prototype.recycleAsyncId=function(t,i,a){var o;if(a===void 0&&(a=0),a!=null?a>0:this.delay>0)return e.prototype.recycleAsyncId.call(this,t,i,a);var r=t.actions;i!=null&&((o=r[r.length-1])===null||o===void 0?void 0:o.id)!==i&&(u.cancelAnimationFrame(i),t._scheduled=void 0)},n}(z),re=function(e){x(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.flush=function(t){this._active=!0;var i=this._scheduled;this._scheduled=void 0;var a=this.actions,o;t=t||a.shift();do if(o=t.execute(t.state,t.delay))break;while((t=a[0])&&t.id===i&&a.shift());if(this._active=!1,o){for(;(t=a[0])&&t.id===i&&a.shift();)t.unsubscribe();throw o}},n}(B),se=new re(oe),le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,he=(e,n,t,i)=>{for(var a=ce(n,t),o=e.length-1,r;o>=0;o--)(r=e[o])&&(a=r(n,t,a)||a);return a&&le(n,t,a),a};function pe(e,n){let t=0,i=!1,a=!1;const o=new T,r=60,C=5e5,v=3,R=4,k=()=>document.querySelector("#app-root"),h=()=>e.value,E=()=>n.value,A=s=>{if(s<0)return;let l;s>r?(i||(H(50),o.play().then()),i=!0,s<=r+v?l=r+(s-r)/C:l=r+v/C+(s-r-v)/R):(i=!1,l=s);const w=(s>r?r:s)/r;d(E(),{transform:`scale(${w})`}),d(h(),{transform:`translate3d(0, ${l}px, 0)`}),t=l},I=async()=>{a=!0;let s=t;s>r&&o.isPlaying&&(await h().animate([{transform:`translate3d(0, ${s}px, 0)`},{transform:`translate3d(0, ${r}px, 0)`}],{duration:200,easing:"cubic-bezier(.2, .8, .2, 1)"}).finished,s=r,d(h(),{transform:`translate3d(0, ${s}px, 0)`}),await o.onEnded()),await h().animate([{transform:`translate3d(0, ${s}px, 0)`},{transform:"translate3d(0, 0, 0)"}],{duration:800,easing:"cubic-bezier(.2, .8, .2, 1)"}).finished,A(0),d(h(),{transform:""}),i=!1,a=!1};return Z(()=>{const s=h();return m(s,"touchstart").pipe(ee(()=>{var l;return!a&&(((l=k())==null?void 0:l.scrollTop)??0)===0}),ne(l=>{o.load();const w=l.touches[0].clientY;return m(s,"touchmove").pipe(P(y=>y.touches[0].clientY-w),g(y=>A(y)),te(m(s,"touchend").pipe(g(()=>I()))))}))}).pipe(K(se))}class T{get isPlaying(){return!this.audio.paused}constructor(){this.audio=new Audio("audio/unicorn-run.mp3"),this.audio.preload="none",this.audio.volume=.4}load(){this.audio.load()}async play(){try{await this.audio.play()}catch(n){console.error("AudionController Error",n)}}onEnded(){return ie(m(this.audio,"ended"))}}he([X()],T.prototype,"play");var de=Object.defineProperty,me=Object.getOwnPropertyDescriptor,f=(e,n,t,i)=>{for(var a=i>1?void 0:i?me(n,t):n,o=e.length-1,r;o>=0;o--)(r=e[o])&&(a=(i?r(n,t,a):r(a))||a);return i&&a&&de(n,t,a),a};b(()=>import("./app.element-ClkamWJJ.js").then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));b(()=>import("./index.esm-NLrWFsiV.js"),__vite__mapDeps([22,1,9,2,3,4,5,6,7,8,10,11,12,13,14,0,15,16,17,18,19,20,21]));b(()=>import("./index.esm-Dprb78cg.js").then(e=>e.p),__vite__mapDeps([9,1,2,3,4,5,6,7,8,10,11,12,13,14]));let c=class extends L{constructor(){super(...arguments),this.isRainbowTheme=!1,this.targetSelectToken=null,this.mobileOverlay=new M("app-root"),this.swapFormContainerRef=_(),this.unicornLoaderRef=_()}firstUpdated(){setTimeout(()=>this.classList.add("padding-top-transition"),100),J(this,[Q().pipe(P(({brandColor:e})=>e),ae(),g(e=>this.isRainbowTheme=e===N.rainbow)),pe(this.swapFormContainerRef,this.unicornLoaderRef)],{requestUpdate:!1})}render(){const e={"shadow-container":!0,"shadow-container-rainbow":this.isRainbowTheme};return p`
      <inch-icon ${O(this.unicornLoaderRef)} class="unicorn-loader" icon="unicornRun"></inch-icon>
      <div ${O(this.swapFormContainerRef)} class="${D(e)}">
        <inch-card style="max-width: 100vw">
          <inch-swap-form
            @confirmSwap="${n=>this.onOpenMobileConfirmSwap(n)}"
            @changeFusionInfoOpenState="${n=>this.onChangeFusionInfoOpenState(n)}"
            @openTokenSelector="${n=>this.onOpenMobileSelectToken(n)}"
            @changeChain="${()=>this.onOpenChangeChainView()}"
            @connectWallet="${()=>this.onOpenConnectWalletView()}"
          ></inch-swap-form>
        </inch-card>
      </div>
    `}onChangeFusionInfoOpenState(e){e.detail.value&&!this.classList.contains("is-enlarged-form")&&this.classList.add("is-enlarged-form"),!e.detail.value&&this.classList.contains("is-enlarged-form")&&this.classList.remove("is-enlarged-form")}async onOpenMobileConfirmSwap(e){const n=e.detail.value,t=await this.mobileOverlay.open(p`
      <inch-card forMobileView style="width: 100%; height: 100%; display: flex;">
        <inch-confirm-swap
          .swapContext="${this.swapContext}"
          .swapSnapshot="${n}"
          @backCard="${async()=>{await this.mobileOverlay.close(t)}}"
        ></inch-confirm-swap>
      </inch-card>
    `)}async onOpenMobileSelectToken(e){this.targetSelectToken=e.detail.value;const n=await this.mobileOverlay.open(p`
      <inch-card forMobileView style="width: 100%; height: 100%; display: flex;">
        <inch-select-token
          .swapContext="${this.swapContext}"
          tokenType="${this.targetSelectToken}"
          @backCard="${()=>this.mobileOverlay.close(n)}"
        ></inch-select-token>
      </inch-card>
    `)}async onOpenChangeChainView(){const e=await this.mobileOverlay.open(p`
      <inch-chain-selector-list
        showShadow
        @closeCard="${()=>this.mobileOverlay.close(e)}"
        .controller="${this.applicationContext.connectWalletController}"
      ></inch-chain-selector-list>
    `)}async onOpenConnectWalletView(){const e=await this.mobileOverlay.open(p`
      <inch-wallet-manage
        showShadow
        @closeCard="${()=>this.mobileOverlay.close(e)}"
        .controller="${this.applicationContext.connectWalletController}"
      ></inch-wallet-manage>
    `)}};c.tagName="inch-swap-form-mobile";c.styles=[Y,G.styles()];f([F({context:U})],c.prototype,"swapContext",2);f([F({context:q})],c.prototype,"applicationContext",2);f([j()],c.prototype,"isRainbowTheme",2);c=f([V(c.tagName)],c);export{c as SwapFormMobileElement};
//# sourceMappingURL=swap-form-mobile.element-aIawIXX5.js.map