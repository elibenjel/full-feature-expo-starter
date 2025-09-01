import * as Localization from 'expo-localization'

import { DEFAULT_LOCALE } from '@/i18n/constants'
import { isLocale } from '@/i18n/i18n-util'
import { LocalizationContextType } from '@/i18n/types'

export default function getLocale(): LocalizationContextType {
  return (
    (Localization.getLocales().find(it => isLocale(it.languageTag)) as LocalizationContextType) ??
    DEFAULT_LOCALE
  )
}
