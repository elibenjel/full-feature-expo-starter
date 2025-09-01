import { Assets } from 'react-native-ui-lib'

import { StateScreen, Text, View } from '@/lib/ui'

export function DefaultError({
  errorMessage,
  onRetry,
}: {
  errorMessage: string
  onRetry?: () => void
}) {
  return (
    <StateScreen
      title="Toutes nos excuses"
      subtitle={
        <View paddingH-16>
          <Text center $textNeutral text70>
            {errorMessage}
          </Text>
        </View>
      }
      ctaLabel={onRetry ? 'Réessayer' : undefined}
      onCtaPress={onRetry}
      imageSource={Assets.images.bowingChef}
    />
  )
}
