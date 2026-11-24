module.exports=async p=>{
 const ev=s=>p.evaluate(s2=>__T(s2),s);const o=[];
 const st=async(n,c)=>{try{o.push(n+': '+JSON.stringify(await ev(c)).slice(0,350))}catch(e){o.push('FAIL '+n+': '+e.message.slice(0,300))}};
 await st('start',`(function(){document.querySelector('#bFree').click();META.maxArc=8;S.coin=9000;L().job=2;renderHub();return 1})()`);
 // relacionamento e família
 await st('setup love',`(function(){var c=relOf("rem");c.rp=120;PF.rel.partner="rem";var r=rsOf("rem");r.s="casado";r.live=true;RS().vila=2;L().home=2;L().loc="vila";S.t=0;renderHub();return statusText("rem")})()`);
 await st('person menu',`(function(){personMenu("rem");return document.querySelector('#overlay').innerText.slice(0,700)})()`);
 await p.screenshot({path:'/tmp/v10_person.png',fullPage:false});
 await st('elogio',`(function(){document.querySelector('[data-m="y:elogio"]').click();var t=document.querySelector('#overlay').innerText.slice(0,200);document.querySelector('#yOk').click();return t})()`);
 await st('filho',`(function(){document.querySelector('[data-m="y:filho"]').click();document.querySelector('[data-f="1"]').click();var t=document.querySelector('#overlay').innerText.slice(0,150);document.querySelector('#fOk').click();return t+' preg='+JSON.stringify(rsOf("rem").preg)})()`);
 await st("birth",`(function(){S.day=rsOf("rem").preg.due;S.t=0;L().pend=false;REL_Q.length=0;document.querySelector("#overlay").hidden=true;renderHub();var oo=document.querySelector("#overlay");for(var z=0;z<6&&!document.querySelector("#kName");z++){oo.hidden=true;renderHub()}var t=document.querySelector('#overlay').innerText.slice(0,160);document.querySelector('#kName').value="Haru";document.querySelector('#kGo').click();return t+' kids='+JSON.stringify(KIDS())})()`);
 await st('kid act',`(function(){openMenu("Família");var b=document.querySelector('#pane [data-k="0:brincar"]');b.click();var t=document.querySelector('#overlay').innerText.slice(0,160);document.querySelector('#kOk').click();return t})()`);
 await st('kid grows card',`(function(){KIDS()[0].born=S.day-80;KIDS()[0].b=50;KIDS()[0].sk=3;return JSON.stringify(relDuo())+' '+JSON.stringify(CARDS.kid_0)})()`);
 // batalha com sinergias
 await st('battle syn',`(function(){document.querySelector('#overlay').hidden=true;L().loc="floresta";S.t=0;S.aff={emilia:9,rem:9,ram:9,beatrice:9};relOf("ram").rp=80;relOf("emilia").rp=80;relOf("beatrice").rp=80;startHubFight();return document.querySelector('#battle .syn')&&document.querySelector('#battle .syn').innerText})()`);
 await p.screenshot({path:'/tmp/v10_battle.png'});
 await st('play subaru then rem',`(function(){B.en=9;B.hand=["soco","mangual","mangual","vento","biblio"];renderBattle();playCard(0);playCard(0);var l1=B.log;playCard(1);return l1+' || '+B.log})()`);
 await p.waitForTimeout(150);await p.screenshot({path:'/tmp/v10_anim.png'});
 await st('lethal save',`(function(){B.php=1;B.pblk=0;B.cfg.intents=B.cfg.intents.map(function(){return 99});endTurn();return 'php='+B.php+' done='+B.done+' turn='+B.turn+' hand='+B.hand.length+' | '+B.log.slice(-90)})()`);
 await st('win',`(function(){B.ehp=1;B.eblk=0;B.en=5;var k=B.hand.findIndex(function(id){return CARDS[id].dmg});if(k<0){B.hand.push("soco");k=B.hand.length-1}playCard(k);var t=document.querySelector('#overlay').innerText.slice(0,250);document.querySelector('#bNext').click();return t})()`);
 await st('bestiary',`(function(){openMenu("Bestiário");return document.querySelector('#pane').innerText.slice(0,300)})()`);
 // missões
 await st('quests vila',`(function(){document.querySelector('#overlay').hidden=true;L().loc="vila";S.t=0;renderHub();placeAction("sq");var t=document.querySelector('#overlay').innerText.slice(0,300);document.querySelector('[data-q="acc:sino"]').click();document.querySelector('[data-q="acc:curral"]').click();return t})()`);
 await st('explore floresta x2',`(function(){document.querySelector('#overlay').hidden=true;L().loc="floresta";for(var i=0;i<2;i++){S.t=0;explore();var o=document.querySelector('#overlay');var g=o.querySelector('#bGo');if(g){o.hidden=true;B=null}else{var b=o.querySelector('#bOk');if(b)b.click()}}return JSON.stringify(SQS().act)})()`);
 await st('pay+choice',`(function(){document.querySelector('#overlay').hidden=true;L().loc="vila";S.t=0;renderHub();if(sqStep("sino").k!=="pay")return 'step '+sqStep("sino").k;sqDo("sino");sqDo("sino");document.querySelector('[data-c="0"]').click();var t=document.querySelector('#overlay').innerText.slice(0,300);document.querySelector('#sqOk').click();return t})()`);
 await st('curral fights',`(function(){L().loc="floresta";for(var i=0;i<3;i++){S.t=0;startHubFight();B.ehp=0;B.eblk=0;endBattle(true);document.querySelector('#bNext').click();document.querySelector('#overlay').hidden=true}return JSON.stringify(SQS().act)})()`);
 await st('curral boss',`(function(){S.t=0;renderHub();sqDo("curral");var r=B.cfg.enemy+' '+B.cfg.tier;B.ehp=0;endBattle(true);document.querySelector('#bNext').click();var t=document.querySelector('#overlay').innerText.slice(0,200);return r+' | '+t+' | done='+JSON.stringify(SQS().done)})()`);
 await st('panes',`(function(){var out=[];["Missões","Família","Bestiário","Romance","Vida"].forEach(function(n){openMenu(n);out.push(n+':'+document.querySelector('#overlay').innerText.length)});document.querySelector('#overlay').hidden=true;return out.join(' ')})()`);
 console.log(o.join('\n'));
};
