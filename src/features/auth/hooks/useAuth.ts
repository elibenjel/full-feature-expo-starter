import * as React from 'react'
import { AuthContext } from '../providers/AuthProvider'

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
