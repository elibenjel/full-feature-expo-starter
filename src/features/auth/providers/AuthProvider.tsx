import { useQuery, useQueryClient } from '@tanstack/react-query'

import * as React from 'react'

import { View } from '@/lib/ui'
import { DefaultLoading } from '@/screens/status/loading'

import { getSession } from '../api'
import { supabase } from '../supabase'
import { AuthContextType } from '../types'

export const AuthContext = React.createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const queryClient = useQueryClient()

  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      queryClient.setQueryData(getSession.queryKey, session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [queryClient])

  const { data: session, isLoading } = useQuery(getSession)
  if (isLoading) {
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
