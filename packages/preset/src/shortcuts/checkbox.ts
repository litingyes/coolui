// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const checkbox: UserShortcuts<Theme> = [
  {
    'checkbox': 'relative inline-flex items-center gap-1 align-middle *:cursor-pointer [&+.checkbox,&+[checkbox]]:ml-2',
    'checkbox-disabled': '!pointer-events-none !grayscale-50',
    'checkbox-readonly': '!pointer-events-none',
  },
  // size
  [
    /^checkbox-input-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'text-base'
        }
        case 'md' : {
          return 'text-xl'
        }
        case 'lg': {
          return 'text-2xl'
        }
      }
    },
    {
      autocomplete: 'checkbox-input-<size>',
    },
  ],
  // variant
  [
    /^checkbox-input((?!.*(sm|md|lg))(-.*))?$/,
    ([,c], { theme }) => {
      const key = resolveThemeKey(theme, c?.slice(1))

      return withThemeKey('appearance-none m-0 relative text-primary-700 i-mingcute:square-line before:(absolute left-0 top-1/2 -translate-y-1/2) checked:(text-primary-700 i-mingcute:checkbox-fill) indeterminate:(text-primary-700 i-mingcute:minus-square-line)', key)
    },
    {
      autocomplete: [
        'checkbox-input',
        'checkbox-input-$colors',
      ],
    },
  ],
]
