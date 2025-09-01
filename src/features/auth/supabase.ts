import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'

import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'

export const API_SCHEMA = 'aioli'

export const getSupabaseUrl = () => {
  const supabaseUrl = Constants.expoConfig?.extra?.SUPABASE_URL
  if (!supabaseUrl) {
    throw new Error('SUPABASE_URL is not set')
  }
  return supabaseUrl
}

export const getSupabaseAnonKey = () => {
  const supabaseAnonKey = Constants.expoConfig?.extra?.SUPABASE_ANON_KEY
  if (!supabaseAnonKey) {
    throw new Error('SUPABASE_ANON_KEY is not set')
  }
  return supabaseAnonKey
}

export const getSupabaseGraphqlUrl = () => {
  const supabaseGraphqlUrl = Constants.expoConfig?.extra?.SUPABASE_GRAPHQL_URL
  if (!supabaseGraphqlUrl) {
    throw new Error('SUPABASE_GRAPHQL_URL is not set')
  }
  return supabaseGraphqlUrl
}

export const supabase = createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})
