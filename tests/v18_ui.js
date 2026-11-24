module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);
await ev(`(function(){document.querySelector('#bFree').click();META.maxArc=8;S.coin=3000;L().loc="vila";relOf("emilia").rp=30;REL_Q.length=0;L().pend=false;renderHub();document.querySelector("#overlay").hidden=true})()`);
const H=await p.evaluate(()=>document.querySelector('#hub').scrollHeight);
let i=0;for(let y=0;y<H;y+=800){await p.evaluate(y=>{document.querySelector('#hub').scrollTop=y},y);await p.screenshot({path:'/tmp/h18_'+(i++)+'.png'})}
console.log('pages',i,H);
console.log(await ev(`[].map.call(document.querySelectorAll('#hub details > summary'),function(s){return s.textContent}).join(' | ')`));
await ev(`(function(){document.querySelectorAll('#hub details').forEach(function(d){d.open=true})})()`);
const H2=await p.evaluate(()=>document.querySelector('#hub').scrollHeight);console.log('all open height',H2);
await ev(`(function(){document.querySelector('#hub details[open] .acts button').click();return 1})()`);
await ev(`openMenu("Perfil")`);await p.screenshot({path:'/tmp/m18.png'});
};
