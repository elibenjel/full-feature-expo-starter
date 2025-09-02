import { router } from 'expo-router'

import * as React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useAuth } from '@/features/auth'
import { supabase } from '@/features/auth/supabase'
import { Button, Text, View } from '@/lib/ui'
import { useLocalization } from '@/localization/hooks'

export default function Screen() {
  const { userId } = useAuth()
  const { LL } = useLocalization()
  const [isPending, startTransition] = React.useTransition()
  const signOut = React.useCallback(async () => {
    startTransition(async () => {
      await supabase.auth.signOut()
      router.replace('/')
    })
  }, [])

  const inset = useSafeAreaInsets()
  return (
    <View bg-screenBG flex paddingH-32 style={{ paddingBottom: inset.bottom }}>
      <View center flex>
        <Text center $textNeutral>
          {LL.youAreConnected(userId)}
        </Text>
      </View>
      <Button loading={isPending} label="Sign Out" onPress={signOut} />
    </View>
  )
}
