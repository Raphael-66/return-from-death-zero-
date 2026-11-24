module.exports=async p=>{
 const ev=s=>p.evaluate(s2=>__T(s2),s);const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,330))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await st('start',`(function(){document.querySelector('#bFree').click();META.maxArc=8;S.coin=20000;S.frags=50;L().job=2;L().loc="capital";S.t=0;renderHub();return 1})()`);
 await st('tour enter',`(function(){placeAction("tour");document.querySelector('#tIn').click();return document.querySelector('#overlay').innerText.slice(0,400)})()`);
 await p.screenshot({path:'/tmp/v11_tour.png'});
 for(const r of [0,1,2]) await st('tour round '+r,`(function(){S.t=0;document.querySelector('#tGo').click();var r=B.cfg.enemy+' '+B.cfg.tier+' canon='+B.cfg.canon;B.ehp=0;B.eblk=0;endBattle(true);var t=document.querySelector('#overlay').innerText.slice(0,260);document.querySelector('#bNext').click();return r+' | '+t})()`);
 await new Promise(r=>setTimeout(r,100));
 await st('tour after',`(function(){return document.querySelector('#overlay').innerText.slice(0,500)+' tour='+JSON.stringify(TOUR())})()`);
 await st('ess',`JSON.stringify(ESS())`);
 await st('deco',`(function(){document.querySelector('#overlay').hidden=true;buyRes("capital",2);L().loc="capital";renderHub();placeAction("deco");["cama","horta","estante","treino","altar"].forEach(function(id){var b=document.querySelector('[data-f="b:'+id+'"]');if(b)b.click()});return document.querySelector('#overlay').innerText.slice(0,200)+' furn='+JSON.stringify(FN())})()`);
 await st('sleep deco',`(function(){document.querySelector('#overlay').hidden=true;var c0=S.coin,h0=maxHp();S.t=3;sleepDay();document.querySelector('#overlay').hidden=true;return 'coin+'+(S.coin-c0)+' hb='+JSON.stringify(PF.hb)+' maxHp '+h0+'->'+maxHp()+' luck '+luck()})()`);
 await st('forge',`(function(){ESS()["Julius Juukulius"]=3;ESS()["Garfiel Tinsel"]=3;openMenu("Loja");var b=document.querySelector('[data-lg="lg_jul"]');var dis=b.disabled;b.click();return 'dis='+dis+' extras has='+hasLeg("lg_jul")+' '+document.querySelector('#legf').innerText.slice(0,200)})()`);
 await p.evaluate(()=>{document.querySelector('#legf').scrollIntoView()});await p.screenshot({path:'/tmp/v11_forge.png'});
 await st('leg in battle',`(function(){document.querySelector('#overlay').hidden=true;L().loc="floresta";S.t=0;startHubFight();B.hand[0]="lg_jul";renderBattle();return document.querySelectorAll('#battle .card.leg').length})()`);
 await p.screenshot({path:'/tmp/v11_battle.png'});
 await st('rg sees leg',`(function(){B.done=true;document.querySelector('#overlay').hidden=true;B=null;goRG();return S.mode+' '+hasLeg("lg_jul")})()`);
 console.log(o.join('\n'));
};
