import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  react: true,
  formatters: true,
  unocss: true,
  ignores: [
    'pnpm-lock.yaml',
    '**/node_modules/*',
    '**/dist/*',
    '**/cache/*',
  ],
})
