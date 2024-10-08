import type { DefaultTheme, LocaleConfig } from 'vitepress'

export const enUS: LocaleConfig<DefaultTheme.Config>[0] = {
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
        text: 'Vue',
        items: [
          {
            text: 'Display',
            link: '/vue/display/badge',
          },
          {
            text: 'Interaction',
            link: '/vue/interaction/button',
          },
          {
            text: 'Form',
            link: '/vue/form/input',
          },
        ],
      },
      {
        text: 'CHANGELOG',
        link: 'https://github.com/litingyes/coolui/blob/main/CHANGELOG.md',
        target: '_blank',
      },
    ],
    sidebar: {
      '/guide/': [
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
            {
              text: 'Preset',
              link: '/guide/preset',
            },
          ],
        },
      ],
      '/atomization/': [
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
      '/vue/': [
        {
          text: 'Atomization',
          items: [
            {
              text: 'Display',
              items: [
                {
                  text: 'Badge',
                  link: '/vue/display/badge',
                },
              ],
            },
            {
              text: 'Interaction',
              items: [
                {
                  text: 'Button',
                  link: '/vue/interaction/button',
                },
              ],
            },
            {
              text: 'Form',
              items: [
                {
                  text: 'Checkbox',
                  link: '/vue/form/checkbox',
                },
                {
                  text: 'Input',
                  link: '/vue/form/input',
                },
                {
                  text: 'Radio',
                  link: '/vue/form/radio',
                },
                {
                  text: 'Toggle',
                  link: '/vue/form/toggle',
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Liting',
    },
  },
}
