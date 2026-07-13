// Minimal service worker -- just enough to satisfy PWA installability checks
// (Chrome on Android looks for one of these before offering a real "Install app"
// option instead of a plain bookmark shortcut). It doesn't cache anything special;
// it just passes requests straight through to the network.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => new Response('Offline', { status: 503 }))
  );
});
