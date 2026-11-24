// Simula três perfis contra os chefes da história em cada arco.
// rgOnly: só joga o Retornos · padrao: evolução normal · investido: treinou bem no Modo Livre
module.exports=async p=>{
 const r=await p.evaluate(()=>__T(`(function(){
  var out=[],eq0=eq;
  function policy(){var guard=0;while(!B.done&&guard++<20){var T=foeTr(),inc=nextIntent(),need=Math.max(0,inc-B.pblk),best=-1,bv=0;for(var i=0;i<B.hand.length;i++){var c=CARDS[B.hand[i]];if(!c||c.c>B.en)continue;var b=bonus(c.o);var v=0;if(c.en&&c.c===0)v+=50;if(c.draw)v+=6*c.draw;if(c.dmg)v+=Math.max(1,c.dmg+b-(T.ward||0))*(c.multi||1);if(c.dot)v+=c.dot*2.5;if(c.blk)v+=Math.min(c.blk+b,need)*1.3;if(c.heal&&B.php<maxHp()*0.6)v+=Math.min(c.heal+b,maxHp()-B.php);if(c.weak&&inc>8)v+=inc*0.4;if(c.pay&&B.php<=c.pay+inc)v=-1;v=v/Math.max(.7,c.c);if(v>bv){bv=v;best=i}}if(best<0)break;playCard(best)}if(!B.done)endTurn()}
  function setup(pr,a){
    S=freshFree();pfPull(S);S.san=80;S.deaths=pr==="rgOnly"?40*a:10*a;S.str=0;META.maxArc=a;PF.tree={};S.bf=[];S.eqe={};PF.rel={partner:null,c:{}};
    var cards=ARSENAL.filter(function(id){return CARDS[id].arc<=a});
    if(pr==="rgOnly"){PF.lvl=2+2*a;PF.vit=PF.res=PF.pow=0;S.extras=cards.slice(0,a);var f=Math.min(9,2+a);S.aff={emilia:f,rem:f,ram:f,beatrice:f};eq=eq0}
    if(pr==="padrao"){PF.lvl=3+4*(a-1);PF.vit=PF.res=PF.pow=2.2*(a-1);S.extras=cards.sort(function(x,y){return CARDS[x].p-CARDS[y].p}).slice(0,2*a);var g=Math.min(9,3+a);S.aff={emilia:g,rem:g,ram:g,beatrice:g};eq=eq0}
    if(pr==="investido"){PF.lvl=LVCAP[a];PF.vit=PF.res=PF.pow=3+3*a;S.extras=cards.sort(function(x,y){return (CARDS[y].dmg||0)*(CARDS[y].multi||1)/CARDS[y].c-(CARDS[x].dmg||0)*(CARDS[x].multi||1)/CARDS[x].c}).slice(0,3*a);S.aff={emilia:9,rem:9,ram:9,beatrice:9};["emilia","rem","ram","beatrice"].forEach(function(k){relOf(k).rp=STG[stCap()][1]});
      var add={dmg:Math.ceil(a/2),sdmg:Math.ceil(a/3),hp:3*a};eq=function(k){return eq0(k)+(add[k]||0)}}
  }
  function fight(cfg){var o=document.querySelector('#overlay');startBattle(cfg);var t=0;while(B&&!B.done&&t<40){policy();t++}var w=B.php>0&&S.san>0;o.hidden=true;B=null;return w}
  var bosses={1:"elsa",2:"lobos",3:"baleia",4:"garfiel",5:"regulus",6:"torre",7:"imperio",8:"mortos"};
  ["rgOnly","padrao","investido"].forEach(function(pr){
    var line=[];
    for(var a=1;a<=8;a++){var w=0,N=16,pw=0,rp=0;
      for(var i=0;i<N;i++){setup(pr,a);var c=JSON.parse(JSON.stringify(BAT[bosses[a]]));c.win="_hub";c.lose="_hubl";var cf=levelize(c);if(i===0){pw=myPower();rp=recPower(cf.lv)}if(fight(cf))w++}
      line.push("A"+a+" "+Math.round(w/N*100)+"% ("+pw+"/"+rp+")");}
    out.push(pr+": "+line.join(" | "));
  });
  eq=eq0;return out.join("\\n");
 })()`));
 console.log(r);
};
