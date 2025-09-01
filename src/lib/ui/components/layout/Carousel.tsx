import * as React from 'react'
import { Animated, LayoutRectangle, ScrollView } from 'react-native'
import { Easing } from 'react-native-reanimated'

import View, { ViewProps } from '../basic/View'

interface BaseItemConfig {
  spacing?: number
  style?: ViewProps['style']
}

interface ItemConfigWithoutHeight extends BaseItemConfig {
  aspectRatio: number
  width: number
  height?: never
}

interface ItemConfigWithoutAspectRatio extends BaseItemConfig {
  aspectRatio?: never
  width: number
  height: number
}

interface ItemConfigWithoutWidth extends BaseItemConfig {
  aspectRatio: number
  width?: never
  height: number
}

type ItemConfig = ItemConfigWithoutHeight | ItemConfigWithoutAspectRatio | ItemConfigWithoutWidth

type EasingType = 'linear' | 'elastic' | 'ease' | 'bounce'

interface AnimationConfig {
  duration?: number
  easing?: EasingType
  easingConfig?: number // For elastic(1) or other configurable easings
}

// Inside Carousel component:
const getEasingFunction = (type: EasingType, config?: number) => {
  switch (type) {
    case 'elastic':
      return Easing.elastic(config ?? 1)
    case 'linear':
      return Easing.linear
    case 'ease':
      return Easing.ease
    case 'bounce':
      return Easing.bounce
    default:
      return Easing.linear
  }
}

interface CarouselProps {
  ref?: React.RefObject<CarouselRef | null>
  children: React.ReactNode[]
  horizontal?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  animationDuration?: number
  animationConfig?: AnimationConfig
  itemConfig: ItemConfig
  loop?: boolean
}

export interface CarouselRef {
  currentItemIndex: number
  next: () => void
  previous: () => void
  goTo: (index: number) => void
}

const Carousel: React.FC<CarouselProps> = ({
  ref,
  children,
  horizontal = false,
  autoPlay = false,
  autoPlayInterval = 5000,
  itemConfig,
  loop,
  animationConfig,
}) => {
  const scroll = React.useRef(new Animated.Value(0)).current
  const scrollViewRef = React.useRef<ScrollView>(null)
  const itemWidth =
    itemConfig.width === undefined ? itemConfig.aspectRatio * itemConfig.height : itemConfig.width
  const itemHeight =
    itemConfig.height === undefined ? itemConfig.aspectRatio * itemConfig.width : itemConfig.height
  const itemMargin = (itemConfig.spacing ?? 0) / 2
  const animationDuration = animationConfig?.duration ?? 600

  // Store layout information
  const [containerLayout, setContainerLayout] = React.useState<LayoutRectangle>()
  const isContainerLayoutInitialized = containerLayout !== undefined

  // Extend the children list with clones for seemless looping
  const totalItems = children.length
  const shouldExtendChildren = totalItems > 1 && loop
  const extendedChildren = shouldExtendChildren
    ? [children[totalItems - 1], ...children, children[0], children[1]]
    : children
  const firstRealChildIndex = !shouldExtendChildren ? 0 : totalItems <= 1 ? 0 : 1
  const visibleItemIndex = React.useRef(firstRealChildIndex)

  const getItemScrollValue = React.useCallback(
    (index: number) => {
      if (!isContainerLayoutInitialized) return 0
      return index * ((horizontal ? itemWidth : itemHeight) + itemMargin * 2)
    },
    [isContainerLayoutInitialized, horizontal, itemHeight, itemMargin, itemWidth]
  )

  const getDistanceToItemEdge = React.useCallback(() => {
    if (!isContainerLayoutInitialized) return 0
    return (
      (horizontal ? containerLayout.width - itemWidth : containerLayout.height - itemHeight) / 2
    )
  }, [isContainerLayoutInitialized, containerLayout, horizontal, itemHeight, itemWidth])

  const easingFunction = React.useMemo(
    () => getEasingFunction(animationConfig?.easing ?? 'linear', animationConfig?.easingConfig),
    [animationConfig?.easing, animationConfig?.easingConfig]
  )

  const scrollToItem = React.useCallback(
    (args: { index: number; animated?: boolean; onScrollEnd?: () => void }) => {
      const value = getItemScrollValue(args.index)
      Animated.timing(scroll, {
        toValue: value,
        duration: args.animated ? animationDuration : 0,
        useNativeDriver: true,
        easing: easingFunction,
      }).start(args.onScrollEnd)
    },
    [animationDuration, easingFunction, getItemScrollValue, scroll]
  )

  const goTo = React.useCallback(
    (index: number) => {
      scrollToItem({
        index,
        animated: true,
        onScrollEnd: () => {
          visibleItemIndex.current = index
          if (loop && visibleItemIndex.current > extendedChildren.length - 3) {
            visibleItemIndex.current = firstRealChildIndex
            scrollToItem({ index: firstRealChildIndex, animated: false })
          }
        },
      })
    },
    [scrollToItem, firstRealChildIndex, extendedChildren.length, loop]
  )

  React.useEffect(() => {
    scroll.addListener(({ value }) => {
      if (horizontal) {
        scrollViewRef.current?.scrollTo({ x: value, animated: false })
      } else {
        scrollViewRef.current?.scrollTo({ y: value, animated: false })
      }
    })

    return () => scroll.removeAllListeners()
  }, [horizontal, scroll])

  React.useEffect(() => {
    if (
      !autoPlay ||
      totalItems <= 1 ||
      autoPlayInterval <= animationDuration ||
      animationDuration <= 0 ||
      !isContainerLayoutInitialized
    )
      return

    const interval = setInterval(() => {
      goTo(visibleItemIndex.current + 1)
    }, autoPlayInterval)

    scrollToItem({ index: firstRealChildIndex, animated: false })

    return () => clearInterval(interval)
  }, [
    autoPlay,
    totalItems,
    autoPlayInterval,
    animationDuration,
    isContainerLayoutInitialized,
    firstRealChildIndex,
    extendedChildren.length,
    scrollToItem,
    goTo,
  ])

  React.useImperativeHandle(ref, () => ({
    currentItemIndex: visibleItemIndex.current - firstRealChildIndex,
    next: () =>
      visibleItemIndex.current < extendedChildren.length - 1 && goTo(visibleItemIndex.current + 1),
    previous: () => visibleItemIndex.current > 0 && goTo(visibleItemIndex.current - 1),
    goTo,
  }))

  return (
    <View
      onLayout={e => setContainerLayout(e.nativeEvent.layout)}
      width={horizontal ? '100%' : itemWidth}
      height={horizontal ? itemHeight : '100%'}
    >
      {containerLayout && (
        <ScrollView
          ref={scrollViewRef}
          contentOffset={{
            x: horizontal ? getItemScrollValue(firstRealChildIndex) : 0,
            y: horizontal ? 0 : getItemScrollValue(firstRealChildIndex),
          }}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate="fast"
        >
          {extendedChildren.map((child, index) => (
            <View
              key={index}
              style={[
                itemConfig?.style,
                {
                  width: itemWidth,
                  height: itemHeight,
                },
                horizontal && {
                  margin: 0,
                  marginHorizontal: itemMargin,
                  marginLeft: index === 0 ? Math.max(getDistanceToItemEdge(), 0) : undefined,
                  marginRight:
                    index === extendedChildren.length - 1
                      ? Math.max(getDistanceToItemEdge(), 0)
                      : undefined,
                },
                !horizontal && {
                  margin: 0,
                  marginVertical: itemMargin,
                  marginTop: index === 0 ? Math.max(getDistanceToItemEdge(), 0) : undefined,
                  marginBottom:
                    index === extendedChildren.length - 1
                      ? Math.max(getDistanceToItemEdge(), 0)
                      : undefined,
                },
              ]}
            >
              {child}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default Carousel
