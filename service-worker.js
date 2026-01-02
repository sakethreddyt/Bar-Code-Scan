self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("barcode-cache").then(cache => {
            return cache.addAll([
                "index.html"
            ]);
        })
    );
});
