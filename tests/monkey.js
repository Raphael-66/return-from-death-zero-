module.exports=async p=>{
 const ev=s=>p.evaluate(s2=>__T(s2),s);
 const mode=process.env.MODE||'rg', N=+(process.env.N||600);
 await ev(mode==='rg'?`(function(){try{localStorage.clear()}catch(e){}document.querySelector('#bRG').click()})()`:`(function(){document.querySelector('#bFree').click();S.coin=5000;META.maxArc=8})()`);
 const stats={};if(process.env.SMART)await p.evaluate(()=>{window.SMART=1});const arcs=[];
 for(let i=0;i<N;i++){
  const r=await ev(`(function(){
   var o=document.querySelector('#overlay');
   if(!o.hidden){
     var bs=[].filter.call(o.querySelectorAll('button'),function(b){return !b.disabled&&b.offsetParent!==null});
     if(!bs.length){var dis=o.querySelector('button[disabled]');if(dis){dis.disabled=false;dis.click();return 'ov:forced'}var hh=o.innerHTML.slice(0,300);o.hidden=true;return 'ov-none '+hh}
     var pr=bs.filter(function(b){return /primary/.test(b.className)});
     var b=(pr.length&&Math.random()<0.7)?pr[0]:bs[Math.floor(Math.random()*bs.length)];
     b.click();return 'ov:'+(b.textContent||'').slice(0,20);
   }
   var scr=document.querySelector('.screen:not([hidden])');if(!scr)return 'noscreen';
   if(scr.id==='battle'){
     if(!B||B.done){var n=document.querySelector('#bNext');if(n)n.click();return 'bdone'}
     if(window.SMART){function policy(){var guard=0;while(!B.done&&guard++<20){var T=foeTr(),inc=nextIntent(),need=Math.max(0,inc-B.pblk),best=-1,bv=0;for(var i=0;i<B.hand.length;i++){var c=CARDS[B.hand[i]];if(!c||c.c>B.en)continue;var b=bonus(c.o);var v=0;if(c.en&&c.c===0)v+=50;if(c.draw)v+=6*c.draw;if(c.dmg)v+=Math.max(1,c.dmg+b-(T.ward||0))*(c.multi||1);if(c.dot)v+=c.dot*2.5;if(c.blk)v+=Math.min(c.blk+b,need)*1.3;if(c.heal&&B.php<maxHp()*0.6)v+=Math.min(c.heal+b,maxHp()-B.php);if(c.weak&&inc>8)v+=inc*0.4;if(c.pay&&B.php<=c.pay+inc)v=-1;v=v/Math.max(.7,c.c);if(v>bv){bv=v;best=i}}if(best<0)break;playCard(best)}if(!B.done)endTurn()}policy();return 'smart'}
     var cs=[].filter.call(document.querySelectorAll('#battle .card'),function(b){return !b.disabled});
     if(cs.length&&Math.random()<0.85){cs[Math.floor(Math.random()*cs.length)].click();return 'card'}
     document.querySelector('#bEnd').click();return 'end';
   }
   if(scr.id==='rg'){
     if(!RG||!RG.cur)return 'rg-nocur';
     var c=RG.cur;var d=Math.random()<0.5?'L':'R';if(!c[d])d=d==='L'?'R':'L';
     rgPick(d);return 'rg';
   }
   if(scr.id==='game'){var ch=[].filter.call(document.querySelectorAll('#choices button'),function(b){return !b.disabled});if(ch.length){ch[Math.floor(Math.random()*ch.length)].click();return 'choice'}advance();return 'adv'}
   if(scr.id==='hub'){
     var bs=[].filter.call(document.querySelectorAll('#hub button.act, #hub [data-pl], #hub button.chip'),function(b){return !b.disabled&&!b.hidden&&!/hMenu|hAI|hScene|hTree/.test(b.id)});
     if(Math.random()<0.05){var tabs=["Vínculos","Romance","Perfil","Loja","Equipamento","Pesca","Mercado","Pedidos","Negócios","Mundo","Vida","Diário","Conquistas","Galeria","Oficina","Ajustes"];openMenu(tabs[Math.floor(Math.random()*tabs.length)]);return 'menu'}
     if(S.t>=3||Math.random()<0.06){document.querySelector('#hSleep').click();return 'sleep'}
     var b=bs[Math.floor(Math.random()*bs.length)];if(!b)return 'hub-none';
     var ev=new MouseEvent('click',{bubbles:true});b.dispatchEvent(ev);return 'hub:'+(b.id||b.getAttribute('data-ac')||b.getAttribute('data-pl')||b.getAttribute('data-a')||'');
   }
   if(scr.id==='title'){document.querySelector(${JSON.stringify(mode==='rg'?'#bRG':'#bFree')}).click();return 'title'}
   if(scr.id==='ai'){toTitle();return 'ai->title'}
   return 'screen:'+scr.id;
  })()`).catch(e=>'EXC '+e.message.slice(0,200));
  const k=r.split(':')[0];stats[k]=(stats[k]||0)+1;
  if(/EXC|noscreen|none/.test(r))console.log(i,r);
  if(i%500===0)arcs.push(await ev(`RG?RG.arc+'/'+RG.ret+'/w'+(RG.bwins||0):''`));
 }
 console.log(JSON.stringify(stats));console.log('arcs over time',arcs.join(' '));
 console.log(await ev(`(S?('mode '+S.mode+' day '+S.day+' '+(RG?'arc '+RG.arc+' ret '+RG.ret:'')):'')`));
};
