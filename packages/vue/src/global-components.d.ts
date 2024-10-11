import type Avatar from './components/avatar/avatar.vue'

declare module 'vue' {
  export interface GlobalComponents {
    CAvatar: typeof Avatar
  }
}

export {}
