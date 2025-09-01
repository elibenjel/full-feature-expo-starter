import * as React from 'react'
import { View } from 'react-native'

import Icon from '../basic/Icon'
import TextField, { TextFieldProps } from './TextField'

interface Props extends Omit<TextFieldProps, 'value' | 'onChangeText' | 'onChange'> {
  value: number
  onChange: (value: number) => void
}

export default function PriceField({ value, onChange, ...props }: Props) {
  const [text, setText] = React.useState(value.toString())
  const [error, setError] = React.useState(false)

  const isValidPrice = (input: string) => {
    const regex = /^\d*\.?\d{0,2}$/
    if (!regex.test(input)) {
      return false
    }
    return true
  }

  const handleChangeText = (input: string) => {
    if (!isValidPrice(input)) {
      return
    }

    const sanitized = input.replace(',', '.')
    setText(sanitized)
  }

  React.useEffect(() => {
    if (!error) {
      onChange(parseFloat(text) || 0)
    }
  }, [text, error])

  return (
    <TextField
      {...props}
      value={text}
      onChangeText={handleChangeText}
      onChangeValidity={valid => setError(!valid)}
      validateOnChange
      keyboardType="decimal-pad"
      enableErrors
      trailingAccessory={
        <View style={{ paddingRight: 8 }}>
          <Icon
            family="material-community-icons"
            name="currency-eur"
            size={16}
            color="$iconPrimary"
          />
        </View>
      }
    />
  )
}
