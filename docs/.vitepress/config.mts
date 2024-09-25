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
            text: 'Guide',
            link: '/guide/introduction',
          },
          {
            text: 'Components',
            link: '/components/button',
          },
          {
            text: 'CHANGELOG',
            link: 'https://github.com/litingyes/coolui/blob/main/CHANGELOG.md',
            target: '_blank',
          },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              {
                text: 'Introduction',
                link: '/guide/introduction',
              },
              {
                text: 'Getting start',
                link: '/guide/getting-start',
              },
            ],
          },
          {
            text: 'Components',
            items: [
              {
                text: 'Basic',
                items: [
                  {
                    text: 'Badge',
                    link: '/components/badge',
                  },
                  {
                    text: 'Button',
                    link: '/components/button',
                  },
                ],
              },
              {
                text: 'Form',
                items: [
                  {
                    text: 'Input',
                    link: '/components/input',
                  },
                  {
                    text: 'Checkbox',
                    link: '/components/checkbox',
                  },
                  {
                    text: 'Radio',
                    link: '/components/radio',
                  },
                ],
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
            text: '指南',
            link: '/zh-CN/guide/introduction',
          },
          {
            text: '组件',
            link: '/zh-CN/components/button',
          },
          {
            text: '更新日志',
            link: 'https://github.com/litingyes/coolui/blob/main/CHANGELOG.md',
            target: '_blank',
          },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              {
                text: '介绍',
                link: '/zh-CN/guide/introduction',
              },
              {
                text: '快速开始',
                link: '/zh-CN/guide/getting-start',
              },
            ],
          },
          {
            text: '组件',
            items: [
              {
                text: '基础',
                items: [
                  {
                    text: '徽章 Badge',
                    link: '/zh-CN/components/badge',
                  },
                  {
                    text: '按钮 Button',
                    link: '/zh-CN/components/button',
                  },
                ],
              },
              {
                text: '表单',
                items: [
                  {
                    text: '输入框 Input',
                    link: '/zh-CN/components/input',
                  },
                  {
                    text: '复选框 Checkbox',
                    link: '/zh-CN/components/checkbox',
                  },
                  {
                    text: '单选框 Radio',
                    link: '/zh-CN/components/radio',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-macchiato',
    },
  },
})
