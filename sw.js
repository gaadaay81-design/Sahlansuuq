// SahlanSuuq Service Worker v1.0
// Caches static assets for offline + faster loads

const CACHE = 'sahlansuuq-v1';
const STATIC = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip Firebase, analytics, non-GET
  if (e.request.method !== 'GET') return;
  if (url.hostname.includes('firebase') || url.hostname.includes('google') && url.pathname.includes('/v1/')) return;

  // HTML: network first (always fresh)
  if (e.request.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(e.request).then(r => {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return r;
      }).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Fonts/CSS: cache first
  if (url.hostname.includes('fonts') || e.request.destination === 'style') {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(nr => {
        caches.open(CACHE).then(c => c.put(e.request, nr.clone()));
        return nr;
      }))
    );
    return;
  }
});
