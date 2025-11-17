const CACHE_NAME = 'notes-cache-v1';
const urlsToCache = ['/', '/index.html', '/app.js', '/manifest.json', 'https://unpkg.com/framework7/framework7-bundle.min.css', 'https://unpkg.com/framework7/framework7-bundle.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
