module.exports=async p=>{
 const ev=s=>p.evaluate(s2=>__T(s2),s);const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,300))}catch(e){o.push('FAIL '+n+': '+e.message)}};
 await st('start',`(function(){document.querySelector('#bFree').click();META.maxArc=8;S.t=0;renderHub();return L().loc})()`);
 await st('casa->vila',`(function(){goPlace("vila");return L().loc+' t='+S.t})()`);
 await st('vila->santuario',`(function(){goPlace("santuario");return L().loc+' t='+S.t})()`);
 await st('santuario->capital',`(function(){goPlace("capital");return L().loc+' t='+S.t})()`);
 await st('capital->vollachia (meio dia, só 1p restante)',`(function(){goPlace("vollachia");return L().loc+' t='+S.t+' trip='+JSON.stringify(L().trip)+' ov='+document.querySelector('#overlay').innerText.slice(0,120)})()`);
 await st('camp',`(function(){var d=S.day;document.querySelector('#tCamp').click();var c=document.querySelector('#overlay button');if(c)c.click();document.querySelector('#overlay').hidden=true;renderHub();return 'day '+d+'->'+S.day+' loc='+L().loc+' t='+S.t+' trip='+JSON.stringify(L().trip)})()`);
 await st('vollachia->torre (2 dias)',`(function(){S.t=0;goPlace("torre");var r=[];for(var i=0;i<4&&L().trip;i++){var b=document.querySelector('#tCamp');if(!b)break;b.click();var c=document.querySelector('#overlay button');if(c)c.click();document.querySelector('#overlay').hidden=true;renderHub();r.push('d'+S.day+' t'+S.t+' '+L().loc)}return r.join(' | ')})()`);
 await st('mount',`(function(){var P=PT();P.mounts=P.mounts||{};P.mounts.cavalo=1;P.mnt="cavalo";S.t=0;goPlace("pristella");return L().loc+' t='+S.t+' trip='+JSON.stringify(L().trip)})()`);
 await st('labels',`(function(){return [].map.call(document.querySelectorAll('#hMapCard .wlk'),function(t){return t.textContent}).join(',')})()`);
 console.log(o.join('\n'));
};
