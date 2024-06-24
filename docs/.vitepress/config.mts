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
              ],
            },
            {
              text:  '🎥 Видеостоки', link: '/db/videostock',
              collapsed: true,
              items: [
                { text: 'Бесплатные', link: '/db/videostock.html#%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%81%D1%82%D0%BE%D0%BA%D0%B8' },
                { text: 'Премиум', link: '/db/videostock.html#%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC-%D1%84%D0%BE%D1%82%D0%BE-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%81%D1%82%D0%BE%D0%BA%D0%B8' },
              ],
            },
            {
              text:  '📱  Конструкторы сайтов', link: '/db/webbuild',
              collapsed: true,
              items: [
                { text: 'Для WebFlow', link: '/db/webbuild.html#webflow-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B' },
                { text: 'Инструменты', link: '/db/webbuild.html#%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B' },
                { text: 'Портфолио', link: '/db/webbuild.html#%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%D1%8B' },
                { text: 'Сайт из Notion', link: '/db/webbuild.html#%D1%81%D0%B0%D0%B8%D1%82-%D0%B8%D0%B7-notion' },
                { text: 'Low-code', link: '/db/webbuild.html#low-code' },
                { text: 'No-Code Сайты', link: '/db/webbuild.html#no-code-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%D1%8B-%D1%81%D0%B0%D0%B8%D1%82%D0%BE%D0%B2' },
                { text: 'No-Code Приложения', link: '/db/webbuild.html#no-code-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%D1%8B-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8' },
              ],
            },
            {
              text:  '✒️ Иллюстрации', link: '/db/vector',
              collapsed: true,
              items: [
                { text: 'Бесплатные', link: '/db/vector.html#%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8' },
                { text: 'Премиум', link: '/db/vector.html#%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8' },
                { text: 'Персонажи и аватары', link: '/db/vector.html#%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8-%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B' },
                { text: '3D иллюстрации и наборы', link: '/db/vector.html#_3d-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D1%81%D0%B5%D1%82%D1%8B' },

              ],
            },
            {
              text:  '⭐️ Иконки', link: '/db/icons',
              collapsed: true,
              items: [
                { text: 'Бесплатные', link: '/db/icons.html#%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8' },
                { text: 'Премиум', link: '/db/icons.html#%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8' },
                { text: 'Анимированные', link: '/db/icons.html#%D0%B0%D0%BD%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%B5%D1%82%D1%8B-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BE%D0%BA' },
                { text: 'Генераторы иконошрифтов', link: '/db/icons.html#%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D1%85-%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%BE%D0%B2' },
                { text: 'Менеджеры иконок', link: '/db/icons.html#%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BE%D0%BA' },
              ],
            },
            {
              text:  '💻 Мокапы', link: '/db/mockups',
              collapsed: true,
              items: [
                { text: 'Figma-мокапы', link: '/db/mockups.html#figma-%D0%BC%D0%BE%D0%BA%D0%B0%D0%BF%D1%8B' },
                { text: 'Мокапы устройств', link: '/db/mockups.html#%D0%BC%D0%BE%D0%BA%D0%B0%D0%BF%D1%8B-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%81%D1%82%D0%B2' },
                { text: 'Мокапы продуктовл', link: '/db/mockups.html#%D0%BC%D0%BE%D0%BA%D0%B0%D0%BF%D1%8B-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2' },
                   ],
            },
            {
              text:  '🤖 Нейросети', link: '/db/aitools',
              collapsed: true,
              items: [
                { text: 'Вдохновение', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B2%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5' },
                { text: 'Видео, Анимация, 3D', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-3d' },
                { text: 'Генераторы голоса', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%D0%B0' },
                { text: 'Изображения', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8' },
                { text: 'Иллюстрации и рисунки', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B8%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8' },
                { text: 'Инструменты', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B8-%D0%B4%D0%BE%D1%81%D0%BA%D0%B8' },
                { text: 'Логотипы', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%BE%D0%B2' },
                { text: 'Маркетинг и копирайтинг', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3-%D0%B8-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%B0%D0%B8%D1%82%D0%B8%D0%BD%D0%B3' },
                { text: 'Плагины для Figma', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B-%D0%B4%D0%BB%D1%8F-figma' },
                { text: 'Полезное', link: '/db/aitools.html#%D1%81%D1%82%D0%BE%D0%B8%D1%82-%D0%BF%D0%BE%D0%BF%D1%80%D0%BE%D0%B1%D0%BE%D0%B2%D0%B0%D1%82%D1%8C' },
                { text: 'Продуктовый дизайн', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D1%8B%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B8%D0%BD-%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B' },
                { text: 'Промт-менеджеры', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80%D1%8B-%D0%BF%D1%80%D0%BE%D0%BC%D1%82%D0%BE%D0%B2' },
                { text: 'Сайты', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B8-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%D1%8B-%D1%81%D0%B0%D0%B8%D1%82%D0%BE%D0%B2' },
                { text: 'Фото и Видео', link: '/db/aitools.html#%D0%B8%D0%B8-%D1%81%D1%82%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D0%B8-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE' },
                { text: 'UI', link: '/db/aitools.html#%D0%B8%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%D1%81%D0%B0' },
                   ],
                   
            },
            {
              text:  '🌈 Работа с цветом', link: '/db/colors',
              collapsed: true,
              items: [
                { text: 'Софт и приложения', link: '/db/colors.html#%D1%81%D0%BE%D1%84%D1%82-%D0%B8-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F' },
                { text: 'Палитры', link: '/db/colors.html#%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D0%B8' },
                { text: 'Градиенты', link: '/db/colors.html#%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D1%8B' },
                { text: 'Выбор цвета', link: '/db/colors.html#%D0%B2%D1%8B%D0%B1%D0%BE%D1%80-%D1%86%D0%B2%D0%B5%D1%82%D0%B0' },
                   ],
            },
            {
              text:  '📷 Фотостоки', link: '/db/photostock',
              collapsed: true,
              items: [
                { text: 'Бесплатные', link: '/db/photostock.html#%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D1%82%D0%BE%D0%BA%D0%B8' },
                { text: 'Премиум', link: '/db/photostock.html#%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC-%D1%84%D0%BE%D1%82%D0%BE-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%81%D1%82%D0%BE%D0%BA%D0%B8' },
                { text: 'ИИ-Фотостоки', link: '/db/photostock.html#ai-%D1%81%D1%82%D0%BE%D0%BA%D0%B8' },
                   ],
            },
            
            {
              text:  '🆎 Шрифты', link: '/db/fonts',
              collapsed: true,
              items: [
                { text: 'Библиотеки шрифтов', link: '/db/fonts.html#%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B8-%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%BE%D0%B2' },
                { text: 'Вдохновение', link: '/db/fonts.html#%D0%B2%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5' },
                { text: 'Редакторы', link: '/db/fonts.html#%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D1%8B' },
                { text: 'Менеджеры', link: '/db/fonts.html#%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80%D1%8B-%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%BE%D0%B2' },
                { text: 'Калькуляторы размера', link: '/db/fonts.html#%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D0%BE%D0%B2-%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%B0' },
                { text: 'Премиум шрифты', link: '/db/fonts.html#%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC-%D1%88%D1%80%D0%B8%D1%84%D1%82%D1%8B' },
                { text: 'Экспериментальные шрифты', link: '/db/fonts.html#%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B8-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%88%D1%80%D0%B8%D1%84%D1%82%D1%8B' },
                { text: 'Поиск шрифтов', link: '/db/fonts.html#%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%BE%D0%B2%D0%B8%D0%BA%D0%B8' },
                { text: 'Инструменты', link: '/db/fonts.html#%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B' },
                   ],
                   
            },
            {
              text:  '🐳 UI-Киты', link: 'uxui',
              collapsed: true,
              items: [
                { text: 'Популярное', link: '/db/uxui.html#%D0%BF%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5-ui-%D0%BA%D0%B8%D1%82%D1%8B' },
                { text: 'Материалы', link: '/db/uxui.html#ui-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B' },
                { text: 'Премиальные ассеты', link: '/db/uxui.html#%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-ux-ui-%D0%B0%D1%81%D1%81%D0%B5%D1%82%D1%8B' },
                   ],
            },
            {
              text:  '🛠 UX-Инструменты', link: '/db/uxkits',
              collapsed: true,
              items: [
                { text: 'Прототипирование', link: '/db/uxkits.html#%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5' },
                { text: 'Wireframe', link: '/db/uxkits.html#wireframe-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B' },
                { text: 'User-flow', link: '/db/uxkits.html#user-flow' },
                { text: 'Исследования', link: '/db/uxkits.html#ux-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F' },
                { text: 'Тестирование и фидбек', link: '/db/uxkits.html#%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%84%D0%B8%D0%B4%D0%B1%D0%B5%D0%BA' },
                { text: 'Заглушки и рыба-текст', link: '/db/uxkits.html#ux-%D0%B7%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B8' },
                { text: 'Аватарки и лица', link: '/db/uxkits.html#%D0%BB%D0%B8%D1%86%D0%B0-%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B8' },
                   ],
            },
            {
              text:  '📘 Figma / XD / Sketch', link: '/db/figma',
              collapsed: true,
              items: [
                { text: 'Figma', link: '/db/figma.html#figma' },
                { text: 'Adobe XD', link: '/db/figma.html#sketch' },
                { text: 'Sketch', link: '/db/figma.html#adobe-xd' },
                   ],
            },
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
