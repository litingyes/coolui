import type { Theme } from 'unocss/preset-mini'
import { toArray, type UserShortcuts } from 'unocss'
import { badge } from './badge'
import { button } from './button'
import { input } from './input'

export const shortcuts: UserShortcuts<Theme> = [
  // basic
  ...toArray(button),
  ...toArray(badge),

  // form
  ...toArray(input),
]
