// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { LAYER_BASE, LAYER_VARIANT } from '../layers'

export const avatar: UserShortcuts<Theme> = [
  [
    'avatar',
    'inline-flex justify-center items-center overflow-hidden cursor-pointer size-8 rounded-2 [&+.avatar,&+[avatar]]:ml-2',
    {
      layer: LAYER_BASE,
    },
  ],
  [
    /^avatar-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'size-6'
        }
        case 'md' : {
          return 'size-8'
        }
        case 'lg': {
          return 'size-10'
        }
      }
    },
    {
      autocomplete: 'avatar-<size>',
      layer: LAYER_VARIANT,
    },
  ],
]
