if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),a={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-24af8f38"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/alert_24.svg-CMGVRTTV-8yF3vy5J.js",revision:null},{url:"assets/app.element-BDnbbaXZ.js",revision:null},{url:"assets/ar-3KXTHOGQ-C_gxvB5t.js",revision:null},{url:"assets/ar-CDFZGI4H-qxeDwuXM.js",revision:null},{url:"assets/arbitrum_24.svg-LRZOE4YC-CwwwLKmQ.js",revision:null},{url:"assets/arrow-down_16.svg-2TQZLBQ2-BhyigR1C.js",revision:null},{url:"assets/arrow-down_24.svg-XT6PCGOR-DFz-s2aM.js",revision:null},{url:"assets/arrow-left_24.svg-TIA3KMV2-C6mWe62X.js",revision:null},{url:"assets/asap-D-qxMtYG.js",revision:null},{url:"assets/aurora_24.svg-USMGFJBR-N-9mVfAl.js",revision:null},{url:"assets/auth-refresh_36.svg-4VLSWYTC-CW332afh.js",revision:null},{url:"assets/avalanche_24.svg-JJKWBWRT-TowXJJt1.js",revision:null},{url:"assets/base_24.svg-NTEG7MVH-C3DnvngA.js",revision:null},{url:"assets/bell_24.svg-CZQ6GUGK-D0nzERAy.js",revision:null},{url:"assets/bnb_24.svg-2LPUKGNE-DyZc8wJT.js",revision:null},{url:"assets/ccip-CZXigPgi.js",revision:null},{url:"assets/chevron-down_16.svg-FVTBAMEK-CcaABIoy.js",revision:null},{url:"assets/circle_16.svg-MMXPL5UF-zV6z7yAe.js",revision:null},{url:"assets/circle_24.svg-2RZSUBUZ-ghGPhtSz.js",revision:null},{url:"assets/combineLatest-Bzt_9bb6.js",revision:null},{url:"assets/command_24.svg-5XL4TLO5-Bg1R3ndQ.js",revision:null},{url:"assets/community.style-7Y6JZVBB-VwKeerEj.js",revision:null},{url:"assets/connect_16.svg-775ZC7VY-Dk5ByjFk.js",revision:null},{url:"assets/connect_24.svg-6ECHPWBD-Bgm-lZyJ.js",revision:null},{url:"assets/corner-down-right_16.svg-JTPFVXU7-BkSOtbUS.js",revision:null},{url:"assets/cross_24.svg-AWPMRZWL-CuOKpF8m.js",revision:null},{url:"assets/cross_8.svg-UA66LPZ7-DX7gI05g.js",revision:null},{url:"assets/dark-blue.style-2JQD254C-CxYXIml9.js",revision:null},{url:"assets/dark.style-MZ5V32L4-vjBKbS6J.js",revision:null},{url:"assets/de-H5TTTZEI-CH9zb0Xd.js",revision:null},{url:"assets/de-WDMPCMBT-BBNlfbH1.js",revision:null},{url:"assets/default-icon-UF676TO4-57bNFlKZ.js",revision:null},{url:"assets/defer-BRewiDsk.js",revision:null},{url:"assets/edit_24.svg-BY46XJGM-CRl3CGY7.js",revision:null},{url:"assets/empty_search.svg-I22COA4Q-DRp6Nz49.js",revision:null},{url:"assets/en-MNKG33UL-C_uq8EBm.js",revision:null},{url:"assets/en-UY5KEVEF-D4hWu1bY.js",revision:null},{url:"assets/es-OV4CGWEX-BC52Rg6L.js",revision:null},{url:"assets/es-V6S4HVZ5-oJVmnjDB.js",revision:null},{url:"assets/esm-7E7M5DV4-bmFcuV_S.js",revision:null},{url:"assets/eth_24.svg-ANZCXSJD-Cp1K07Gb.js",revision:null},{url:"assets/fantom_24.svg-DS5GH262-T8wofdcm.js",revision:null},{url:"assets/fire_48.png-UCEXIAQZ-DspOC9cV.js",revision:null},{url:"assets/firstValueFrom-RTAQ66ca.js",revision:null},{url:"assets/flow-NIZXRHEE-L9ck0Z9u.js",revision:null},{url:"assets/fr-TLVZEBID-C9aeuylw.js",revision:null},{url:"assets/fr-Y2JZDN7G-DGulpzQJ.js",revision:null},{url:"assets/fusion_16.svg-FCTV72XT-Bo7wWtai.js",revision:null},{url:"assets/fusion_24.svg-LQG35QQW-15Nw1Mak.js",revision:null},{url:"assets/globe_24.svg-M3BKSBNV-B3ghLIew.js",revision:null},{url:"assets/gnosis_24.svg-C2PH2J37-DS_pRg8t.js",revision:null},{url:"assets/image_24.svg-27C7B6RG-BoKUy23g.js",revision:null},{url:"assets/import-wrapper-prod-hit9ecK7.js",revision:null},{url:"assets/import-wrapper-QJE24KOH-67Dt4few.js",revision:null},{url:"assets/inch-wallet-icon-FTPZOH6D-S89rj93W.js",revision:null},{url:"assets/index-8HuOFVBb.js",revision:null},{url:"assets/index-BhwrGi2r.js",revision:null},{url:"assets/index-BnqFGJNM.js",revision:null},{url:"assets/index-D8ZxqN5D.js",revision:null},{url:"assets/index.esm-1bkfGHiX.js",revision:null},{url:"assets/index.esm-5Aerb1sL.js",revision:null},{url:"assets/index.esm-B2m9am8N.js",revision:null},{url:"assets/index.esm-B4EebElw.js",revision:null},{url:"assets/index.esm-BcDB3rMz.js",revision:null},{url:"assets/index.esm-BcUoR516.js",revision:null},{url:"assets/index.esm-BxN0uk5m.js",revision:null},{url:"assets/index.esm-CMfyxwsk.js",revision:null},{url:"assets/index.esm-COc-PyqV.js",revision:null},{url:"assets/index.esm-DhwY4kHm.js",revision:null},{url:"assets/index.esm-DkR-En8X.js",revision:null},{url:"assets/index.esm-DSgK_g_5.js",revision:null},{url:"assets/index.esm-DtUcksbu.js",revision:null},{url:"assets/index.esm-DZwWVVRY.js",revision:null},{url:"assets/index.esm-GSTVvCKf.js",revision:null},{url:"assets/index.esm-OIwjBXxl.js",revision:null},{url:"assets/index.esm-pVT9yVHd.js",revision:null},{url:"assets/klaytn_24.svg-TF6ZYXLG-BzJVPAuL.js",revision:null},{url:"assets/l2-chain_24.svg-W2Y2CVD5-CFq9X909.js",revision:null},{url:"assets/l2-chain-rtl_24.svg-BGXLNTXG-BLRDHybF.js",revision:null},{url:"assets/light-blue.style-PU7SWKX2-CbDTjoHA.js",revision:null},{url:"assets/light.style-LI3PLZ3M-BaQExcud.js",revision:null},{url:"assets/link_16.svg-IJHWRIRA-DXc04q9T.js",revision:null},{url:"assets/link_24.svg-BZTIYH4D-B2HEJpVR.js",revision:null},{url:"assets/logo-full.svg-62RVLTPX-BKMtPg8D.js",revision:null},{url:"assets/matic_24.svg-VSAHLQXQ-ClvC-3ZT.js",revision:null},{url:"assets/moon_24.svg-SLC6QAGL-CtK2-N5D.js",revision:null},{url:"assets/multi-connect-provider-UUYANLMR-m2JLjHsF.js",revision:null},{url:"assets/native-DCTjMhwz.js",revision:null},{url:"assets/one-inch-wallet-icon-5SPUNDFK-BHiOEM79.js",revision:null},{url:"assets/one-inch.repository-O4GTXSHC-DAssC24p.js",revision:null},{url:"assets/op_24.svg-LDYAMNOE-CMrfGEVS.js",revision:null},{url:"assets/orange.style-V24CISE6-B106Illh.js",revision:null},{url:"assets/pancakeswap.repository-4WTHCHOM-BPwTYZ6J.js",revision:null},{url:"assets/permit2_abi-IE7NHC7B-5IYTefWS.js",revision:null},{url:"assets/plus-circle_16.svg-AF327JN3-csCoyZcL.js",revision:null},{url:"assets/rainbow.style-POT775MF-BZvQE1vI.js",revision:null},{url:"assets/random.style-ONYZCI6O-CNKa8L_P.js",revision:null},{url:"assets/search_24.svg-FBJJDC7I-CWsQ_5p-.js",revision:null},{url:"assets/settings_24.svg-O6EAV3PM-BKnkaSWu.js",revision:null},{url:"assets/start-default_16.svg-YXFEWPOW-BveIvHIu.js",revision:null},{url:"assets/sun_24.svg-FZRL3LV3-C5wq6chK.js",revision:null},{url:"assets/swap-form-desktop.element-DHaqmCTz.js",revision:null},{url:"assets/swap-form-mobile.element-CRUqgEgZ.js",revision:null},{url:"assets/swap-form.style-DqWdreU7.js",revision:null},{url:"assets/takeUntil-B9okj2Im.js",revision:null},{url:"assets/tap-DGvjHJum.js",revision:null},{url:"assets/trash_16.svg-XUOOVLMX-gdZJDz6a.js",revision:null},{url:"assets/trash_24.svg-SN32QZ2J-IBYFyFm4.js",revision:null},{url:"assets/trustwallet.repository-VTS3GL4M-DLS_nynt.js",revision:null},{url:"assets/unicorn_run.svg-MQUBPKAS-D1D1FeVo.js",revision:null},{url:"assets/uniswap.repository-67LBC7HP-B3o4lOII.js",revision:null},{url:"assets/violet.style-V2PHS6BN-Dl7E9cB9.js",revision:null},{url:"assets/virtual_pwa-register-DpXcgkSM.js",revision:null},{url:"assets/wallet_24.svg-UXWQPY3G-JtE-jLxJ.js",revision:null},{url:"assets/wallet-connect-icon-NJ76IV67-lPk-W8Bs.js",revision:null},{url:"assets/wallet-connect-init-options-NR6IH7WW-CyZsQ4OT.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/x-circle_16.svg-KPZNB7DB-CX0_9U5p.js",revision:null},{url:"assets/zksyncera_24.svg-ZGEPRD5M-CVoRJp57.js",revision:null},{url:"fonts/Inter/inter.css",revision:"edc095009f14ad0ffebb8446f3f2f797"},{url:"index.html",revision:"f4996f18c19bbd3839229477cc86810e"},{url:"icons/android/android-launchericon-48-48.png",revision:"29d21205e0b7e75d5e5f40c563a2409f"},{url:"icons/android/android-launchericon-72-72.png",revision:"05d2128353963a80031c64d3367ec244"},{url:"icons/android/android-launchericon-96-96.png",revision:"5dbf2bacb98e3910c246005fd35bfafa"},{url:"icons/android/android-launchericon-144-144.png",revision:"2d68d56cdc8bc9db3a62b83a4f36230a"},{url:"icons/android/android-launchericon-192-192.png",revision:"a0322f6e632d0739a6c4b6952abb7c4b"},{url:"icons/android/android-launchericon-512-512.png",revision:"58e36c371b84849909c90c65ee0bf6c5"},{url:"manifest.webmanifest",revision:"e27868c76dedbe87aa6b51952cabd3bc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({url:s})=>s.origin!==self.location.origin&&/\.(png|jpg|jpeg|svg|gif)$/.test(s.pathname)),new s.CacheFirst({cacheName:"external-images",plugins:[new s.ExpirationPlugin({maxEntries:1500,maxAgeSeconds:7776e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute((({url:s})=>s.origin===self.location.origin&&/\.(woff2)$/.test(s.pathname)),new s.CacheFirst({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31104e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/.*\.svg-.*\.js(\?.*)?$/,new s.CacheFirst({cacheName:"js-svg-templates",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^(?!.*\.svg-.*\.js$).*\.js(\?.*)?$/,new s.StaleWhileRevalidate({cacheName:"js-bundles",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
//# sourceMappingURL=sw.js.map