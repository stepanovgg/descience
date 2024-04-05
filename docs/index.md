---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  lastUpdated: April 5
  name: "DeScience"
  text: "Арсенал дизайнера"
  tagline: Самая большая коллекция ссылок для фрилансеров
  actions:
    - theme: brand
      text: Открыть Арсенал Дизайнера
      link: db/inspire
    - theme: brand
      text: Помочь проекту
      link: https://t.me/+fVfG-UWo2yg5ZmE6
    - theme: alt
      text: Перейти телеграм
      link: https://t.me/descience
      

features:
  - icon: 💭
    title: Вдохновение
    details: Сайты для поиска вдохновения перед началом творческого процесса
    link: /db/inspire
  - icon: ✒️
    title: Иллюстрации
    details: В разработке
    # link: /db/illustration
  - icon: ⭐️
    title: Иконки
    details: Сайты с иллюстрациями
    # link: /db/icons
  - icon: 💻
    title: Мокапы
    details: В разработке
    # link: /db/mockups
  - icon: 🐳
    title: UI/UX-Киты
    details: В разработке
    # link: /db/uikits
  - icon: 🛠
    title: Figma
    details: В разработке
    # link: /db/figma
  - icon: 🆎
    title: Шрифты
    details: В разработке
    # link: /db/fonts
  - icon: 📷
    title: Фотостоки
    details: В разработке
    # link: //db/photostock
  - icon: 🎥
    title: Видеостоки
    details: В разработке
    # link: /db/videostock
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Еван Ю',
    title: 'Создатель',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

# Наша Команда

Познакомьтесь с нашей замечательной командой.

<VPTeamMembers size="small" :members="members" />