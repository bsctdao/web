(function(e){function t(t){for(var a,i,s=t[0],o=t[1],p=t[2],c=0,l=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r={app:0},u=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-b98e9c18":"5ec8e152","chunk-ff7803ec":"b1f1c0c3"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-b98e9c18":1,"chunk-ff7803ec":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-b98e9c18":"9e062fc7","chunk-ff7803ec":"c8c56983"}[e]+".css",r=o.p+a,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var p=u[s],c=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(c===a||c===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){p=l[s],c=p.getAttribute("data-href");if(c===a||c===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete i[e],d.parentNode.removeChild(d),n(u)},d.href=r;var y=document.getElementsByTagName("head")[0];y.appendChild(d)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=u);var p,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e);var l=new Error;p=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){p({type:"timeout",target:c})}),12e4);c.onerror=c.onload=p,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=t,p=p.slice();for(var l=0;l<p.length;l++)t(p[l]);var d=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08c7":function(e,t,n){},"0ad6":function(e,t,n){"use strict";n("cab4")},1:function(e,t){},"12ae":function(e,t){e.exports="./images/loading059b5f2037623a73dcbfe41405241a8f.gif"},3846:function(e,t,n){"use strict";n("8f78")},4126:function(e,t){e.exports="./images/metamask2a0f0dc15bc0e2e3e318318d9875f047.png"},4375:function(e,t){e.exports="./images/walletconnect4d102a4ca3049765c0d127db99c4275d.png"},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("3eb2"),i=n("9d64"),r=n.n(i),u=n("b5c6"),s=n.n(u),o=n("4126"),p=n.n(o),c=n("4375"),l=n.n(c),d=n("68a8");const y=e=>(Object(a["pushScopeId"])("data-v-4e24eb6c"),e=e(),Object(a["popScopeId"])(),e),m={class:"scout-menu"},b={class:"w-main scout-menu-main"},T=y(()=>Object(a["createElementVNode"])("img",{class:"scout-menu-logo MR-20 pointer",src:r.a,alt:""},null,-1)),h={class:"scout-menu-list"},f={class:"scout-menu-text"},O=Object(a["createTextVNode"])("Swap"),v={class:"scout-menu-text"},g=Object(a["createTextVNode"])("Stake"),w={class:"menu-right"},j={class:"login pointer"},k=Object(a["createTextVNode"])("logout"),x=Object(a["createTextVNode"])(" Swap "),E=Object(a["createTextVNode"])(" Stake "),C=y(()=>Object(a["createElementVNode"])("img",{src:p.a,class:"connect-item__icon MB-10"},null,-1)),M=Object(a["createTextVNode"])(" Metamask "),S=y(()=>Object(a["createElementVNode"])("img",{src:l.a,class:"connect-item__icon MB-10"},null,-1)),N=Object(a["createTextVNode"])(" WallatConnect "),_=Object(a["createTextVNode"])(" 私钥连接 ");var V={__name:"index",setup(e){const t=Object(d["c"])(),n=Object(a["ref"])(!1),i=Object(a["ref"])(!1),r=Object(a["ref"])(""),u=async()=>{i.value=!0},o=e=>{let t="";(3!=e||(t=prompt("输入私钥"),t))&&(wallet.connect(e,t),i.value=!1)},p=async()=>{wallet.logout()},c=e=>{n.value=!1,t.push(e)};return wallet.accounts[0]&&(r.value="0x..."+wallet.accounts[0].slice(-4)),wallet.on("accountChange",()=>{try{r.value="0x..."+wallet.accounts[0].slice(-4)}catch(e){r.value=""}}),(e,t)=>{const l=Object(a["resolveComponent"])("router-link"),d=Object(a["resolveComponent"])("el-dropdown-item"),y=Object(a["resolveComponent"])("el-dropdown-menu"),V=Object(a["resolveComponent"])("el-dropdown"),A=Object(a["resolveComponent"])("el-menu-item"),I=Object(a["resolveComponent"])("el-menu"),B=Object(a["resolveComponent"])("el-drawer"),P=Object(a["resolveComponent"])("el-col"),H=Object(a["resolveComponent"])("el-row"),q=Object(a["resolveComponent"])("el-divider"),F=Object(a["resolveComponent"])("icon-exclamation-circle-fill"),L=Object(a["resolveComponent"])("el-button"),W=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",b,[T,Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["scout-menu-list-item",{active:"/swap"==e.$route.path}])},[Object(a["createElementVNode"])("span",f,[Object(a["createVNode"])(l,{to:"/swap"},{default:Object(a["withCtx"])(()=>[O]),_:1})])],2),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["scout-menu-list-item",{active:"/pledge"==e.$route.path}])},[Object(a["createElementVNode"])("span",v,[Object(a["createVNode"])(l,{to:"/pledge"},{default:Object(a["withCtx"])(()=>[g]),_:1})])],2)]),Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("img",{onClick:t[0]||(t[0]=e=>n.value=!0),class:"scout-menu-menu pointer",src:s.a,alt:""}),r.value?(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:0},{dropdown:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{onClick:p},{default:Object(a["withCtx"])(()=>[k]),_:1})]),_:1})]),default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",j,Object(a["toDisplayString"])(r.value),1)]),_:1})):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:1,onClick:u,class:"login pointer"},"Connect"))])])]),Object(a["createVNode"])(B,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value=e),title:"",size:"50%",direction:"rtl"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(I,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(A,{onClick:t[1]||(t[1]=e=>c("/swap"))},{default:Object(a["withCtx"])(()=>[x]),_:1}),Object(a["createVNode"])(A,{onClick:t[2]||(t[2]=e=>c("/pledge"))},{default:Object(a["withCtx"])(()=>[E]),_:1})]),_:1})]),_:1},8,["modelValue"]),Object(a["createVNode"])(W,{modelValue:i.value,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value=e),title:"连接钱包",width:"420px"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(H,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(P,{span:12,onClick:t[4]||(t[4]=e=>o(1)),class:"flex-column-center align-center pointer"},{default:Object(a["withCtx"])(()=>[C,M]),_:1}),Object(a["createVNode"])(P,{span:12,onClick:t[5]||(t[5]=e=>o(2)),class:"flex-column-center align-center pointer"},{default:Object(a["withCtx"])(()=>[S,N]),_:1})]),_:1}),Object(a["createVNode"])(q),Object(a["createVNode"])(L,{status:"danger",onClick:t[6]||(t[6]=e=>o(3))},{icon:Object(a["withCtx"])(()=>[Object(a["createVNode"])(F)]),default:Object(a["withCtx"])(()=>[_]),_:1})]),_:1},8,["modelValue"])],64)}}},A=(n("7e80"),n("edb6"),n("6dd4")),I=n.n(A);const B=I()(V,[["__scopeId","data-v-4e24eb6c"]]);var P=B,H={__name:"App",setup(e){return Object(a["onMounted"])(()=>{(function(e){function t(){let e=1920,t=document.documentElement,n=t.clientWidth,a=100*n/e;a<=60&&(a=60),document.documentElement.style.fontSize=a+"px"}e.addEventListener("resize",(function(){t()}),!1),e.addEventListener("pageshow",(function(){t()}),!1),t()})(window)}),(e,t)=>{const n=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(P),Object(a["createVNode"])(n)],64)}}};n("0ad6"),n("3846");const q=H;var F=q;const L=[{path:"/",redirect:"/swap"},{path:"/swap",name:"swap",component:()=>n.e("chunk-b98e9c18").then(n.bind(null,"6c6a")),meta:{title:"Swap"}},{path:"/pledge",name:"pledge",component:()=>n.e("chunk-ff7803ec").then(n.bind(null,"5e5a")),meta:{title:"Pledge"}}],W=Object(d["a"])({history:Object(d["b"])(),routes:L});var R=W,D=n("272a"),K=Object(D["a"])({state:{},mutations:{},actions:{},modules:{}}),J=(n("a41b"),n("3304")),z=(n("2dfb"),n("646b"),n("1081")),U=n.n(z),$=n("25c2"),G=n("e5da"),Q=n("dc38"),X=n("eba7"),Y=n("29b9"),Z=n.n(Y),ee=n("90fe"),te=n("4d90"),ne=n("b6f8"),ae=[{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"}],ie=n("dcd5");class re{constructor(e){this._cache={}}on(e,t){let n=this._cache[e]=this._cache[e]||[];return-1===n.indexOf(t)&&n.push(t),this}trigger(e,t){let n=this._cache[e];return Array.isArray(n)&&n.forEach(e=>{e(t)}),this}off(e,t){let n=this._cache[e];if(Array.isArray(n))if(t){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}else n.length=0;return this}}const{ethereum:ue}=window;class se extends re{constructor(){super(),this.hasEthereum="undefined"!==typeof ue,this.accounts=[],this.connectState=JSON.parse(localStorage.getItem("connectState"))||!1,this.connectKey=localStorage.getItem("connectKey")||"",this.init()}async _connectMetaMask(){if(!ue)return void Object(te["a"])({title:"Tips",message:"Please install the wallet first",type:"error"});if(ue.on("connect",()=>{const e=setInterval(()=>{ue.isConnected()&&clearInterval(e),$["a"].from(ue.chainId||0)._hex===ie[ie.evn].chain.chainId&&ue.selectedAddress&&this.connect(this.connectState)},1e3)}),ue.on("chainChanged",e=>{ie[ie.evn].chain.chainId!=e?(Object(te["a"])({title:"Tips",message:"Current wallet does not support, please switch to "+ie[ie.evn].chain.chainName,type:"error"}),this.logout()):this.connect(this.connectState)}),!this.checkEthereum())return;const e=await this.wallet_switchEthereumChain();if(!e)return;const t=await ue.request({method:"eth_requestAccounts"}).catch(e=>{Object(ee["a"])(e)});return this.provider=new G["a"].Web3Provider(ue).getSigner(),this.accountsChanged(t),ue.on("accountsChanged",e=>{this.accountsChanged(e)}),this.connectState=1,localStorage.setItem("connectState",1),t}async _connectPrivateKey(e){try{this.provider=new Q["a"](e,new G["a"].JsonRpcProvider("https://rpc.ankr.com/bsc")),this.connectState=3,localStorage.setItem("connectState",3),localStorage.setItem("connectKey",e),this.accountsChanged([this.provider.address])}catch(t){Object(ee["a"])(t)}}async _walletConnect(){const e=new Z.a({rpc:{56:"https://rpc.ankr.com/bsc"},qrcodeModalOptions:{mobileLinks:["trust","tokenpocket","metamask","mathwallet"]}});await e.enable(),this.provider=new G["a"].Web3Provider(e).getSigner(),this.connectState=2,localStorage.setItem("connectState",2)}init(){this.initOnlyReadNetwOrk(),this.connectState&&2!=this.connectState&&this.connect(this.connectState,this.connectKey)}logout(){this.connectState=!1,localStorage.setItem("connectState",!1),localStorage.setItem("connectKey",""),this.accountsChanged([])}async wallet_switchEthereumChain(){try{return $["a"].from(ue.chainId)._hex===ie[ie.evn].chain.chainId||await ue.request({method:"wallet_switchEthereumChain",params:[{chainId:ie[ie.evn].chain.chainId}]}),!0}catch(e){return Object(ee["a"])(e),!1}}async connect(e,t){switch(e){case 1:this._connectMetaMask();break;case 2:this._walletConnect();break;case 3:this._connectPrivateKey(t);break}}checkEthereum(){return!!this.hasEthereum||(Object(te["a"])({title:"Tips",message:"Please install the meta mask plug-in first",type:"error"}),!1)}initContract(e,t=ne){return!!this.provider&&new X["a"](e,t,this.provider)}initOnlyReadNetwOrk(){const e=new G["a"].JsonRpcProvider(ie[ie.evn].RPC);this.ContractWETH=new X["a"](ie[ie.evn].WETH,ae,e)}accountsChanged(e){e[0]!=this.accounts[0]&&(this.accounts=e,this.ContractWETH=new X["a"](ie[ie.evn].WETH,ae,this.provider),this.trigger("accountChange",e))}addTokenToMeta(e,t,n){window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,symbol:t,decimals:18,image:n}}})}}var oe={install:e=>{e.config.globalProperties.$wallet=new se(e),window.wallet=e.config.globalProperties.$wallet}},pe=n("2d9b"),ce=n("892d"),le=n("bde4"),de=n("fa93"),ye=n.n(de),me=n("12ae"),be=n.n(me);R.beforeEach((e,t,n)=>{e.meta.title&&(document.title=e.meta.title),window.scrollTo({top:0,behavior:"smooth"}),n()});const Te=Object(a["createApp"])(F);Te.use(J["a"]).use(K).use(pe["a"]).use(R).use(le["a"],{loading:be.a,error:ye.a}).use(U.a).use(oe).mount("#app");for(const[he,fe]of Object.entries(ce))Te.component(he,fe)},"7e80":function(e,t,n){"use strict";n("ce21")},"8f78":function(e,t,n){},"90fe":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n("4d90");const i=(e,t=3)=>{let n=e.toString(),a=n.indexOf(".");return-1===a||(n=n.substring(0,a+t)),n},r=(e,t="Tips")=>{Object(a["a"])({type:"error",title:t,message:e.data&&e.data.message||e.message})}},"9d64":function(e,t){e.exports="./images/logobf2bf0ce34261ebc12c262c90688f09d.png"},a41b:function(e,t,n){},b5c6:function(e,t){e.exports="./images/menu7e8a183e0a3f3ee0c9a94892bef3baf5.png"},b6f8:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},cab4:function(e,t,n){},ce21:function(e,t,n){},dcd5:function(e){e.exports=JSON.parse('{"evn":"product","product":{"WETH":"0x10ed43c718714eb63d5aa57b78b54704e256024e","STAKING":"0x019ec9259ed52fb80da94220b1fb52467e98afa0","ERC20":"0xc4fc54ebc66841443734930c680a69b099a0c15e","UNISWAP":"0x10ED43C718714eb63d5aA57B78B54704E256024E","RPC":"https://rpc.ankr.com/bsc","chain":{"chainId":"0x38","chainName":"Binance Smart Chain Mainnet"}},"test":{"BNB":"0x65e070E7c95C5cD72fd50d549135aE710097644D","STAKING":"0x019ec9259ed52fb80da94220b1fb52467e98afa0","ERC20":"0xc4fc54ebc66841443734930c680a69b099a0c15e","UNISWAP":"0x10ED43C718714eb63d5aA57B78B54704E256024E","RPC":"https://data-seed-prebsc-1-s1.binance.org:8545","chain":{"chainId":"0x61","chainName":"Binance Smart Chain Testnet"}}}')},edb6:function(e,t,n){"use strict";n("08c7")},fa93:function(e,t){e.exports="./images/errorebd3c56e772a8b2753f11c6d5ed817b8.png"}});
//# sourceMappingURL=app.25977a0c.js.map