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
            { text: '💭 Вдохновение', link: '/db/inspire' }, // Добавлена запятая
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
          text: 'Легенда', // Исправлена опечатка в слове "вдохновение"
          items: [
            { text: 'F - Беслпатный ресурс', }, // Добавлена запятая
            { text: 'FP - Частично бесплатно', },
            { text: 'P - Премиум доступ', }
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
