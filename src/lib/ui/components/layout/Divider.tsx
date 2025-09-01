import { ViewProps } from 'react-native-ui-lib'

import View from '../basic/View'

interface Props {
  vertical?: boolean
  light?: boolean
  heavy?: boolean
}

export default function Divider(props: ViewProps & Props) {
  const color = props.heavy
    ? { 'bg-grey1': true }
    : props.light
      ? { 'bg-grey50': true }
      : { 'bg-grey40': true }
  if (props.vertical) return <View {...color} br20 height="100%" width={1} />
  return <View {...color} br20 width="100%" height={1} />
}
