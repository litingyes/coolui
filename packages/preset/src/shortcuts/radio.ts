// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const radio: UserShortcuts<Theme> = [
  {
    radio: 'appearance-none m-0 mr-1 relative size-5 before:(content-[""] absolute left-0 top-1/2 -translate-y-1/2 size-5 rounded-full outline outline-1 outline-offset-2 outline-primary transition duration-300) checked:before:(outline-primary-700 bg-primary-700 outline-2)',
  },
  // size & variant
  [
    /^radio-(.*)$/,
    ([,c], { theme }) => {
      switch (c) {
        case 'sm': {
          return 'size-2 before:size-2'
        }
        case 'md' : {
          return 'size-3 before:size-3'
        }
        case 'lg': {
          return 'size-3.5 before:size-3.5'
        }
      }

      const key = resolveThemeKey(theme, c)

      return withThemeKey('before:outline-primary checked:before:(outline-primary-700 bg-primary-700)', key)
    },
    {
      autocomplete: 'radio-(<size>|$colors)',
    },
  ],
]
