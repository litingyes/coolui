import type { PresetMiniOptions, Theme } from 'unocss/preset-mini'
import { definePreset, mergeDeep, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { shortcuts } from './shortcuts'
import { createTheme } from './theme'

export interface PresetCoolOptions {
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

const defaultOptions: PresetCoolOptions = {
  theme: {
    primary: 'blue',
    cool: 'gray',
    info: '#8c8c8c',
    success: 'green',
    warning: 'yellow',
    error: 'red',

  },
  dark: 'class',
  prefix: 'cool-',
}

export default definePreset<Partial<PresetCoolOptions>, Theme>((options = {}) => {
  const resolvedOptions = mergeDeep(options, defaultOptions)

  return {
    name: 'cool',
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
    shortcuts,
    autocomplete: {
      shorthands: {
        'size': '(sm|md|lg)',
        'form-state': '(readonly|disable)',
      },
    },
  }
})
