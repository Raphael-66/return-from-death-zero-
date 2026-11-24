module.exports=async p=>{const ev=s=>p.evaluate(s2=>__T(s2),s);const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,400))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await st('counts',`(function(){var c={};FISH.forEach(function(f){if(f.junk)return;f.s.forEach(function(s){c[s]=(c[s]||0)+1})});return FISH.filter(function(f){return !f.junk}).length+' peixes; '+JSON.stringify(c)})()`);
 await st('free floresta',`(function(){document.querySelector('#bFree').click();META.maxArc=8;REL_Q.length=0;L().pend=false;L().loc="floresta";S.h=9;renderHub();document.querySelector('#overlay').hidden=true;placeAction("fish");return document.querySelector('#pane').innerText.slice(0,200)})()`);
 await st('power+cast',`(function(){document.querySelector('#fGo').click();return FS.st})()`);
 await p.waitForTimeout(400);
 await st('throw',`(function(){var e=new PointerEvent('pointerdown');document.querySelector('#fThrow').dispatchEvent(e);return FS.st+' power '+FS.power.toFixed(2)+' fish '+FS.fish.n+' h='+fmtH(S.h)})()`);
 await st('bite+hook',`(function(){clearTimeout(FS.t);FS.fish=FISHBY.tilapia;fBite();var e=new PointerEvent('pointerdown');document.querySelector('#fHook').dispatchEvent(e);return FS.st})()`);
 await p.waitForTimeout(700);
 await p.screenshot({path:'/tmp/f20a.png'});
 // auto-play: keep bar tracking fish
 await p.evaluate(()=>{window.__bot=setInterval(()=>{try{__T('(function(){var G=FS.G;if(!G||FS.st!=="reel")return;G.hold=G.fy>G.bar+G.barH*0.5+G.bv*0.12})()')}catch(e){}},30)});
 await p.waitForTimeout(9000);
 await p.evaluate(()=>clearInterval(window.__bot));
 await st('result',`(function(){return FS.st+' | '+(document.querySelector('#fstage')||{innerText:''}).innerText.slice(0,200)})()`);
 await p.screenshot({path:'/tmp/f20b.png'});
 await st('diary',`(function(){return document.querySelector('#finv details summary').innerText+' / '+[].map.call(document.querySelectorAll('.fdex > summary'),function(s){return s.textContent}).join(', ')})()`);
 await st('rg pane',`(function(){document.querySelector('#overlay').hidden=true;toTitle();document.querySelector('#bRG').click();openMenu("Pesca");return document.querySelector('#fSpots').innerText.replace(/\\n/g,' | ')})()`);
 console.log(o.join('\n'));};
