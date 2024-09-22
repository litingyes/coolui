// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const button: UserShortcuts<Theme> = [
  {
    'btn': 'inline-flex items-center gap-2 cursor-pointer text-sm align-middle transition duration-300 border border-solid border-cool-500 active:(scale-106 border-primary-800) [&+.btn,&+[btn]]:ml-2',
    'btn-disabled': '!pointer-events-none !grayscale-50',
  },
  // size
  [
    /^btn-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'px-2 py-0.5 rounded'
        }
        case 'md' : {
          return 'px-3 py-1 rounded-1.5'
        }
        case 'lg': {
          return 'px-4 py-1.5 rounded-2'
        }
      }
    },
    {
      autocomplete: 'btn-<size>',
    },
  ],
  // icon size
  [
    /^btn-icon-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'size-6 justify-center p-1 text-sm rounded'
        }
        case 'md' : {
          return 'size-7 justify-center p-1.5 text-base rounded-1.5'
        }
        case 'lg': {
          return 'size-8 justify-center p-1.5 text-xl rounded-2'
        }
      }
    },
    {
      autocomplete: 'btn-icon-<size>',
    },
  ],
  // variant
  [
    /^btn-(solid|outline|ghost|soft|link)(-.*)?$/,
    ([,c, d], { theme }) => {
      const key = resolveThemeKey(theme, d?.slice(1))

      switch (c) {
        case 'solid': {
          return withThemeKey('bg-primary text-white border-none hover:bg-primary-700 active:bg-primary-800 dark:(hover:bg-primary-600 active:bg-primary-700)', key)
        }
        case 'outline': {
          return withThemeKey('text-primary border-primary hover:(text-primary-700) active:(text-primary-800 border-primary-800) dark:hover:(text-primary-400 border-primary-400) dark:active:(text-primary-300 border-primary-300)', key)
        }
        case 'soft': {
          return withThemeKey('text-primary-500 bg-primary-50 border-none hover:bg-primary-100 active:bg-primary-200 dark:bg-primary-950 dark:hover:bg-primary-900 dark:active:bg-primary-800', key)
        }
        case 'ghost': {
          return withThemeKey('text-primary-500 border-none hover:bg-cool-100 active:bg-cool-200 dark:(hover:bg-cool-950 active:bg-cool-900)', key)
        }
        case 'link': {
          return withThemeKey('text-primary-500 border-none no-underline decoration-solid underline-offset-2 hover:(text-primary-600 underline decoration-primary-600) dark:hover:(text-primary-400 decoration-primary-400)', key)
        }
      }
    },
    {
      autocomplete: [
        'btn-(solid|outline|ghost|soft|link)',
        'btn-(solid|outline|ghost|soft|link)-$colors',
      ],
    },
  ],
]
