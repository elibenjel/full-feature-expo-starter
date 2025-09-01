import { Locales } from '@/i18n/i18n-types'

import { LocalizationContextType } from '../../types'

export const capitalize = (
  value: unknown,
  locale: Locales,
  localizationContext?: LocalizationContextType
) => {
  const str = value as string
  return str.charAt(0).toUpperCase() + str.slice(1)
}
