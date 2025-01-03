import{i as f,t as k,A as M,h as y,k as a}from"./index-B2QKvsm8.js";import{r as $,c as d,n as b,R as W,b as O,a as I,h as Q,f as B,t as U,k as Y,K as G,j as H}from"./index.esm-Dprb78cg.js";import{a as X,e as J}from"./app.element-ClkamWJJ.js";import{m as N,a as x,d as _,o as D,C as Z,b as A}from"./index.esm-BAN3DaXo.js";import"./index.esm-CdIPYCIr.js";import{skeletonStyle as z}from"./index.esm-sEKBhePo.js";import{S as tt,E as et,s as P,a as V,C as nt,m as ot,f as it}from"./index.esm-DhwY4kHm.js";import{b as q,d as rt,s as R,o as st,f as j,m as at,ab as ct,aa as lt,k as ht,g as dt}from"./index.esm-WgAxcldZ.js";import{S as pt}from"./index.esm-BlgOcQcg.js";import{t as l}from"./tap-DGvjHJum.js";import{d as T}from"./defer-BRewiDsk.js";import{B as L,c as K}from"./combineLatest-Bzt_9bb6.js";import{f as mt}from"./takeUntil-B9okj2Im.js";import"./index.esm-5Aerb1sL.js";import"./index.esm-BcUoR516.js";import"./index.esm-COc-PyqV.js";import"./index.esm-2BadzZnc.js";import"./import-wrapper-prod-hit9ecK7.js";import"./firstValueFrom-RTAQ66ca.js";import"./index.esm-OIwjBXxl.js";import"./asap-D-qxMtYG.js";import"./index.esm-CzSQjreu.js";var ut=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,r=(t,e,n,i)=>{for(var o=i>1?void 0:i?ft(e,n):e,s=t.length-1,p;s>=0;s--)(p=t[s])&&(o=(i?p(e,n,o):p(o))||o);return i&&o&&ut(e,n,o),o},vt=f`

    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    
    .empty {
        pointer-events: none;
    }

`,C=O(Symbol("select token context")),gt=class{constructor(t,e,n){this.tokenType=t,this.applicationContext=e,this.swapContext=n,this.chainId$=T(()=>this.applicationContext.connectWalletController.data.chainId$),this.connectedWalletAddress$=T(()=>this.applicationContext.connectWalletController.data.activeAddress$),this.searchToken$=new L(""),this.changeFavoriteTokenState$=new tt,this.searchInProgress$=new L(!1),this.favoriteTokens$=this.chainId$.pipe(et(i=>i===null?[]:this.applicationContext.tokenController.liveQuery(()=>this.applicationContext.tokenController.getAllFavoriteTokenAddresses(i)))),this.tokenAddressList$=K([this.chainId$,this.connectedWalletAddress$,this.searchToken$.pipe(q(300),P(""),rt())]).pipe(R(([i,o,s])=>i===null?[]:this.applicationContext.tokenController.getSortedByPriorityAndBalanceTokenAddresses(i,s,o??void 0)),l(()=>this.searchInProgress$.next(!1)))}async setFavoriteTokenState(t,e,n){await this.applicationContext.tokenController.setFavoriteState(t,e,n),this.changeFavoriteTokenState$.next([t,e])}setSearchToken(t){this.searchInProgress$.next(!0),this.searchToken$.next(t)}getSearchTokenValue(){return this.searchToken$.value}onSelectToken(t){this.swapContext.setToken(this.tokenType,t)}},xt=f`

    .search-token-input-container {
        display: flex;
        background-color: var(--color-background-bg-secondary);
        height: 48px;
        border-radius: 12px;
        color: var(--color-content-content-tertiary);
        align-items: center;
        padding-left: 12px;
        padding-right: 12px;
        box-sizing: border-box;
        gap: 8px;
        margin-top: 5px;
        transition: box-shadow .2s;
    }
    
    .search-token-input {
        border: none;
        background-color: transparent;
        height: 100%;
        width: 100%;
        outline: none;
        color: var(--color-content-content-primary);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }
    
    .loader {
        width: 24px;
        min-width: 24px;
        height: 24px;
        min-height: 24px;
        border-radius: 50%;
        border: 2px solid;
        border-bottom-color: var(--secondary);
        border-top-color: var(--secondary);
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
    
    .search-token-input::placeholder {
        color: var(--color-content-content-secondary);
    }
    
    @media (hover: hover) {
        .search-token-input-container:hover {
            box-shadow: 0 0 0 1px var(--primary);
        }
    }
    
    .search-token-input-container__focused {
        box-shadow: 0 0 0 1px var(--primary);
    }

`,m=class extends y{constructor(){super(...arguments),this.isFocused=!1,this.searchInProgress=!1}render(){const t={"search-token-input-container":!0,"search-token-input-container__focused":this.isFocused};return a`
      <div class="${W(t)}">
        <inch-icon icon="search24"></inch-icon>
        <input
          id="search"
          autofocus
          autocomplete="off"
          maxlength="40"
          @input="${e=>this.onChange(e)}"
          @focus="${()=>this.isFocused=!0}"
          @blur="${()=>this.isFocused=!1}"
          placeholder="Search token by name or address"
          class="search-token-input"
        >
        ${I(this.searchInProgress,()=>a`<span class="loader"></span>`,()=>a``)}
      </div>
    `}async firstUpdated(){var t;x(this,[((t=this.context)==null?void 0:t.searchInProgress$.pipe(l(e=>this.searchInProgress=e)))??st()],{requestUpdate:!1})}onChange(t){var n;const e=t.target.value;(n=this.context)==null||n.setSearchToken(e)}};m.tagName="inch-search-token-input";m.styles=xt;r([$()],m.prototype,"isFocused",2);r([$()],m.prototype,"searchInProgress",2);r([d({context:X})],m.prototype,"sceneContext",2);r([d({context:C})],m.prototype,"context",2);m=r([k(m.tagName)],m);var kt=f`
    
    :host {
        height: 72px;
        width: 100%;
        outline: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    
    .item-container {
        padding: 12px 16px;
        display: flex;
        gap: 8px;
        align-items: center;
        cursor: pointer;
        border-radius: 16px;
        transition: background-color .2s;
    }

    .name-and-balance {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-width: 50%;
    }

    .name-and-balance .name {
        color: var(--color-content-content-primary);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .name-and-balance .balance {
        color: var(--color-content-content-secondary);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    
    .usd-balance {
        color: var(--color-content-content-primary);
        text-align: right;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        white-space: nowrap
    }

    .usd-balance {
        
    }
    
    .usd-balance-and-favorite-start {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .usd-balance-and-favorite-start:dir(rtl) {
        margin-right: auto;
        margin-left: 0;
    }
    
    .is-favorite-start {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @media (hover: hover) {
        .item-container:hover {
            background-color: var(--color-background-bg-secondary);
        }

        .item-container:not(.is-favorite-token) .usd-balance {
            transform: translateX(24px);
            transition: transform .2s;
        }

        .item-container:not(.is-favorite-token) .usd-balance:dir(rtl) {
            transform: translateX(-24px);
            transition: transform .2s;
        }

        .item-container:not(.is-favorite-token) .is-favorite-start {
            transform: scale(0);
            transition: transform .2s;
        }

        .item-container:hover .is-favorite-start {
            transform: scale(1);
        }

        .item-container:hover .usd-balance {
            transform: translateX(0);
        }

        .item-container:hover .usd-balance:dir(rtl) {
            transform: translateX(0);
        }
    }
    
    ${N(f`
        .item-container {
            padding: 8px 8px;
        }
    `)}

    .item-container:active {
        background-color: var(--color-background-bg-secondary);
    }

`,yt=f`
    
    :host {
        height: 72px;
        width: 100%;
    }
    
    .item-container {
        padding: 12px 16px;
        display: flex;
        gap: 8px;
        align-items: center;
        cursor: pointer;
        border-radius: 16px;
    }

    .name-and-balance {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    
    .stub-token-icon {
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        background-color: var(--color-background-bg-secondary);
    }

    .name-stub {
        background-color: var(--color-background-bg-secondary);
        height: 24px;
        width: 40%;
        border-radius: 8px;
    }

    .balance-stub {
        background-color: var(--color-background-bg-secondary);
        height: 20px;
        width: 30%;
        border-radius: 8px;
    }

    @keyframes stub-loader-animation {
        0%, 100% {
            filter: opacity(1);
        }
        50% {
            filter: opacity(0.5);
        }
    }

    ${N(f`
        .item-container {
            padding: 8px 8px;
        }
    `)}

`,w=class extends y{render(){return a`
      <div class="item-container">
        <div class="stub-token-icon skeleton-token-icon"></div>
        <div class="name-and-balance">
          <span class="name-stub skeleton-name-and-balance"></span>
          <span class="balance-stub skeleton-name-and-balance"></span>
        </div>
      </div>
    `}};w.tagName="inch-token-list-stub-item";w.styles=[yt,z({prefixName:"token-icon"}),z({prefixName:"name-and-balance",animationDelay:".7s"})];w=r([k(w.tagName)],w);var h=class extends y{constructor(){super(...arguments),this.isDestroy=!1,this.preRenderTemplate=null,this.isFavorite=!1,this.task=new Q(this,async([t,e,n,i])=>{if(i){const v=this.task.value;if(v)return v}if(!t||!e)return[];if(this.isDestroy)throw new Error("");const o=await this.applicationContext.tokenController.getToken(t,e);let s=null,p=null;if(n&&o){s=await this.applicationContext.tokenController.getTokenBalance(t,e,n);const v=await this.applicationContext.tokenController.getTokenUSDPrice(t,e),S=j(BigInt((s==null?void 0:s.amount)??0),o.decimals);p=Number(S)*Number(v)}const F=o?await this.applicationContext.tokenController.isFavoriteToken(t,o.address):!1;return[o,s,p,F]},()=>[this.chainId,this.tokenAddress,this.walletAddress,!1])}disconnectedCallback(){super.disconnectedCallback(),this.isDestroy=!0}firstUpdated(){x(this,at(ct(12e3),this.getTokenUpdateEmitter()).pipe(R(()=>this.task.run([this.chainId,this.tokenAddress,this.walletAddress,!1]))),{requestUpdate:!1})}render(){return a`
      ${this.task.render({complete:([t,e,n,i])=>this.getTokenView(t,e,n,i),pending:()=>this.preRenderTemplate?this.preRenderTemplate:this.getStub(),error:()=>this.preRenderTemplate?this.preRenderTemplate:this.getStub()})}
    `}getTokenView(t,e,n,i){if(!t)return this.getStub();this.isFavorite=i;let o="0";e&&(o=B(j(BigInt(e.amount),t.decimals),6));let s="$0";n&&(s="$"+B(n.toString(),2));let p={border:"var(--color-border-border-secondary)",body:"none"};this.isFavorite&&(p={border:"var(--color-core-orange-warning)",body:"var(--color-core-orange-warning)"});const F={"item-container":!0,"is-favorite-token":this.isFavorite};return this.preRenderTemplate=a`
      <div class="${W(F)}" @click="${v=>{var S;(S=this.context)==null||S.onSelectToken(t),_(this,"backCard",null)}}">
        <inch-token-icon symbol="${t.symbol}" address="${t.address}" chainId="${t.chainId}"
                         size="40"></inch-token-icon>
        <div class="name-and-balance">
          <span class="name">${t.name}</span>
          <span class="balance">${o} ${t.symbol}</span>
        </div>

        <div class="usd-balance-and-favorite-start">
          <span class="usd-balance">${s}</span>
          <inch-icon class="is-favorite-start" @click="${v=>this.onMarkFavoriteToken(v,t)}"
                     icon="startDefault16" .props="${p}"></inch-icon>
        </div>
      </div>
    `,this.preRenderTemplate}async onMarkFavoriteToken(t,e){var n;t.preventDefault(),t.stopPropagation(),this.isFavorite=!this.isFavorite,await Promise.all([this.task.run([this.chainId,this.tokenAddress,this.walletAddress,!0]),(n=this.context)==null?void 0:n.setFavoriteTokenState(e.chainId,e.address,this.isFavorite)])}getTokenUpdateEmitter(){if(!this.context)throw new Error("");return this.context.changeFavoriteTokenState$.pipe(mt(([t,e])=>{var i,o;const n=((o=(i=this.task)==null?void 0:i.value)==null?void 0:o[0])??null;return n&&n.chainId===t&&lt(n.address,e)}))}getStub(){return a`
      <inch-token-list-stub-item></inch-token-list-stub-item>
    `}};h.tagName="inch-token-list-item";h.styles=kt;r([b({type:String,attribute:!0})],h.prototype,"tokenAddress",2);r([b({type:String,attribute:!0})],h.prototype,"walletAddress",2);r([b({type:Number,attribute:!0})],h.prototype,"chainId",2);r([d({context:C})],h.prototype,"context",2);r([d({context:M})],h.prototype,"applicationContext",2);h=r([k(h.tagName)],h);var bt=f`

    :host {
        height: 50vh;
        width: 100%;
        //position: relative;
    }
    
    .overlay-message {
        position: absolute;
        top: 35%;
        left: 0;
        width: 100%;
        text-align: center;
        color: var(--color-content-content-primary);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    ${N(f`
        :host {
            height: 100%;
            width: 100%;
        }
    `)}
`,c=class extends y{constructor(){super(...arguments),this.chainId=null,this.walletAddress=null,this.isEmpty=!1,this.addressList$=T(()=>this.getTokenAddressList()).pipe(l(t=>{this.isEmpty=t.length===0,this.requestUpdate()}),V({refCount:!0,bufferSize:1}))}render(){var o;const e=(((o=this.context)==null?void 0:o.getSearchTokenValue())??"")!=="",n=!ht(this.chainId),i=dt(this.chainId??nt.eth);return a`
      ${I(n,()=>a`
        <div class="overlay-message">
          <h3>Unsupported chain</h3>
        </div>
      `)}
      ${I(this.isEmpty&&e&&!n,()=>a`
        <div class="overlay-message">
          <inch-icon icon="emptySearch"></inch-icon>
          <h3>Token not found on ${i.name} Network</h3>
          <span>Try changing your search query, or switch to another Network</span>
        </div>
      `)}
      <inch-scroll-view-virtualizer-consumer
        .header="${this.header}"
        .items=${D(this.addressList$,this.getStubAddresses())}
        .keyFunction="${s=>[this.chainId,this.walletAddress,s].join(":")}"
        .renderItem=${s=>a`
            <inch-token-list-item
              tokenAddress="${s}"
              walletAddress="${U(this.walletAddress??void 0)}"
              chainId="${U(this.chainId??void 0)}"
            ></inch-token-list-item>`}
      ></inch-scroll-view-virtualizer-consumer>
    `}async firstUpdated(){x(this,[this.getConnectedWalletAddress().pipe(l(t=>this.walletAddress=t)),this.getChainId().pipe(l(t=>this.chainId=t)),this.addressList$],{requestUpdate:!1}),x(this,[this.getFavoriteTokens()])}getTokenAddressList(){if(!this.context)throw new Error("");return this.context.tokenAddressList$}getChainId(){if(!this.context)throw new Error("");return this.context.chainId$}getFavoriteTokens(){if(!this.context)throw new Error("");return this.context.favoriteTokens$}getConnectedWalletAddress(){if(!this.context)throw new Error("");return this.context.connectedWalletAddress$}getStubAddresses(){return Array.from(Array(30)).map((t,e)=>`0x${e.toString(16)}`)}};c.tagName="inch-token-list";c.styles=[bt];r([b({type:Object})],c.prototype,"header",2);r([d({context:C})],c.prototype,"context",2);r([d({context:X})],c.prototype,"sceneContext",2);r([$()],c.prototype,"chainId",2);r([$()],c.prototype,"walletAddress",2);r([$()],c.prototype,"isEmpty",2);c=r([k(c.tagName)],c);var wt=f`
    :host {
        display: flex;
        width: 100%;
        height: 60px;
    }
    
    :host(.empty) {
        height: 16px;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    
    :host(.transition-host) {
        transition: height .2s, padding-bottom .2s, margin-bottom .2s;
    }
    
    :host(.remove-favorite-token-show) .remove-favorite-token {
        transform: scale(1) translate(0, 0);
    }
    
    .favorite-container-scroll {
        overflow-y: hidden;
        overflow-x: auto;
        touch-action: pan-x;
        position: relative;
        width: 100%;
        padding-top: 16px;
        padding-bottom: 8px;
        margin-bottom: 8px;
        height: 36px;
        scrollbar-width: none;
    }

    .favorite-container-scroll::-webkit-scrollbar {
        display: none;
    }
    
    .favorite-container {
        display: flex;
        gap: 12px;
        height: 36px;
        position: absolute;
    }
    
    .favorite-token-item-container {
        position: relative;
    }
    
    .remove-favorite-token {
        position: absolute;
        top: -8px;
        right: -8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-background-bg-secondary);
        z-index: 9;
        transition: transform .2s;
        transform: scale(0) translate(-16px, 16px);
        cursor: pointer;
        color: var(--color-content-content-primary);
    }
    
    @media (hover: hover) {
        .favorite-token-item-container:hover .remove-favorite-token {
            transform: scale(1) translate(0, 0);
        }
        .remove-favorite-token:hover {
            background-color: var(--secondary-hover);
        }
        .edit-favorite-token-list {
            display: none;
        }
    }
    
    

`,E={duration:200,easing:"cubic-bezier(.2, .8, .2, 1)"},g=class extends y{constructor(){super(...arguments),this.editAllMode$=new L(!1),this.scrollContainerRef=Y(),this.favoriteTokensAnimationMapController=new Tt(this),this.favoriteTokensView$=K([T(()=>this.getFavoriteTokens()),T(()=>this.getChainId())]).pipe(q(0),R(([t,e])=>e?this.applicationContext.tokenController.getTokenListSortedByPriority(e,t):[]),P([]),l(t=>{t.length&&this.classList.contains("empty")&&this.classList.remove("empty"),!t.length&&!this.classList.contains("empty")&&this.classList.add("empty")}),l(()=>{this.classList.contains("transition-host")||setTimeout(()=>{this.classList.add("transition-host")},300)}),ot(t=>(t.length&&t.push(null),a`
        <div ${G(this.scrollContainerRef)} class="favorite-container-scroll">
          <div class="favorite-container">
            ${Z(t,this.favoriteTokensAnimationMapController)}
          </div>
        </div>
      `)),V({bufferSize:1,refCount:!0}))}firstUpdated(){x(this,[this.editAllMode$.pipe(l(t=>{t?this.classList.add("remove-favorite-token-show"):this.classList.remove("remove-favorite-token-show")})),it(this,"wheel").pipe(l(t=>{if(!this.scrollContainerRef.value)return;const e=this.scrollContainerRef.value;e.scrollLeft+=t.deltaY}))],{requestUpdate:!1})}render(){return a`${D(this.favoriteTokensView$)}`}getFavoriteTokens(){if(!this.context)throw new Error("");return this.context.favoriteTokens$}getChainId(){if(!this.context)throw new Error("");return this.context.chainId$}async onRemoveFavoriteToken(t,e){var n;e.stopPropagation(),e.preventDefault(),await((n=this.context)==null?void 0:n.setFavoriteTokenState(t.chainId,t.address,!1))}};g.tagName="inch-favorite-tokens";g.styles=[wt];r([d({context:C})],g.prototype,"context",2);r([d({context:M})],g.prototype,"applicationContext",2);g=r([k(g.tagName)],g);var Tt=class{constructor(t){this.element=t,this.direction="horizontal",this.renderElements=new Map,this.deleteElementsWidth=new Map,this.moveElementsWidth=new Map,this.gap=8}onKeyExtractor(t){return t!==null?"t"+t.address:"edit"}onTemplateBuilder(t){return I(t,e=>a`
        <div class="favorite-token-item-container">
          <div class="remove-favorite-token"
               @click="${n=>this.element.onRemoveFavoriteToken(e,n)}">
            <inch-icon icon="cross8"></inch-icon>
          </div>
          <inch-button size="m" type="secondary" class="favorite-token-item"
                       @click="${()=>{var n;(n=this.element.context)==null||n.onSelectToken(e),_(this.element,"backCard",null)}}">
            <inch-token-icon symbol="${e.symbol}" address="${e.address}"
                             chainId="${e.chainId}"></inch-token-icon>
            <span>${e.symbol}</span>
          </inch-button>
        </div>
      `,()=>a`
        <inch-button size="l" type="secondary" class="favorite-token-item edit-favorite-token-list"
                     @click="${()=>this.element.editAllMode$.next(!this.element.editAllMode$.value)}">
          <inch-icon icon="edit24"></inch-icon>
        </inch-button>
      `)}async onBeforeRemoveAnimateItem(t){await t.animate([{transform:""},{transform:"translateX(-50%) scale(.3)",opacity:0}],E).finished}async onBeforeRenderAnimateItem(t){A(t,{transform:"translateX(-100%)",opacity:"0"})}async onAfterRenderAnimateItem(t){await t.animate([{transform:"translateX(-100%) scale(.3)",opacity:0},{transform:"translateX(0) scale(1)",opacity:1}],E).finished,A(t,{transform:"",opacity:""})}async onBeforeMoveAnimationItem(t,e,n){if(this.renderElements.has(e))return this.renderElements.get(e);const i=this.getOffsetMoveByMoveElements(e,n);return e<n?(A(t,{transform:`translateX(${i}px)`}),i):(await t.animate([{transform:"translateX(0)"},{transform:`translateX(${i}px)`}],E).finished,null)}async onAfterMoveAnimationItem(t,e){if(e===null)return;let n;typeof e=="number"?n=e:(await H(),n=e.clientWidth*-1-this.gap),await t.animate([{transform:`translateX(${n}px)`},{transform:"translateX(0)"}],E).finished,A(t,{transform:""})}async onBeforeAnimation(t,e,n,i){this.deleteElementsWidth.clear(),this.renderElements.clear(),this.moveElementsWidth.clear(),n.forEach((o,s)=>{this.deleteElementsWidth.set(s,o.clientWidth)}),i.forEach((o,s)=>{this.moveElementsWidth.set(s.join(":"),o.clientWidth)}),e.forEach((o,s)=>{this.renderElements.set(s,o)})}getOffsetMoveByMoveElements(t,e){let n=0;return this.deleteElementsWidth.has(e)?n=this.deleteElementsWidth.get(e):t>e?this.deleteElementsWidth.forEach((i,o)=>{o>t||(n=i)}):n=this.moveElementsWidth.get([t-1,e-1].join(":"))??0,(n+this.gap)*-1}},u=class extends y{constructor(){super(...arguments),this.isEmpty=!0}render(){const t={empty:this.isEmpty};return this.initContext(),a`
      <inch-token-list
        class="${W(t)}"
        .header="${()=>a`
          <div style="margin-left: 1px; margin-right: 1px; pointer-events: auto;">
            <inch-card-header backButton headerText="Select token"></inch-card-header>
            <inch-search-token-input></inch-search-token-input>
            <inch-favorite-tokens></inch-favorite-tokens>
          </div>
        `}"
      ></inch-token-list>
    `}firstUpdated(){x(this,[this.getTokenAddressList().pipe(l(t=>this.isEmpty=t.length===0))])}initContext(){this.selectTokenContext||!this.swapContext||!this.tokenType||(this.selectTokenContext=new gt(this.tokenType,this.applicationContext,this.swapContext))}getTokenAddressList(){if(!this.selectTokenContext)throw new Error("");return this.selectTokenContext.tokenAddressList$}};u.tagName="inch-select-token";u.styles=vt;r([b({type:String})],u.prototype,"tokenType",2);r([d({context:M})],u.prototype,"applicationContext",2);r([d({context:pt,subscribe:!0}),b({type:Object})],u.prototype,"swapContext",2);r([J({context:C})],u.prototype,"selectTokenContext",2);u=r([k(u.tagName)],u);export{u as SelectTokenElement};
//# sourceMappingURL=index.esm-NLrWFsiV.js.map
