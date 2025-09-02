import { Session } from '@supabase/supabase-js'

import * as React from 'react'

import { View } from '@/lib/ui'
import { DefaultLoading } from '@/screens/status/loading'

import { supabase } from '../supabase'
import { AuthContextType } from '../types'

export const AuthContext = React.createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [isPending, setIsPending] = React.useState(true)
  const [session, setSession] = React.useState<Session | null>(null)

  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('auth state changed -- new session id', session?.user.id)
      setIsPending(false)
      setSession(session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (isPending) {
    return (
      <View flex bg-screenBG>
        <DefaultLoading />
      </View>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        userId: session?.user.id,
        authenticated: !!session,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
