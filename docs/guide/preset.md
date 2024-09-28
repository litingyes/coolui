# Cool UI Preset based on UnoCSS

`@coolui/preset` is the core of **Cool UI**, which defines various logics closely related to **UnoCSS**, including themes, CSS rules, CSS reference sequence, etc.

## Layers

> The order of CSS will affect their priorities. While the engine will retain [the order of rules](https://unocss.dev/config/rules#ordering), sometimes you may want to group some utilities to have explicit control of their order.

**Cool preset** customizes the following layers：

<<< ../../packages/preset/src/layers.ts

## Options

```ts
export interface PresetCoolOptions {
  // Theme style group that Cool UI depends on
  theme: {
    // default: blue
    primary: string

    // default: gray
    cool: string

    // default: #8c8c8c
    info: string

    // default: green
    success: string

    // default: yellow
    warning: string

    // default: red
    error: string
  }

  // Corresponding preset options

  // default: { dark: 'class' }
  uno?: PresetUnoOptions

  /*
   * default:
   * {
   *  extraProperties: {
   *   'display': 'inline-block',
   *   'vertical-align': 'middle',
   *  }
   * }
  */
  icons?: IconsOptions

  // default: {}
  attributify?: AttributifyOptions
}
```
