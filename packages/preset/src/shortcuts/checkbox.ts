// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const checkbox: UserShortcuts<Theme> = [
  {
    checkbox: 'relative cursor-pointer inline-block appearance-none m-0 text-primary-700 size-6 i-mingcute:square-line before:(absolute left-0 top-1/2 -translate-y-1/2 size-6)  checked:(text-primary-700 i-mingcute:checkbox-fill size-6) indeterminate:(text-primary-700 i-mingcute:minus-square-line size-6)',
  },
  // size & variant
  [
    /^checkbox-(.*)$/,
    ([,c], { theme }) => {
      switch (c) {
        case 'sm': {
          return 'size-5 before:(size-5) checked:(size-5) indeterminate:(size-5)'
        }
        case 'md' : {
          return 'size-6 before:(size-6) checked:(size-6) indeterminate:(size-6)'
        }
        case 'lg': {
          return 'size-7 before:(size-7) checked:(size-7) indeterminate:(size-7)'
        }
      }

      const key = resolveThemeKey(theme, c)

      return withThemeKey('text-primary-700  checked:(text-primary-700) indeterminate:(text-primary-700)', key)
    },
    {
      autocomplete: 'checkbox-(<size>|$colors)',
    },
  ],
]
