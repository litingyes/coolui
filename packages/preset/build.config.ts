import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index.ts',
  ],
  declaration: true,
  rollup: {
    inlineDependencies: true,
    emitCJS: true,
    cjsBridge: true,
  },
  clean: true,
})
