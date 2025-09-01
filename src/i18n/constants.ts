import { fr } from 'date-fns/locale'

import { Locales } from '@/i18n/i18n-types'
import { baseLocale } from '@/i18n/i18n-util'

import { LocalizationContextType } from './types'

export const DEFAULT_LANGUAGE_TAG: Locales = baseLocale
export const DEFAULT_DATE_FNS_LOCALE = fr
export const DEFAULT_LANGUAGE_SCRIPT_CODE = null
export const DEFAULT_LANGUAGE_CODE: string = DEFAULT_LANGUAGE_TAG.split('-')[0]
export const DEFAULT_REGION_CODE: string = DEFAULT_LANGUAGE_TAG.split('-')[1]
export const DEFAULT_LANGUAGE_REGION_CODE: string = DEFAULT_LANGUAGE_TAG
export const DEFAULT_CURRENCY_CODE: string = 'EUR'
export const DEFAULT_CURRENCY_SYMBOL: string = '€'

export const DEFAULT_DECIMAL_SEPARATOR: string = ','
export const DEFAULT_DIGIT_GROUPING_SEPARATOR: string = ' '
export const DEFAULT_TEXT_DIRECTION: 'ltr' | 'rtl' = 'ltr'
export const DEFAULT_MEASUREMENT_SYSTEM: 'metric' | 'imperial' = 'metric'
export const DEFAULT_TEMPERATURE_UNIT: 'celsius' | 'fahrenheit' = 'celsius'

export const DEFAULT_LOCALE: LocalizationContextType = {
  languageTag: DEFAULT_LANGUAGE_TAG,
  languageCode: DEFAULT_LANGUAGE_CODE,
  languageScriptCode: DEFAULT_LANGUAGE_SCRIPT_CODE,
  regionCode: DEFAULT_REGION_CODE,
  languageRegionCode: DEFAULT_LANGUAGE_REGION_CODE,
  currencyCode: DEFAULT_CURRENCY_CODE,
  currencySymbol: DEFAULT_CURRENCY_SYMBOL,
  languageCurrencyCode: DEFAULT_CURRENCY_CODE,
  languageCurrencySymbol: DEFAULT_CURRENCY_SYMBOL,
  decimalSeparator: DEFAULT_DECIMAL_SEPARATOR,
  digitGroupingSeparator: DEFAULT_DIGIT_GROUPING_SEPARATOR,
  textDirection: DEFAULT_TEXT_DIRECTION,
  measurementSystem: DEFAULT_MEASUREMENT_SYSTEM,
  temperatureUnit: DEFAULT_TEMPERATURE_UNIT,
  dateFnsLocale: DEFAULT_DATE_FNS_LOCALE,
}
