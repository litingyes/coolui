// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { LAYER_BASE, LAYER_VARIANT } from '../layers'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const radio: UserShortcuts<Theme> = [
  [
    'radio',
    'appearance-none inline-block m-0 relative size-3 before:(content-[""] absolute left-0 top-1/2 -translate-y-1/2 size-3 rounded-full outline outline-1 outline-offset-2 outline-primary transition duration-300) checked:before:(outline-primary-700 bg-primary-700 outline-2)',
    {
      layer: LAYER_BASE,
    },
  ],
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
          return 'size-4 before:size-4'
        }
      }

      const key = resolveThemeKey(theme, c)

      return withThemeKey('before:outline-primary checked:before:(outline-primary-700 bg-primary-700)', key)
    },
    {
      autocomplete: 'radio-(<size>|$colors)',
      layer: LAYER_VARIANT,
    },
  ],
]
