import type { PresetMiniOptions } from 'unocss/preset-mini'
import { definePreset, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export interface PresetWowOptions {
  dark: PresetMiniOptions['dark']
  prefix: PresetMiniOptions['variablePrefix']
}

export default definePreset((options: PresetWowOptions = {
  dark: 'class',
  prefix: 'wow',
}) => {
  return {
    name: 'wow',
    presets: [
      presetUno({
        dark: options.dark,
        variablePrefix: options.prefix,
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
  }
})
