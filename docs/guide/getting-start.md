# Getting Started

## Installation

::: code-group

```bash pnpm
pnpm add -D unocss @coolui/preset
```

```bash npm
npm install -D unocss @coolui/preset
```

:::

## UnoCSS Configuration

::: tip
If haven't installed UnoCSS in project yet, please refer to its [documentation](https://unocss.dev/guide/)
:::

```ts{2,7}
// uno.config.ts
import presetCool from '@coolui/preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetCool(),
  ],
})
```

## Integrations

<div class="grid grid-cols-2 gap-6">
  <div class="border border-solid border-cool-100 px-4 py-3 rounded-2 flex items-center gap-6 dark:border-cool-900">
    <div class="text-4xl">
      <i class="i-logos:vue w-1em h-1em"></i>
    </div>
    <div>
      <div class="font-500 from-purple-500 bg-gradient-to-r bg-clip-text text-transparent to-green-500">
        Vite + Vue + Cool UI
      </div>
      <div class="flex items-center gap-2 flex-wrap mt-1 text-sm">
        <a
          class="flex items-center gap-1"
          href="https://github.com/litingyes/coolui/tree/main/examples/viteVue"
          target="_blank"
        >
          <i class="i-mdi:github w-1em h-1em"></i>
          Source</a
        >
        <a
          class="flex items-center gap-1"
          href="https://stackblitz.com/fork/github/litingyes/coolui/tree/main/examples/viteVue"
          target="_blank"
        >
          <i class="i-mdi:play-room w-1em h-1em"></i>
          Play online</a
        >
      </div>
    </div>
  </div>
  <div class="border border-solid border-cool-100 px-4 py-3 rounded-2 flex items-center gap-6 dark:border-cool-900">
    <div class="text-4xl">
      <i class="i-logos:react w-1em h-1em"></i>
    </div>
    <div>
      <div class="font-500 from-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">
        Vite + React + Cool UI
      </div>
      <div class="flex items-center gap-2 flex-wrap mt-1 text-sm">
        <a
          class="flex items-center gap-1"
          href="https://github.com/litingyes/coolui/tree/main/examples/viteReact"
          target="_blank"
        >
          <i class="i-mdi:github w-1em h-1em"></i>
          Source</a
        >
        <a
          class="flex items-center gap-1"
          href="https://stackblitz.com/fork/github/litingyes/coolui/tree/main/examples/viteReact"
          target="_blank"
        >
          <i class="i-mdi:play-room w-1em h-1em"></i>
          Play online</a
        >
      </div>
    </div>
  </div>
</div>

::: details More framework integration solutions
UnoCSS can theoretically be integrated with any front-end framework. For more information, please refer to its [documentation](https://unocss.dev/integrations/)
:::
