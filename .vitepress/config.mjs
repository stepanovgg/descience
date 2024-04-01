import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'Ru-RU',
  title: "DeScience",
  description: "Арсенал Дизайнера",
  base: '/repo/',
  themeConfig: {
    nav: [
      { text: 'Обновления', link: 'https://t.me/DeScience' }
    ],
    head: [
      ['link', { rel: 'icon', href: '/images/favicon.ico' }], // Путь к иконке должен начинаться с /
    ],
    sidebar: {
      '/db/': [ // Добавлен слэш в конце пути
        {
          text: 'Арсенал дизайнера', // Исправлена опечатка в слове "вдохновение"
          items: [
            { text: '💭 Вдохновение', link: '/db/inspire' }, // Добавлена запятая
            { text: '✒️ Иллюстрации', link: '/db/illustration' },
            { text: '⭐️ Иконки', link: '/db/icons' },
            { text: '💻 Мокапы', link: '/db/mockups' },
            { text: '🐳 UI/UX-Киты', link: '/db/uikits' },
            { text: '🆎 Шрифты', link: '/db/fonts' },
            { text: '📷 Фотостоки', link: '/db/photostock' },
            { text: '🎥 Видеостоки', link: '/db/videostock' },
            { text: '🛠  Figma / XD / Sketch', link: '/db/figma' }
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