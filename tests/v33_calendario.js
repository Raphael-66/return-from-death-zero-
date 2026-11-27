// Atualização 33: datas por estação (dia da semana, "2 de Verão, Ano 1") e grade do calendário.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const sh=async n=>{await p.waitForTimeout(450);await p.screenshot({path:'/tmp/shots/'+n+'.png'})};const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,300))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await ev(`SET.tips=false;META.maxArc=3`);
 await ev(`document.querySelector('#bFree').click()`);
 await st('datas',`[calLong(1),calLong(21),calLong(22),calLong(85),calWeek(1),calWeek(8)]`);
 await st('hub',`(function(){document.querySelector('#overlay').hidden=true;S.day=23;renderHub();return document.querySelector('#hub > .hubcard h2').textContent})()`);
 await ev(`document.querySelector('#hub').scrollTop=0;window.scrollTo(0,0)`);await sh('c0_hub');
 await st('correio',`(function(){openMail();return new Promise(function(r){setTimeout(function(){r(document.querySelector('#overlay').innerText.slice(0,120))},50)})})()`);
 await st('diario',`(function(){document.querySelector('#overlay').hidden=true;dj("vida","Teste de diário.");openMenu("Diário");return new Promise(function(r){setTimeout(function(){r(document.querySelector('#pane').innerText.slice(0,200))},50)})})()`);
 await st('calendario',`(function(){openMenu("Mundo");var b=[].find.call(document.querySelectorAll('#pane button'),function(x){return /Calend/.test(x.textContent)});if(b)b.click();return document.querySelectorAll('.cday').length+' hoje='+(document.querySelector('.cday.today')||{textContent:'-'}).textContent})()`);
 await sh('c1_cal');
 await st('titulo',`(function(){document.querySelector('#overlay').hidden=true;save();toTitle();return document.querySelector('#bFree').innerText.replace(/\\n/g,' / ')})()`);
 console.log(o.join('\n'));};
