// Atualização 29: capturas da identidade "Cristal e Miasma" (Retornos, batalha, loja). Saída em /tmp/shots.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const sh=async n=>{await p.waitForTimeout(450);await p.screenshot({path:'/tmp/shots/'+n+'.png'})};
 await ev(`SET.tips=false;META.maxArc=3`);
 await ev(`document.querySelector('#bRG').click()`);
 for(let i=0;i<3;i++){await ev(`(function(){var b=document.querySelector('#rgR');if(b)b.click()})()`);await p.waitForTimeout(400)}
 await sh('95_rg');
 await ev(`toTitle();document.querySelector('#bFree').click();document.querySelector('#overlay').hidden=true;L().loc="floresta";startHubFight()`);await sh('96_battle');
 await ev(`B.done=true;document.querySelector('#overlay').hidden=true;B=null;openMenu("Loja")`);await sh('97_loja');
};
