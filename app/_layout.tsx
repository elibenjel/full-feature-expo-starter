import { SplashScreen, Stack } from 'expo-router'

import * as React from 'react'
import { Assets } from 'react-native-ui-lib'

import App from '@/App'
import { CheckAuth } from '@/features/auth'
import { After } from '@/lib/ui'
import '@/resources/fonts'
import '@/resources/images'
import '@/resources/lottie'
import '@/resources/theme'

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})

const onAnimationLoaded = async () => {
  try {
    await SplashScreen.hideAsync()
  } catch (e) {
    console.warn(e)
  }
}

export default function Layout() {
  return (
    <>
      <After
        in
        lottieSrc={Assets.lottie.questionMark}
        onAnimationLoaded={onAnimationLoaded}
        delay={20}
      >
        <App>
          <CheckAuth>
            {({ authenticated }) => (
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: {
                    backgroundColor: 'white',
                  },
                }}
              >
                <Stack.Protected guard={authenticated}>
                  <Stack.Screen name="(app)" />
                </Stack.Protected>
                <Stack.Protected guard={!authenticated}>
                  <Stack.Screen
                    name="login"
                    options={{
                      animation: 'none',
                    }}
                  />
                </Stack.Protected>
              </Stack>
            )}
          </CheckAuth>
        </App>
      </After>
    </>
  )
}
