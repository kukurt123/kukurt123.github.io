'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "d6846874570bf97475ed5f935f86ded4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "502c01c839e04d97136b0301fb14dbef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8417671c0ba42bd9a53a458ce6d009ab",
".git/logs/refs/heads/main": "3ade9b029bd9e7e38be6a12034a7c490",
".git/logs/refs/remotes/origin/main": "c8afd4fb33b87a652c5ba2bbd11c39a7",
".git/logs/refs/remotes/origin/master": "ffbd56640c00bdd8ef26fe6741920b15",
".git/objects/16/0965bfdcadfeee713d452bbbeb5c6ff197915a": "e233151e939790c84e7003708a72994b",
".git/objects/16/87c258f8dde2cfaeaf0e20f83408665c4f2e26": "d7eba88d355e7f23a87f1a5524b1e11a",
".git/objects/16/fc1a9794a33771bfdc34b2fb70ad94e0086f1c": "50bd43d172158f295eb94129b3f55023",
".git/objects/1a/6a96bc0c0330a3afdc056d2283805734536738": "fdec5748cf7cf8f5b6e212fb2aa16ba5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/0594921c1ba39d8a7eb0b4570dd373770aeae9": "3b45bd1dbdeb7d59c76bf50177c91ae2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2f/33cf4d8398d4ef28956bab0d062ddada740b14": "8ff9d1a387c875572bc5a9101d318316",
".git/objects/36/74a00502a569031cfb2997681882cb8af9a44d": "ddd6c0a8da27417f326c721d3fdb6422",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/45/7f2d4fd81a02ee613a3a2bbf8464a1811345ea": "c4e15d9db47cdc15c4fea2e5783101cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4a/b09e367a78f09c93a55014552309367f04eda2": "95c865f5887ed66bc999a3b1d3590a8b",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4d/50765ecdffd8f22563fffbf53bc3b98b197c68": "f2114c6772095861dc05ad824a9693f0",
".git/objects/4d/af3c88d100e6c8334c0be4da93c1ed262d00f2": "6ca854616c71b78f36410b3fd84ca5a8",
".git/objects/4d/ef476eba96a70b78e6f5e41539bb58346883d8": "c63b2d824be78d33ecf464228673a485",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/50/92bd0dfb2c66b8594e2217485ce06cbf4e25b7": "468d3325433490cb9039001398a445ac",
".git/objects/52/1e334cd10790c1ad6a43870e271d0244c6d495": "31b4a63ccb7af1ef577936836c266f34",
".git/objects/54/80d93b5c4145d2bb6b5aa5876caaa65ee3ee07": "935762e519da21c7c713e330e3c74889",
".git/objects/57/199a55dc2a4f094d2b0595e70b36a6e3f5381a": "921a72857715aef662a087cdac72a81f",
".git/objects/63/47fffe79c8cb0faccfcbe46c9c1b19fbc5096f": "2e73179c76476fb172e1b3499ac452bc",
".git/objects/70/ab27ca62adc9a4379350b10ac8f23f3a9ad715": "7203ccee604d3e01308a06e4e91e21fb",
".git/objects/73/65b2388d53964d2d8cec35898395853ee4b64e": "1b75509afce5edadbd7af1d05c4e97af",
".git/objects/75/f0a91ff0b835d156ddc93df1a8fdc56f43ce09": "4692477865a217993e0421f6aeff3107",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9fe4f3b0d331b6da1f146b55d1d56a508639d1": "a9de2dc581aeb339f7d415bbc522f45e",
".git/objects/83/2c8962947b5a17a1a9dec2631c8a3343d3ce14": "a0c7a3926e40ea515275c64fe60e1fc8",
".git/objects/83/fd3c9b6887c6458e941d0cc46e000b558628e6": "20f3ee33620931c862d00343b8b58927",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/a97d10187a04bf5fc7e235f16f518558fb0ce0": "304466ca5a83c354d085ea081d5aa40b",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/97/415c5e317599a86f5690896ff0d4d0fe46accc": "eb5ee0e74156b72b299a580be2ee6456",
".git/objects/9f/6327c7fd74aeebbdda8026df052a100da628ba": "c340f874eb250af57344bface1af09ed",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/7130fae1ca3bf664a9eeb32c96611c068cd514": "579cb900f5b994163a0193fbc9a3dbd6",
".git/objects/a5/83a5353dd0afa126fc5f35b706b7a0983b63cc": "263a4d132864e49a3c706fae9e450798",
".git/objects/a5/c55d2bf688021bcab8d63b3c0f2d660a1e1f77": "b0d15dc89ebc67c37f32d75fa9e732f8",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/b1aae8855a09c15006db862bee04356b6c05c2": "10acae33f9aacee58ed47c1470609886",
".git/objects/bc/c94f05a7f1e615f69cbb7c53cc92461577061d": "9bda158c95c4087c50e48672302bf6bc",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c7/af224a6471ec82e9d7b7c442cfcab8f94b75e1": "61e8a45ddcd15fe5f11e92b6f57ede9d",
".git/objects/c9/615247bb98e30b1fe73d126cd457095b2bd559": "92544be0073be0055bfe0f1b3424bd6d",
".git/objects/d6/226c7faecc38d4ab99b357900a8cbec5c35cb1": "058a7981e3f493e7abb2f68b8b0347ae",
".git/objects/d7/de9e07572678d8e0a8fdff5638d2c9223ef70f": "c9511d631b22eeb033a88ae9d1d45f7e",
".git/objects/d8/5fe3ae7673cc34c0e51d93cac77de7324eb7d4": "a8291a43a6b2ec157c4c40139c57fb1d",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ef/ac558992e04275404a7cf8b056f4c4ba53acde": "216644e50c1a2231546244a494ade2ca",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/69768b66b3011c36a5e684e427cb0383bbbdde": "170234ce7c7945297a6955a5a1e7638b",
".git/refs/heads/main": "a0aa21eaf2803121fbb33867b1bcb5eb",
".git/refs/remotes/origin/main": "a0aa21eaf2803121fbb33867b1bcb5eb",
".git/refs/remotes/origin/master": "e0c21d79277c375be4d62b7b70110b24",
"assets/AssetManifest.json": "5b2399c23e7670d603a52bd516cbf6a7",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/image1.jpg": "9f499cf53bb008afe9f6bd89deba9c52",
"assets/assets/images/image2.jpg": "319249e756f3a470d45841baea9d1132",
"assets/assets/images/image3.jpg": "f014b7b75e442ae187976761117acc17",
"assets/assets/images/image4.jpg": "7ac1959d3b134bbcef006780161606f7",
"assets/assets/images/image5.jpg": "1bed4aefd73a600a585112a77c250a6c",
"assets/assets/images/profile.jpg": "3bca2aaf43b43d72378dc38623df7a99",
"assets/assets/images/typewriter_overhead_bw_w1080.jpg": "39e8f60e5bb2b90a5d801dd4617e7927",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "ab63c10d5085774cbd8ae6aa4cc97e1e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "737257f684f3ab4cd6774d5af3c50ffb",
"/": "737257f684f3ab4cd6774d5af3c50ffb",
"main.dart.js": "9b7a9423a9a1e2d8ce7fcef1b29f7443",
"manifest.json": "3abcd20a2983d79ae79494a2ce385a7a",
"version.json": "26135e4be13343012ada35bf6692fcf3"
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
