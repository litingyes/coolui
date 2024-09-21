import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index.ts',
    './src/preset.ts',
  ],
  declaration: true,
  clean: true,
})
