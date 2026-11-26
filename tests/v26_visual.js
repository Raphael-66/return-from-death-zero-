// Atualização 26: capturas da identidade visual (título, mapa, ficha, campos, guerra, romance, chegada). Saída em /tmp/shots.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const sh=async n=>{await p.waitForTimeout(450);await p.screenshot({path:'/tmp/shots/'+n+'.png'})};
 await ev(`SET.tips=false;META.maxArc=8;META.ends=["emilia"]`);await sh('80_title');
 await ev(`document.querySelector('#bFree').click()`);
 await ev(`document.querySelector('#overlay').hidden=true;L().loc="capital";PF.lastLoc="capital";PVS().capital=1;renderHub();document.querySelector('#hMapCard').scrollIntoView();var w=document.querySelector('#hub .mapwrap');w.scrollLeft=200;w.scrollTop=300`);await sh('81_map');
 await ev(`(function(){var n=document.querySelector('[data-pl="karsten"]');n.dispatchEvent(new MouseEvent('click',{bubbles:true}));document.querySelector('#plSheet').scrollIntoView({block:'end'})})()`);await sh('82_sheet');
 await ev(`campMenu()`);await sh('83_camps');
 await ev(`document.querySelector('#overlay').hidden=true;WUI.tab="mapa";warRoom()`);await sh('84_war');
 await ev(`document.querySelector('#overlay').hidden=true;openMenu("Romance")`);await sh('85_romance');
 await ev(`document.querySelector('#overlay').hidden=true;window.scrollTo(0,0);document.querySelector('#hub').scrollTop=0`);await sh('86_hub');
 await ev(`document.querySelector('#overlay').hidden=true;arrivalCard("farol")`);await sh('87_arrival');
};
