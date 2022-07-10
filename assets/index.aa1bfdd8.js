import{_ as V}from"./index.4395bc4f.js";import{o as O,a as P,s as C,t as F,u as H}from"./walletProvider.c7f3a12f.js";import{N as b,a as Y,b as Z,S as G,E as J,I as W,f as B,c as q,p as E,d as K}from"./TenDaoToken__factory.e0e15ac7.js";import{d as Q,a as X,r as ee,y as i,z as I,aJ as n,aL as o,aN as r,aG as l,u as a,aM as N,aD as m,C as c,aH as ae,aY as te,aZ as se,a_ as oe,a$ as ne,b0 as re,b1 as le,b2 as ue,aO as h}from"./arco.dcacf5bd.js";import"./vue.a1ec4c08.js";const k=w=>(te("data-v-14adefee"),w=w(),se(),w),ie={class:"swap-content"},ce=k(()=>c("h3",null,"\u80A1\u6743\u5956\u52B1\u6C60",-1)),de={key:0},_e=k(()=>c("a",{target:"_blank",href:"https://t.me/+bR4tznC1dYg5ZmU9"},"\u52A0\u5165\u80A1\u4E1C\u7FA4(\u79C1\u6709\u8BF7\u52FF\u5206\u4EAB)",-1)),fe=[_e],pe=k(()=>c("br",null,null,-1)),ge=k(()=>c("br",null,null,-1)),ve=r(" \u5168\u90E8\u9886\u53D6 "),be=r(" \u8BF7\u8FDE\u63A5\u94B1\u5305 "),me={key:2},he={style:{display:"flex"}},ke=k(()=>c("br",null,null,-1)),we=r(" \u589E\u52A0\u80A1\u6743 "),ye=r(" \u6388\u6743 1 "),Ae=r(" \u8BF7\u8FDE\u63A5\u94B1\u5305 "),Ie=Q({setup(w){const d=X(10);let _,s,R;const e=ee({connected:!1,totalStaking:0,totalRewards:0,totalReceive:0,userLength:0,userInfo:{receives:0,rewards:0,staking:0,share:0},balance:0,price:0,stakingInput:0,approve:!1,loading:!1}),f=t=>Math.floor(Number(q(t,9))),g=async()=>{if(s&&_&&R){const t=await _.signer.getAddress(),[v,u,y,p,D,S]=await Promise.all([s.totalStaking(),s.totalRewards(),s.totalReceive(),s.getUserInfo(t),s.getUserLength(),_.balanceOf(t)]);e.userLength=D.toNumber(),e.balance=Math.floor(Number(B(S))),e.totalStaking=f(v),e.totalRewards=f(u),e.totalReceive=f(y),e.userInfo={receives:f(p.receives),rewards:f(p.rewards),staking:f(p.staking),share:f(p.share)},R.getAmountsOut(E("1"),["0x55d398326f99059ff775485246999027b3197955","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",F]).then(([A,x,T])=>{e.price=Math.floor(Number(B(T)))}),_.allowance(t,s.address).then(A=>{const x=Math.floor(Number(B(A)));e.approve=x>=e.balance})}else h.warning("\u94B1\u5305\u672A\u54CD\u5E94.")},M=t=>{console.log(t),g()},U=t=>{console.log(t),g()},$=t=>{console.log(t),g()},L=async()=>{if(s){e.loading=!0;try{const t=Math.floor(e.balance*d.value/100);await(await s.increaseStaking(E(`${t}`),{gasLimit:"1500000"})).wait(),g()}catch(t){h.error(t.error?t.error.data.message:t.message)}e.loading=!1}},z=async()=>{if(s){e.loading=!0;try{await(await s.receiveRewards(K(`${e.userInfo.receives}`,9))).wait(),g()}catch(t){h.error(t.error?t.error.data.message:t.message)}e.loading=!1}},j=async()=>{if(_&&s){e.loading=!0;try{await(await _.approve(C,E("10000000000000"))).wait(),e.approve=!0,h.success("\u6388\u6743\u5B8C\u6210.")}catch(t){h.error(t.error?t.error.data.message:t.message)}e.loading=!1}};return O(async()=>{s==null||s.removeAllListeners(),s=void 0,e.totalStaking=0,e.totalRewards=0,e.totalReceive=0,e.userInfo={receives:0,rewards:0,staking:0,share:0},e.connected=!1,console.log("\u65AD\u5F00\u8FDE\u63A5.")}),P(async t=>{s=G.connect(C,t),_=J.connect(F,t),R=W.connect(H,t),s.on(s.filters.IncreaseStaking(),M),s.on(s.filters.ArriveFeeRewards(),U),s.on(s.filters.ReceiveReward(),$),e.connected=!0,g()}),(t,v)=>{const u=oe,y=ne,p=re,D=le,S=ue;return i(),I("div",ie,[n(S,{class:"swap-box"},{title:o(()=>[ce]),default:o(()=>[n(y,{title:"",layout:"inline-horizontal",size:"large",column:1},{default:o(()=>[n(u,{label:"\u603B\u80A1\u6743"},{default:o(()=>[r(" $"+l(a(e).totalStaking),1)]),_:1}),n(u,{label:"\u603B\u5956\u52B1"},{default:o(()=>[r(" $"+l(a(e).totalRewards),1)]),_:1}),n(u,{label:"\u5DF2\u9886\u53D6"},{default:o(()=>[r(" $"+l(a(e).totalReceive),1)]),_:1}),n(u,{label:"\u53C2\u4E0E\u4EBA\u6570"},{default:o(()=>[r(l(a(e).userLength),1)]),_:1})]),_:1}),n(p),n(y,{title:"",layout:"inline-horizontal",size:"large",column:1},{default:o(()=>[n(u,{label:"\u6211\u7684\u80A1\u6743"},{default:o(()=>[r(l(a(e).userInfo.staking),1)]),_:1}),a(e).userInfo.staking>100?(i(),I("div",de,fe)):N("",!0),n(u,{label:"\u5E72\u80A1\u5360\u6BD4"},{default:o(()=>[r(l(Math.floor(a(e).userInfo.staking/a(e).totalStaking*1e4)/100)+" % ",1)]),_:1}),n(u,{label:"\u5206\u7EA2\u5360\u6BD4"},{default:o(()=>[r(l(Math.floor((a(e).userInfo.staking+a(e).userInfo.receives)/(a(e).totalStaking+a(e).totalRewards)*1e4)/100)+" % ",1)]),_:1}),n(u,{label:"\u5982\u679C\u590D\u5229\u5360\u6BD4"},{default:o(()=>[r(l(Math.floor((a(e).userInfo.staking+a(e).userInfo.receives+a(e).userInfo.rewards)/(a(e).totalStaking+a(e).totalRewards)*1e4)/100)+" % ",1)]),_:1}),n(u,{label:"\u5DF2\u9886\u53D6"},{default:o(()=>[r(" $"+l(a(e).userInfo.rewards),1)]),_:1}),n(u,{label:"\u53EF\u9886\u53D6"},{default:o(()=>[r(" $"+l(a(e).userInfo.receives),1)]),_:1})]),_:1}),pe,ge,a(e).connected?(i(),m(a(b),{key:0,type:"primary",loading:a(e).loading,disabled:a(e).userInfo.receives<=0,onClick:z},{default:o(()=>[ve]),_:1},8,["loading","disabled"])):(i(),m(a(b),{key:1,type:"primary",status:"danger",disabled:""},{default:o(()=>[be]),_:1})),n(p),a(e).connected?(i(),I("div",me,[c("div",he,[n(a(Y),{type:"dashboard","gap-position":"bottom",percentage:d.value},null,8,["percentage"]),n(D,{style:{"margin-left":"20px","margin-top":"15px"},direction:"vertical"},{default:o(()=>[c("span",null," \u589E\u52A0 : "+l(Math.floor(a(e).balance*d.value/100)),1),c("span",null," \u83B7\u5F97 : $ "+l(Math.floor(a(e).balance*d.value/100/a(e).price))+" / \u80A1\u6743\u5E01",1),c("span",null,"\u4F59\u989D : "+l(a(e).balance)+" / TDAO",1)]),_:1})]),n(a(Z),{value:d.value,"onUpdate:value":v[0]||(v[0]=A=>d.value=A)},null,8,["value"]),ke,a(e).connected?(i(),I(ae,{key:0},[a(e).approve?(i(),m(a(b),{key:0,type:"primary",loading:a(e).loading,disabled:d.value<=0||a(e).balance==0,onClick:L},{default:o(()=>[we]),_:1},8,["loading","disabled"])):(i(),m(a(b),{key:1,type:"primary",loading:a(e).loading,onClick:j},{default:o(()=>[ye]),_:1},8,["loading"]))],64)):(i(),m(a(b),{key:1,type:"primary",status:"danger",disabled:""},{default:o(()=>[Ae]),_:1}))])):N("",!0)]),_:1})])}}});var xe=V(Ie,[["__scopeId","data-v-14adefee"]]);export{xe as default};
