const cacheName = 'pwa-conf-v1';
const staticAssets = [
    './',
    './index.html',
    './app.js',
    './contact.html',
    './assets/bootstrap/css/bootstrap.min.css',
    './assets/css/Team-Boxed.css',
    './assets/img/garv.jpg',
    './assets/img/liam.png',
    './assets/img/natsuki.png',
    './assets/img/nova-app-192x192.png',
    './assets/img/nova-splash-512x512.png',
    './assets/img/NOVA_System_logo.png',
    './assets/img/NOVA_System_logo_transparent.png',
    './assets/img/favicon_32.png',
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;

    if (/.*(json)$/.test(req.url)) {
        event.respondWith(networkFirst(req));
    } else {
        event.respondWith(cacheFirst(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || networkFirst(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cachedResponse = await cache.match(req);
        return cachedResponse;
    }
}