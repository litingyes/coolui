<script lang="ts" setup>
import type { SIZES } from '../../types'
import { computed } from 'vue'

defineOptions({
  name: 'CBadge',
})

const props = withDefaults(defineProps<{
  icon?: boolean
  size?: SIZES
  variant?: 'solid' | 'outline' | 'soft'
}>(), {
  icon: false,
  size: 'md',
  variant: 'solid',
})

const unoClasses = computed(() => {
  const classes: string[] = ['badge']

  if (props.icon) {
    switch (props.size) {
      case 'sm': {
        classes.push('badge-icon-sm')
        break
      }
      case 'lg': {
        classes.push('badge-icon-lg')
        break
      }
      default: {
        classes.push('badge-icon-md')
      }
    }
  }
  else {
    switch (props.size) {
      case 'sm': {
        classes.push('badge-sm')
        break
      }
      case 'lg': {
        classes.push('badge-lg')
        break
      }
      default: {
        classes.push('badge-md')
      }
    }
  }

  switch (props.variant) {
    case 'outline': {
      classes.push('badge-outline')
      break
    }
    case 'soft': {
      classes.push('badge-soft')
      break
    }
    default: {
      classes.push('badge-solid')
    }
  }

  return classes
})
</script>

<template>
  <div
    :class="unoClasses"
  >
    <slot />
  </div>
</template>

<style>

</style>
