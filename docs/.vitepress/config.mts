import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cool UI',
  description: 'Opinionated and lightweight ui library',
  lastUpdated: true,
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
    'root': {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          {
            text: 'Components',
            link: '/components/button',
          },
        ],
        sidebar: [
          {
            text: 'Components',
            items: [
              {
                text: 'Button',
                link: '/components/button',
              },
            ],
          },
        ],
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          {
            text: '组件',
            link: '/zh-CN/components/button',
          },
        ],
        sidebar: [
          {
            text: '组件',
            items: [
              {
                text: '按钮 Button',
                link: '/zh-CN/components/button',
              },
            ],
          },
        ],
      },
    },
  },
})
