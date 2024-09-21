import presetCoolui from '@coolui/preset'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cool UI',
  description: 'Opinionated and lightweight ui library',
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' },
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Liting',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/litingyes/coolui.git' },
    ],
    search: {
      provider: 'local',
    },
  },
  locales: {
    'root': {
      label: 'English',
      lang: 'en-US',
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
    },
  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetCoolui,
        ],
      }),
    ],
  },
})
