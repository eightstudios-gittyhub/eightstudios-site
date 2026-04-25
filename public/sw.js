const CACHE_NAME = 'eight-studios-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/beanies.html',
  '/Hoodies.html',
  '/Shorts.html',
  '/Pants.html',
  '/hats.html',
  '/a9x7k2-admin-portal-847.html',
  '/manifest.webmanifest',
  '/pwa-register.js',
  '/tracker.js',
  '/the-world-is-yours-ship.gif',
  '/icons/icon.svg',
  '/offline.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
          return new Response('', { status: 504, statusText: 'Gateway Timeout' });
        });
    })
  );
});
