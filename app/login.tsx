import { CommonActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'

import * as React from 'react'

import { useAuth } from '@/features/auth'
import SignInWithOtpScreen from '@/screens/auth/otp'

export default function Screen() {
  const { authenticated } = useAuth()
  const navigation = useNavigation()
  React.useEffect(() => {
    // reset the navigation stack to the concept screen in case of successful login
    if (authenticated) {
      // TODO: Consider adding profile setup flow here
      // - Check if user has completed profile setup (preferences, allergies, etc.)
      // - If not, redirect to profile setup screens
      // - If yes, redirect to main app
      // - Could use a GraphQL query to check customer profile completeness

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: '(app)',
              state: {
                routes: [{ name: 'concept' }],
              },
            },
          ],
        })
      )
    }
  }, [authenticated, navigation])
  return <SignInWithOtpScreen />
}
