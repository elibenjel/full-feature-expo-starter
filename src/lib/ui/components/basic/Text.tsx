import { Colors } from 'react-native-ui-lib'
import { TextProps as RNUITextProps } from 'react-native-ui-lib/src/components/text'
import RNUIText from 'react-native-ui-lib/text'

import { Color } from '../../types'

interface Props {
  font?: 'Lemon-Regular' | undefined
  top?: boolean
  middle?: boolean
  bottom?: boolean
  shadow?: Color | (string & {})
}

export type TextProps = RNUITextProps & Props

export default function Text(props: TextProps) {
  if (props.style && 'fontSize' in props.style && props.style.fontSize === 0) {
    console.warn('Text fontSize cannot be 0 (content: ', props.children, ')')
    return null
  }

  const style = [
    { fontFamily: props.font },
    props.font === 'Lemon-Regular' && { fontWeight: undefined },
    props.top && { verticalAlign: 'top' as const },
    props.middle && { verticalAlign: 'middle' as const },
    props.bottom && { verticalAlign: 'bottom' as const },
    props.shadow && {
      textShadowColor: (Colors[props.shadow] as Color) ?? props.shadow,
      textShadowRadius: 15,
    },
    props.style,
  ]
  return <RNUIText {...props} style={style} />
}
