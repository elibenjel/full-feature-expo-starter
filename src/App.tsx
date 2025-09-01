import { useReactQueryDevTools } from '@dev-plugins/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import * as React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { AuthProvider } from '@/features/auth'
import { LocalizationProvider } from '@/localization'

import { useDevConfiguration } from './dev/hooks'

const queryClient = new QueryClient()

export default function App({ children }: { children: React.ReactNode }) {
  useReactQueryDevTools(queryClient)
  const { mockMode } = useDevConfiguration()
  React.useEffect(() => {
    queryClient.clear()
    queryClient.removeQueries()
  }, [mockMode])
  return (
    <QueryClientProvider key={`${mockMode}`} client={queryClient}>
      <LocalizationProvider>
        <AuthProvider>
          <GestureHandlerRootView>{children}</GestureHandlerRootView>
        </AuthProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  )
}
