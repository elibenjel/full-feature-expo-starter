/**
 * On native, we need to polyfill some of the Intl namespace
 * This is needed by typescript-i18n to work properly
 */
import getCanonicalLocales from '@formatjs/intl-getcanonicallocales/polyfill'
import Locale from '@formatjs/intl-locale/polyfill'
import PluralRules from '@formatjs/intl-pluralrules/polyfill'

export { getCanonicalLocales, Locale, PluralRules }
