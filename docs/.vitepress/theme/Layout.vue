<script lang="ts" setup>
import { useRoute } from 'vitepress'
import Default from './layouts/Default.vue'
import FramesDefault from './layouts/FramesDefault.vue'

const route = useRoute()
</script>

<template>
  <FramesDefault v-if="route.path.startsWith('/frames/default')" />
  <Default v-else />
</template>
