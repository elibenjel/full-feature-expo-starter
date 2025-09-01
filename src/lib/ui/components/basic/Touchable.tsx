import { TouchableOpacityProps } from 'react-native-ui-lib/src/components/touchableOpacity'
import TouchableOpacity from 'react-native-ui-lib/touchableOpacity'

interface Props extends TouchableOpacityProps {
  scale?: number
}

export default function Touchable({ scale, ...rest }: Props) {
  return (
    <TouchableOpacity
      center
      {...rest}
      style={[{ transform: [{ scale: scale ?? 1 }] }, rest.style]}
    />
  )
}
