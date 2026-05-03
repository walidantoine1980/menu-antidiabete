const CACHE_NAME = 'antidiabete-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './data.js',
  './manifest.json'
];

// Install event: cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event: serve from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});
