import * as React from 'react'
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native'

import { mergeValidationProps } from '../../helpers/validation'
import View from '../basic/View'
import Chip from '../controls/Chip'
import TextField, { TextFieldProps } from './TextField'

export default function MultiSelect({
  value,
  onAdd,
  onRemove,
  containerStyle,
  ...props
}: {
  value: string[]
  onAdd: (item: string) => void
  onRemove: (item: string) => void
} & Omit<TextFieldProps, 'value'>) {
  const [input, setInput] = React.useState('')
  const [textFieldKey, setTextFieldKey] = React.useState(0)
  const lastValueLengthRef = React.useRef(value.length)

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (e.nativeEvent.key === 'Enter' && input.trim()) {
      onAdd(input.trim())
      setInput('')
      e.preventDefault()
    }
    props.onKeyPress?.(e)
  }

  const handleRemove = (item: string) => {
    onRemove(item)
    setInput('')
  }

  const handleBlur = () => {
    setInput('')
  }

  const handleChangeText = (text: string) => {
    setInput(text)
    props.onChangeText?.(text)
  }

  React.useEffect(() => {
    if (value.length === 0 && lastValueLengthRef.current > 0) {
      setTextFieldKey(prev => prev + 1)
    }
    lastValueLengthRef.current = value.length
  }, [value.length])

  const { validate, validationMessage } = mergeValidationProps(
    {
      validate: [(input: string | undefined) => (props.required ? value.length > 0 : true)],
      validationMessage: ['Ce champ est requis'],
    },
    props
  )
  const chipSize = 10
  const spacing = 8
  return (
    <View style={[{ gap: spacing }, containerStyle]}>
      <TextField
        key={textFieldKey}
        value={input}
        onChangeText={handleChangeText}
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
        validateOnStart
        validateOnBlur
        validate={validate}
        validationMessage={validationMessage}
        validationMessageStyle={{ position: 'absolute', bottom: -20 }}
        {...props}
        required={false}
        enableErrors
      />
      <View row style={{ gap: spacing, minHeight: chipSize + spacing, flexWrap: 'wrap' }}>
        {value.map(item => (
          <Chip
            key={item}
            size={chipSize}
            emphasized
            label={item}
            onDismiss={() => handleRemove(item)}
            dismissIconStyle={{
              width: 8,
              height: 8,
            }}
            dismissContainerStyle={{
              marginLeft: 4,
            }}
          />
        ))}
      </View>
    </View>
  )
}
