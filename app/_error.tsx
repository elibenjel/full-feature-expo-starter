import { router } from 'expo-router'

import { DefaultError } from '@/screens/status/error'

export default function Error() {
  return (
    <DefaultError errorMessage="Une erreur est survenue" onRetry={() => router.dismissTo('/')} />
  )
}
