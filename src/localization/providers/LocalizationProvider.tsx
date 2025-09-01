import * as React from 'react'

import { initLocalizationContext } from '@/i18n/context'
import TypesafeI18n from '@/i18n/i18n-react'
import { Locales } from '@/i18n/i18n-types'
import { loadLocaleAsync } from '@/i18n/i18n-util.async'
import type { LocalizationContextType } from '@/i18n/types'
import '@/polyfill/Intl'

import getLocale from '../utils/getLocale'

export const LocalizationContext = React.createContext<LocalizationContextType | null>(null)

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const [languageTag, setLanguageTag] = React.useState<Locales | null>(null)
  const locale = getLocale()

  React.useEffect(() => {
    loadLocaleAsync(locale.languageTag).then(() => {
      setLanguageTag(locale.languageTag)
      initLocalizationContext(locale)
    })
  }, [locale, setLanguageTag])

  if (languageTag === null) return null

  return (
    <LocalizationContext.Provider value={locale}>
      <TypesafeI18n locale={languageTag}>{children}</TypesafeI18n>
    </LocalizationContext.Provider>
  )
}
