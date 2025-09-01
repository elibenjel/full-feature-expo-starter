import type { BaseTranslation } from '../i18n-types'
import { auth } from './auth'
import { base } from './base'

/**
 * Translations for the French language.
 * PascalCase keys are used for refering to components, MACRO_CASE keys are used for enums, camelCase keys are used otherwise.
 */
const fr = {
  youAreConnected: 'Vous êtes connecté ! (id: {0})',
  base,
  auth,
} satisfies BaseTranslation

export default fr
