/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dc52e4144261f367065bb759e063ae9c"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "fb2b8c3669cd349592e9270b6dfcbf49"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "ca4d5e5162b3dc0bf862958c121e374f"
  },
  {
    "url": "android-icon-144x144.png",
    "revision": "016861924e6b224c4db24119a78b322d"
  },
  {
    "url": "android-icon-192x192.png",
    "revision": "c436c85b569e3be563f69fa5855726bd"
  },
  {
    "url": "android-icon-36x36.png",
    "revision": "f8762fe29f63cb4e376157e183439c7e"
  },
  {
    "url": "android-icon-48x48.png",
    "revision": "76b417aa8f5aee9a0cb367af5a6132e1"
  },
  {
    "url": "android-icon-72x72.png",
    "revision": "e24d906e7b33478b841b694594cd5643"
  },
  {
    "url": "android-icon-96x96.png",
    "revision": "00564dc661a5a77cb66412c79aea48dd"
  },
  {
    "url": "apple-icon-114x114.png",
    "revision": "b8c6b05660bb326e8c90171570e40a59"
  },
  {
    "url": "apple-icon-120x120.png",
    "revision": "345db3aaadd2cd41d9270604f70d38d1"
  },
  {
    "url": "apple-icon-144x144.png",
    "revision": "016861924e6b224c4db24119a78b322d"
  },
  {
    "url": "apple-icon-152x152.png",
    "revision": "3ecf22832c37013ed404c3792f6816ad"
  },
  {
    "url": "apple-icon-180x180.png",
    "revision": "7db46f492bf8271a5581bb5589153197"
  },
  {
    "url": "apple-icon-57x57.png",
    "revision": "c61ad05765cfb45093701b761621e7bc"
  },
  {
    "url": "apple-icon-60x60.png",
    "revision": "8174debec2482e42f1226c4fbd3de8fa"
  },
  {
    "url": "apple-icon-72x72.png",
    "revision": "e24d906e7b33478b841b694594cd5643"
  },
  {
    "url": "apple-icon-76x76.png",
    "revision": "95ea80b8a04dba715765898fa59d6081"
  },
  {
    "url": "apple-icon-precomposed.png",
    "revision": "e5831d6bdd0c4e072ac10d6303aaaf29"
  },
  {
    "url": "apple-icon.png",
    "revision": "e5831d6bdd0c4e072ac10d6303aaaf29"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "1f75c3f51fd3b115fdaf4bfeb8a1ddfb"
  },
  {
    "url": "assets/css/0.styles.a2954e03.css",
    "revision": "c9ff3e952c9b4f407c106e2819fd1a95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b1608566.js",
    "revision": "c960cd0035676c247c571c22faa24b6f"
  },
  {
    "url": "assets/js/11.76261c36.js",
    "revision": "d17e85654bffbcaf612a54b0f52d500e"
  },
  {
    "url": "assets/js/12.45da7aa7.js",
    "revision": "1f4a75f7fdd6de1576d4c06b2e74fb29"
  },
  {
    "url": "assets/js/13.9beed5d0.js",
    "revision": "27da03ecb95cf59d22a4ede28564dab2"
  },
  {
    "url": "assets/js/14.c0a10faa.js",
    "revision": "627878c151184be90d67aa06f004a322"
  },
  {
    "url": "assets/js/15.e799787a.js",
    "revision": "797b2dfb7b114b2d57fb2a5813cd946d"
  },
  {
    "url": "assets/js/16.f5b69791.js",
    "revision": "ad0967841962b4e7cb5fd63e517b634b"
  },
  {
    "url": "assets/js/17.da03dd12.js",
    "revision": "20be7f8996a7aaddbc5f96a9f8e87406"
  },
  {
    "url": "assets/js/18.a5020178.js",
    "revision": "e661a821151e1dcd116498cc3c655fb7"
  },
  {
    "url": "assets/js/19.db12fd84.js",
    "revision": "38dd8fcb351410bd532786234d74c092"
  },
  {
    "url": "assets/js/2.ef8975e0.js",
    "revision": "a63ea68fa8461306716dcaa26c58d9b1"
  },
  {
    "url": "assets/js/20.b6e204ce.js",
    "revision": "1dd068c35dd690b8b9227d94a53ab752"
  },
  {
    "url": "assets/js/21.d1ae6f4c.js",
    "revision": "bfba1b86411799943a4c38bebeb22036"
  },
  {
    "url": "assets/js/22.03610437.js",
    "revision": "c9d9423951892e9bcf1d9231020c40cd"
  },
  {
    "url": "assets/js/23.26a4ec0c.js",
    "revision": "1dfa18a72f547cd6b7d922f28c6f5893"
  },
  {
    "url": "assets/js/3.79fcd33f.js",
    "revision": "d98495df8a43288dfff46127d0e2b185"
  },
  {
    "url": "assets/js/4.40d44f37.js",
    "revision": "69e11894571a9a750322249f70331476"
  },
  {
    "url": "assets/js/5.b1a67c0d.js",
    "revision": "30cab21853b051c17655ce050fa9ced4"
  },
  {
    "url": "assets/js/6.bb6f6a83.js",
    "revision": "d52cf232f8519e58151b7a0a2e0b6c06"
  },
  {
    "url": "assets/js/7.cda543ff.js",
    "revision": "e7f17785fdfa9e35263820ea09ff8174"
  },
  {
    "url": "assets/js/8.20baf883.js",
    "revision": "d7d17bef98027d149377cfa657527ec5"
  },
  {
    "url": "assets/js/9.2331bc8a.js",
    "revision": "48493b89e065c54d7b3df5f6dfdd0f59"
  },
  {
    "url": "assets/js/app.af8d1e13.js",
    "revision": "e2a4fd451114aeeb6522cb47a2e224ce"
  },
  {
    "url": "contribute-content/index.html",
    "revision": "d3c3b0eb5ca9ddd0e9d99e5603f8c4e2"
  },
  {
    "url": "contribute-translations/index.html",
    "revision": "4d19d5194f143d4a547670d67a08366f"
  },
  {
    "url": "faq/index.html",
    "revision": "e18b12e0be2b19188f101f994c0085b0"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "6f5e2506adc28f800e40f741be32dc5d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "d1aecb332421997702d7f7bad0343d25"
  },
  {
    "url": "favicon-96x96.png",
    "revision": "00564dc661a5a77cb66412c79aea48dd"
  },
  {
    "url": "index.html",
    "revision": "7937e9a38f2f1c24d01eb392e87fbae6"
  },
  {
    "url": "links/buy-gear.html",
    "revision": "06d85005a9a155d78bd0d6e3aa96cb50"
  },
  {
    "url": "links/communities.html",
    "revision": "18be687a7cdd3f2cbc7c86fff610a0d0"
  },
  {
    "url": "links/index.html",
    "revision": "d8e8bddccc893daeb8a81e9035115ecd"
  },
  {
    "url": "links/learn-free.html",
    "revision": "6f4b1f908c2c783c54ef2ae97f30d98d"
  },
  {
    "url": "links/learn-paid.html",
    "revision": "32a7038a69bb76667a0fddeb8889137e"
  },
  {
    "url": "links/misc.html",
    "revision": "81e1da148fa8d062a6aa7beb9d5e72ff"
  },
  {
    "url": "ms-icon-144x144.png",
    "revision": "016861924e6b224c4db24119a78b322d"
  },
  {
    "url": "ms-icon-150x150.png",
    "revision": "90276553c8968b6907b1eb8371a90a61"
  },
  {
    "url": "ms-icon-310x310.png",
    "revision": "df06917da56861f5b4f67b27b9ac3abc"
  },
  {
    "url": "ms-icon-70x70.png",
    "revision": "25dcb7d35e67db4ee1062c6506385fee"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "81160eb64df6b04d3a786374c2f7c289"
  },
  {
    "url": "sitemap/index.html",
    "revision": "61829d31205a2f7e3ddb1cc68e57d75b"
  },
  {
    "url": "terms/index.html",
    "revision": "8ed877d18c466d7655e6f6e7a0f324cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
