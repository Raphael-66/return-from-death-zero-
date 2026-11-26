// Atualização 28: zoom do mapa (botões mudam o tamanho de verdade; mínimo = largura da moldura).
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);
 await ev(`SET.tips=false;META.maxArc=3;META.ends=[];PF.war=null;postOpen()`);await ev(`document.querySelector('#bFree').click()`);
 await ev(`document.querySelector('#overlay').hidden=true;L().loc="capital";PF.lastLoc="capital";renderHub();document.querySelector('#hub .mapwrap').scrollIntoView()`);
 const w=()=>ev(`Math.round(document.querySelector('#hub .mapwrap svg').getBoundingClientRect().width)`);
 console.log('inicial',await w(),'container',await ev(`document.querySelector('#hub .mapwrap').clientWidth`));
 await p.click('#hMapCard [data-mz="in"]');console.log('+',await w());
 await p.click('#hMapCard [data-mz="in"]');console.log('++',await w());
 await p.screenshot({path:'/tmp/shots/92_zoomin.png'});
 for(let i=0;i<6;i++)await p.click('#hMapCard [data-mz="out"]');console.log('---',await w());
 await p.screenshot({path:'/tmp/shots/93_zoomout.png'});
 await ev(`renderHub()`);console.log('apos render',await w());
};
