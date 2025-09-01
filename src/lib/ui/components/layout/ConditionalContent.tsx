import * as React from 'react'
import { LayoutChangeEvent } from 'react-native'

import View from '../basic/View'

interface ConditionalContentProps {
  children: React.ReactNode[]
  activeIndex: number | (() => number)
  width?: number
  height?: number
  style?: any
  [key: string]: any
}

interface ChildDimensions {
  width: number
  height: number
}

export default function ConditionalContent({
  children,
  activeIndex,
  width: providedWidth,
  height: providedHeight,
  style,
  ...rest
}: ConditionalContentProps) {
  const [childDimensions, setChildDimensions] = React.useState<ChildDimensions[]>([])
  const [containerSize, setContainerSize] = React.useState<{
    width: number
    height: number
  } | null>(null)
  const [isMeasuring, setIsMeasuring] = React.useState(!providedWidth || !providedHeight)

  // Determine if we need to measure children
  const needsMeasurement = isMeasuring && (!providedWidth || !providedHeight)

  // Get the current active index
  const currentActiveIndex = typeof activeIndex === 'function' ? activeIndex() : activeIndex

  // Calculate container size based on provided dimensions or measured children
  React.useEffect(() => {
    if (providedWidth && providedHeight) {
      setContainerSize({ width: providedWidth, height: providedHeight })
      setIsMeasuring(false)
    } else if (childDimensions.length > 0 && !isMeasuring) {
      const maxWidth = Math.max(...childDimensions.map(dim => dim.width))
      const maxHeight = Math.max(...childDimensions.map(dim => dim.height))
      setContainerSize({ width: maxWidth, height: maxHeight })
    }
  }, [providedWidth, providedHeight, childDimensions, isMeasuring])

  const handleChildLayout = (index: number) => (event: LayoutChangeEvent) => {
    if (needsMeasurement) {
      const { width, height } = event.nativeEvent.layout
      setChildDimensions(prev => {
        const newDimensions = [...prev]
        newDimensions[index] = { width, height }
        return newDimensions
      })
    }
  }

  // Stop measuring when all children have been measured
  React.useEffect(() => {
    if (needsMeasurement && childDimensions.length === children.length) {
      const allMeasured = childDimensions.every(dim => dim && dim.width > 0 && dim.height > 0)
      if (allMeasured) {
        setIsMeasuring(false)
      }
    }
  }, [childDimensions, children.length, needsMeasurement])

  return (
    <View
      style={[
        containerSize && {
          width: containerSize.width,
          height: containerSize.height,
        },
        style,
      ]}
      {...rest}
    >
      {children.map((child, index) => {
        const isActive = index === currentActiveIndex
        const shouldRender = needsMeasurement || isActive

        if (!shouldRender) {
          return null
        }

        return (
          <View
            key={index}
            style={{
              position: needsMeasurement ? 'absolute' : 'relative',
              opacity: needsMeasurement ? 0 : 1,
              width: needsMeasurement ? 'auto' : '100%',
              height: needsMeasurement ? 'auto' : '100%',
            }}
            onLayout={needsMeasurement ? handleChildLayout(index) : undefined}
          >
            {child}
          </View>
        )
      })}
    </View>
  )
}
