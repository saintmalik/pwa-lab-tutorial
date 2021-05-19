self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('pwa-test').then((cache) => cache.addAll([
        '/',
        'app.js',
        'app.css',
        'saintmalik.jpeg',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
  
