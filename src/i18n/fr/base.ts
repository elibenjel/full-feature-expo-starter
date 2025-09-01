import { b } from './utils'

const status = {
  error: b('erreur'),
  warning: b('attention'),
  info: b('information'),
  note: b('note'),
  tip: b('conseil'),
  success: b('succès'),
  failure: b('échec'),
  pending: b('en cours'),
  loading: b('chargement'),
  empty: b('vide'),
}

const action = {
  back: b('retour'),
  confirm: b('confirmer'),
  next: b('suivant'),
}

const currency = {
  amount: '{0|formatCurrency}',
}

const word = {
  capitalize: '{0|capitalize}',
}

export const base = {
  status,
  action,
  currency,
  word,
}
