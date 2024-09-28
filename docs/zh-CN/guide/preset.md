# 基于 UnoCSS 的 Cool UI Preset

## 层级

CSS 的顺序会影响它们的优先级。虽然 UnoCSS 引擎将保留[规则引用的顺序](https://unocss.dev/config/rules#ordering)，但有时你可能希望对一些实用 CSS 进行分组以对其顺序进行显式控制。

**Cool preset** 自定义了以下 CSS 层级：

<<< ../../../packages/preset/src/layers.ts
