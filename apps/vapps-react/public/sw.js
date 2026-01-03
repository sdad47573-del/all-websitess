const CACHE_NAME = 'chopper-v1.2';
const RUNTIME_CACHE = 'chopper-runtime-v1.2';

// Assets to cache on install
const PRECACHE_ASSETS = [
	'/',
	'/index.html',
	'/manifest.json',
	'/favicon.png',
	'/icons/icon-192x192.png',
	'/icons/icon-512x512.png',
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
	console.log('[Service Worker] Installing...');
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log('[Service Worker] Precaching assets');
				return cache.addAll(PRECACHE_ASSETS);
			})
			.then(() => self.skipWaiting()),
	);
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	console.log('[Service Worker] Activating...');
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((cacheName) => {
							return cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE;
						})
						.map((cacheName) => {
							console.log('[Service Worker] Deleting old cache:', cacheName);
							return caches.delete(cacheName);
						}),
				);
			})
			.then(() => self.clients.claim()),
	);
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);

	// Skip cross-origin requests
	if (url.origin !== location.origin) {
		return;
	}

	// Skip API requests (Supabase)
	if (url.pathname.includes('/rest/v1/') || url.pathname.includes('/auth/v1/')) {
		return;
	}

	// Network first strategy for navigation requests
	if (request.mode === 'navigate') {
		event.respondWith(
			fetch(request)
				.then((response) => {
					// Clone the response before caching
					const responseClone = response.clone();
					caches.open(RUNTIME_CACHE).then((cache) => {
						cache.put(request, responseClone);
					});
					return response;
				})
				.catch(() => {
					// Fallback to cache
					return caches.match(request).then((cachedResponse) => {
						return cachedResponse || caches.match('/index.html');
					});
				}),
		);
		return;
	}

	// Cache first strategy for assets (CSS, JS, images)
	if (
		request.destination === 'style' ||
		request.destination === 'script' ||
		request.destination === 'image' ||
		request.destination === 'font'
	) {
		event.respondWith(
			caches.match(request).then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}

				return fetch(request).then((response) => {
					// Don't cache non-successful responses
					if (!response || response.status !== 200 || response.type === 'error') {
						return response;
					}

					const responseClone = response.clone();
					caches.open(RUNTIME_CACHE).then((cache) => {
						cache.put(request, responseClone);
					});

					return response;
				});
			}),
		);
		return;
	}

	// Default: network first, fallback to cache
	event.respondWith(
		fetch(request)
			.then((response) => {
				const responseClone = response.clone();
				caches.open(RUNTIME_CACHE).then((cache) => {
					cache.put(request, responseClone);
				});
				return response;
			})
			.catch(() => {
				return caches.match(request);
			}),
	);
});

// Handle messages from clients
self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}

	if (event.data && event.data.type === 'CLEAR_CACHE') {
		event.waitUntil(
			caches.keys().then((cacheNames) => {
				return Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
			}),
		);
	}
});

// Background sync for offline actions (future enhancement)
self.addEventListener('sync', (event) => {
	console.log('[Service Worker] Background sync:', event.tag);
	if (event.tag === 'sync-data') {
		event.waitUntil(
			// Implement your sync logic here
			Promise.resolve(),
		);
	}
});
