const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/app.element-ClkamWJJ.js","assets/index-B2QKvsm8.js","assets/index.esm-BAN3DaXo.js","assets/index.esm-DhwY4kHm.js","assets/index.esm-OIwjBXxl.js","assets/index.esm-COc-PyqV.js","assets/combineLatest-Bzt_9bb6.js","assets/defer-BRewiDsk.js","assets/asap-D-qxMtYG.js","assets/index.esm-Dprb78cg.js","assets/index.esm-sEKBhePo.js","assets/index.esm-WgAxcldZ.js","assets/tap-DGvjHJum.js","assets/takeUntil-B9okj2Im.js","assets/index.esm-5Aerb1sL.js","assets/index.esm-BcUoR516.js","assets/index.esm-BlgOcQcg.js","assets/index.esm-2BadzZnc.js","assets/import-wrapper-prod-hit9ecK7.js","assets/index.esm-CzSQjreu.js","assets/firstValueFrom-RTAQ66ca.js","assets/index.esm-CdIPYCIr.js","assets/index.esm-NLrWFsiV.js","assets/index-vzzwtGnt.js"])))=>i.map(i=>d[i]);
import{_ as s,h as d,k as i,A as w,t as S}from"./index-B2QKvsm8.js";import{O as f,R as _,a as k,c as l,r as C}from"./index.esm-Dprb78cg.js";import{S as g}from"./index.esm-BlgOcQcg.js";import{m as T,B as v}from"./index.esm-DhwY4kHm.js";import{S as m}from"./app.element-ClkamWJJ.js";import{s as y}from"./swap-form.style-GvSGyBlx.js";import{a as u}from"./index.esm-BAN3DaXo.js";import{getThemeChange as x}from"./index.esm-sEKBhePo.js";import{d as O}from"./index.esm-WgAxcldZ.js";import{t as b}from"./tap-DGvjHJum.js";import"./takeUntil-B9okj2Im.js";import"./index.esm-5Aerb1sL.js";import"./defer-BRewiDsk.js";import"./index.esm-2BadzZnc.js";import"./index.esm-BcUoR516.js";import"./import-wrapper-prod-hit9ecK7.js";import"./index.esm-COc-PyqV.js";import"./index.esm-CzSQjreu.js";import"./index.esm-OIwjBXxl.js";import"./combineLatest-Bzt_9bb6.js";import"./firstValueFrom-RTAQ66ca.js";import"./index.esm-CdIPYCIr.js";import"./asap-D-qxMtYG.js";var $=Object.defineProperty,W=Object.getOwnPropertyDescriptor,r=(t,e,p,a)=>{for(var n=a>1?void 0:a?W(e,p):e,c=t.length-1,h;c>=0;c--)(h=t[c])&&(n=(a?h(e,p,n):h(n))||n);return a&&n&&$(e,p,n),n};s(()=>import("./app.element-ClkamWJJ.js").then(t=>t.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));s(()=>import("./index.esm-NLrWFsiV.js"),__vite__mapDeps([22,1,9,2,3,4,5,6,7,8,10,11,12,13,14,0,15,16,17,18,19,20,21]));s(()=>import("./index.esm-Dprb78cg.js").then(t=>t.p),__vite__mapDeps([9,1,2,3,4,5,6,7,8,10,11,12,13,14]));s(()=>import("./index-vzzwtGnt.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,0,9,10,11,12,13,14,15,16,17,18,19,20,21]));let o=class extends d{constructor(){super(...arguments),this.isRainbowTheme=!1,this.targetSelectToken=null,this.swapSnapshot=null,this.overlay=new f("app-root","center"),this.desktopScene=new m("swapForm",{swapForm:{minWidth:556,maxWidth:556,maxHeight:625,lazyRender:!0},selectToken:{minWidth:556,maxWidth:556,maxHeight:680},confirmSwap:{minWidth:556,maxWidth:556,maxHeight:680},settings:{minWidth:556,maxWidth:556,maxHeight:900,lazyRender:!0}})}firstUpdated(){u(this,[x().pipe(T(({brandColor:t})=>t),O(),b(t=>this.isRainbowTheme=t===v.rainbow))],{requestUpdate:!1})}render(){const t={"shadow-container":!0,"shadow-container-rainbow":this.isRainbowTheme};return i`
      <div class="${_(t)}">
        <inch-card>
          ${this.desktopScene.render({swapForm:()=>i`
              <inch-swap-form
                @confirmSwap="${e=>this.onOpenConfirmSwap(e)}"
                @changeChain="${()=>this.onOpenChangeChainView()}"
                @openTokenSelector="${e=>this.onOpenSelectToken(e)}"
                @connectWallet="${()=>this.onOpenConnectWalletView()}"
              >
                <div slot="header">
                  <inch-button @click="${()=>this.desktopScene.nextTo("settings")}" type="tertiary-gray" size="l">
                    <inch-icon icon="settings24"></inch-icon>
                  </inch-button>
                </div>
              </inch-swap-form>
            `,selectToken:()=>i`
              <inch-select-token
                tokenType="${this.targetSelectToken}"
                @backCard="${()=>this.desktopScene.back()}"
              ></inch-select-token>
            `,confirmSwap:()=>k(this.swapSnapshot,e=>i`
              <inch-confirm-swap
                .swapSnapshot="${e}"
                @backCard="${async()=>{await this.desktopScene.back(),this.swapSnapshot=null}}"
              ></inch-confirm-swap>
            `),settings:()=>i`
              <inch-settings
                @closeSettings="${()=>this.desktopScene.back()}"
              ></inch-settings>
            `})}
        </inch-card>
      </div>
    `}async onOpenSelectToken(t){this.targetSelectToken=t.detail.value,await this.desktopScene.nextTo("selectToken")}async onOpenConfirmSwap(t){this.swapSnapshot=t.detail.value,await this.desktopScene.nextTo("confirmSwap")}async onOpenChangeChainView(){const t=await this.overlay.open(i`
      <inch-chain-selector-list
        showShadow
        @closeCard="${()=>this.overlay.close(t)}"
        .controller="${this.applicationContext.connectWalletController}"
      ></inch-chain-selector-list>
    `)}async onOpenConnectWalletView(){const t=await this.overlay.open(i`
      <inch-wallet-manage
        showShadow
        @closeCard="${()=>this.overlay.close(t)}"
        .controller="${this.applicationContext.connectWalletController}"
      ></inch-wallet-manage>
    `)}};o.tagName="inch-swap-form-desktop";o.styles=[y,m.styles()];r([l({context:g})],o.prototype,"swapContext",2);r([l({context:w})],o.prototype,"applicationContext",2);r([C()],o.prototype,"isRainbowTheme",2);o=r([S(o.tagName)],o);export{o as SwapFormDesktopElement};
//# sourceMappingURL=swap-form-desktop.element-xGYpK1dp.js.map
