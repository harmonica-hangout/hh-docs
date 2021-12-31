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
    "revision": "21b30f7bfdb515fc7e87f35ab8aab576"
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
    "url": "archived/harp-academy.html",
    "revision": "93fce7b63797930303b805fd00983980"
  },
  {
    "url": "archived/harp-academy/index.html",
    "revision": "c634d21b1ebdf73fe74ea811e46a5a6b"
  },
  {
    "url": "archived/index.html",
    "revision": "6d22a0287bdd4448a4d480201db2dfd7"
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
    "url": "assets/js/11.b7c9191b.js",
    "revision": "2e6e5d3a666fddc79c503232e987d22c"
  },
  {
    "url": "assets/js/12.1b820f24.js",
    "revision": "c6161ea03b7177a3462db634dcf06d19"
  },
  {
    "url": "assets/js/13.a1bfb416.js",
    "revision": "2085635b73c02db66a3b4333af818531"
  },
  {
    "url": "assets/js/14.e08347ce.js",
    "revision": "e982ca10e5ab9f6c7a775176ab5bf452"
  },
  {
    "url": "assets/js/15.6881c947.js",
    "revision": "ef12d0c25bb9fe1b9750f71027fc72ab"
  },
  {
    "url": "assets/js/16.a5bf4551.js",
    "revision": "7beba449c4a5834aea819206acd16f08"
  },
  {
    "url": "assets/js/17.7e98c39f.js",
    "revision": "39cfe7397a4dc76a49ad9850b967d7df"
  },
  {
    "url": "assets/js/18.bed16d7d.js",
    "revision": "2df2d41a487b8e2afa0a98b2a637c4d2"
  },
  {
    "url": "assets/js/19.2abf9c25.js",
    "revision": "02b517a503dc034c58a3446d485f3d94"
  },
  {
    "url": "assets/js/2.1d1a7ae2.js",
    "revision": "67415b956132116cd1b4871a2d1c789c"
  },
  {
    "url": "assets/js/20.19bf4b87.js",
    "revision": "73b262ffa35350a2c3c495f20251d6ba"
  },
  {
    "url": "assets/js/21.e9eb2011.js",
    "revision": "529c0c4cb8cda411557304605814def3"
  },
  {
    "url": "assets/js/22.ebb96628.js",
    "revision": "c5aace7a84da012a469b35d24bafa8a2"
  },
  {
    "url": "assets/js/23.fb7e512f.js",
    "revision": "cca8a70d24d1f0c04e1a911aa66494f2"
  },
  {
    "url": "assets/js/24.7516a9ec.js",
    "revision": "7bd7abb9f5f3d247e7a8e896cb8f2a29"
  },
  {
    "url": "assets/js/25.46e8069e.js",
    "revision": "3c1f2c80b1906e4e374abd466f4c1821"
  },
  {
    "url": "assets/js/26.3697dde7.js",
    "revision": "97e471b7583ee66648fe6ba77fa42e9d"
  },
  {
    "url": "assets/js/3.09f0fb57.js",
    "revision": "ae0bd5f039a104ea2111a9597483732e"
  },
  {
    "url": "assets/js/4.b6090c0c.js",
    "revision": "4a12278ab02ac16b731f15655de3f344"
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
    "url": "assets/js/9.34c2f4cd.js",
    "revision": "61287aec720a018d63754b3c7642c130"
  },
  {
    "url": "assets/js/app.56155b9c.js",
    "revision": "95b4438e4ec31e630e5411e5a50094cd"
  },
  {
    "url": "contribute-content/index.html",
    "revision": "0abfb8e65e0f2be437acad3a855676f6"
  },
  {
    "url": "contribute-translations/index.html",
    "revision": "bcd9b20e431a9ccaa6471e7acb755db7"
  },
  {
    "url": "faq/index.html",
    "revision": "80ccbc9b1980d749c93a8b7aac4c8f05"
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
    "revision": "00b66f7e441999a0bbd5b6911b79d8e2"
  },
  {
    "url": "links/buy-gear.html",
    "revision": "5594b31dcfc64d97712fb114476729ac"
  },
  {
    "url": "links/communities.html",
    "revision": "4641598dc643a5d39eabf9b4cd16cf80"
  },
  {
    "url": "links/index.html",
    "revision": "cd6f91680870cdd8ba1eb13631585b56"
  },
  {
    "url": "links/learn-free.html",
    "revision": "bb7b24fee5eb2aeb53596ecfb4c0e4ce"
  },
  {
    "url": "links/learn-paid.html",
    "revision": "0f5157db03b13644c9688e2b5a78e7a9"
  },
  {
    "url": "links/misc.html",
    "revision": "44f102738768a55d958aa8fc90a33577"
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
    "revision": "a9d029bf2ad610bf801ea7acf0e72307"
  },
  {
    "url": "terms/index.html",
    "revision": "86d3722c3831da3d7b9547414e8e0a75"
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
