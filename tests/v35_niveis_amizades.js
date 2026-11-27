// Atualização 35: corações em faixas (amizade 8, namoro 10, noivado 12, casamento 14) e amizades sem romance.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const sh=async n=>{await p.waitForTimeout(450);await p.screenshot({path:'/tmp/shots/'+n+'.png'})};const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,300))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await ev(`SET.tips=false;META.maxArc=4`);
 await ev(`document.querySelector('#bFree').click()`);
 await st('lista',`(function(){document.querySelector('#overlay').hidden=true;relOf("emilia").rp=140;PF.rel.partner="emilia";rsOf("emilia").s="noivado";relOf("felt").rp=60;openMenu("Romance");return [document.querySelectorAll('.rrow:not(.fr)').length,document.querySelectorAll('.rrow.fr').length,[].map.call(document.querySelectorAll('.rgh'),function(e){return e.textContent}).join('/')]})()`);
 await sh('e0_lista');
 await st('coracoes',`[JSON.stringify(heartsOf("emilia")),JSON.stringify(heartsOf("rem")),JSON.stringify(heartsOf("felt")),JSON.stringify(heartsOf("beatrice"))]`);
 await st('perfil emilia',`(function(){document.querySelector('[data-rel="emilia"]').click();return [document.querySelectorAll('.rl').length,document.querySelectorAll('.rl.on').length]})()`);
 await sh('e1_perfil');
 await st('perfil felt',`(function(){document.querySelector('[data-a="back"]').click();document.querySelector('[data-rel="felt"]').click();var t=document.querySelector('#pane').innerText;return [/Declarar|contrato|Vida a dois/.test(t),!!document.querySelector('[data-a="talk"]'),!!document.querySelector('[data-a="giftm"]')]})()`);
 await sh('e2_felt');
 await st('presente felt',`(function(){S.coin=999;document.querySelector('[data-a="giftm"]').click();var b=document.querySelector('[data-g]');var r0=relOf("felt").rp;b.click();return [r0,relOf("felt").rp]})()`);
 await st('conversar felt',`(function(){var b=document.querySelector('[data-a="talk"]');if(!b||b.disabled)return 'sem';b.click();return document.querySelector('#overlay').innerText.slice(0,120)})()`);
 await st('menu pessoa felt',`(function(){document.querySelector('#overlay').hidden=true;personMenu("felt");return [].map.call(document.querySelectorAll('#overlay [data-m]'),function(b){return b.getAttribute('data-m')}).join(',')})()`);
 console.log(o.join('\n'));};
