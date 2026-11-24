/* Service worker, versão fe6a5992d3. Muda a cada atualização do jogo, o que faz o navegador baixar a nova versão. */
var V="rpm-fe6a5992d3",FILES=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf("rpm-")===0&&k!==V}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
/* Rede primeiro (3 s), cópia salva se estiver offline ou lento. Assim o jogo sempre pega a versão nova quando há internet. */
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;
  var u=new URL(r.url);if(u.origin!==location.origin)return;
  e.respondWith(new Promise(function(res){
    var done=false,t=setTimeout(function(){if(done)return;caches.match(r,{ignoreSearch:true}).then(function(m){if(m&&!done){done=true;res(m)}})},3000);
    fetch(r,{cache:"no-cache"}).then(function(n){clearTimeout(t);if(n&&n.ok){var c=n.clone();caches.open(V).then(function(ch){ch.put(r,c)})}if(!done){done=true;res(n)}}).catch(function(){clearTimeout(t);caches.match(r,{ignoreSearch:true}).then(function(m){if(!done){done=true;res(m||caches.match("./index.html"))}})});
  }));
});
