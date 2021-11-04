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
    "revision": "1baa5d2e6c70f58d3043a308ebb3df99"
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
    "url": "assets/js/12.5d94f74c.js",
    "revision": "0cb8857dc535e4b8774a7958c1facff7"
  },
  {
    "url": "assets/js/13.6917db8b.js",
    "revision": "ce8f23d8e5d54a3a062d32c61ade0b78"
  },
  {
    "url": "assets/js/14.c0a10faa.js",
    "revision": "627878c151184be90d67aa06f004a322"
  },
  {
    "url": "assets/js/15.381b8843.js",
    "revision": "ed0b97f24c5ffdce6e1434f0c334976e"
  },
  {
    "url": "assets/js/16.8d6f4aee.js",
    "revision": "e62556465ebd293b6b0e8635d8beff5a"
  },
  {
    "url": "assets/js/17.028c84ce.js",
    "revision": "7727fe165d1b6de632f868ccc7af71c0"
  },
  {
    "url": "assets/js/18.871ea052.js",
    "revision": "ac5488fd5b96ed5595230771a7b68361"
  },
  {
    "url": "assets/js/19.551e6452.js",
    "revision": "486cee9eaa80f59575c487b8c0708d01"
  },
  {
    "url": "assets/js/2.ef8975e0.js",
    "revision": "a63ea68fa8461306716dcaa26c58d9b1"
  },
  {
    "url": "assets/js/20.fd7c1066.js",
    "revision": "a2b3e7b9c3a61f8afe6438a88780bbce"
  },
  {
    "url": "assets/js/21.0cad8350.js",
    "revision": "ad4773afeb856f2f937c6d368b2fc0c5"
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
    "url": "assets/js/app.10f66124.js",
    "revision": "f504cd99075783f0986fbdbe458b682a"
  },
  {
    "url": "contribute-content/index.html",
    "revision": "2f2623127d417ec735cfaa2f45f68055"
  },
  {
    "url": "contribute-translations/index.html",
    "revision": "f36fc4fadc19424baa2053ef48f96a0c"
  },
  {
    "url": "faq/index.html",
    "revision": "6507b6de0b9fd48f31014fa436bc648f"
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
    "revision": "a772c6a2cf4de905db32637f4369b1ed"
  },
  {
    "url": "links/buy-gear.html",
    "revision": "d45c97710664754dd2e01a855314d9d7"
  },
  {
    "url": "links/communities.html",
    "revision": "3dec037c526ade3816362bab4261ebd2"
  },
  {
    "url": "links/index.html",
    "revision": "820dbcd8583848552903fe77c493932b"
  },
  {
    "url": "links/learn-free.html",
    "revision": "6ba6fe1466a9719bbdd20ec2eadc15e0"
  },
  {
    "url": "links/learn-paid.html",
    "revision": "087285bc4cf7d3804225fbe401672381"
  },
  {
    "url": "links/misc.html",
    "revision": "0a3e1f6acf759a8ceac3a1b6ece3abac"
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
    "revision": "2a8587c28a71e58eb33e857415521b5e"
  },
  {
    "url": "terms/index.html",
    "revision": "c541dbc1ec8a38149aabb26f892adc41"
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
