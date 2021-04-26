'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26135e4be13343012ada35bf6692fcf3",
"index.html": "a8a71a2da2ab9c7fb42f2c8f542dfba7",
"/": "a8a71a2da2ab9c7fb42f2c8f542dfba7",
"main.dart.js": "61761829248c1bcbb87b961d75a836f3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b6deb1f2deec82d4d0364c215bdff39",
"assets/AssetManifest.json": "2c8789ac78b57f703b5050a7b313a0a4",
"assets/NOTICES": "6bc4ce76e3879756915c0e19516ce21d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/restaurant/restaurant2.JPG": "808b73ce7438f42310efb53e5f0430f1",
"assets/assets/images/restaurant/restaurant.JPG": "715715b94b87f443c49d50dec76bba67",
"assets/assets/images/ecommerce/ecommerce1.JPG": "27326cd0131b750726a3a198928397cc",
"assets/assets/images/ecommerce/ecommerce2.JPG": "eb10cddd5341cda9331d8e0fc4a5385a",
"assets/assets/images/chat/chat.JPG": "8f4f19cdc47ecc843bff1e1d134e16db",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/health/health1.JPG": "62bda6ee25c2aa49a00b85d7b093a2c1",
"assets/assets/images/health/health2.JPG": "586a422f1e88acc4b9fcc1b17d71d399",
"assets/assets/images/church/church2.JPG": "3a8d42592348e3eec35103fc7076203b",
"assets/assets/images/church/church1.JPG": "dae431c09b82935aeaa945b1f9b4641f",
"assets/assets/images/map/map1.JPG": "5fdb44ccca007ac4f9cc4b22c8c6b7f2",
"assets/assets/images/map/map2.JPG": "8b1d948973d65807b2487bf1a10bfe07",
"assets/assets/images/pos/pos1.JPG": "d2fcb6473d203ba2b646dd10506347a6",
"assets/assets/images/pos/pos2.JPG": "c2b7a1fd2fc3eb611cdcb641243cbce7",
"assets/assets/images/inventory/INVENTORY1.png": "fb7a76cc89f0c3a8356e72da9065cc11",
"assets/assets/images/inventory/inventory2.png": "f1ee4f8b8f30b47225544d565790094e",
"assets/assets/images/profile.jpg": "3bca2aaf43b43d72378dc38623df7a99",
"assets/assets/images/visit_koronadal/visit_koronadal2.jpg": "746d9bbcf147d2f07b58db24198b15dc",
"assets/assets/images/visit_koronadal/visit_koronadal1.jpg": "43e02166191f5ae71a5a6cbf88d24909",
"assets/assets/images/image4.jpg": "7ac1959d3b134bbcef006780161606f7",
"assets/assets/images/leadership/leadership4.png": "0ab39d09933c99f2fc9dec0dbdefdfe4",
"assets/assets/images/leadership/leadership2.png": "81a5be52968bc5edfc8dfc4c7cfad7db",
"assets/assets/images/leadership/leadership3.png": "f4ff845645abde815b9aa78d53870357",
"assets/assets/images/leadership/leadership1.png": "67188c689d372a27eb4efefc12e7cae7",
"assets/assets/images/image5.jpg": "1bed4aefd73a600a585112a77c250a6c",
"assets/assets/images/clinic/clinic2.JPG": "47465750d6c7c2c5ab6ef4e918b30818",
"assets/assets/images/clinic/clinic1.JPG": "9a5363fe20f9c81d589b54bcef35c94f",
"assets/assets/images/image1.jpg": "9f499cf53bb008afe9f6bd89deba9c52",
"assets/assets/images/instagram/instagram2.JPG": "532ebd75eeb66d236bfc7e4de032849f",
"assets/assets/images/instagram/instagram1.JPG": "bb1c38c1fcd12641825bf2f4511fca67",
"assets/assets/images/image2.jpg": "319249e756f3a470d45841baea9d1132",
"assets/assets/images/typewriter_overhead_bw_w1080.jpg": "39e8f60e5bb2b90a5d801dd4617e7927",
"assets/assets/images/image3.jpg": "f014b7b75e442ae187976761117acc17"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
