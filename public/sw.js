const STATIC_CACHE_NAME = 'adnan-static-v2';
const PAGE_CACHE_NAME = 'adnan-pages-v2';
const STATIC_ASSETS = ['/', '/index.html', '/favicon.svg', '/robots.txt', '/sitemap.xml'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(STATIC_CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.filter((name) => name !== STATIC_CACHE_NAME && name !== PAGE_CACHE_NAME)
        .map((name) => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Always check for fresh HTML so an existing visitor sees portfolio updates.
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(PAGE_CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      } catch {
        return (await caches.match(request)) || (await caches.match('/index.html')) || Response.error();
      }
    })());
    return;
  }

  // Vite's hashed assets are immutable; cache those for repeat visits.
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(STATIC_CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    })());
  }
});
