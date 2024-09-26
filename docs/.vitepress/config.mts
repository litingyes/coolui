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
            text: 'Atomization',
            items: [
              {
                text: 'Display',
                link: '/atomization/display/badge',
              },
              {
                text: 'Interaction',
                link: '/atomization/interaction/button',
              },
              {
                text: 'Form',
                link: '/atomization/form/input',
              },
            ],
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
            text: 'Atomization',
            items: [
              {
                text: 'Display',
                items: [
                  {
                    text: 'Badge',
                    link: '/atomization/display/badge',
                  },
                ],
              },
              {
                text: 'Interaction',
                items: [
                  {
                    text: 'Button',
                    link: '/atomization/interaction/button',
                  },
                ],
              },
              {
                text: 'Form',
                items: [
                  {
                    text: 'Checkbox',
                    link: '/atomization/form/checkbox',
                  },
                  {
                    text: 'Input',
                    link: '/atomization/form/input',
                  },
                  {
                    text: 'Radio',
                    link: '/atomization/form/radio',
                  },
                  {
                    text: 'Toggle',
                    link: '/atomization/form/toggle',
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
            text: '原子化',
            items: [
              {
                text: '显示',
                link: '/zh-CN/atomization/display/badge',
              },
              {
                text: '交互',
                link: '/zh-CN/atomization/interaction/button',
              },
              {
                text: '表单',
                link: '/zh-CN/atomization/form/input',
              },
            ],
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
            text: '原子化',
            items: [
              {
                text: '显示',
                items: [
                  {
                    text: '徽章 Badge',
                    link: '/zh-CN/atomization/display/badge',
                  },
                ],
              },
              {
                text: '交互',
                items: [
                  {
                    text: '按钮 Button',
                    link: '/zh-CN/atomization/interaction/button',
                  },
                ],
              },
              {
                text: '表单',
                items: [
                  {
                    text: '复选框 Checkbox',
                    link: '/zh-CN/atomization/form/checkbox',
                  },
                  {
                    text: '输入框 Input',
                    link: '/zh-CN/atomization/form/input',
                  },
                  {
                    text: '单选框 Radio',
                    link: '/zh-CN/atomization/form/radio',
                  },
                  {
                    text: '开关 Toggle',
                    link: '/zh-CN/atomization/form/toggle',
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
