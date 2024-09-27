// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { LAYER_BASE, LAYER_VARIANT } from '../layers'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const toggle: UserShortcuts<Theme> = [
  [
    'toggle',
    'relative inline-block cursor-pointer appearance-none m-0 w-9 h-5 p-0.5 rounded-full  bg-cool-200 transition-background-color duration-300  before:(content-[""] absolute left-0.5 top-1/2 -translate-y-1/2 size-4 rounded-full bg-white transition-transform duration-300) before:checked:(translate-x-4) checked:(bg-primary-500)',
    {
      layer: LAYER_BASE,
    },
  ],
  // size & variant
  [
    /^toggle-(.*)$/,
    ([,c], { theme }) => {
      switch (c) {
        case 'sm': {
          return 'w-7 h-4 p-0.5 before:(size-3 left-0.5) before:checked:(translate-x-3)'
        }
        case 'md' : {
          return 'w-9 h-5 p-0.5 before:(size-4 left-0.5) before:checked:(translate-x-4)'
        }
        case 'lg': {
          return 'w-11 h-6 p-1 before:(size-5 left-0.5) before:checked:(translate-x-5)'
        }
      }

      const key = resolveThemeKey(theme, c)

      return withThemeKey('checked:(bg-primary-500)', key)
    },
    {
      autocomplete: 'toggle-(<size>|$colors)',
      layer: LAYER_VARIANT,
    },
  ],
]
