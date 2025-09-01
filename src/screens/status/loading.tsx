import * as React from 'react'

import { Spinner, View } from '@/lib/ui'

export function DefaultLoading({
  timeout,
  onTimeout,
  renderOnTimeout,
}: {
  timeout?: number
  onTimeout?: () => void
  renderOnTimeout?: () => React.ReactNode
}) {
  const [isTimeout, setIsTimeout] = React.useState(false)
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTimeout(true)
      onTimeout?.()
    }, timeout)
    return () => clearTimeout(timeoutId)
  }, [timeout, onTimeout])

  if (timeout && isTimeout) {
    return renderOnTimeout?.()
  }

  return (
    <View flex center>
      {({ dim }) => <Spinner size={dim('20cqmin')} />}
    </View>
  )
}
