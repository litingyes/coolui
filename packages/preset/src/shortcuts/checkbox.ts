// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const checkbox: UserShortcuts<Theme> = [
  {
    checkbox: 'relative cursor-pointer appearance-none m-0 text-primary-700 i-mingcute:square-line before:(absolute left-0 top-1/2 -translate-y-1/2)  checked:(text-primary-700 i-mingcute:checkbox-fill) indeterminate:(text-primary-700 i-mingcute:minus-square-line)',
  },
  // size & variant
  [
    /^checkbox-(.*)$/,
    ([,c], { theme }) => {
      switch (c) {
        case 'sm': {
          return 'size-4 text-base'
        }
        case 'md' : {
          return 'size-5 text-xl'
        }
        case 'lg': {
          return 'size-6 text-2xl'
        }
      }

      const key = resolveThemeKey(theme, c)

      return withThemeKey('text-primary-700  checked:(text-primary-700 i-mingcute:checkbox-fill) indeterminate:(text-primary-700 i-mingcute:minus-square-line)', key)
    },
    {
      autocomplete: 'checkbox-(<size>|$colors)',
    },
  ],
]
