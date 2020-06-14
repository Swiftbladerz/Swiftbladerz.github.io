self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/src/css/app.css',
          '/src/js/app.js'
          '/src/icons/images-icons-96x96.png',
          '/src/icons/images-icons-144x144.png',
          '/src/icons/images-icons-192x192.png',
          '/src/icons/images-icons-384x384.png',
          '/src/icons/images-icons-512x512.png'
        ])
      })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});
