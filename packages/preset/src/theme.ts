import type { Theme } from 'unocss/preset-mini'
import type { PresetWowOptions } from './index'
import { theme } from 'magic-color'

export function createTheme(options: PresetWowOptions): Theme {
  const primaryColors = theme(options.theme.primary)
  const coolColors = theme(options.theme.cool)
  const infoColors = theme(options.theme.info)
  const successColors = theme(options.theme.success)
  const warningColors = theme(options.theme.warning)
  const errorColors = theme(options.theme.error)

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
