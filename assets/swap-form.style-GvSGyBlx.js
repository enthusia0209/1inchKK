import{i as o}from"./index-B2QKvsm8.js";import{m as i}from"./index.esm-BAN3DaXo.js";import{getRainbowGradient as t}from"./index.esm-sEKBhePo.js";const e=o`

    :host {
        display: flex;
        padding-top: 48px;
        justify-content: center;
        position: relative;
        z-index: 1;
    }
    
    :host(.padding-top-transition) {
        transition: padding-top .2s;
    }
    
    .unicorn-loader {
        position: absolute;
        z-index: 1;
        top: 50px;
        transform: scale(0);
        will-change: transform;
        height: auto;
        transition: top .2s;
    }

    .shadow-container {
        will-change: box-shadow, transform;
        transform: translate3d(0, 0, 0); /*for enabled hardware rendering in Safari*/
        box-shadow: 0 5px 24px var(--primary-50);
        border-radius: 24px;
        position: relative;
        z-index: 2;
    }

    .shadow-container:after, .shadow-container:before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        left: -1px;
        top: -1px;
        border-radius: 24px;
        background-size: 0;
        z-index: -1;
        will-change: background, width, height, left, top, background-position;
        transition: background .2s, width .2s, height .2s, background-size .2s;
    }

    .shadow-container-rainbow {
        box-shadow: none;
        position: relative;
    }

    .shadow-container-rainbow:after, .shadow-container-rainbow:before {
        content: '';
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background: ${t()};
        background-size: 2000%;
        animation: bg-rainbow 90s cubic-bezier(0.4, 0, 1, 1) infinite;
    }

    .shadow-container-rainbow:after {
        filter: blur(30px);
    }

    @keyframes bg-rainbow {
        0% {
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            left: -1px;
            top: -1px;
            background-size: 2000%;
            background-position: 0 0;
        }
        50% {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-size: 800%;
            background-position: 400% 0;
        }
        100% {
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            left: -1px;
            top: -1px;
            background-size: 2000%;
            background-position: 0 0;
        }
    }

    ${i(o`
        :host {
            padding-top: 24px;
        }
        :host(.is-enlarged-form) {
            padding-top: 0;
        }
        :host(.is-enlarged-form) .unicorn-loader {
            top: 20px;
        }
    `)}
`;export{e as s};
//# sourceMappingURL=swap-form.style-GvSGyBlx.js.map
