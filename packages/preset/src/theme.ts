import type { Theme } from 'unocss/preset-mini'
import type { PresetCoolOptions } from './index'
import { theme } from 'magic-color'

function formatTheme(name: string, color: string) {
  return theme(color, {
    type: 'rgb',
    render: ([key, value]) =>
      [
        String(key),
        `var(--cool-theme-${name}-${key}, ${value.replace(')', ' / %alpha)')})`,
      ],
  })
}

export function createTheme(options: PresetCoolOptions): Theme {
  const primaryColors = formatTheme('primary', options.theme.primary)
  const coolColors = formatTheme('cool', options.theme.cool)
  const infoColors = formatTheme('info', options.theme.info)
  const successColors = formatTheme('success', options.theme.success)
  const warningColors = formatTheme('warning', options.theme.warning)
  const errorColors = formatTheme('error', options.theme.error)

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
