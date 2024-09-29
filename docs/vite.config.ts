import type { Plugin } from 'vite'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    whyframe({
      defaultSrc: '/frames/default',
      defaultShowSource: true,
      components: [
        {
          name: 'CodePreview',
        },
      ],
    }),
    whyframeVue({
      include: /\.(?:vue|md)$/,
    }),
    codePreview(),
  ],
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
})

function codePreview(): Plugin {
  const regexp = /```html([\s\S]*?)```/gi
  const regexpForVue = /```vue preview([\s\S]*?)```/gi

  return {
    name: 'code-preview',
    transform: (code, id) => {
      if (!id.endsWith('.md')) {
        return
      }

      if (regexp.test(code)) {
        code = code.replaceAll(regexp, (_, source: string) => {
          return `<CodePreview lang="html">${source.trim()}</CodePreview>`
        })
      }

      if (regexpForVue.test(code)) {
        code = code.replaceAll(regexpForVue, (_, source: string) => {
          return `<CodePreview lang="vue">${source.trim()}</CodePreview>`
        })
      }

      return code
    },
  }
}
