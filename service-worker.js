self.addEventListener('install', (e) => {
	console.log('[ServiceWorker] Installed');

	e.waitUntil(
		caches.open('my-cache').then((cache) => {
			return cache.addAll([
				'/',
				'/index.html',
				'/app.js',
			]);
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

// console.log('Service Worker loaded');

// self.addEventListener('install', (e) => {
//     console.log('SW: Install event');
// });

// self.addEventListener('fetch', (e) => {
//     console.log('SW: Fetch event');
// });
