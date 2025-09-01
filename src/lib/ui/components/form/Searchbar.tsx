import { TextFieldProps } from 'react-native-ui-lib/src/components/textField'

import Icon from '../basic/Icon'
import TextField from './TextField'

export default function Searchbar(props: TextFieldProps) {
  return (
    <TextField
      outlined
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder="Recherche"
      fieldStyle={{ gap: 10 }}
      leadingAccessory={<Icon family="feather" name="search" size="text70" />}
      showClearButton
    />
  )
}
