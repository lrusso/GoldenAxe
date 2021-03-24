const filesToCache = [
	"GoldenAxe.htm",
	"GoldenAxe.json",
	"GoldenAxe.png",
	"GoldenAxeFavIcon_16x16.png",
	"GoldenAxeFavIcon_192x192.png",
	"GoldenAxeFavIcon_512x512.png",
	"GoldenAxeGame.htm",
	"GoldenAxeGame.js",
	"GoldenAxeShare.png"
];

const staticCacheName = "goldenaxe-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});