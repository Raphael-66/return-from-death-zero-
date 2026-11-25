// Atualização 25: gavetas em sanfona (no máximo uma aberta por grupo).
module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);
 await ev(`SET.tips=false;META.maxArc=3`);await ev(`document.querySelector('#bFree').click()`);
 const cnt=`(function(){var out=[];var seen=[];[].forEach.call(document.querySelectorAll('#hub .drawer'),function(d){var p=d.parentNode;if(seen.indexOf(p)>=0)return;seen.push(p);out.push([].filter.call(p.children,function(x){return x.classList.contains('drawer')&&x.open}).length)});return out.join(',')})()`;
 console.log('inicio',await ev(cnt));
 console.log('abrir outra',await ev(`(function(){var ds=[].filter.call(document.querySelector('.placedrw').children,function(x){return x.classList.contains('drawer')});ds[2].open=true;return 'ok'})()`));
 await p.waitForTimeout(200);console.log('depois',await ev(cnt));
 console.log('apos render',await ev(`(function(){renderHub();return 1})()`),await ev(cnt));
};
