import type { AttributifyOptions } from 'unocss/preset-attributify'
import type { IconsOptions } from 'unocss/preset-icons'
import type { Theme } from 'unocss/preset-mini'
import type { PresetUnoOptions } from 'unocss/preset-uno'
import { definePreset, mergeDeep, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { layers } from './layers'
import { createPreflights } from './preflights'
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
  uno?: PresetUnoOptions
  icons?: IconsOptions
  attributify?: AttributifyOptions
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
  uno: {
    dark: 'class',
  },
  icons: {
    extraProperties: {
      'display': 'inline-block',
      'vertical-align': 'middle',
    },
  },
  attributify: {},
}

export default definePreset<Partial<PresetCoolOptions>, Theme>((options = {}) => {
  const resolvedOptions = mergeDeep(defaultOptions, options)

  return {
    name: 'cool',
    presets: [
      presetUno(resolvedOptions.uno),
      presetIcons(resolvedOptions.icons),
      presetAttributify(resolvedOptions.attributify),
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
    preflights: createPreflights(),
    layers,
  }
})
