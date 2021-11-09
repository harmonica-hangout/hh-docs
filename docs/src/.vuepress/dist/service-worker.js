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
    "revision": "95552dba482743dde5bc3a71d58ecd4e"
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
    "url": "assets/js/11.3527db56.js",
    "revision": "80f405f4aa16d1cbb164e4a0c400279b"
  },
  {
    "url": "assets/js/12.94baf32d.js",
    "revision": "2397d8d746db651fd71ed338ca80d11c"
  },
  {
    "url": "assets/js/13.014c587e.js",
    "revision": "54dfde284c7e571fa226f40c933928e7"
  },
  {
    "url": "assets/js/14.c54ee56e.js",
    "revision": "b2687bf8bd292341d285b5d4bc5feb68"
  },
  {
    "url": "assets/js/15.822f337f.js",
    "revision": "040831f9d0e4d611cdf00fb03850831b"
  },
  {
    "url": "assets/js/16.d4464a95.js",
    "revision": "e405f84cc342d7bc4afae3c94f7e41ce"
  },
  {
    "url": "assets/js/17.da03dd12.js",
    "revision": "20be7f8996a7aaddbc5f96a9f8e87406"
  },
  {
    "url": "assets/js/18.fc2c1ffb.js",
    "revision": "cc17b36299a1f4dcd802d00913064bd3"
  },
  {
    "url": "assets/js/19.71b01a9a.js",
    "revision": "a547893f2976e47134873cf1d0d1febc"
  },
  {
    "url": "assets/js/2.ef8975e0.js",
    "revision": "a63ea68fa8461306716dcaa26c58d9b1"
  },
  {
    "url": "assets/js/20.244e2f45.js",
    "revision": "58ef2a71dd2ada306de3a8d9e634a118"
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
    "url": "assets/js/app.75af0ca5.js",
    "revision": "8b770b9ffde0e6bfde863d0c919780ec"
  },
  {
    "url": "contribute-content/index.html",
    "revision": "3843daaae2de9d5411f2a42501d4344c"
  },
  {
    "url": "contribute-translations/index.html",
    "revision": "b4260f0ef5d2656cd6071c19a7edfb4a"
  },
  {
    "url": "faq/index.html",
    "revision": "0c998965d35e333955a26c00af21d75e"
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
    "revision": "0fa9df02a375e12857d9d87244951cd7"
  },
  {
    "url": "links/buy-gear.html",
    "revision": "e1698ea934f21deafe3b9cf21c9aeb1d"
  },
  {
    "url": "links/communities.html",
    "revision": "765a7918cb72dc6192e4e3bdcbc59ecc"
  },
  {
    "url": "links/index.html",
    "revision": "557997b05c7a60705a1e915afd16be1a"
  },
  {
    "url": "links/learn-free.html",
    "revision": "e6b9a42e1e53c7d2026bee256b443c0f"
  },
  {
    "url": "links/learn-paid.html",
    "revision": "e1ba82813f3be61bf8692c387117a21f"
  },
  {
    "url": "links/misc.html",
    "revision": "54237286e2bc260901dcc9b4f2a37384"
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
    "revision": "05739b10efa697d7807245f4c3384d56"
  },
  {
    "url": "terms/index.html",
    "revision": "049b619a434b0555ba55858f006c3eaa"
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
