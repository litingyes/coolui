import type { Theme } from 'unocss/preset-mini'
import { isString } from 'unocss'

export function resolveThemeKey(theme: Theme, themeKey?: string) {
  if (!themeKey || !theme.colors || isString(theme.colors[themeKey])) {
    return 'primary'
  }

  return themeKey
}

export function withThemeKey(rules: string, key: string) {
  return rules.replaceAll('primary', key)
}
