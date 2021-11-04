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
    "revision": "5b196885306d6f36df4efe7a957d870d"
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
    "url": "assets/css/0.styles.583e6b2c.css",
    "revision": "e852afc50370b7092f7a501cea654d37"
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
    "url": "assets/js/11.11b7e811.js",
    "revision": "58f065d4b5afa876112ab63e2e13ac6b"
  },
  {
    "url": "assets/js/12.45da7aa7.js",
    "revision": "1f4a75f7fdd6de1576d4c06b2e74fb29"
  },
  {
    "url": "assets/js/13.9f5d6dd3.js",
    "revision": "025b575906fd71cb3851f663d0d4d698"
  },
  {
    "url": "assets/js/14.c0a10faa.js",
    "revision": "627878c151184be90d67aa06f004a322"
  },
  {
    "url": "assets/js/15.4996549a.js",
    "revision": "7bc37350074305b85c2e49ca6348ae26"
  },
  {
    "url": "assets/js/16.bd4d6318.js",
    "revision": "ab2f26be921bb71f97a005b5350686e5"
  },
  {
    "url": "assets/js/17.43e3af11.js",
    "revision": "e287db282d5486d156ea8b409a61dffb"
  },
  {
    "url": "assets/js/18.ae5a0f4f.js",
    "revision": "d5c0955e8abda8a2711793142846fbd2"
  },
  {
    "url": "assets/js/19.0c0fb276.js",
    "revision": "2daff374de1e065f523a5c2ad8532b51"
  },
  {
    "url": "assets/js/2.ef8975e0.js",
    "revision": "a63ea68fa8461306716dcaa26c58d9b1"
  },
  {
    "url": "assets/js/20.c07c5483.js",
    "revision": "373e040eff26d0c06d595237dfae4851"
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
    "url": "assets/js/5.8661f064.js",
    "revision": "7c25db042aa8f63cec393f88ed9ef67c"
  },
  {
    "url": "assets/js/6.b3b932a1.js",
    "revision": "cc8992e6a32baaef3d7c3e521e061f34"
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
    "url": "assets/js/app.c873329a.js",
    "revision": "4441c0ca881739ebfb62360c8f325a19"
  },
  {
    "url": "contribute-content/index.html",
    "revision": "243c1650f0e0b854af2575b438aee0f5"
  },
  {
    "url": "contribute-translations/index.html",
    "revision": "3ec2b119334c8c76ae386559c5ad572e"
  },
  {
    "url": "faq/index.html",
    "revision": "147d90aeee520cf3bc7bacc7b3083e4e"
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
    "revision": "05f1e500393db1982ae99ade3188efdd"
  },
  {
    "url": "links/buy-gear.html",
    "revision": "be16c0ade05d26c2d5adf06869815abe"
  },
  {
    "url": "links/communities.html",
    "revision": "b92d44c61112d016a64f7604d3bbed95"
  },
  {
    "url": "links/index.html",
    "revision": "461c529c8b66a44a4101f8a378634267"
  },
  {
    "url": "links/learn-free.html",
    "revision": "33ed838cda078a2c75dfb1f8c019c751"
  },
  {
    "url": "links/learn-paid.html",
    "revision": "8c0afed5954a710b3c2e286ba0fbe499"
  },
  {
    "url": "links/misc.html",
    "revision": "fdb0d601ca3d152490cf6eceb49eb45d"
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
    "revision": "3830972f3ae79d60f3df45089074eb4b"
  },
  {
    "url": "terms/index.html",
    "revision": "163b7b1faf75283fe0f4c393182461f7"
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
