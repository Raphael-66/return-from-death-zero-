// Atualização 27: capturas do mapa-atlas completo (Arco 8 e Arco 1). Saída em /tmp/shots/90_full8.png e 91_full1.png.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);
 for(const [arc,end,name] of [[8,'["emilia"]','90_full8'],[1,'[]','91_full1']]){
 await ev(`SET.tips=false;META.maxArc=${arc};META.ends=${end};postOpen()`);
 await ev(`(function(){toTitle();document.querySelector('#bFree').click();document.querySelector('#overlay').hidden=true;L().loc="capital";PF.lastLoc="capital";renderHub()})()`);
 await p.setViewportSize({width:900,height:1150});
 await ev(`(function(){var sv=document.querySelector('#hub .mapwrap svg').cloneNode(true);sv.setAttribute('width',880);sv.setAttribute('height',1120);sv.id='clone';var d=document.createElement('div');d.className='mapwrap m2';d.style.cssText='position:fixed;left:0;top:0;z-index:99;max-height:none;overflow:visible';d.appendChild(sv);document.body.appendChild(d)})()`);
 await p.waitForTimeout(300);const el=await p.$('#clone');await el.screenshot({path:'/tmp/shots/'+name+'.png'});
 await ev(`document.querySelector('#clone').parentNode.remove()`);}
};
