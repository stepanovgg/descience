import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Descience",
  description: "Арсенал дизайнера",
  base: '/descience/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/db/': [ // Добавлен слэш в конце пути
        {
          text: 'Арсенал дизайнера', // Исправлена опечатка в слове "вдохновение"
          items: [
            { text: '💭 Вдохновение', link: '/docs/designerdb/inspire' }, // Добавлена запятая
            { text: '✒️ Иллюстрации', link: '/docs/designerdb/illustration/illustration' },
            { text: '⭐️ Иконки', link: '/docs/designerdb/' },
            { text: '💻 Мокапы', link: '/docs/designerdb/' },
            { text: '🐳 UI/UX-Киты', link: '/docs/designerdb/' },
            { text: '🆎 Шрифты', link: '/docs/designerdb/' },
            { text: '📷 Фотостоки', link: '/docs/designerdb/' },
            { text: '🎥 Видеостоки', link: '/docs/designerdb/' },
            { text: '🛠  Figma / XD / Sketch', link: '/docs/designerdb/' }
          ]
        }
      ],
      '/db/inspire/': [
        {
          text: 'Tutorial',
          items: [
            { text: 'Index', link: '/tutorials/' },
            { text: 'Two', link: '/tutorials/two' }
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
