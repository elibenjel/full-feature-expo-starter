import * as React from 'react'

interface RerenderProps {
  interval?: number
  children: React.ReactNode
}

export default function Rerender({ interval = 300000, children }: RerenderProps) {
  const [, forceRerender] = React.useReducer(x => x + 1, 0)

  React.useEffect(() => {
    const _interval = setInterval(() => {
      forceRerender()
    }, interval)

    return () => clearInterval(_interval)
  }, [interval])

  return children
}
