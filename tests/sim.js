module.exports=async p=>{
 const r=await p.evaluate(()=>__T(`(function(){
  var out=[];
  function setup(prof){
    S=freshFree();pfPull(S);S.san=80;
    PF.lvl=prof.lvl;PF.vit=prof.vit;PF.res=prof.res;PF.pow=prof.pow;
    S.extras=ARSENAL.filter(function(id){return CARDS[id].arc<=prof.arc}).slice(0,prof.nx);
    S.aff={emilia:prof.aff,rem:prof.aff,ram:prof.aff,beatrice:prof.aff};
    META.maxArc=prof.arc;
  }
  function policy(){
    var guard=0;
    while(!B.done&&guard++<20){
      var T=foeTr(),inc=nextIntent(),need=Math.max(0,inc-B.pblk),best=-1,bv=0;
      for(var i=0;i<B.hand.length;i++){var c=CARDS[B.hand[i]];if(!c||c.c>B.en)continue;var b=bonus(c.o);
        var v=0;
        if(c.en&&c.c===0)v+=50;if(c.draw)v+=6*c.draw;
        if(c.dmg)v+=Math.max(1,c.dmg+b-(T.ward||0))*(c.multi||1);
        if(c.dot)v+=c.dot*2.5;
        if(c.blk)v+=Math.min(c.blk+b,need)*1.3;
        if(c.heal&&B.php<maxHp()*0.6)v+=Math.min(c.heal+b,maxHp()-B.php);
        if(c.weak&&inc>8)v+=inc*0.4;
        if(c.pay&&B.php<=c.pay+inc)v=-1;
        v=v/Math.max(.7,c.c);
        if(v>bv){bv=v;best=i}}
      if(best<0)break;
      playCard(best);
    }
    if(!B.done)endTurn();
  }
  function fight(cfg){
    var o=document.querySelector('#overlay');
    startBattle(cfg);var t=0;
    while(B&&!B.done&&t<40){policy();t++}
    var res={win:B.php>0&&S.san>0,turns:B.turn,hpLeft:Math.max(0,B.php),mh:maxHp(),ehp:B.cfg.hp,tier:B.cfg.tier,int:B.cfg.intents.join('/'),lv:B.cfg.lv};
    o.hidden=true;B=null;return res;
  }
  var profs={early:{lvl:1,vit:0,res:0,pow:0,arc:1,nx:2,aff:3},mid:{lvl:15,vit:8,res:8,pow:8,arc:4,nx:8,aff:6},late:{lvl:32,vit:20,res:20,pow:20,arc:8,nx:16,aff:9}};
  Object.keys(profs).forEach(function(pn){
    var agg={};
    function rec(k,r){var a=agg[k]=agg[k]||{n:0,w:0,hp:0,t:0,ehp:0};a.n++;if(r.win)a.w++;a.hp+=r.hpLeft/r.mh;a.t+=r.turns;a.ehp+=r.ehp;a.int=r.int}
    for(var i=0;i<30;i++){
      setup(profs[pn]);var ref=refLv();
      [["mob",0,"mob"],["elite",4,"elite"],["mortal",8,"elite"]].forEach(function(x){
        var pk=mkMon(arcReach(),ref+x[1]);rec(x[0],fight(levelize({enemy:pk.enemy,arch:pk.arch,affix:pk.affix,lv:ref+x[1],tier:x[2],noadapt:true,allies:["?emilia","?rem","?ram","?beatrice"],win:"_hub",lose:"_hubl"})));});
      rec("boss",fight(levelize({enemy:"Chefe teste",arch:"chefe",lv:ref+1,noadapt:true,allies:["?emilia","?rem","?ram","?beatrice"],win:"_hub",lose:"_hubl"})));
      ["Elsa Granhiert","Garfiel Tinsel","Regulus Corneas","Reid Astrea","A Baleia Branca","Petelgeuse Romanée-Conti","Sphinx"].forEach(function(n){
        rec(n,fight(levelize({enemy:n,arch:"padrao",lv:ref+1,tier:"super",hold:(n[0]==="E"&&pn==="early")?6:0,noadapt:true,allies:["?emilia","?rem","?ram","?beatrice"],win:"_hub",lose:"_hubl"})));});
    }
    Object.keys(agg).forEach(function(k){var a=agg[k];out.push(pn+' '+k+': win '+Math.round(a.w/a.n*100)+'% hpLeft '+Math.round(a.hp/a.n*100)+'% turns '+(a.t/a.n).toFixed(1)+' ehp '+Math.round(a.ehp/a.n)+' int '+a.int)});
  });
  return out.join('\\n');
 })()`));
 console.log(r);
};
