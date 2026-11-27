// Correção 38.1: com a Lábia de mercador no máximo, comprar e revender na mesma cidade nunca dá lucro.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,500))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await ev(`SET.tips=false;META.maxArc=8`);await ev(`document.querySelector('#bFree').click()`);
 await st('mesma cidade',`(function(){document.querySelector('#overlay').hidden=true;PF.tree=PF.tree||{};PF.tree.r2=3;var worst=-1e9,cnt=0;
   TCITY.forEach(function(c){if(!PLBY[c])return;L().loc=c;TG.forEach(function(g){[1,3,5,10,20].forEach(function(k){var t=TRD();t.mk={};t.cargo={};t.cost={};t.src={};S.coin=1e6;var c0=S.coin;trBuy(g.id,k);trSell(g.id,9999);var pr=S.coin-c0;if(pr>worst)worst=pr;cnt++})})});
   return {testes:cnt,melhorResultado:worst}})()`);
 await st('venda < compra na tela',`(function(){var bad=[];TCITY.forEach(function(c){if(!PLBY[c])return;L().loc=c;var t=TRD();t.mk={};t.src={};TG.forEach(function(g){if(sellP(g.id,c)>=buyP(g.id,c))bad.push(g.id+"@"+c)})});return bad.length?bad.slice(0,5):"ok"})()`);
 await st('bonus longe',`(function(){var t=TRD();t.mk={};t.cargo={};t.cost={};t.src={};L().loc="vila";S.coin=1e6;trBuy("ferro",5);var g="ferro",c="capital";var com=sellP(g,c);PF.tree.r2=0;var sem=sellP(g,c);PF.tree.r2=3;return {semHabilidade:sem,comHabilidade:com}})()`);
 await st('mesma cidade sem bonus',`(function(){var c="vila";var com=sellP("ferro",c);PF.tree.r2=0;var sem=sellP("ferro",c);PF.tree.r2=3;return {sem:sem,com:com,compra:buyP("ferro",c)}})()`);
 await st('nota',`(function(){L().loc="vila";tradeMenu();var n=document.querySelector('#trNote');return n?n.textContent:"-"})()`);
 o.forEach(x=>console.log(x));
};
