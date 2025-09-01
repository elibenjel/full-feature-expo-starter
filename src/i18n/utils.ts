import { capitalize } from './formatters/words'
import { Locales } from './i18n-types'
import { WordTranslation } from './types'

export const buildWordTranslation = (word: string, locale: Locales): WordTranslation => ({
  default: word,
  capitalize: capitalize(word, locale),
})
