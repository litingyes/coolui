import type { App } from 'vue'
import { CBadge } from './components/badge'

export default {
  install: (app: App) => {
    app.component(CBadge.name!, CBadge)
  },
}
