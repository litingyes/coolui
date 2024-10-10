import type { App } from 'vue'
import { CAvatar } from './components/avatar'
import { CBadge } from './components/badge'

export default {
  install: (app: App) => {
    app.component(CAvatar.name!, CAvatar)
    app.component(CBadge.name!, CBadge)
  },
}
