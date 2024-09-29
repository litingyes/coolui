import type { Theme } from 'vitepress'
import { CoolUI } from '@coolui/vue'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CodePreview from './components/CodePreview.vue'
import Layout from './Layout.vue'
import 'uno.css'
import './style.scss'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp({ app }) {
    app.component(CodePreview.name!, CodePreview)
    app.use(CoolUI)
  },
} satisfies Theme
