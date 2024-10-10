<script lang="ts" setup>
import type { SIZES } from '../../types'
import { computed } from 'vue'

defineOptions({
  name: 'CAvatar',
})

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  size?: SIZES
  rounded?: boolean
}>(), {
  alt: 'Avatar',
  size: 'md',
  rounded: false,
})

const unoClasses = computed(() => {
  const classes: string[] = ['avatar']

  switch (props.size) {
    case 'sm': {
      classes.push('avatar-sm')
      break
    }
    case 'lg': {
      classes.push('avatar-lg')
      break
    }
    default: {
      classes.push('avatar-md')
    }
  }

  if (props.rounded) {
    classes.push('rounded-full')
  }

  return classes
})
</script>

<template>
  <div :class="unoClasses">
    <slot>
      <img :src="src" :alt="alt">
    </slot>
  </div>
</template>
