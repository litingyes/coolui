// @ts-expect-error in development mode
import presetCool from '@coolui/preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetCool(),
  ],
})
