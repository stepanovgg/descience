import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: "Descience",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: "Арсенал дизайнера",
  base: '/descience/',
  themeConfig: {
    footer: {
      copyright: 'Made with ❤️ <a href="https://instagram.com/stepanov.go">StepanovGo</a>'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: {
      '/db/': [
        {
          text: 'Арсенал дизайнера',
          items: [
            { text: '💭 Вдохновение', link: '/db/inspire' },
            { text: '✒️ Иллюстрации', link: '/db/inspire/index' },
            { text: '⭐️ Иконки', link: '/db/inspire/index' },
            { text: '💻 Мокапы', link: '/db/inspire/index' },
            { text: '🐳 UI/UX-Киты', link: '/db/inspire/index' },
            { text: '🆎 Шрифты', link: '/db/inspire/index' },
            { text: '📷 Фотостоки', link: '/db/inspire/index' },
            { text: '🎥 Видеостоки', link: '/db/inspire/index' },
            { text: '🛠  Figma / XD / Sketch', link: '/db/inspire/index' }
          ]
        },
        {
          text: 'Обозначения',
          items: [
            { text: 'F - Бесплатный ресурс' },
            { text: 'FP - Частично бесплатно' },
            { text: 'P - Премиум доступ' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/stepanov.go' }
    ],
    search: {
      provider: 'local'
    }
  }
})
