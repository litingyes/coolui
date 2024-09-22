import type { Theme } from 'unocss/preset-mini'
import { toArray, type UserShortcuts } from 'unocss'
import { badge } from './badge'
import { base } from './base'
import { button } from './button'
import { checkbox } from './checkbox'
import { input } from './input'
import { radio } from './radio'

export const shortcuts: UserShortcuts<Theme> = [
  ...toArray(base),

  // basic
  ...toArray(button),
  ...toArray(badge),

  // form
  ...toArray(input),
  ...toArray(checkbox),
  ...toArray(radio),
]
