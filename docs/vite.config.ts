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

  return {
    name: 'code-preview',
    transform: (code, id) => {
      if (!id.endsWith('.md') || !regexp.test(code)) {
        return
      }

      return code.replaceAll(regexp, (_, source: string) => {
        return `<CodePreview>${source.trim()}</CodePreview>`
      })
    },
  }
}
