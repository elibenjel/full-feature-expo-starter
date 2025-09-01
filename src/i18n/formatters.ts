import type { FormattersInitializer } from 'typesafe-i18n'

import { formatCurrency } from '@/i18n/formatters/currency'
import { capitalize } from '@/i18n/formatters/words'

import { getLocalizationContext } from './context'
import type { Formatters, Locales } from './i18n-types'

export const initFormatters: FormattersInitializer<Locales, Formatters> = (locale: Locales) => {
  const formatters: Formatters = {
    // add your formatter functions here
    capitalize: (value: unknown) => capitalize(value, locale, getLocalizationContext()),
    formatCurrency: (value: unknown) => formatCurrency(value, locale, getLocalizationContext()),
  }

  return formatters
}
