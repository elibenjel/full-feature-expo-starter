import { useAnimatedStyle } from 'react-native-reanimated'

import useTransition from '../../hooks/useTransition'
import { TransitionProps } from '../../types'
import View, { ViewProps } from '../basic/View'

const Fade = ({
  in: _in,
  duration,
  easing,
  delay,
  onAnimationFinished,
  disablePointerEventsWhenTransitioning = true,
  ...props
}: ViewProps & Partial<TransitionProps<number>>) => {
  const { transition, isTransitioning } = useTransition({
    start: 0,
    end: 1,
    in: !!_in,
    duration,
    delay,
    easing,
    onAnimationFinished,
  })
  const animatedStyle = useAnimatedStyle(() => ({ opacity: transition.value }))
  return (
    <View
      {...props}
      reanimated
      pointerEvents={
        disablePointerEventsWhenTransitioning && isTransitioning ? 'none' : props.pointerEvents
      }
      style={[props.style, animatedStyle]}
    />
  )
}

export default Fade
