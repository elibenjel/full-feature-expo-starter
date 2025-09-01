import { useFonts } from 'expo-font'

import * as React from 'react'
import { Assets } from 'react-native-ui-lib'

const MIN_FALLBACK_DURATION = 500

/**
 * For web only: include this to load fonts.
 * For native platforms, otf files are bundled via app.json.
 */
export default function WebFontsLoader({
  children,
  fallback,
}: {
  children?: React.ReactNode
  fallback?: React.ReactNode
}) {
  const hasFallback = !!fallback
  const [forceFallback, setForceFallback] = React.useState(hasFallback)

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setForceFallback(false)
    }, MIN_FALLBACK_DURATION)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const [loaded, error] = useFonts(Assets.fonts)

  return (loaded || error) && !forceFallback ? children : fallback
}
