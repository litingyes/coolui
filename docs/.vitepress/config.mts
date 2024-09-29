import { defineConfig } from 'vitepress'
import { enUS } from './config/en-US'
import { zhCN } from './config/zh-CN'

export default defineConfig({
  title: 'Cool UI',
  description: 'Opinionated and lightweight ui library',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Liting',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/litingyes/coolui.git' },
    ],
    editLink: {
      pattern: 'https://github.com/litingyes/coolui/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    externalLinkIcon: true,
  },
  locales: {
    'root': enUS,
    'zh-CN': zhCN,
  },
  rewrites: {
    'en-US/:rest*': ':rest*',
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-macchiato',
    },
  },
})
