const CACHE = 'bird-farm-manager-v3-2';
const CORE = ['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil((async()=> {
    const cache=await caches.open(CACHE);
    await cache.addAll(CORE);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async()=> {
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('bird-farm-manager-v')&&k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const cached=await cache.match(event.request);
    if(cached) return cached;
    try {
      const response=await fetch(event.request);
      if(response.ok && event.request.destination!=='document') cache.put(event.request,response.clone());
      return response;
    } catch(err) {
      if(event.request.mode==='navigate') {
        return (await cache.match('./index.html')) || new Response('التطبيق غير متاح دون اتصال بعد. افتحه مرة واحدة بالإنترنت.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
      return new Response('',{status:504});
    }
  })());
});