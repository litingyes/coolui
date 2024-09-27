import type { Preflight } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { LAYER_PREFLIGHT } from './layers'

export function createPreflights(): Preflight<Theme>[] {
  return [
    {
      getCSS: () => {
        const tailwind = readFileSync(resolve(__dirname, '../node_modules/@unocss/reset/tailwind.css'), 'utf-8')

        return tailwind
      },
      layer: LAYER_PREFLIGHT,
    },
    {
      getCSS: () => {
        const tailwindCompat = readFileSync(resolve(__dirname, '../node_modules/@unocss/reset/tailwind-compat.css'), 'utf-8')

        return tailwindCompat
      },
      layer: LAYER_PREFLIGHT,
    },
  ]
}
