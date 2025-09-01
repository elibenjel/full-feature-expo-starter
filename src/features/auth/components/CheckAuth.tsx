import * as React from 'react'

import { useAuth } from '../hooks/useAuth'

export default function CheckAuth({
  children,
}: {
  children: ({ authenticated }: { authenticated: boolean }) => React.ReactNode
}) {
  const { authenticated } = useAuth()
  return children({ authenticated })
}
