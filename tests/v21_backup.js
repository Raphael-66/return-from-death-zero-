module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);
await ev(`(function(){document.querySelector('#bFree').click();S.coin=777;save();window.__code=exportCode();S.coin=1;save();return 1})()`);
const code=await p.evaluate(()=>window.__code);
await Promise.all([p.waitForNavigation(),p.evaluate(c=>__T('importAny('+JSON.stringify(c)+')'),code)]);
await p.waitForTimeout(500);
console.log(await p.evaluate(()=>__T('(function(){var f=gget("rpm_free",null);return "coin depois de restaurar: "+(f&&f.coin)})()')));
};
