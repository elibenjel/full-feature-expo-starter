import { LocalizationContextType } from './types'

const localizationContext: {
  value?: LocalizationContextType
} = {}

export const initLocalizationContext = (value: LocalizationContextType) => {
  localizationContext.value = value
}

export const getLocalizationContext = () => {
  if (!localizationContext.value) {
    console.warn(
      'Localization context not initialized, did you forget to wrap your app in <LocalizationProvider> ?'
    )
  }
  return localizationContext.value
}
