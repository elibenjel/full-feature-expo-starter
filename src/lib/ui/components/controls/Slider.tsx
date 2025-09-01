import * as React from 'react'
import { LayoutRectangle, StyleSheet, View, ViewStyle } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  clamp,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { LengthSpanUtils } from '../../utils'

type SliderCallback = ({ value, ratio }: { value: number; ratio: number }) => void
interface SliderProps {
  value?: number
  onSlidingStart?: SliderCallback
  onChange?: SliderCallback
  onSlidingComplete?: SliderCallback
  min?: number
  max?: number
  vertical?: boolean
  inverted?: boolean
  renderThumb?: () => React.ReactNode
  maximumTrackTintColor?: string
  minimumTrackTintColor?: string
  step?: number
  length?: number
  span?: number
  thumbSize?: number
  containerStyle?: ViewStyle
  trackStyle?: ViewStyle
  thumbStyle?: ViewStyle
}

const Slider: React.FC<SliderProps> = ({
  value: defaultValue = 0,
  onSlidingStart,
  onChange,
  onSlidingComplete,
  min = 0,
  max = 100,
  vertical = false,
  inverted = false,
  renderThumb,
  maximumTrackTintColor = '#ccc',
  minimumTrackTintColor = '#007AFF',
  step = 1,
  length = 300,
  span = 40,
  thumbSize = 20,
  containerStyle = {},
  trackStyle = {},
  thumbStyle = {},
}) => {
  const sharedRatio = useSharedValue((defaultValue - min) / (max - min))
  const sharedValue = useSharedValue(defaultValue)
  const isSliding = useSharedValue(false)
  const attr = LengthSpanUtils.attributes[vertical ? 'vertical' : 'horizontal']
  const getNewPosition = (event: { x: number; y: number }) => {
    'worklet'
    let k = inverted ? 1 - event[attr.l] / length : event[attr.l] / length
    k = Math.max(0, Math.min(1, k))
    const value = k * max + (1 - k) * min
    return {
      ratio: k,
      value,
    }
  }

  const snapPosition = (value: number) => {
    'worklet'
    const snappedValue = Math.round(value / step) * step
    const k = (snappedValue - min) / (max - min)
    return {
      ratio: k,
      value: snappedValue,
    }
  }

  React.useEffect(() => {
    const newValue = clamp(defaultValue, min, max)
    sharedValue.value = withTiming(newValue, { duration: 0 })
    sharedRatio.value = withTiming((newValue - min) / (max - min), { duration: 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when defaultValue changes, to have a smooth transition
  }, [min, max])

  const panGesture = Gesture.Pan()
    .onStart(() => {
      isSliding.value = true
      if (onSlidingStart)
        runOnJS(onSlidingStart)({
          ratio: sharedRatio.value,
          value: sharedValue.value,
        })
    })
    .onUpdate(event => {
      const { ratio, value } = getNewPosition(event)
      sharedRatio.value = withTiming(ratio, { duration: 0 })
      sharedValue.value = withTiming(value, { duration: 0 })
      const snapped = snapPosition(value)
      if (onChange) runOnJS(onChange)(snapped)
    })
    .onEnd(() => {
      const { ratio, value } = snapPosition(sharedValue.value)
      sharedRatio.value = withTiming(ratio, { duration: 200 }, finished => {
        if (finished && onSlidingComplete) runOnJS(onSlidingComplete)({ ratio, value })
        isSliding.value = false
      })
    })

  const tapGesture = Gesture.Tap()
    .onStart(() => {
      if (isSliding.value) return
      if (onSlidingStart)
        runOnJS(onSlidingStart)({
          ratio: sharedRatio.value,
          value: sharedValue.value,
        })
    })
    .onEnd(event => {
      if (isSliding.value) return
      const newPosition = getNewPosition(event)
      const snapped = snapPosition(newPosition.value)
      sharedRatio.value = withTiming(
        snapped.ratio,
        { duration: 600 },
        finished => finished && onSlidingComplete && runOnJS(onSlidingComplete)(snapped)
      )
      if (onChange) runOnJS(onChange)(snapped)
    })

  const trackSpan = { [attr.span]: span / 4 }
  const translationL = useDerivedValue(
    () =>
      (inverted ? -sharedRatio.value : sharedRatio.value) * length +
      (inverted ? thumbSize / 2 : -thumbSize / 2),
    [inverted, thumbSize, length]
  )
  const thumbAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      // @ts-expect-error this error arises from the use of an object holding a mapping between keys and style attributes as strings
      // to adapt more easily to vertical or horizontal layouts. It happens only for the real keys of the transform property.
      {
        [attr.translateL]: translationL.value,
      },
    ],
  }))
  const trackAnimatedStyle = useAnimatedStyle(() => ({ [attr.length]: sharedRatio.value * length }))

  return (
    <GestureDetector gesture={Gesture.Simultaneous(panGesture, tapGesture)}>
      <View
        style={[
          styles.container,
          { justifyContent: inverted ? 'flex-end' : 'flex-start' },
          { [attr.span]: span, [attr.length]: length },
          containerStyle,
        ]}
      >
        <View
          style={[
            styles.track,
            trackSpan,
            { [attr.length]: length, backgroundColor: maximumTrackTintColor },
            trackStyle,
          ]}
        />
        <Animated.View
          style={[
            styles.track,
            trackSpan,
            trackAnimatedStyle,
            { backgroundColor: minimumTrackTintColor },
          ]}
        />
        <Animated.View style={[styles.thumb, thumbAnimatedStyle, thumbStyle]}>
          {renderThumb ? (
            renderThumb()
          ) : (
            <View style={[styles.defaultThumb, { width: thumbSize, height: thumbSize }]} />
          )}
        </Animated.View>
      </View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
  },
  track: {
    position: 'absolute',
    borderRadius: 5,
  },
  thumb: {
    position: 'absolute',
  },
  defaultThumb: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
})

export default Slider
