import { defineConfig } from 'unocss'
// @ts-expect-error in development
import presetCool from './packages/preset'

export default defineConfig({
  presets: [
    presetCool(),
  ],
})
