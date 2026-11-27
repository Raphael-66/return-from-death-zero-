// Atualização 38: quatro encerramentos originais, tela de créditos no fim do arco, tocador em Ajustes e rádio no Modo Livre.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const sh=async n=>{await p.waitForTimeout(500);await p.screenshot({path:'/tmp/shots/'+n+'.png'})};const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,400))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await ev(`SET.tips=false;META.maxArc=3`);
 // cada compasso precisa somar 4 batidas e ter um acorde
 await st('partituras',`ENDS.map(function(E){var bad=[];E.sec.forEach(function(s,si){var c=s.c.split(" "),b=s.m.split("|");if(c.length!==b.length)bad.push(si+":compassos "+c.length+"/"+b.length);b.forEach(function(x,k){var t=0;x.trim().split(/\\s+/).forEach(function(tok){t+=+tok.split(":")[1]});if(Math.abs(t-4)>1e-9)bad.push(si+"."+k+"="+t)})});endBuild(E);return E.n+" "+Math.round(endLen(ENDS.indexOf(E)))+"s "+E.ev.length+" notas "+(bad.join(",")||"ok")})`);
 await st('notas validas',`ENDS.every(function(E){return E.ev.every(function(e){return e.m==null||(Array.isArray(e.m)?e.m.every(function(x){return x>30&&x<100}):(e.m>30&&e.m<100))})})`);
 await p.mouse.click(5,5);
 await st('tocar',`(function(){var ok=epStart(1,"manual");return [ok,EP.on,EP.i,musMood()]})()`);
 await p.waitForTimeout(1500);
 await st('agendou',`[EP.idx>0,EP.on]`);
 await st('parar',`(function(){epStop(false);return [EP.on,musMood()!==null]})()`);
 // créditos no fim do arco (Retornos)
 await ev(`document.querySelector('#bRG')&&document.querySelector('#bRG').click()`);
 await p.waitForTimeout(400);
 await st('fim do arco',`(function(){document.querySelector('#overlay').hidden=true;if(!RG)return "sem RG";RG.arc=3;rgArcEnd();var b=document.querySelector('#bEnd');return b?b.textContent:"sem botão"})()`);
 await st('creditos',`(function(){document.querySelector('#bEnd').click();var c=document.querySelector('#credits');return [!!c,c&&c.querySelector('h2').textContent,EP.src,EP.i]})()`);
 await p.waitForTimeout(2500);await sh('v38_creditos');
 await st('pular',`(function(){document.querySelector('#crSkip').click();return [EP.on]})()`);
 await p.waitForTimeout(700);
 await st('fechou',`!document.querySelector('#credits')`);
 // Ajustes
 await st('ajustes',`(function(){openMenu("Ajustes");return [].map.call(document.querySelectorAll('.ep38 b'),function(b){return b.textContent}).join(" / ")+" | rádio:"+!!document.querySelector('#rdSet')})()`);
 await sh('v38_ajustes');
 await st('tocar em ajustes',`(function(){document.querySelector('[data-ep="2"]').click();var r=[EP.on,EP.i,document.querySelector('[data-ep="2"]').textContent];document.querySelector('[data-ep="2"]').click();return r.concat([EP.on])})()`);
 await ev(`document.querySelector('#overlay').hidden=true`);
 o.forEach(x=>console.log(x));
};
