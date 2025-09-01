import { TouchableOpacityProps } from 'react-native-ui-lib/src/components/touchableOpacity'

import Touchable from '../basic/Touchable'
import View, { ViewProps } from '../basic/View'

interface BaseProps {
  elevation?: number
  [key: GapToken]: boolean
}

type GapToken = `gap-${number}`
const extractGapValue = (props: SurfaceProps) => {
  let gap = null
  Object.keys(props).forEach(key => {
    if (key.startsWith('gap-')) {
      gap = parseInt(key.replace('gap-', ''))
    }
  })

  return gap
}

interface WithoutPressableProps extends BaseProps {
  onPress: never
}

interface WithPressableProps extends BaseProps, TouchableOpacityProps {}

export type SurfaceProps = WithPressableProps | (WithoutPressableProps & ViewProps)

const hasBorderRadiusModifier = (props: SurfaceProps) => {
  return Object.keys(props).some(key => key.startsWith('br'))
}

const hasBackgroundModifier = (props: SurfaceProps) => {
  return Object.keys(props).some(key => key.startsWith('bg-'))
}

const getCommonProps = (props: SurfaceProps) => {
  const commonProps = {} as Record<string, boolean>
  if (!hasBorderRadiusModifier(props)) {
    commonProps.br30 = true
  }
  if (!hasBackgroundModifier(props)) {
    commonProps['bg-white'] = true
  }
  return commonProps
}

export default function Surface({ elevation = 1, onPress, children, ...rest }: SurfaceProps) {
  const commonProps = getCommonProps(rest)
  const commonStyle = { elevation, overflow: 'hidden' as const }
  const gap = extractGapValue(rest)
  if (!onPress)
    return (
      <View {...commonProps} {...rest} style={[commonStyle, rest.style]}>
        {children}
      </View>
    )

  return (
    <Touchable
      key={elevation}
      activeOpacity={0.9}
      disabled={!onPress}
      onPress={onPress}
      {...commonProps}
      {...rest}
      style={[commonStyle, rest.style, { gap: gap ? gap : undefined }]}
    >
      {typeof children === 'function' ? (
        <View width="100%" height="100%">
          {children}
        </View>
      ) : (
        children
      )}
    </Touchable>
  )
}
