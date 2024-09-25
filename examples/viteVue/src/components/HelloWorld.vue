<script setup lang="ts">
</script>

<template>
  <h1 class="from-purple-500 bg-gradient-to-r bg-clip-text text-transparent to-green-500">
    Vite + Cool UI + Vue
  </h1>
  <p>
    Learn more about Cool UI in the
    <a
      href="https://coolui.litingyes.top/guide/introduction.html"
      target="_blank"
    >Documentation</a>.
  </p>
  <p class="text-cool-500">
    Click on logos to learn more
  </p>
  <div class="my-6 flex items-center justify-center gap-2">
    <label class="font-500">Badges:</label>
    <div badge="~ md solid">
      solid
    </div>
    <div badge="~ md outline">
      outline
    </div>
    <div badge="~ md soft">
      soft
    </div>
  </div>
  <div class="my-6 flex items-center justify-center gap-2">
    <label class="font-500">Icon buttons:</label>
    <button btn="~ icon-sm">
      <i class="i-carbon:color-palette h-1em w-1em" />
    </button>
    <button btn="~ icon-sm solid">
      <i class="i-ph:open-ai-logo h-1em w-1em" />
    </button>
    <button btn="~ icon-md outline">
      <i class="i-vscode-icons:file-type-unocss h-1em w-1em" />
    </button>
    <button btn="~ icon-md soft">
      <i class="i-fxemoji:artistpalette h-1em w-1em" />
    </button>
    <button btn="~ icon-lg ghost">
      <i class="i-logos:figma h-1em w-1em" />
    </button>
  </div>
</template>
