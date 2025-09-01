import * as React from 'react'

export default function useTimer({
  duration,
  autoStart = false,
}: {
  duration: number
  autoStart?: boolean
}) {
  const [timer, setTimer] = React.useState(autoStart ? duration : 0)
  React.useEffect(() => {
    if (timer === 0) return
    const interval = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  const start = () => {
    setTimer(duration)
  }

  const reset = () => {
    setTimer(duration)
  }

  return { timer, isRunning: timer > 0, start, reset }
}
