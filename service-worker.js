self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('impact-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/?source=pwa',
        'https://raw.githubusercontent.com/Soumilllllllll/community-pwa/main/icon-192x192.png',
        'https://raw.githubusercontent.com/Soumilllllllll/community-pwa/main/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
