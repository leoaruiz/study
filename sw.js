// Offline cache for the Study app. Bump VERSION whenever you change app files.
const VERSION = 'study-v1';
const CORE = [
  './', 'index.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'vendor/pdf.min.mjs', 'vendor/pdf.worker.min.mjs',
  'materials/index.json'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    await c.addAll(CORE);
    try {
      const list = await (await fetch('materials/index.json')).json();
      await c.addAll(list.map(f => 'materials/' + encodeURIComponent(f)));
    } catch (err) {}
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    self.clients.claim();
  })());
});

// Serve from cache first so the app works with no connection; refresh the cache in the background when online.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(VERSION);
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    return r || (e.request.mode === 'navigate' ? c.match('index.html') : new Response('Offline', { status: 503 }));
  })());
});
