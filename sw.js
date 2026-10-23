const C="training-log-v5";
const FILES=["./","./index.html","./app.js","./pics.js","./style.css","./manifest.json","./icon-192.png","./icon-512.png","./icon-180.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    if(res.ok&&e.request.url.startsWith(self.location.origin)){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}
    return res;}).catch(()=>caches.match("./index.html"))));
});
