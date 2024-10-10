import type { Theme } from 'unocss/preset-mini'
import { toArray, type UserShortcuts } from 'unocss'
import { avatar } from './avatar'
import { badge } from './badge'
import { base } from './base'
import { button } from './button'
import { checkbox } from './checkbox'
import { input } from './input'
import { radio } from './radio'
import { toggle } from './toggle'

export const shortcuts: UserShortcuts<Theme> = [
  ...toArray(base),

  // display
  ...toArray(avatar),
  ...toArray(badge),

  // interaction
  ...toArray(button),

  // form
  ...toArray(checkbox),
  ...toArray(input),
  ...toArray(radio),
  ...toArray(toggle),
]
