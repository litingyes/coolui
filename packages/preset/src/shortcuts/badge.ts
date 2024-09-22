// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'

export const badge: UserShortcuts<Theme> = [
  {
    badge: 'inline-flex items-center gap-2 cursor-pointer text-sm [&+.badge,&+[badge]]:ml-2',
  },
  // size
  [
    /^badge-(sm|md|lg)$/,
    ([,c]) => {
      switch (c) {
        case 'sm': {
          return 'px-2 py-0 rounded-1.5'
        }
        case 'md' : {
          return 'px-3 py-0.5 rounded-2'
        }
        case 'lg': {
          return 'px-4 py-1 rounded-2.5'
        }
      }
    },
    {
      autocomplete: 'badge-<size>',
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
    },
  ],
  // variant
  [
    /^badge-(solid|outline|soft)$/,
    ([,c]) => {
      switch (c) {
        case 'solid': {
          return 'bg-primary text-white'
        }
        case 'outline': {
          return 'text-primary border border-solid border-primary'
        }
        case 'soft': {
          return 'text-primary-500 bg-primary-50 dark:bg-primary-950'
        }
      }
    },
    {
      autocomplete: 'badge-(solid|outline|soft)',
    },
  ],
]
