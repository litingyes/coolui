import type { PresetMiniOptions, Theme } from 'unocss/preset-mini'
import { defu } from 'defu'
import { definePreset, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { createTheme } from './theme'

export interface PresetWowOptions {
  theme: {
    primary: string
    cool: string
    info: string
    success: string
    warning: string
    error: string
  }
  dark: PresetMiniOptions['dark']
  prefix: PresetMiniOptions['variablePrefix']
}

const defaultOptions: PresetWowOptions = {
  theme: {
    primary: 'blue',
    cool: 'gray',
    info: '#8c8c8c',
    success: 'green',
    warning: 'yellow',
    error: 'red',

  },
  dark: 'class',
  prefix: 'wow',
}

export default definePreset<Partial<PresetWowOptions>, Theme>((options = {}) => {
  const resolvedOptions = defu<PresetWowOptions, [PresetWowOptions]>(options, defaultOptions)

  return {
    name: 'wow',
    presets: [
      presetUno({
        dark: resolvedOptions.dark,
        variablePrefix: resolvedOptions.prefix,
      }),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      presetAttributify({
        prefix: options.prefix,
      }),
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
    ],
    extendTheme: (defaultTheme) => {
      const { colors } = createTheme(resolvedOptions)

      return {
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          ...colors,
        },
      }
    },
  }
})
