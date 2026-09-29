/* Range Runner offline cache. The page is fetched fresh when online; everything else comes from the cache. */
const CACHE = "rr-2026-09-29c";
const CORE = ["./", "index.html", "manifest.webmanifest", "vendor/Tone.min.js", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/favicon-32.png", "fonts/courier-prime-400.woff2", "fonts/courier-prime-700.woff2", "fonts/dela-gothic-one-400.woff2", "fonts/permanent-marker-400.woff2", "piano/A0.mp3", "piano/A1.mp3", "piano/A2.mp3", "piano/A3.mp3", "piano/A4.mp3", "piano/A5.mp3", "piano/A6.mp3", "piano/A7.mp3", "piano/C1.mp3", "piano/C2.mp3", "piano/C3.mp3", "piano/C4.mp3", "piano/C5.mp3", "piano/C6.mp3", "piano/C7.mp3", "piano/C8.mp3", "piano/Ds1.mp3", "piano/Ds2.mp3", "piano/Ds3.mp3", "piano/Ds4.mp3", "piano/Ds5.mp3", "piano/Ds6.mp3", "piano/Ds7.mp3", "piano/Fs1.mp3", "piano/Fs2.mp3", "piano/Fs3.mp3", "piano/Fs4.mp3", "piano/Fs5.mp3", "piano/Fs6.mp3", "piano/Fs7.mp3"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  if (req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/")) {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
