import * as React from 'react'
import { LayoutRectangle, StyleSheet } from 'react-native'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { ViewProps } from '../basic/View'
import Surface from '../layout/Surface'

type VerticalPosition = 'top' | 'bottom' | 'center'
type HorizontalPosition = 'left' | 'right' | 'center'

interface HintProps {
  visible?: boolean
  customContent?: React.ReactNode
  targetSize?: {
    width: number
    height: number
  }
  offset?: {
    x?: number
    y?: number
  }
  position?:
    | `${VerticalPosition} ${HorizontalPosition}`
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'center'
  style?: ViewProps['style']
  children?: React.ReactNode
}

export default function Hint({
  visible,
  customContent,
  targetSize,
  children,
  position,
  offset,
  style,
}: HintProps) {
  const [layout, setLayout] = React.useState<LayoutRectangle | null>(null)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(visible ? 1 : 0, { duration: visible ? 0 : 100 }),
    }
  })

  const targetSizeWidth = targetSize?.width ?? 0
  const targetSizeHeight = targetSize?.height ?? 0

  const [pos1, pos2] = position?.split(' ') ?? ['center', 'center']
  const verticalPosition =
    pos2 || ['top', 'bottom', 'center'].includes(pos1) ? (pos1 as VerticalPosition) : 'center'
  const horizontalPosition =
    pos2 || ['left', 'right', 'center'].includes(pos1) ? (pos1 as HorizontalPosition) : 'center'

  const offsetX = offset?.x ?? 0
  const offsetY = offset?.y ?? 0

  return (
    <>
      {children}
      <Surface
        onLayout={event => setLayout(event.nativeEvent.layout)}
        padding-4
        reanimated
        pointerEvents="none"
        style={[
          styles.container,
          style,
          verticalPosition === 'top' && { bottom: targetSizeHeight + offsetY },
          verticalPosition === 'bottom' && { top: targetSizeHeight + offsetY },
          verticalPosition === 'center' &&
            layout && {
              top: -offsetY,
              transform: [{ translateY: -(layout.height - targetSizeHeight) / 2 }],
            },
          horizontalPosition === 'left' && { right: targetSizeWidth + offsetX },
          horizontalPosition === 'right' && { left: targetSizeWidth + offsetX },
          horizontalPosition === 'center' &&
            layout && {
              left: -offsetX,
              transform: [{ translateX: (layout.width - targetSizeWidth) / 2 }],
            },
          animatedStyle,
        ]}
      >
        {customContent}
      </Surface>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
  },
})
