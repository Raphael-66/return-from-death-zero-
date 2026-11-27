// Atualização 36: lançamento de pesca em 10 min e cansaço da madrugada proporcional ao tempo.
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);
 await ev(`SET.tips=false;META.maxArc=3`);await ev(`document.querySelector('#bFree').click()`);
 console.log(await ev(`(function(){document.querySelector('#overlay').hidden=true;S.h=9;advanceTime(FISHH);var a=fmtH(S.h);S.h=22;S.san=80;S.fq=0;for(var i=0;i<12;i++)advanceTime(FISHH);var b=[fmtH(S.h),S.san];S.h=10;S.san=80;advanceTime(2);var c=[fmtH(S.h),S.san];S.h=22;S.san=80;S.fq=0;advanceTime(2);var d=[fmtH(S.h),S.san];return JSON.stringify({umLance:a,dozeLancesNoite:b,acao2hDia:c,acao2hNoite:d})})()`));
 console.log(await ev(`(function(){L().loc="floresta";PF.lastLoc="floresta";S.h=9;renderHub();var b=document.querySelector('[data-ac="fish"]');openMenu("Pesca");return [b?b.innerText.replace(/\\n/g,' / '):'-',(document.querySelector('#fGo')||{textContent:'-'}).textContent]})()`));
};
