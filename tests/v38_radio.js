// Rádio no Modo Livre
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,400))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await ev(`SET.tips=false;META.maxArc=3`);await ev(`document.querySelector('#bFree').click()`);
 await p.mouse.click(5,5);
 await st('chip',`(function(){document.querySelector('#overlay').hidden=true;renderHub();var r=document.querySelector('#hRadio');return r?r.innerText.replace(/\\n/g," / "):"sem rádio"})()`);
 await st('auto',`(function(){RADIO.gapTo=Date.now()-1;radioTick();return [EP.on,EP.src,EP.i,RADIO.ctx]})()`);
 await st('chip tocando',`document.querySelector('#hRadio').innerText.replace(/\\n/g," / ")`);
 await p.waitForTimeout(600);await p.screenshot({path:'/tmp/shots/v38_radio.png'});
 await st('proxima',`(function(){var a=EP.i;document.querySelector('#rdSkip').click();return [a,EP.i,EP.on]})()`);
 await st('aleatorio',`(function(){var seen={};for(var k=0;k<8;k++){seen[radioNext()]=1}return Object.keys(seen).sort().join(",")})()`);
 await st('batalha para',`(function(){startHunt({enemy:"Teste",arch:"bruto",lv:5},1);radioTick();return [EP.on,RADIO.ctx]})()`);
 await st('desligar',`(function(){endBattle&&0;B=null;show("hub");renderHub();document.querySelector('#rdTg').click();return [SET.radio,EP.on,document.querySelector('#hRadio').innerText.replace(/\\n/g," / ")]})()`);
 await ev(`SET.radio=true`);
 o.forEach(x=>console.log(x));
};
