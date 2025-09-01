import { Locale as DateFnsLocale } from 'date-fns'
import { Locale } from 'expo-localization'

import { Locales } from '@/i18n/i18n-types'

export type WordTranslation = {
  default: string
  capitalize: string
}

export interface LocalizationContextType extends Locale {
  languageTag: Locales
  dateFnsLocale: DateFnsLocale
}
