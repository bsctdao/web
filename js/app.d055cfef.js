(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],p=0,l=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a3e5e":"f05a28c3","chunk-2d0c53c7":"0e1ba909","chunk-2d20f68e":"8dacb030","chunk-2d2374f2":"316aa62c","chunk-616e0315":"feca2dd1","chunk-f0ef605c":"c8e19f80"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-616e0315":1,"chunk-f0ef605c":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0a3e5e":"31d6cfe0","chunk-2d0c53c7":"31d6cfe0","chunk-2d20f68e":"31d6cfe0","chunk-2d2374f2":"31d6cfe0","chunk-616e0315":"9ea40a84","chunk-f0ef605c":"c8bf073d"}[e]+".css",r=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===a||p===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],p=u.getAttribute("data-href");if(p===a||p===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],d.parentNode.removeChild(d),n(o)},d.href=r;var y=document.getElementsByTagName("head")[0];y.appendChild(d)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(e);var l=new Error;u=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00a0":function(e,t){e.exports="./images/language3aa584224745ee84e9b9a6f2ca28bf49.png"},1:function(e,t){},"12ae":function(e,t){e.exports="./images/loading059b5f2037623a73dcbfe41405241a8f.gif"},"3c22":function(e,t,n){},4035:function(e){e.exports=JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_factory","internalType":"address"},{"type":"address","name":"_WWDOGE","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"WWDOGE","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"amountB","internalType":"uint256"},{"type":"uint256","name":"liquidity","internalType":"uint256"}],"name":"addLiquidity","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"type":"address","name":"tokenB","internalType":"address"},{"type":"uint256","name":"amountADesired","internalType":"uint256"},{"type":"uint256","name":"amountBDesired","internalType":"uint256"},{"type":"uint256","name":"amountAMin","internalType":"uint256"},{"type":"uint256","name":"amountBMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountToken","internalType":"uint256"},{"type":"uint256","name":"amountWDOGE","internalType":"uint256"},{"type":"uint256","name":"liquidity","internalType":"uint256"}],"name":"addLiquidityWDOGE","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amountTokenDesired","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountWDOGEMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"factory","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"}],"name":"getAmountIn","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"reserveIn","internalType":"uint256"},{"type":"uint256","name":"reserveOut","internalType":"uint256"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"}],"name":"getAmountOut","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"reserveIn","internalType":"uint256"},{"type":"uint256","name":"reserveOut","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"getAmountsIn","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"getAmountsOut","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"amountB","internalType":"uint256"}],"name":"quote","inputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"reserveA","internalType":"uint256"},{"type":"uint256","name":"reserveB","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"amountB","internalType":"uint256"}],"name":"removeLiquidity","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"type":"address","name":"tokenB","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountAMin","internalType":"uint256"},{"type":"uint256","name":"amountBMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountToken","internalType":"uint256"},{"type":"uint256","name":"amountWDOGE","internalType":"uint256"}],"name":"removeLiquidityWDOGE","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountWDOGEMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountWDOGE","internalType":"uint256"}],"name":"removeLiquidityWDOGESupportingFeeOnTransferTokens","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountWDOGEMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountToken","internalType":"uint256"},{"type":"uint256","name":"amountWDOGE","internalType":"uint256"}],"name":"removeLiquidityWDOGEWithPermit","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountWDOGEMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountWDOGE","internalType":"uint256"}],"name":"removeLiquidityWDOGEWithPermitSupportingFeeOnTransferTokens","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountWDOGEMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"amountB","internalType":"uint256"}],"name":"removeLiquidityWithPermit","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"type":"address","name":"tokenB","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountAMin","internalType":"uint256"},{"type":"uint256","name":"amountBMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapExactTokensForTokens","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapExactTokensForWDOGE","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"swapExactTokensForWDOGESupportingFeeOnTransferTokens","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapExactWDOGEForTokens","inputs":[{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"swapExactWDOGEForTokensSupportingFeeOnTransferTokens","inputs":[{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapTokensForExactTokens","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"amountInMax","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapTokensForExactWDOGE","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"amountInMax","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapWDOGEForExactTokens","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"receive","stateMutability":"payable"}]')},4126:function(e,t){e.exports="./images/metamask2a0f0dc15bc0e2e3e318318d9875f047.png"},4346:function(e,t,n){"use strict";n("3c22")},4375:function(e,t){e.exports="./images/walletconnect4d102a4ca3049765c0d127db99c4275d.png"},"45ca":function(e,t,n){var a={"./ERC20":["3ddd",9,"chunk-2d0c53c7"],"./ERC20.js":["3ddd",9,"chunk-2d0c53c7"],"./IERC20":["b6f8",3],"./IERC20.json":["b6f8",3],"./IUniswapV2":["b406",9,"chunk-2d20f68e"],"./IUniswapV2.js":["b406",9,"chunk-2d20f68e"],"./doge":["4035",3],"./doge.json":["4035",3],"./network":["56ea",3],"./network.json":["56ea",3],"./staking":["03af",9,"chunk-2d0a3e5e"],"./staking.js":["03af",9,"chunk-2d0a3e5e"],"./weth":["fb22",9,"chunk-2d2374f2"],"./weth.js":["fb22",9,"chunk-2d2374f2"]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(i,t[1])}))}i.keys=function(){return Object.keys(a)},i.id="45ca",e.exports=i},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("3eb2"),i=n("9d64"),r=n.n(i),o=n("00a0"),s=n.n(o),c=n("b5c6"),u=n.n(c),p=n("4126"),l=n.n(p),d=n("4375"),y=n.n(d);const m=e=>(Object(a["pushScopeId"])("data-v-c9b4e0c0"),e=e(),Object(a["popScopeId"])(),e),b={class:"scout-menu"},h={class:"w-main scout-menu-main"},T=m(()=>Object(a["createElementVNode"])("img",{class:"scout-menu-logo MR-20 pointer",src:r.a,alt:""},null,-1)),f={class:"scout-menu-list"},g={class:"menu-right"},w=m(()=>Object(a["createElementVNode"])("img",{src:s.a,class:"scout-menu__language pointer"},null,-1)),O=Object(a["createTextVNode"])("简体中文"),k=Object(a["createTextVNode"])("English"),v={class:"login pointer"},E=Object(a["createTextVNode"])(" Swap "),C=Object(a["createTextVNode"])(" Stake "),j=m(()=>Object(a["createElementVNode"])("img",{src:l.a,class:"connect-item__icon MB-10"},null,-1)),S=Object(a["createTextVNode"])(" Metamask "),x=m(()=>Object(a["createElementVNode"])("img",{src:y.a,class:"connect-item__icon MB-10"},null,-1)),D=Object(a["createTextVNode"])(" WallatConnect "),N=Object(a["createTextVNode"])(" 私钥连接 ");function M(e,t,n,i,r,o){const s=Object(a["resolveComponent"])("el-dropdown-item"),c=Object(a["resolveComponent"])("el-dropdown-menu"),p=Object(a["resolveComponent"])("el-dropdown"),l=Object(a["resolveComponent"])("el-menu-item"),d=Object(a["resolveComponent"])("el-menu"),y=Object(a["resolveComponent"])("el-drawer"),m=Object(a["resolveComponent"])("el-col"),M=Object(a["resolveComponent"])("el-row"),_=Object(a["resolveComponent"])("el-divider"),I=Object(a["resolveComponent"])("icon-exclamation-circle-fill"),B=Object(a["resolveComponent"])("el-button"),R=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",h,[T,Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["scout-menu-list-item",{active:"swap"==e.$route.name}])},[Object(a["createElementVNode"])("span",{class:"scout-menu-text pointer",onClick:t[0]||(t[0]=e=>o.goPath("/swap"))}," Swap ")],2),"0x38"==e.currentNetwork.ChainID?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,class:Object(a["normalizeClass"])(["scout-menu-list-item",{active:"/stake"==e.$route.path}])},[Object(a["createElementVNode"])("span",{class:"scout-menu-text pointer",onClick:t[1]||(t[1]=e=>o.goPath("/stake"))}," Stake ")],2)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",g,[Object(a["createVNode"])(p,null,{dropdown:Object(a["withCtx"])(()=>[Object(a["createVNode"])(c,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{onClick:t[2]||(t[2]=e=>o.toggleLanguage("zh"))},{default:Object(a["withCtx"])(()=>[O]),_:1}),Object(a["createVNode"])(s,{onClick:t[3]||(t[3]=e=>o.toggleLanguage("en"))},{default:Object(a["withCtx"])(()=>[k]),_:1})]),_:1})]),default:Object(a["withCtx"])(()=>[w]),_:1}),Object(a["createElementVNode"])("img",{onClick:t[4]||(t[4]=e=>r.drawer=!0),class:"scout-menu-menu pointer ML-20",src:u.a,alt:""}),r.userName?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:0},{dropdown:Object(a["withCtx"])(()=>[Object(a["createVNode"])(c,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{onClick:o.loginout},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(r.t("logout")),1)]),_:1},8,["onClick"])]),_:1})]),default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",v,Object(a["toDisplayString"])(r.userName),1)]),_:1})):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:1,onClick:t[5]||(t[5]=(...e)=>o.loginFn&&o.loginFn(...e)),class:"login pointer"},Object(a["toDisplayString"])(r.t("connect")),1))])])]),Object(a["createVNode"])(y,{modelValue:r.drawer,"onUpdate:modelValue":t[8]||(t[8]=e=>r.drawer=e),title:"",size:"50%",direction:"rtl"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{onClick:t[6]||(t[6]=e=>o.goPath("/swap"))},{default:Object(a["withCtx"])(()=>[E]),_:1}),"0x38"==e.currentNetwork.ChainID?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,onClick:t[7]||(t[7]=e=>o.goPath("/stake"))},{default:Object(a["withCtx"])(()=>[C]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1},8,["modelValue"]),Object(a["createVNode"])(R,{modelValue:e.connectDialogShow,"onUpdate:modelValue":t[12]||(t[12]=t=>e.connectDialogShow=t),title:e.$t("swap.connectWallet"),width:"420px"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(M,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{span:12,onClick:t[9]||(t[9]=e=>o.connectWallet(1)),class:"flex-column-center align-center pointer"},{default:Object(a["withCtx"])(()=>[j,S]),_:1}),Object(a["createVNode"])(m,{span:12,onClick:t[10]||(t[10]=e=>o.connectWallet(2)),class:"flex-column-center align-center pointer"},{default:Object(a["withCtx"])(()=>[x,D]),_:1})]),_:1}),Object(a["createVNode"])(_),Object(a["createVNode"])(B,{status:"danger",onClick:t[11]||(t[11]=e=>o.connectWallet(3))},{icon:Object(a["withCtx"])(()=>[Object(a["createVNode"])(I)]),default:Object(a["withCtx"])(()=>[N]),_:1})]),_:1},8,["modelValue","title"])],64)}var _=n("56ea"),I=n("272a"),B=n("6d13");const{t:R}=B["a"].global;var A={data(){return{t:R,drawer:!1,userName:""}},computed:{...Object(I["c"])(["connectDialogShow","currentNetwork"])},mounted(){window.wallet.accounts[0]&&(this.userName="0x..."+window.wallet.accounts[0].slice(-4)),window.wallet.on("accountChange",()=>{try{this.userName="0x..."+window.wallet.accounts[0].slice(-4)}catch(e){this.userName=""}})},methods:{...Object(I["b"])(["setConnectDialog"]),toggleLanguage(e){this.$i18n.locale=e,localStorage.setItem("lang",e)},loginFn(){this.setConnectDialog(!0)},connectWallet(e){let t="";(3!=e||(t=prompt("输入私钥"),t))&&(window.wallet.connect(e,t),this.setConnectDialog(!1))},loginout(){window.wallet.logout()},goPath(e){if("/swap"===e){const t=localStorage.getItem("CURRENT_DEX")?JSON.parse(localStorage.getItem("CURRENT_DEX")):{};e+="/"+(t.symbol||_[0].Dex[0].symbol)}this.drawer=!1,console.log(this.$router),this.$router.push({path:e})}}},W=(n("7271"),n("9172"),n("6dd4")),V=n.n(W);const F=V()(A,[["render",M],["__scopeId","data-v-c9b4e0c0"]]);var P=F;const q={id:"app",class:"flex-column-start"},G={class:"app-content flex-1"};var L={__name:"App",setup(e){return Object(a["onMounted"])(()=>{(function(e){function t(){let e=1920,t=document.documentElement,n=t.clientWidth,a=100*n/e;a<=60&&(a=60),document.documentElement.style.fontSize=a+"px"}e.addEventListener("resize",(function(){t()}),!1),e.addEventListener("pageshow",(function(){t()}),!1),t()})(window)}),(e,t)=>{const n=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",q,[Object(a["createVNode"])(P),Object(a["createElementVNode"])("div",G,[Object(a["createVNode"])(n)])])}}};n("4346"),n("dc59");const U=L;var J=U,H=n("68a8");const K=[{path:"/",redirect:"/swap/"+_[0].Dex[0].symbol},{path:"/swap/:key",name:"swap",component:()=>n.e("chunk-616e0315").then(n.bind(null,"6c6a")),meta:{title:"Ten Dao-Swap"}},{path:"/stake",name:"stake",component:()=>n.e("chunk-f0ef605c").then(n.bind(null,"5e5a")),meta:{title:"Ten Dao-Stake"}}],z=Object(H["a"])({history:Object(H["b"])(),routes:K});var $=z,X=Object(I["a"])({state:{connectDialogShow:!1,networkList:_,currentNetwork:localStorage.getItem("CURRENT_NETWORD")?JSON.parse(localStorage.getItem("CURRENT_NETWORD")):_[0],currentDex:localStorage.getItem("CURRENT_DEX")?JSON.parse(localStorage.getItem("CURRENT_DEX")):_[0].Dex[0]},mutations:{SET_CURRENT_DEX:(e,{netWorkIndex:t,dexIndex:n})=>{e.currentNetwork=_[t],e.currentDex=_[t].Dex[n],localStorage.setItem("CURRENT_NETWORD",JSON.stringify(e.currentNetwork)),localStorage.setItem("CURRENT_DEX",JSON.stringify(e.currentDex))},SET_CONNECT_DIALOG(e,t){e.connectDialogShow=t}},actions:{setCurrentDex({commit:e},{netWorkIndex:t,dexIndex:n}){e("SET_CURRENT_DEX",{netWorkIndex:t,dexIndex:n})},setConnectDialog({commit:e},t){e("SET_CONNECT_DIALOG",t)}},getters:{networkList(e){return e.networkList},currentNetwork(e){return e.currentNetwork},currentDex(e){return e.currentDex},connectDialogShow(e){return e.connectDialogShow}},modules:{}}),Q=(n("a41b"),n("3304")),Y=(n("2dfb"),n("646b"),n("1081")),Z=n.n(Y),ee=n("e5da"),te=n("dc38"),ne=n("eba7"),ae=n("29b9"),ie=n.n(ae),re=n("90fe"),oe=n("4d90"),se=n("b6f8"),ce=n("4035");class ue{constructor(){this._cache={}}on(e,t){let n=this._cache[e]=this._cache[e]||[];return-1===n.indexOf(t)&&n.push(t),this}trigger(e,t){let n=this._cache[e];return Array.isArray(n)&&n.forEach(e=>{e(t)}),this}off(e,t){let n=this._cache[e];if(Array.isArray(n))if(t){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}else n.length=0;return this}}const{ethereum:pe}=window;class le extends ue{constructor(e,t){super(),this.hasEthereum="undefined"!==typeof pe,this.accounts=[],this.connectState=JSON.parse(localStorage.getItem("connectState"))||!1,this.connectKey=localStorage.getItem("connectKey")||"",this.network=t,this.dex=t.Dex[0],this.init()}async _connectMetaMask(){if(!pe)return void Object(oe["a"])({title:"Tips",message:"Please install the wallet first",type:"error"});if(pe.on("connect",()=>{const e=setInterval(()=>{pe.isConnected()&&clearInterval(e),pe.chainId===this.network.ChainID&&pe.selectedAddress&&this.connect(this.connectState)},1e3)}),pe.on("chainChanged",e=>{this.network.ChainID!=e?(Object(oe["a"])({title:"Tips",message:"Current wallet does not support, please switch to "+this.network.Name,type:"error"}),this.logout()):this.connect(this.connectState)}),!this.checkEthereum())return;const e=await this.wallet_switchEthereumChain();if(!e)return;const t=await pe.request({method:"eth_requestAccounts"}).catch(e=>{Object(re["a"])(e)});return this.provider=new ee["a"].Web3Provider(pe).getSigner(),this.accountsChanged(t),pe.on("accountsChanged",e=>{this.accountsChanged(e)}),this.connectState=1,localStorage.setItem("connectState",1),t}_connectPrivateKey(e){try{this.provider=new te["a"](e,new ee["a"].JsonRpcProvider(this.network.Rpcs[0])),this.connectState=3,localStorage.setItem("connectState",3),localStorage.setItem("connectKey",e),this.accountsChanged([this.provider.address])}catch(t){Object(re["a"])(t)}}async _walletConnect(){const e=new ie.a({rpc:{56:"https://rpc.ankr.com/bsc"},qrcodeModalOptions:{mobileLinks:["trust","tokenpocket","metamask","mathwallet"]}});await e.enable(),this.provider=new ee["a"].Web3Provider(e).getSigner(),this.connectState=2,localStorage.setItem("connectState",2)}init(){this.initOnlyReadNetwOrk(),this.connectState&&2!=this.connectState&&this.connect(this.connectState,this.connectKey)}logout(){this.connectState=!1,localStorage.setItem("connectState",!1),localStorage.setItem("connectKey",""),this.accountsChanged([])}async wallet_switchEthereumChain(){try{return pe.chainId===this.network.ChainID||await pe.request({method:"wallet_switchEthereumChain",params:[{chainId:this.network.ChainID}]}),!0}catch(e){return Object(re["a"])(e),!1}}async connect(e,t){switch(e){case 1:this._connectMetaMask();break;case 2:this._walletConnect();break;case 3:this._connectPrivateKey(t);break}}checkEthereum(){return!!this.hasEthereum||(Object(oe["a"])({title:"Tips",message:"Please install the meta mask plug-in first",type:"error"}),!1)}initContract(e,t=se){return!!this.provider&&new ne["a"](e,t,this.provider)}initOnlyReadNetwOrk(){this.provider=new ee["a"].JsonRpcProvider(this.network.Rpcs[0]),this.ContractWETH=new ne["a"](this.dex.address,ce,this.provider)}accountsChanged(e){e[0]!=this.accounts[0]&&(this.accounts=e,n("45ca")("./"+this.network.ABI).then(t=>{this.ContractWETH=new ne["a"](this.dex.address,t.default,this.provider),this.trigger("accountChange",e)}))}addTokenToMeta(e,t,n){window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,symbol:t,decimals:18,image:n}}})}async switchToOtherNetwork(e,t){const{ChainID:n,Name:i,Rpcs:r}=e;switch(this.connectState){case 1:case 2:try{await this.provider.provider.jsonRpcFetchFunc("wallet_switchEthereumChain",[{chainId:n}]),Object(oe["a"])({title:"Success",message:"Network switching succeeded",type:"Success"}),this.network=e,this.dex=t}catch(o){if(4902===o.code)try{this.provider.provider.jsonRpcFetchFunc("wallet_addEthereumChain",[{chainId:n,chainName:i,rpcUrls:Object(a["toRaw"])(r)}]),Object(oe["a"])({title:"Success",message:"Network added successfully",type:"Success"}),this.network=e,this.dex=t}catch(s){Object(re["a"])(s)}else Object(re["a"])(o)}break;case 3:{const n=localStorage.getItem("connectKey");this._connectPrivateKey(n),this.network=e,this.dex=t}break}}}var de={install:(e,t)=>{e.config.globalProperties.$wallet=new le(e,t.network),window.wallet=e.config.globalProperties.$wallet}},ye=n("2d9b"),me=n("892d"),be=n("bde4"),he=n("fa93"),Te=n.n(he),fe=n("12ae"),ge=n.n(fe);$.beforeEach((e,t,n)=>{e.meta.title&&(document.title=e.meta.title),window.scrollTo({top:0,behavior:"smooth"}),n()});const we=Object(a["createApp"])(J);we.use(B["a"]).use(Q["a"]).use(X).use(ye["a"]).use($).use(be["a"],{loading:ge.a,error:Te.a}).mixin({data(){return{t:B["a"].global.t}}}).use(Z.a).use(de,{network:X.state.currentNetwork,dex:X.state.currentDex}).mount("#app");for(const[Oe,ke]of Object.entries(me))we.component(Oe,ke)},"56ea":function(e){e.exports=JSON.parse('[{"ChainID":"0x38","Name":"Binance Smart Chain Mainnet","MainCoin":{"symbol":"BNB","address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},"GWEI":1,"MainCoin_TO_OTHER":"swapExactETHForTokensSupportingFeeOnTransferTokens","OTHER_TO_MainCoin":"swapExactTokensForETHSupportingFeeOnTransferTokens","transferChartToken":[{"name":"BUSD","symbol":"BUSD","address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"},{"name":"USDT","symbol":"USDT","address":"0x55d398326f99059fF775485246999027B3197955"}],"ABI":"weth.js","Rpcs":["https://rpc.ankr.com/bsc"],"Dex":[{"symbol":"Pancake","address":"0x10ed43c718714eb63d5aa57b78b54704e256024e"}],"Token":[{"name":"BNB","symbol":"BNB","address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},{"name":"BUSD","symbol":"BUSD","address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"},{"name":"USDT","symbol":"USDT","address":"0x55d398326f99059fF775485246999027B3197955"},{"name":"TenDao","symbol":"TDAO","address":"0xc4fc54ebc66841443734930c680a69b099a0c15e"}],"TransferTokens":[{"name":"btc","address":"0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c"},{"name":"eth","address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8"},{"name":"bnb","address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},{"name":"busd","address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"},{"name":"usdt","address":"0x55d398326f99059fF775485246999027B3197955"}]},{"ChainID":"0x7d0","Name":"DogeChain","MainCoin":{"symbol":"WDOG","address":"0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101"},"GWEI":10,"MainCoin_TO_OTHER":"swapExactWDOGEForTokensSupportingFeeOnTransferTokens","OTHER_TO_MainCoin":"swapExactTokensForWDOGESupportingFeeOnTransferTokens","transferChartToken":[],"ABI":"doge.json","Rpcs":["https://rpc01-sg.dogechain.dog","https://rpc02-sg.dogechain.dog"],"Dex":[{"symbol":"DogeSwap","address":"0xa4EE06Ce40cb7e8c04E127c1F7D3dFB7F7039C81"}],"Token":[{"symbol":"WDOGE","address":"0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101"},{"symbol":"Chiliz","address":"0x927B8BCF65025ea6DcF7D65838ae4E3b3F84739b"}],"TransferTokens":[]}]')},"6d13":function(e,t,n){"use strict";var a=n("1d54"),i={empty:"暂无数据",logout:"退出登录",connect:"登录",swap:{title:"兑换",desc:"即时交易代币",balance:"余额",tolerance:"滑点容差",connectWallet:"连接钱包",enterAmount:"输入金额",tradeSuccess:"交易成功",success:"成功",copySuccess:"合同地址已复制到您的剪贴板",history:"历史记录",selectToken:"搜索代币",fastImport:"快速导入",import:"导入",confirmSwap:"确认交换",price:"价值",minimum:"最少获得",tips1:"如果存在大额交易，您的交易将恢复",tips2:"确认前的不利价格变动",professional:"专业模式"},pledge:{title:"股权奖励池",totalEquity:"总股权",totalReward:"总奖励",received:"已领取",joinNum:"参与人数",myQquity:"我的股权",ggRate:"干股占比",fhRate:"分红占比",flRate:"如果复利占比",available:"可领取",returnRate:"实现回报率",allReceived:"全部领取",connectWallet:"请连接钱包",add:"增加",get:"获得",balance:"余额",equityCurrency:"股权币",addEquity:"增加股权",approve:"授权",setRecommender:"设置推荐人",copyLink:"复制推广地址",mySuperior:"我的上级",mySubordinates:"我的下级",rebate:"返利",addEquitySuccess:"股权增加成功",approveSuccess:"授权完成",approveError:"授权失败上级地址有误",getSuccess:"领取成功",linkError:"请输入推荐人地址",copySuccess:"复制成功"}},r={empty:"No data",logout:"logout",connect:"connect",swap:{title:"Swap",desc:"Trade tokens in an instant",balance:"Balance",tolerance:"Slippage Tolerance",connectWallet:"Connect Wallet",enterAmount:"Enter an amount",tradeSuccess:"Successful trade",success:"success",copySuccess:"The contract address has been copied to your clipboard",history:"History",selectToken:"Select a Token",fastImport:"Fast Import",import:"Import",confirmSwap:"Confirm Swap",price:"Price",minimum:"Minimum received",tips1:"Your transaction will revert if there is a large",tips2:"unfavorable price movement before it is confirmed",professional:"Professional"},pledge:{title:"Stock Reward Pool",totalEquity:"Total Stock",totalReward:"Total Reward",received:"Claimed The Reward",joinNum:"Member",myQquity:"My Stock",ggRate:"Stock Rate",fhRate:"Reward Rate",flRate:"If Interest rate",available:"Reward",returnRate:"ROI",allReceived:"Claimed",connectWallet:"Connect Wallet",add:"Use",get:"dry Stock",balance:"Balance",equityCurrency:"Stock",addEquity:"Exchange Stock",approve:"Approve",setRecommender:"Invitation Address",copyLink:"Copy Invite Friends",mySuperior:"My Invitation",mySubordinates:"My Friends",rebate:"Rebate",addEquitySuccess:"Stock Trade Success",approveSuccess:"Approve Success",approveError:"Invitation Address Error!",getSuccess:"Claimed Success",linkError:"Invitation Address",copySuccess:"Copy Success"}};const o={en:r,zh:i},s=(navigator.language||"en").toLocaleLowerCase(),c=Object(a["a"])({locale:localStorage.getItem("lang")||s.split("-")[0]||"en",fallbackLocale:"en",messages:o});t["a"]=c},7271:function(e,t,n){"use strict";n("8f70")},"8f70":function(e,t,n){},"90fe":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n("4d90");const i=(e,t=3)=>{let n=e.toString(),a=n.indexOf(".");return-1===a||(n=n.substring(0,a+t)),n},r=(e,t="Tips")=>{Object(a["a"])({type:"error",title:t,message:e.data&&e.data.message||e.message})}},9172:function(e,t,n){"use strict";n("d1eb")},9594:function(e,t,n){},"9d64":function(e,t){e.exports="./images/logobf2bf0ce34261ebc12c262c90688f09d.png"},a41b:function(e,t,n){},b5c6:function(e,t){e.exports="./images/menu7e8a183e0a3f3ee0c9a94892bef3baf5.png"},b6f8:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},d1eb:function(e,t,n){},dc59:function(e,t,n){"use strict";n("9594")},fa93:function(e,t){e.exports="./images/errorebd3c56e772a8b2753f11c6d5ed817b8.png"}});
//# sourceMappingURL=app.d055cfef.js.map