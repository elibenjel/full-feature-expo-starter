import { Locales } from '@/i18n/i18n-types'

import { LocalizationContextType } from '../../types'

export const formatCurrency = (
  value: unknown,
  locale: Locales,
  localizationContext?: LocalizationContextType
) => {
  const currency = value as number
  const currencyCode = localizationContext?.currencyCode
  if (!currencyCode) {
    return currency
  }
  return Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(currency)
}
