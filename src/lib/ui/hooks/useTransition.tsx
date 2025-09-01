import * as React from 'react'
import { ViewProps } from 'react-native'
import { AnimatedProps, Easing, runOnJS, useSharedValue, withTiming } from 'react-native-reanimated'

import { TransitionProps } from '../types'

const useTransition = <T extends number | string>({
  start,
  end,
  in: _in,
  duration = 1000,
  delay = 0,
  easing = Easing.inOut(Easing.ease),
  onAnimationFinished = () => null,
}: AnimatedProps<ViewProps> & TransitionProps<T>) => {
  const transition = useSharedValue(start)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const handleAnimationFinished = React.useCallback(() => {
    setIsTransitioning(false)
    onAnimationFinished()
  }, [onAnimationFinished])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(true)
      transition.value = withTiming(
        _in ? end : start,
        {
          duration,
          easing,
        },
        (finished: boolean | undefined) => {
          if (finished) {
            runOnJS(handleAnimationFinished)()
          }
        }
      )
    }, delay ?? 0)

    return () => clearTimeout(timeout)
  }, [_in, delay, duration, easing, end, start, handleAnimationFinished, transition])

  return {
    transition,
    isTransitioning,
  }
}

export default useTransition
