// Atualização 34: página de Relacionamentos (estilo Stardew), perfil, e as abas Vínculos/Histórias absorvidas no Modo Livre.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const sh=async n=>{await p.waitForTimeout(450);await p.screenshot({path:'/tmp/shots/'+n+'.png'})};const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,300))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await ev(`SET.tips=false;META.maxArc=3`);
 await ev(`document.querySelector('#bFree').click()`);
 await st('pessoas',`(function(){document.querySelector('#overlay').hidden=true;relOf("rem").rp=50;relOf("emilia").rp=95;relOf("emilia").last=S.day;openMenu("Vínculos");var t=[].map.call(document.querySelectorAll('#overlay .tabs .tab:not([hidden])'),function(b){return b.textContent});return [t.join(','),document.querySelector('#pane h2').textContent,document.querySelectorAll('.rrow').length]})()`);
 await sh('d0_rel');
 await st('coracoes',`[heartsOf("emilia"),heartsOf("rem"),heartsOf("beatrice")]`);
 await st('perfil',`(function(){document.querySelector('[data-rel="emilia"]').click();return [!!document.querySelector('.rprof'),document.querySelector('[data-a="back"]').textContent,!!document.querySelector('[data-a="talk"]')]})()`);
 await sh('d1_perfil');
 await st('voltar',`(function(){document.querySelector('[data-a="back"]').click();return document.querySelectorAll('.rrow').length})()`);
 await st('historias redireciona',`(function(){openMenu("Histórias");return [document.querySelector('#pane h2').textContent,!document.querySelector('#overlay [data-t="Histórias"]'),!document.querySelector('#overlay [data-t="Vínculos"]')]})()`);
 await st('grupo pessoas',`(function(){var b=[].find.call(document.querySelectorAll('#overlay .mg'),function(x){return x.textContent==="Pessoas"});b.click();return document.querySelector('#pane h2').textContent})()`);
 await st('rg intacto',`(function(){document.querySelector('#overlay').hidden=true;toTitle();document.querySelector('#bRG').click();openMenu("Vínculos");var t=[].map.call(document.querySelectorAll('#overlay .tabs .tab:not([hidden])'),function(b){return b.textContent});return [t.join(','),document.querySelector('#pane h2').textContent]})()`);
 console.log(o.join('\n'));};
