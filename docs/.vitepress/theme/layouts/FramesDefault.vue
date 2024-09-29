<script lang="ts" setup>
import type { App } from 'vue'
import { CoolUI } from '@coolui/vue'
import { onMounted, ref } from 'vue'
// @ts-expect-error whyframe:app module
import { createApp } from 'whyframe:app'

defineOptions({
  name: 'FramesDefault',
})

const containerRef = ref<HTMLDivElement>()

onMounted(() => {
  createApp(containerRef.value!, {
    enhanceApp: (app: App) => {
      app.use(CoolUI)
    },
  })
  document.body.setAttribute('data-frame', 'default')
})
</script>

<template>
  <div class="h-full flex items-center justify-center p-4">
    <div ref="containerRef" />
  </div>
</template>

<style lang="scss">
[data-frame] {
  #app {
    height: 100vh;
  }
}
</style>
