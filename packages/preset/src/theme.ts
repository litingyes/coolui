import type { Theme } from 'unocss/preset-mini'
import type { PresetWowOptions } from './index'
import { theme } from 'magic-color'

export function createTheme(options: PresetWowOptions): Theme {
  const primaryColors = theme(options.theme.primary, {
    type: 'rgb',
  })
  const coolColors = theme(options.theme.cool, {
    type: 'rgb',
  })
  const infoColors = theme(options.theme.info, {
    type: 'rgb',
  })
  const successColors = theme(options.theme.success, {
    type: 'rgb',
  })
  const warningColors = theme(options.theme.warning, {
    type: 'rgb',
  })
  const errorColors = theme(options.theme.error, {
    type: 'rgb',
  })

  return {
    colors: {
      primary: {
        DEFAULT: primaryColors[500],
        ...primaryColors,
      },
      cool: {
        DEFAULT: coolColors[500],
        ...coolColors,
      },
      info: {
        DEFAULT: infoColors[500],
        ...infoColors,
      },
      success: {
        DEFAULT: successColors[500],
        ...successColors,
      },
      warning: {
        DEFAULT: warningColors[500],
        ...warningColors,
      },
      error: {
        DEFAULT: errorColors[500],
        ...errorColors,
      },
    },
  }
}
