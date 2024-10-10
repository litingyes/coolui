import type Badge from './components/badge/Badge.vue'

declare module 'vue' {
  export interface GlobalComponents {
    CBadge: typeof Badge
  }
}

export {}
