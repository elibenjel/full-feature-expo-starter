import { useAnimatedStyle } from 'react-native-reanimated'

import useTransition from '../../hooks/useTransition'
import { TransitionProps } from '../../types'
import View, { ViewProps } from '../basic/View'

const Grow = ({
  in: _in,
  duration,
  easing,
  delay,
  onAnimationFinished,
  disablePointerEventsWhenTransitioning = true,
  anchor = 'center',
  ...props
}: ViewProps &
  Partial<TransitionProps<number>> & {
    anchor?: 'left' | 'right' | 'center' | 'top' | 'bottom'
  }) => {
  const { transition, isTransitioning } = useTransition({
    start: 0,
    end: 1,
    in: !!_in,
    duration,
    delay,
    easing,
    onAnimationFinished,
  })
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: transition.value }] }))
  return (
    <View
      {...props}
      reanimated
      pointerEvents={
        disablePointerEventsWhenTransitioning && isTransitioning ? 'none' : props.pointerEvents
      }
      style={[
        props.style,
        {
          transformOrigin: anchor,
        },
        animatedStyle,
      ]}
    />
  )
}

export default Grow
