// Carrega o jogo no Chrome headless com um gancho de teste (window.__T) e roda um script de teste.
// Uso: node tests/harness.js tests/flow.js      (MODE=rg|free, N=passos, SMART=1 para o monkey.js)
// Requer: playwright e Google Chrome. Ajuste PW e CHROME se necessário.
const PW=process.env.PW||'playwright';
const CHROME=process.env.CHROME||'/usr/bin/google-chrome';
let chromium;try{({chromium}=require(PW))}catch(e){({chromium}=require('/opt/npm-tools/node_modules/playwright'))}
const fs=require('fs'),path=require('path'),os=require('os');
(async()=>{
  const root=path.resolve(__dirname,'..'),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'rpm-'));
  const src=fs.readFileSync(path.join(root,'index.html'),'utf8').replace('"use strict";','"use strict";window.__T=function(s){return eval(s)};');
  fs.writeFileSync(path.join(tmp,'index.html'),src);
  for(const f of ['manifest.webmanifest','sw.js'])fs.copyFileSync(path.join(root,f),path.join(tmp,f));
  fs.cpSync(path.join(root,'icons'),path.join(tmp,'icons'),{recursive:true});
  const b=await chromium.launch({executablePath:CHROME,args:['--no-sandbox']});
  const p=await b.newPage({viewport:{width:390,height:844}});
  const errs=[];p.on('pageerror',e=>errs.push('PAGEERR '+e.message+' '+(e.stack||'').split('\n').slice(0,3).join(' | ')));
  p.on('console',m=>{if(m.type()==='error'&&!/ERR_FAILED|net::/.test(m.text()))errs.push('CONSOLE '+m.text())});
  await p.route(/fonts\.(googleapis|gstatic)/,r=>r.abort());
  await p.goto('file://'+path.join(tmp,'index.html'));await p.waitForTimeout(500);
  try{await require(path.resolve(process.argv[2]))(p)}catch(e){errs.push('TESTERR '+e.message)}
  console.log(errs.length?errs.join('\n'):'no page errors');
  await b.close();
})();
