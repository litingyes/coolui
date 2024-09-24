import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CodePreview from './components/CodePreview.vue'
import Layout from './Layout.vue'
import './style.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp({ app }) {
    app.component(CodePreview.name!, CodePreview)
  },
} satisfies Theme
