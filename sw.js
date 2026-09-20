const CACHE = "frecuencia-v25";
const ASSETS = [
  "./", "index.html",
  "words.js", "words2.js", "words3.js", "words4.js", "words5.js", "words6.js", "words7.js", "words8.js",
  "structures.js", "drills.js", "verbs.js", "slang.js", "manifest.webmanifest", "icon.svg"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;                 // POST /api/claude -> network
  if (url.pathname.startsWith("/api/")) return;           // never cache the API
  if (url.origin !== location.origin) return;             // fonts etc. go straight to network
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit || fetch(e.request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match("index.html"))
    )
  );
});
