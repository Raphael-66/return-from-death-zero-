module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,300))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,200))}};
 await st('setup',`(function(){document.querySelector('#bFree').click();META.maxArc=8;relOf("emilia").rp=120;PF.rel.partner="emilia";var r=rsOf("emilia");r.s="casado";r.live=true;RS().vila=2;L().home=2;L().loc="capital";renderHub();return mainHome()})()`);
 await st('tarde/noite onde ela está',`(function(){var out=[];for(var t=0;t<4;t++){S.t=t;out.push(t+':'+placeOf("emilia",S.day,Math.min(t,2)))}return out.join(' ')})()`);
 await st('na vila à noite',`(function(){L().loc="vila";S.t=3;renderHub();return peopleHere().join(',')})()`);
 await st('dorme na mansão -> vai pra casa do casal',`(function(){L().loc="casa";S.t=3;sleepDay();document.querySelector('#overlay').hidden=true;return L().loc})()`);
 await st('casa na capital comprada, dormindo lá',`(function(){RS().capital=2;L().loc="capital";S.t=3;var w=placeOf("emilia",S.day,2);sleepDay();document.querySelector('#overlay').hidden=true;return 'ela:'+w+' acordou:'+L().loc+' manhã ela:'+placeOf("emilia",S.day,0)})()`);
 console.log(o.join('\n'));};
