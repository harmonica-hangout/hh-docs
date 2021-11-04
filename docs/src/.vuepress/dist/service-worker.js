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
    "revision": "e3e6c7dcd235e00b29f50711c4b004d2"
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
    "url": "assets/js/11.1b201843.js",
    "revision": "811ce786ad5de52469c955ef7eaa3d1b"
  },
  {
    "url": "assets/js/12.2d6a38df.js",
    "revision": "ff1b417bed3385a7823f0fa7e2cbafe6"
  },
  {
    "url": "assets/js/13.6917db8b.js",
    "revision": "ce8f23d8e5d54a3a062d32c61ade0b78"
  },
  {
    "url": "assets/js/14.f6e00986.js",
    "revision": "7e34fa6eaaa75e6fab397794d4c55c66"
  },
  {
    "url": "assets/js/15.822f337f.js",
    "revision": "040831f9d0e4d611cdf00fb03850831b"
  },
  {
    "url": "assets/js/16.3c089496.js",
    "revision": "c631ede59b9d634ca533b60bffc5445a"
  },
  {
    "url": "assets/js/17.7a0b1875.js",
    "revision": "a5c3f5f2724eee38a1cc8eeed6345c58"
  },
  {
    "url": "assets/js/18.50d2f070.js",
    "revision": "46632c8e3d2250f599964ad593847674"
  },
  {
    "url": "assets/js/19.8e89e128.js",
    "revision": "ef1b615e70295043c213c07b2e7707fa"
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
    "url": "assets/js/app.ddabf82a.js",
    "revision": "fca8c6ea7d1f1c58e7dc0cec2b685134"
  },
  {
    "url": "contribute-content/index.html",
    "revision": "d6d2878f46709d7a294fa3ab3711201b"
  },
  {
    "url": "contribute-translations/index.html",
    "revision": "e2103ff9c87545c3cfb103cc6419f0ce"
  },
  {
    "url": "faq/index.html",
    "revision": "ec2688ca02313768c7379602016fd0ae"
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
    "revision": "ac67aa020ad27aee4e6207e5153a53c1"
  },
  {
    "url": "links/buy-gear.html",
    "revision": "c8c3882b1125df1e2bb58ff86d704f1c"
  },
  {
    "url": "links/communities.html",
    "revision": "fffb9430f91eb9c31c85d351e2343d99"
  },
  {
    "url": "links/index.html",
    "revision": "e143cd910dd1d189397b0321d5710c5c"
  },
  {
    "url": "links/learn-free.html",
    "revision": "f7968a0aa949b7c140f63f95230c7984"
  },
  {
    "url": "links/learn-paid.html",
    "revision": "e6a6440a48841c828c57ac81b6595766"
  },
  {
    "url": "links/misc.html",
    "revision": "355c0314f7e2159af2f21fa7a549fcde"
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
    "revision": "e5033a22517b5a64c25bb53c7bde8cd3"
  },
  {
    "url": "terms/index.html",
    "revision": "d8ca9b7bd1b5436716c336028d76fed9"
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
