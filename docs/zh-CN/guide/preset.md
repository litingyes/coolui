# 基于 UnoCSS 的 Cool UI Preset

`@coolui/preset` 是 **Cool UI** 的核心，它定义了和 **UnoCSS** 息息相关的各种逻辑，包括主题、CSS规则、CSS引用数序等

## 层级

CSS 的顺序会影响它们的优先级。虽然 UnoCSS 引擎将保留[规则引用的顺序](https://unocss.dev/config/rules#ordering)，但有时你可能希望对一些实用 CSS 进行分组以对其顺序进行显式控制。

**Cool preset** 自定义了以下 CSS 层级：

<<< ../../../packages/preset/src/layers.ts

## 配置项

```ts
export interface PresetCoolOptions {
  // Cool UI 依赖的主题样式组
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

  // 对应的 preset options

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
