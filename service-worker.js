const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
	'./',
	'./index.html',
	'./manifest.json',
	'./app.js',
	'./js/index.js',
	'./js/db.js',
	'./favicon.ico',
	'./icon-192.png',
	'./icon-512.png'
];

self.addEventListener('install', (e) => {
	console.log('[ServiceWorker] Installed');

	e.waitUntil(
		caches.open('my-cache').then((cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request);
		})
	);	
});