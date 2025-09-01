import { useContext } from 'react'

import { useI18nContext } from '@/i18n/i18n-react'

import { LocalizationContext } from '../providers/LocalizationProvider'

export function useLocalization() {
  const localization = useContext(LocalizationContext)
  const { LL } = useI18nContext()

  if (localization === null) {
    throw new Error('useLocalization must be used within a LocalizationProvider')
  }

  return {
    ...localization,
    LL,
  }
}
