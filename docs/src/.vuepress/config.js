const { name, description } = require('../../package')

module.exports = {
  head: [
    ['meta', { name: 'theme-color', content: '#708a87' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  locales: {
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Harmonica Hangout Docs',
      description: 'Harmonica Knowledge curated by the Harmonica Hangout Discord Community'
    },
  },
  themeConfig: {
    repo: 'https://github.com/harmonica-hangout/hh-docs',
    editLinks: true,
    docsDir: 'docs/src',
    docsBranch: 'develop',
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#708a87' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#708a87' }],
        ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#708a87' }]
    ],
    locales: {
        '/': {
            label: 'English',
            repoLabel: 'Contribute!',
            editLinkText: 'Help improve this page!',
            selectText: 'Languages',
            ariaLabel: 'Languages',
            serviceWorker: {
                updatePopup: {
                    message: "New content is available.",
                    buttonText: "Refresh"
                }
            },
            nav: [
              { text: 'Get Started', link: '/sitemap/' },
              { text: 'Discord', link: 'https://discord.gg/vs2sF5h' }
            ],
            sidebar: {
              '/links/': [
                '',
                'buy-gear',
                'learn-paid',
                'learn-free',
                'communities',
                'misc',
              ],
              '/sitemap/': 'auto',
              '/contribute-content/': 'auto',
              '/contribute-translations/': 'auto',
              '/': 'auto'
            }
        },
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }]
  ]
}
