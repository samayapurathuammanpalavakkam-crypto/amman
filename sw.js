self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("sastha-cache").then((cache) => {
      return cache.addAll([
        "/sdsss/",
        "/sdsss/index.html",
        "/sdsss/icon-192.jpg",
        "/sdsss/icon-512.jpg",
        "/sdsss/icon-512.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
