// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { LAYER_BASE, LAYER_ICON, LAYER_VARIANT } from '../layers'
import { resolveThemeKey, withThemeKey } from '../utils/theme'

export const badge: UserShortcuts<Theme> = [
  [
    'badge',
    'inline-flex items-center gap-2 cursor-pointer align-middle text-base px-3 py-0.5 rounded-2 text-base [&+.badge,&+[badge]]:ml-2',
    {
      layer: LAYER_BASE,
    },
  ],
  [
    'badge-icon',
    'size-7 justify-center p-1.5 text-base rounded-2',
    {
      layer: LAYER_ICON,
    },
  ],
  {
  },
  [
    /^badge-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'px-2 py-0 rounded-1.5 text-sm'
        }
        case 'md' : {
          return 'px-3 py-0.5 rounded-2 text-base'
        }
        case 'lg': {
          return 'px-4 py-1 rounded-2.5 text-xl'
        }
      }
    },
    {
      autocomplete: 'badge-<size>',
      layer: LAYER_VARIANT,
    },
  ],
  // icon size
  [
    /^badge-icon-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'size-6 justify-center p-1 text-sm rounded-1.5'
        }
        case 'md' : {
          return 'size-7 justify-center p-1.5 text-base rounded-2'
        }
        case 'lg': {
          return 'size-8 justify-center p-1.5 text-xl rounded-2.5'
        }
      }
    },
    {
      autocomplete: 'badge-icon-<size>',
      layer: LAYER_ICON,
    },
  ],
  // variant
  [
    /^badge-(solid|outline|soft)(-.*)?$/,
    ([,c, d], { theme }) => {
      const key = resolveThemeKey(theme, d?.slice(1))

      switch (c) {
        case 'solid': {
          return withThemeKey('bg-primary text-white', key)
        }
        case 'outline': {
          return withThemeKey('text-primary border border-solid border-primary', key)
        }
        case 'soft': {
          return withThemeKey('text-primary-500 bg-primary-50 dark:bg-primary-950', key)
        }
      }
    },
    {
      autocomplete: [
        'badge-(solid|outline|soft)',
        'badge-(solid|outline|soft)-$colors',
      ],
      layer: LAYER_VARIANT,
    },
  ],
]
