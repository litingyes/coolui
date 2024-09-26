// @unocss-ide-include

import type { UserShortcuts } from 'unocss'
import type { Theme } from 'unocss/preset-mini'

export const base: UserShortcuts<Theme> = [
  [
    /^form-(readonly|disabled)$/,
    ([,c]) => {
      switch (c) {
        case 'readonly': {
          return '!pointer-events-none'
        }
        case 'disabled' : {
          return 'form-readonly !grayscale'
        }
      }
    },
    {
      autocomplete: 'form-<form-state>',
    },
  ],
]
