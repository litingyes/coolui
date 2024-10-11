import type { App } from 'vue'
import { CAvatar } from './components/avatar'

export default {
  install: (app: App) => {
    app.component(CAvatar.name!, CAvatar)
  },
}
