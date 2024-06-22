import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: "Descience",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    // Вставляем предоставленный код для Google Tag Manager
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-9EYSRQDKKF' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9EYSRQDKKF');
    `]
  ],
  description: "Арсенал дизайнера",
  base: '/',
  themeConfig: {
    logo: 'logo.svg',
    footer: {
      copyright: 'Made with ❤️ <a href="https://instagram.com/stepanov.go">StepanovGo</a>'
    },
    nav: [
      { text: 'Связаться', link: 'https://t.me/stepanovgg' },
      { text: 'Помочь проекту', link: 'https://t.me/+fVfG-UWo2yg5ZmE6' }
    ],
    sidebar: {
      '/db/': [
        {
          text: 'Арсенал дизайнера',
          items: [
            {
              text:  '💭 Вдохновение', link: '/db/inspire',
              collapsed: true,
              items: [
                { text: 'Здесь есть всё', link: '/db/inspire.html#%E2%AD%90%EF%B8%8F-%D0%B7%D0%B4%D0%B5%D1%81%D1%8C-%D0%B5%D1%81%D1%82%D1%8C-%D0%B2%D1%81%D0%B5' },
                { text: 'User-Interface', link: '/db/inspire.html#ui-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B8-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%D1%81' },
                { text: 'Веб-дизайн', link: '/db/inspire.html#%D0%B2%D0%B5%D0%B1-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B8%D0%BD' },
                { text: 'Портфолио', link: '/db/inspire.html#%D0%BF%D0%BE%D1%80%D1%84%D0%BE%D0%BB%D0%B8%D0%BE' },
                { text: 'SaaS', link: '/db/inspire.html#saas-%D0%B2%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5' },
                { text: 'Лэндинги', link: '/db/inspire.html#%D0%BB%D1%8D%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%B8' },
                { text: 'Приложения', link: '/db/inspire.html#%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F' },
                { text: 'Стартапы и продукты', link: '/db/inspire.html#%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%B0%D0%BF%D1%8B-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B' },
                { text: 'Реклама и коммерция', link: '/db/inspire.html#%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0-%D0%B8-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F' },
                { text: 'Email-Маркетинг', link: '/db/inspire.html#email-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3' },
                { text: 'Фотография', link: '/db/inspire.html#%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F' },
                { text: 'Видео', link: '/db/inspire.html#%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE' },
                { text: 'Дизайн и брендинг', link: '/db/inspire.html#%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B8%D0%BD-%D0%B8-%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3' },
                { text: 'Инструменты', link: '/db/inspire.html#%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B' }
              ]
            },
            { text: '🎥 Видеостоки', link: '/db/videostock' },
            { text: '📱 Конструкторы сайтов', link: '/db/webbuild' },
            { text: '✒️ Иллюстрации', link: '/db/vector' },
            { text: '⭐️ Иконки', link: '/db/icons' },
            { text: '💻 Мокапы', link: '/db/mockups' },
            { text: '🤖 Нейросети', link: '/db/aitools' },
            { text: '🌈 Работа с цветом', link: '/db/colors' },
            { text: '📷 Фотостоки', link: '/db/photostock' },
            { text: '🆎 Шрифты', link: '/db/fonts' },
            { text: '🐳 UI-Киты', link: '/db/uxui' },
            { text: '🛠 UX-Инструменты', link: '/db/uxkits' },
            { text: '📘 Figma / XD / Sketch', link: '/db/figma' }
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
