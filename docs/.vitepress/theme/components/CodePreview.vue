<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { getWhyframeSource } from '@whyframe/core/utils'
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki/core'
import html from 'shiki/langs/html.mjs'
import vue from 'shiki/langs/vue.mjs'
import catppuccinLatte from 'shiki/themes/catppuccin-latte.mjs'
import catppuccinMacchiato from 'shiki/themes/catppuccin-macchiato.mjs'
import { computed, ref } from 'vue'

defineOptions({
  name: 'CodePreview',
})

const props = withDefaults(defineProps<{
  title?: string
  src?: '/frames/default'
  lang: 'html' | 'vue'
}>(), {
  title: 'Code Preview',
  src: '/frames/default',
  lang: 'html',
})

const iframeRef = ref<HTMLIFrameElement>()

const source = computed(() => {
  return iframeRef.value ? getWhyframeSource(iframeRef.value)! : ''
})

const showSource = ref(false)
const highlighter = createHighlighterCoreSync({
  langs: [html, vue],
  themes: [catppuccinLatte, catppuccinMacchiato],
  engine: createJavaScriptRegexEngine(),
})
const highlightedSource = computed(() => {
  return highlighter.codeToHtml(source.value, {
    lang: props.lang,
    themes: {
      light: catppuccinLatte,
      dark: catppuccinMacchiato,
    },
  })
})

const { copy, copied } = useClipboard({ source })

const isLoaded = ref(false)
function onLoad() {
  isLoaded.value = true
}
</script>

<template>
  <div class="relative my-4 h-full overflow-hidden border border-cool-100 rounded-2 border-solid p-1 dark:border-cool-900">
    <div v-if="!isLoaded" class="absolute inset-0 z-99 flex items-center justify-center bg-cool-50/5 font-600 backdrop-blur">
      <span class="from-pink-500 to-violet-500 bg-gradient-to-r bg-clip-text text-xl text-transparent"> Cool UI</span>
    </div>
    <div class="grid grid-rows-[0fr] transition-all duration-300" :class="{ 'grid-rows-[1fr]': isLoaded }">
      <div class="overflow-hidden">
        <iframe ref="iframeRef" class="w-full border-none" :title="title" :src="src" data-why @load="onLoad">
          <slot />
        </iframe>
      </div>
    </div>
    <div class="flex items-center my-2 justify-end">
      <div btn="~ icon-md ghost" @click="copy(source)">
        <Transition>
          <i v-if="copied" class="i-carbon:checkmark-outline h-1em w-1em text-success" />
          <i v-else class="h-1em w-1em i-ion:copy-outline" />
        </Transition>
      </div>
      <div btn="~ icon-md ghost" @click="showSource = !showSource">
        <Transition>
          <i v-if="showSource" class="h-1em w-1em i-mdi:hide" />
          <i v-else class="h-1em w-1em i-mdi:show-outline" />
        </Transition>
      </div>
    </div>
    <section class="grid grid-rows-[0fr] transition-all duration-300" :class="{ 'grid-rows-[1fr]': showSource }">
      <div class="overflow-hidden [&>pre]:my-0 [&>pre]:rounded [&>pre]:p-2" v-html="highlightedSource" />
    </section>
  </div>
</template>
