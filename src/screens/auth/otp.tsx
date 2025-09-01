import * as QueryParams from 'expo-auth-session/build/QueryParams'
import Constants from 'expo-constants'

import * as React from 'react'
import { Alert, Linking } from 'react-native'
import { Colors } from 'react-native-ui-lib'

import { supabase } from '@/features/auth/supabase'
import { Button, Icon, Text, TextField, View } from '@/lib/ui'
import { dim } from '@/lib/ui/utils'
import { useLocalization } from '@/localization/hooks'
import { IS_PROD } from '@/utils/env'

function checkEmail(email: string): boolean {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailRegex.test(email)
}

export default function SignInWithOtpScreen() {
  const { LL } = useLocalization()
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [isEmailValid, setIsEmailValid] = React.useState(false)
  const [isNameValid, setIsNameValid] = React.useState(false)
  const [isSignupMode, setIsSignupMode] = React.useState(false)

  const handleEmailChange = (text: string) => {
    setEmail(text)
    setIsEmailValid(checkEmail(text))
  }

  const handleNameChange = (text: string) => {
    setName(text)
    setIsNameValid(text.trim().length >= 2)
  }

  const toggleMode = () => {
    setIsSignupMode(!isSignupMode)
    // Clear fields when switching modes
    setEmail('')
    setName('')
    setIsEmailValid(false)
    setIsNameValid(false)
  }

  const createSessionFromUrl = async (url: string) => {
    const { params, errorCode } = QueryParams.getQueryParams(url)
    if (errorCode) throw new Error(errorCode)

    const { access_token, refresh_token } = params
    if (!access_token) return

    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    })
    if (error) throw error
    return data.session
  }

  React.useEffect(() => {
    const subscription = Linking.addEventListener('url', async ({ url }) => {
      console.log('Deep link URL:', url)
      try {
        const session = await createSessionFromUrl(url)
        if (session) {
          console.log('Successfully authenticated:', session)
        }
      } catch (error) {
        console.error('Error creating session:', error)
      }
    })

    // Handle deep links when app is opened from closed state
    Linking.getInitialURL().then(async url => {
      if (url) {
        console.log('Initial URL:', url)
        try {
          const session = await createSessionFromUrl(url)
          if (session) {
            console.log('Successfully authenticated:', session)
          }
        } catch (error) {
          console.error('Error creating session:', error)
        }
      }
    })

    return () => {
      subscription.remove()
    }
  }, [])

  const scheme = Constants.expoConfig?.scheme
  console.log('app scheme is:', scheme)
  async function signInWithOtp() {
    if (typeof scheme !== 'string') {
      Alert.alert('App scheme is not correctly configured: ' + scheme)
      return
    }

    const metadata = isSignupMode
      ? {
          name: name.trim(),
          is_prod: IS_PROD,
        }
      : undefined

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${scheme}://`,
        data: metadata,
      },
    })

    if (error) Alert.alert(error.message)
    else Alert.alert(LL.auth.checkEmail({ email }))
    setLoading(false)
  }

  const handleSubmit = async () => {
    let emailExists = false
    setLoading(true)
    try {
      const { data, error: checkError } = await supabase.rpc('check_email_exists', {
        email_to_check: email,
      })
      emailExists = data
      if (checkError) {
        console.error('Error checking email existence:', checkError)
        Alert.alert('Error checking email existence:', checkError.message, [
          {
            text: 'OK',
            style: 'cancel',
            onPress: () => {
              setLoading(false)
            },
          },
        ])
        return
      }
    } catch (error) {
      console.error('Error checking email existence:', error)
      Alert.alert('Error checking email existence:', error as string, [
        {
          text: 'OK',
          style: 'cancel',
          onPress: () => {
            setLoading(false)
          },
        },
      ])
      return
    }

    console.log('emailExists', emailExists)
    if (isSignupMode) {
      if (emailExists) {
        // Email already exists, show appropriate message
        Alert.alert(
          'Account Already Exists',
          'An account with this email already exists. Please sign in instead.',
          [
            {
              text: 'Switch to Sign In',
              onPress: () => {
                setIsSignupMode(false)
                setLoading(false)
              },
            },
            {
              text: 'Cancel',
              style: 'cancel',
              onPress: () => setLoading(false),
            },
          ]
        )
        return
      }

      try {
        // Email doesn't exist, proceed with signup
        console.log('Email does not exist, proceeding with signup')
        await signInWithOtp()
      } catch (error) {
        console.error('Error in signup flow:', error)
        Alert.alert('Error in signup flow:', error as string, [
          {
            text: 'OK',
            style: 'cancel',
            onPress: () => {
              setLoading(false)
            },
          },
        ])
      }
    } else {
      if (!emailExists) {
        Alert.alert('Email does not exist', 'Please sign up first', [
          {
            text: 'Switch to sign up',
            onPress: () => {
              setIsSignupMode(true)
              setLoading(false)
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {
              setLoading(false)
            },
          },
        ])
        return
      }
      try {
        await signInWithOtp()
      } catch (error) {
        console.error('Error in signin flow:', error)
        Alert.alert('Error in signin flow:', error as string, [
          {
            text: 'OK',
            style: 'cancel',
            onPress: () => {
              setLoading(false)
            },
          },
        ])
      }
    }
  }

  const isFormValid = isEmailValid && (!isSignupMode || isNameValid)

  return (
    <View padding-16 center flex gap-16>
      <View width={dim('50vw')} gap-4>
        {
          // RNUILib do not yet support react-native new architecture
          // so when it is installed in a project using react-native 0.74 or higher
          // the app will crash when the TextField is focused as the keyboard appears
          // A temporary fix implies modifying native java files in node_modules:
          // https://github.com/wix/react-native-ui-lib/issues/3397#issuecomment-2607309623
        }
        {isSignupMode && (
          <TextField
            leadingAccessory={
              <Icon family="fontawesome5" name="user" size={16} style={{ marginRight: 16 }} />
            }
            onChangeText={handleNameChange}
            floatingPlaceholder
            placeholder={LL.auth.name()}
            value={name}
            autoCapitalize="words"
            autoComplete="name"
            textContentType="name"
          />
        )}
        <TextField
          leadingAccessory={
            <Icon family="fontawesome5" name="envelope" size={16} style={{ marginRight: 16 }} />
          }
          onChangeText={handleEmailChange}
          floatingPlaceholder
          placeholder={LL.auth.email()}
          value={email}
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>
      <Button
        disabled={!isFormValid}
        loading={loading}
        label={isSignupMode ? LL.auth.signUp() : LL.auth.signInWithOtp()}
        onPress={handleSubmit}
      />

      <Text
        text80
        color={Colors.$textNeutral}
        onPress={toggleMode}
        style={{ textDecorationLine: 'underline' }}
      >
        {isSignupMode ? LL.auth.switchToSignin() : LL.auth.switchToSignup()}
      </Text>
    </View>
  )
}
