import { useAuth } from '@/features/auth'
import { Text, View } from '@/lib/ui'
import { useLocalization } from '@/localization/hooks'

export default function Screen() {
  const { userId } = useAuth()
  const { LL } = useLocalization()
  return (
    <View bg-screenBG flex center>
      <Text center $textNeutral>
        {LL.youAreConnected(userId)}
      </Text>
    </View>
  )
}
