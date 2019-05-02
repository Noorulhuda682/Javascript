console.log('... Service Worker File Running ...');

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


var config = {
  apiKey: "AIzaSyCxB6Rl_v5WwCnuKnZ9nxcVnfbkBVyuZTU",
  authDomain: "olx-paki.firebaseapp.com",
  databaseURL: "https://olx-paki.firebaseio.com",
  projectId: "olx-paki",
  storageBucket: "olx-paki.appspot.com",
  messagingSenderId: "583608474593"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
const cacheName = 'OLX-Pakistan';
const staticAssets = [
    './',
    './style.css',
    './index.html',
    './app.js',
    './manifest.json',   
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(staticAssets);
        })
      );
})
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkFirst(req))
    }
})

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
}
