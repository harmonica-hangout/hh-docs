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
    "revision": "1873bbd49a9d6e196d2ae0395c0b8b9c"
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
    "url": "archived/harp-academy/index.html",
    "revision": "2454ab01c1b8d2b736065605a7ca00a7"
  },
  {
    "url": "archived/index.html",
    "revision": "86d390cea31c83f53d7d19cc5adff113"
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
    "url": "assets/js/11.601376a1.js",
    "revision": "842a697788c534eecac81948d9481955"
  },
  {
    "url": "assets/js/12.9c23ea4d.js",
    "revision": "5ef053dc5850772309c90bae93f56e9f"
  },
  {
    "url": "assets/js/13.3418f80e.js",
    "revision": "882385b50542bc62c4164b76a57f53a0"
  },
  {
    "url": "assets/js/14.79ff345e.js",
    "revision": "627878c151184be90d67aa06f004a322"
  },
  {
    "url": "assets/js/15.aefcd398.js",
    "revision": "4da8a737547558a4cbcd0b334407d99d"
  },
  {
    "url": "assets/js/16.fb66330e.js",
    "revision": "532696549190ce0b4ca8a7e0d5219389"
  },
  {
    "url": "assets/js/17.1f6ae564.js",
    "revision": "f5b25f5778f9db7a49de50a44cb61465"
  },
  {
    "url": "assets/js/18.d4e94e77.js",
    "revision": "14cb51662f04438d31c47afc28b43051"
  },
  {
    "url": "assets/js/19.935e2fdf.js",
    "revision": "489e7972715a7b8f4bd2d66666ddcd58"
  },
  {
    "url": "assets/js/2.1d1a7ae2.js",
    "revision": "67415b956132116cd1b4871a2d1c789c"
  },
  {
    "url": "assets/js/20.9d98d0fa.js",
    "revision": "4f1e2172c7eb62a6ade5084dfca77cdb"
  },
  {
    "url": "assets/js/21.6d8434f3.js",
    "revision": "c722ccd4b726bc6e99ba62cc0943d6ab"
  },
  {
    "url": "assets/js/22.694bda1d.js",
    "revision": "47326b4f9ebb97cf48d473552b5c710b"
  },
  {
    "url": "assets/js/23.55d5bc2d.js",
    "revision": "0f7b59199c8a8fa80326b9e4acc99a25"
  },
  {
    "url": "assets/js/24.fd170a05.js",
    "revision": "b84dd55c1e22f59cdf22744a3f51b7a3"
  },
  {
    "url": "assets/js/25.b3478840.js",
    "revision": "b6a69d036762600a3e318f8b6e4e35e8"
  },
  {
    "url": "assets/js/3.09f0fb57.js",
    "revision": "ae0bd5f039a104ea2111a9597483732e"
  },
  {
    "url": "assets/js/4.278eb0f0.js",
    "revision": "47b0ace317cc2b2c59d3f59360b9495d"
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
    "url": "assets/js/9.8f18eb46.js",
    "revision": "f035123743781f049db970fd4536857c"
  },
  {
    "url": "assets/js/app.9c2143e2.js",
    "revision": "f9bdcb00e447438934d0f09c81d30bbc"
  },
  {
    "url": "contribute-content/index.html",
    "revision": "cc0ad39e0d8b281a0c1ed8e73bb5b1cb"
  },
  {
    "url": "contribute-translations/index.html",
    "revision": "59b0c4b7ae4a3467ef096df49d8858cd"
  },
  {
    "url": "faq/index.html",
    "revision": "c8ad58282abe09373ff583b24afb8fde"
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
    "revision": "d57c6089dc58c67c4de7b9f4eddbaf61"
  },
  {
    "url": "links/buy-gear.html",
    "revision": "8f481e801b772e02a788c6b98a391594"
  },
  {
    "url": "links/communities.html",
    "revision": "b11db53a2bae6fb406c0793d1e9157af"
  },
  {
    "url": "links/index.html",
    "revision": "e4a18b6ab977ba53c1103d384fd5f94b"
  },
  {
    "url": "links/learn-free.html",
    "revision": "3f9161b1855dd15364302d4c7787422c"
  },
  {
    "url": "links/learn-paid.html",
    "revision": "1503411b939626eeb76c6ee9d5cbd4f8"
  },
  {
    "url": "links/misc.html",
    "revision": "300d499de7a214838980364a51d9e783"
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
    "revision": "e23e49236ac5d47756041a0d35816892"
  },
  {
    "url": "terms/index.html",
    "revision": "8f0af51ce07b85c84099b5cf4834eca7"
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
