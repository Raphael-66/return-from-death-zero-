// Mede o ritmo do Modo Retornos: cartas por arco e causas de morte (medidor x batalha).
module.exports=async p=>{
 const ev=s=>p.evaluate(s2=>__T(s2),s);
 await ev(`(function(){try{localStorage.clear()}catch(e){}document.querySelector('#bRG').click();window.ST={cards:0,arcCards:{},deaths:{},flags:[]};
  var d0=rgDie;rgDie=function(id){ST.deaths[id]=(ST.deaths[id]||0)+1;d0(id)};})()`);
 const N=+(process.env.N||3000);
 for(let i=0;i<N;i++){
  await ev(`(function(){
   var o=document.querySelector('#overlay');
   if(!o.hidden){var bs=[].filter.call(o.querySelectorAll('button'),function(b){return !b.disabled});var dis=o.querySelector('button[disabled]');if(!bs.length&&dis){dis.disabled=false;bs=[dis]}if(bs.length){var pr=bs.filter(function(b){return /primary/.test(b.className)});(pr[0]||bs[0]).click()}else o.hidden=true;return}
   var scr=document.querySelector('.screen:not([hidden])');
   if(scr.id==='battle'){if(!B||B.done){var n=document.querySelector('#bNext');if(n)n.click();return}
     var guard=0;while(!B.done&&guard++<20){var T=foeTr(),inc=nextIntent(),need=Math.max(0,inc-B.pblk),best=-1,bv=0;for(var i=0;i<B.hand.length;i++){var c=CARDS[B.hand[i]];if(!c||c.c>B.en)continue;var b=bonus(c.o),v=0;if(c.en&&c.c===0)v+=50;if(c.draw)v+=6*c.draw;if(c.dmg)v+=Math.max(1,c.dmg+b-(T.ward||0))*(c.multi||1);if(c.blk)v+=Math.min(c.blk+b,need)*1.3;if(c.heal&&B.php<maxHp()*0.6)v+=c.heal;v=v/Math.max(.7,c.c);if(v>bv){bv=v;best=i}}if(best<0)break;playCard(best)}if(!B.done)endTurn();return}
   if(scr.id==='rg'&&RG&&RG.cur){var c=RG.cur;if(!(c.o&&c.o.narr)){ST.cards++;ST.arcCards[RG.arc]=(ST.arcCards[RG.arc]||0)+1}
     /* jogador razoável: evita a escolha que leva um medidor ao extremo */
     function sc(k){var s=0;for(var i=0;i<4;i++){var v=RG.m[i]+(k.d[i]||0);s+=Math.abs(v-50)}if(k.x&&k.x.die&&!(k.x.sm&&rm(k.x.sm)))s+=40;return s+Math.random()*25}
     var d=sc(c.L)<=sc(c.R)?'L':'R';rgPick(d);return}
   if(scr.id==='title')document.querySelector('#bRG').click();
  })()`);
 }
 console.log(await ev(`'arco '+RG.arc+' · retornos '+RG.ret+' · cartas por arco '+JSON.stringify(ST.arcCards)+' · mortes '+JSON.stringify(ST.deaths)+' · flags '+RG.flags.join(',')`));
};
