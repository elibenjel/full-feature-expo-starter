import * as React from 'react'
import { Platform, View as RNView } from 'react-native'
import Animated, {
  cancelAnimation,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { ViewProps as RNUIViewProps } from 'react-native-ui-lib/src/components/view'
import RNUIView from 'react-native-ui-lib/view'

import { ExtendedDimensions } from '../../types'
import { DimensionValueUtils } from '../../utils'

type ElevatedProp = `elevated-${number}`
const extractElevatedValue = (props: ViewProps) => {
  let elevated = null
  Object.keys(props).forEach(key => {
    if (key.startsWith('elevated-')) {
      elevated = parseInt(key.replace('elevated-', ''))
    }
  })

  return elevated
}

export interface ViewProps extends Omit<RNUIViewProps, 'children'> {
  distribute?: boolean
  elevated?: boolean
  skeleton?: boolean
  renderSkeletonContent?: () => React.ReactNode
  [key: ElevatedProp]: boolean
  ref?: React.Ref<RNView>
  children?:
    | React.ReactNode
    | ((args: {
        width: number
        height: number
        dim: (dimension: ExtendedDimensions) => number
      }) => React.ReactNode)
}

function View({
  distribute,
  style: styleProp,
  onLayout: onLayoutProp,
  children,
  ref,
  skeleton,
  renderSkeletonContent,
  ...props
}: ViewProps) {
  const elevation = extractElevatedValue(props)
  const style = [
    distribute && { justifyContent: 'space-evenly' as const },
    styleProp,
    elevation && Platform.OS !== 'web' && { elevation },
    elevation &&
      Platform.OS === 'web' && { boxShadow: `0px 1px 2px ${elevation}px rgba(0, 0, 0, 0.1)` },
  ]

  const [layout, setLayout] = React.useState<{ width: number; height: number } | null>(null)
  const isRendered = React.useRef(false)

  // Reanimated shared value for skeleton animation
  const skeletonValue = useSharedValue(0)

  React.useLayoutEffect(() => {
    isRendered.current = true
  }, [])

  // Skeleton animation with Reanimated
  React.useEffect(() => {
    if (skeleton) {
      skeletonValue.value = withRepeat(
        withTiming(1, { duration: 800 }),
        -1, // Infinite repeat
        true // Reverse
      )
    } else {
      cancelAnimation(skeletonValue)
      skeletonValue.value = 0
    }
  }, [skeleton, skeletonValue])

  const skeletonAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(skeletonValue.value, [0, 1], ['#e0e0e0', '#f0f0f0'])
    return {
      backgroundColor,
    }
  })

  const renderContent = () => {
    if (typeof children === 'function') {
      return layout
        ? children({
            width: layout.width,
            height: layout.height,
            dim: dimension => {
              try {
                if (DimensionValueUtils.isContainerRatio(dimension)) {
                  return DimensionValueUtils.parseContainerRatio(
                    dimension,
                    layout.width,
                    layout.height
                  )
                } else if (DimensionValueUtils.isScreenRatio(dimension)) {
                  return DimensionValueUtils.parseScreenRatio(dimension)
                } else {
                  console.warn(`Invalid dimension format: ${dimension}`)
                  return 0
                }
              } catch (error) {
                console.warn(error)
                return 0
              }
            },
          })
        : null
    }

    return children
  }

  const containerStyle = [style, skeleton && { position: 'relative' as const }]

  return (
    <RNUIView
      ref={ref}
      onLayout={event => {
        // This is necessary since in some cases, setState is called before the component is rendered
        if (isRendered.current) {
          setLayout(event.nativeEvent.layout)
        }
        onLayoutProp?.(event)
      }}
      style={containerStyle}
      {...props}
    >
      {renderContent()}

      {skeleton && (
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              borderRadius: 10,
            },
            skeletonAnimatedStyle,
          ]}
        >
          {renderSkeletonContent ? renderSkeletonContent() : null}
        </Animated.View>
      )}
    </RNUIView>
  )
}

export default View
