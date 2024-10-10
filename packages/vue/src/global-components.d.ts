import type Avatar from './components/avatar/avatar.vue'
import type Badge from './components/badge/Badge.vue'

declare module 'vue' {
  export interface GlobalComponents {
    CAvatar: typeof Avatar
    CBadge: typeof Badge
  }
}

export {}
