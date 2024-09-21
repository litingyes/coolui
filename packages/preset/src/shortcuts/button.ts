// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'

export const button: UserShortcuts<Theme> = [
  {
    btn: 'inline-flex items-center gap-1 text-sm transition duration-300 active:scale-106 [&+.btn,&+[btn]]:ml-2',
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
  ],
  // variant
  [
    /^btn-(solid|outline|ghost)$/,
    ([,c]) => {
      switch (c) {
        case 'solid': {
          return 'bg-primary text-white hover:bg-primary-700 active:bg-primary-800'
        }
        case 'outline': {
          return 'text-primary border border-solid border-primary hover:(text-primary-700 border-primary-700) active:(text-primary-800 border-primary-800)'
        }
        case 'ghost': {
          return 'text-primary-500 hover:bg-cool-100 active:bg-cool-200'
        }
      }
    },
  ],
]
