module.exports=async p=>{
 const ev=s=>p.evaluate(s2=>__T(s2),s);
 const out=[];
 const st=async(n,c)=>{try{out.push(n+': '+JSON.stringify(await ev(c)).slice(0,400))}catch(e){out.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await st('new rg',`(function(){document.querySelector('#bRG').click();return S.mode+' arc '+RG.arc})()`);
 await p.screenshot({path:'/tmp/rg.png'});
 for(const k of ['elsa','lobos','baleia','culto','garfiel','regulus','torre','imperio','mortos']){
   await st('bat '+k,`(function(){RG.arc=${k==='elsa'?1:k==='lobos'?2:k==='baleia'||k==='culto'?3:k==='garfiel'?4:k==='regulus'?5:k==='torre'?6:k==='imperio'?7:8};rgBattle("${k}");var r=B.cfg.enemy+' | '+B.cfg.tier+' lv'+B.cfg.lv+' hp'+B.cfg.hp+' int '+B.cfg.intents+' tr '+JSON.stringify(B.cfg.tr)+' hold '+(B.cfg.hold||0);B.php=0;endBattle(false);document.querySelector('#bNext').click();return r})()`);
 }
 await st('memo',`JSON.stringify(RG.bt)`);
 await st('retry elsa discount',`(function(){RG.arc=1;rgBattle("elsa");var r=B.cfg.hp+' '+B.log;B.done=true;document.querySelector('#overlay').hidden=true;B=null;return r})()`);
 await st('trial card',`(function(){var c=trialCard();return c.t+' | '+GS().bc.tier+' hp'+GS().bc.hp})()`);
 await st('enc card',`(function(){var c=encounterCard();return c.t+' | '+GS().bc.tier})()`);
 await st('win clears memo',`(function(){RG.arc=1;rgBattle("elsa");B.turn=7;B.cfg.hold=6;endTurn();var t=document.querySelector('#overlay').innerText.slice(0,80);document.querySelector('#bNext').click();return t+' memo='+JSON.stringify(RG.bt)})()`);
 await st('screen',`(function(){return document.querySelector('.screen:not([hidden])').id})()`);
 console.log(out.join('\n'));
};
