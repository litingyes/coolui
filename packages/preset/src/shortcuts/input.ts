// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const input: UserShortcuts<Theme> = [
  {
    input: 'inline-flex items-center gap-2 align-middle cursor-text px-3 py-0.5 rounded-1.5 text-base [&+.input,&+[input]]:ml-2',
  },
  // size
  [
    /^input-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'px-2 py-0.5 rounded text-sm'
        }
        case 'md' : {
          return 'px-3 py-0.5 rounded-1.5 text-base'
        }
        case 'lg': {
          return 'px-4 py-0.5 rounded-2 text-xl'
        }
      }
    },
    {
      autocomplete: 'input-<size>',
    },
  ],
  // variant
  [
    /^input-(outline|soft)(-.*)?$/,
    ([,c, d], { theme }) => {
      const key = resolveThemeKey(theme, d?.slice(1))

      switch (c) {
        case 'outline': {
          return withThemeKey('border border-solid border-cool-200 focus-within:(border-primary ring ring-1 ring-primary) dark:border-cool-800', key)
        }
        case 'soft': {
          return withThemeKey('text-primary-500 bg-primary-50 placeholder:text-primary-500 focus-within:bg-primary-100 dark:(bg-primary-950 focus-within:bg-primary-900)', key)
        }
      }
    },
    {
      autocomplete: [
        'input-(outline|soft)',
        'input-(outline|soft)-$colors',
      ],
    },
  ],
]
