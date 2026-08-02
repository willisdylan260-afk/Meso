const CACHE = 'forge-v4';
const STATIC = ['./icon.svg', './manifest.json'];

self.addEventListener('install', e => {
  // Don't skipWaiting here — let the app show an update banner and reload cleanly
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// App posts SKIP_WAITING when user taps the update banner
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;

  // Network-first for HTML navigation — always load fresh app, fall back offline
  if (req.mode === 'navigate' || req.url.endsWith('.html') ||
      req.url.endsWith('/Meso/') || req.url.endsWith('/Meso')) {
    e.respondWith(
      fetch(req).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
        return resp;
      }).catch(() => caches.match(req).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for static assets (icons, fonts, etc.)
  e.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
        return resp;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
