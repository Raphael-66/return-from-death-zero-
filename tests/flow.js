module.exports=async p=>{
 const ev=s=>p.evaluate(s2=>__T(s2),s);
 const log=[];
 const step=async(name,code)=>{try{const r=await ev(code);log.push(name+': '+(r===undefined?'ok':JSON.stringify(r).slice(0,300)))}catch(e){log.push('FAIL '+name+': '+e.message.slice(0,300))}};
 await step('free start',`(function(){document.querySelector('#bFree').click();return S.mode+' loc='+L().loc})()`);
 await step('give money/arc',`(function(){S.coin=20000;META.maxArc=8;L().job=2;save();renderHub();return arcReach()})()`);
 await p.screenshot({path:'/tmp/hub.png',fullPage:true});
 const places=await ev(`PLACES.map(function(p){return p.id})`);
 for(const pl of places){
   await step('go '+pl,`(function(){S.t=0;goPlace("${pl}");var o=document.querySelector('#overlay');o.hidden=true;return L().loc+' acts='+[].map.call(document.querySelectorAll('#hMapCard [data-ac]'),function(b){return b.getAttribute('data-ac')}).join(',')})()`);
   await step('explore '+pl,`(function(){if(PLBY["${pl}"].dg)return 'dg';S.t=0;explore();var o=document.querySelector('#overlay');var t=o.innerText.slice(0,80);var b=o.querySelector('#bOk');if(b)b.click();else{var g=o.querySelector('#bGo');if(g){g.click();if(B){B.done=true;document.querySelector('#overlay').hidden=true;B=null;renderHub()}}}return t})()`);
   if(await ev(`!!RES["${pl}"]&&"${pl}"!=="casa"`)){
     await step('res '+pl,`(function(){placeAction("res");var o=document.querySelector('#overlay');var b=o.querySelector('[data-r="1"]');if(b&&!b.disabled)b.click();var t=resAt("${pl}");o.hidden=true;return t&&t.n})()`);
     await step('sleep '+pl,`(function(){var before=L().loc;S.t=3;sleepDay();var o=document.querySelector('#overlay');var t=o.innerText.slice(0,160);o.hidden=true;renderHub();return before+' -> '+L().loc+' | '+t})()`);
   }
 }
 await step('sleep at floresta (near)',`(function(){L().loc="floresta";S.t=3;sleepDay();document.querySelector('#overlay').hidden=true;renderHub();return L().loc})()`);
 await step('sleep at vila with house',`(function(){L().loc="vila";S.t=3;sleepDay();document.querySelector('#overlay').hidden=true;renderHub();return L().loc+' home='+L().home})()`);
 await step('sleep far no house (torreeco)',`(function(){L().loc="torreeco";S.t=3;sleepDay();document.querySelector('#overlay').hidden=true;renderHub();return L().loc})()`);
 await step('weekly',`(function(){weekly(7);return PF.week.t})()`);
 await step('life pane',`(function(){openMenu("Vida");var t=document.querySelector('#overlay').innerText.slice(0,400);document.querySelector('#overlay').hidden=true;return t})()`);
 await step('echo',`(function(){L().loc="capital";S.t=0;renderHub();placeAction("echo");var o=document.querySelector('#overlay');var b=o.querySelector('[data-e="0"]');b.click();var r=B&&(B.cfg.enemy+' tier='+B.cfg.tier+' hp='+B.cfg.hp+' tr='+JSON.stringify(B.cfg.tr));return r})()`);
 await p.screenshot({path:'/tmp/battle.png',fullPage:true});
 await step('echo win',`(function(){B.ehp=1;playCard(B.hand.findIndex(function(id){return CARDS[id].dmg}));var t=document.querySelector('#overlay').innerText;document.querySelector('#bNext').click();return t.slice(0,300)})()`);
 // dungeon
 await step('dungeon',`(function(){L().loc="fortaleza";S.t=0;S.san=100;dgIntro("fortaleza");document.querySelector('#overlay [data-k="s1"]').click();return B&&(B.cfg.enemy+' '+B.cfg.tier+' hp'+B.cfg.hp)})()`);
 for(let i=0;i<17;i++){
   await step('floor',`(function(){var o=document.querySelector('#overlay');
     if(B&&!B.done){B.ehp=1;var k=B.hand.findIndex(function(id){return CARDS[id].dmg&&CARDS[id].c<=B.en});if(k<0){B.en=9;k=B.hand.findIndex(function(id){return CARDS[id].dmg})}if(k<0){B.ehp=0;endBattle(true)}else playCard(k)}
     var r=DR();var info=r?('fl'+r.fl):'none';
     var n=document.querySelector('#bNext');if(n&&!o.hidden){n.click()}
     var dn=document.querySelector('#dgN');if(dn&&!o.hidden)dn.click();
     var d=o.querySelector('[data-k="d"]');if(d&&!o.hidden){d.click()}
     var e=document.querySelector('#dgE');if(e&&!o.hidden){var t=o.innerText.slice(0,120);e.click();return 'END '+t}
     return info+' '+(B&&!B.done?B.cfg.enemy+'/'+B.cfg.tier:'')+' san'+S.san})()`);
 }
 await step('panes',`(function(){var names=["Perfil","Vida","Mundo","Romance","Mercado","Equipamento","Conquistas","Diário","Ajustes"];var out=[];names.forEach(function(n){try{openMenu(n);out.push(n+':'+document.querySelector('#overlay').innerText.length)}catch(e){out.push(n+' ERR '+e.message)}});document.querySelector('#overlay').hidden=true;return out.join(' ')})()`);
 console.log(log.join('\n'));
};
