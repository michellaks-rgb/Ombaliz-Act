const cacheName="ombaliz-act-static-v4";
const assets=["./","index.html","app.js","body-map.js","pdf.js","style.css","logo.svg","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",event=>event.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assets))));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("ombaliz-act-static-")&&key!==cacheName).map(key=>caches.delete(key))))));
self.addEventListener("fetch",event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=="GET"||url.origin!==location.origin||url.search||!assets.some(asset=>new URL(asset,self.registration.scope).pathname===url.pathname))return;
 event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
