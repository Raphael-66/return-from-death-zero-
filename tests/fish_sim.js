// mesma física do minijogo, com um jogador "humano" (reação 160 ms, ruído)
function run(diff,beh,rod,params){
  var P=params,G={barH:Math.max(0.16,Math.min(0.42,0.2+rod*0.03-(diff>0.8?0.02:0))),bar:0.1,bv:0,fy:0.3,ft:0.5,fv:0,next:0,prog:0.28,hold:false},T=0,dt=1/60,hist=[];
  while(T<60){
    hist.push(G.fy);var seen=hist[Math.max(0,hist.length-1-Math.round(0.16/dt))]+(Math.random()-0.5)*0.06;
    var c=G.bar+G.barH/2;G.hold=seen>c+G.bv*0.12;
    G.bv+=(G.hold?2.6:-2.2)*dt;G.bv=Math.max(-1.6,Math.min(1.6,G.bv));G.bar+=G.bv*dt;
    if(G.bar<0){G.bar=0;G.bv=-G.bv*0.35}if(G.bar>1-G.barH){G.bar=1-G.barH;G.bv=0}
    if(T>=G.next){var r=Math.random();
      if(beh==="dart"){G.ft=Math.max(.02,Math.min(.98,G.fy+(r<0.5?-1:1)*(0.25+Math.random()*0.35)));G.next=T+0.35+Math.random()*(1.1-diff*0.6)}
      else if(beh==="smooth"){G.ft=Math.max(.02,Math.min(.98,G.fy+(Math.random()-0.5)*0.5));G.next=T+1+Math.random()*1.2}
      else if(beh==="sinker"){G.ft=Math.random()<0.7?Math.random()*0.4:Math.random();G.next=T+0.5+Math.random()*1.2}
      else if(beh==="floater"){G.ft=Math.random()<0.7?0.6+Math.random()*0.4:Math.random();G.next=T+0.5+Math.random()*1.2}
      else{G.ft=Math.random();G.next=T+0.4+Math.random()*(1.2-diff*0.5)}}
    var spd=(P.s0+diff*P.s1)*(beh==="dart"?P.dart:beh==="smooth"?0.6:1);
    G.fv+=((G.ft-G.fy)*spd*3-G.fv*2.2)*dt;G.fy=Math.max(0,Math.min(1,G.fy+G.fv*dt));
    var inside=G.fy>=G.bar-0.01&&G.fy<=G.bar+G.barH+0.01;
    if(inside)G.prog+=(P.up-diff*P.upd+rod*0.02)*dt;else G.prog-=(P.dn+diff*P.dnd)*dt;
    if(G.prog>=1)return 1;if(G.prog<=0)return 0;T+=dt;
  }return 0;
}
var P=JSON.parse(process.argv[2]||'{"s0":0.9,"s1":2.6,"dart":1.6,"up":0.36,"upd":0.1,"dn":0.26,"dnd":0.22}');
var rows=[[.18,"mixed"],[.4,"mixed"],[.5,"dart"],[.63,"sinker"],[.7,"dart"],[.86,"floater"],[.94,"dart"]];
[0,2,4].forEach(function(rod){var out=[];rows.forEach(function(r){var w=0;for(var i=0;i<300;i++)w+=run(r[0],r[1],rod,P);out.push(r[1]+r[0]+':'+Math.round(w/3)+'%')});console.log('vara '+rod+': '+out.join(' '))});
