import * as React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Colors } from 'react-native-ui-lib'
import { TextFieldProps } from 'react-native-ui-lib/src/components/textField'
import RNUITextField from 'react-native-ui-lib/textField'

import { mergeValidationProps } from '../../helpers/validation'

interface Props extends Omit<TextFieldProps, 'fieldStyle'> {
  required?: boolean
  filled?: boolean
  outlined?: boolean
  unstyled?: boolean
  fieldStyle?: StyleProp<ViewStyle>
}

export type { Props as TextFieldProps }

function TextField({
  filled,
  outlined,
  fieldStyle,
  unstyled,
  required,
  ...props
}: Props & Omit<TextFieldProps, 'fieldStyle'>) {
  const [isError, setIsError] = React.useState(false)
  const applyDefaultStyle = filled === undefined && outlined === undefined && !unstyled
  const dynamicStyles = {
    filled: {
      ...styles.filled,
      borderColor: Colors.$textNeutralHeavy,
      backgroundColor: Colors.rgba(Colors.$backgroundPrimaryLight, 0.2),
    },
    outlined: {
      ...styles.outlined,
      borderColor: Colors.$textNeutralHeavy,
    },
  }

  const { validate, validationMessage } = mergeValidationProps(
    {
      validate: [(input: string | undefined) => (required ? !!input && input.length > 0 : true)],
      validationMessage: ['Ce champ est requis'],
    },
    props
  )

  return (
    <RNUITextField
      floatingPlaceholderColor={Colors.rgba(Colors.$textNeutralHeavy, 0.5)}
      labelStyle={[props.label === undefined && { minHeight: 0 }]}
      validateOnChange
      validateOnStart
      validate={validate}
      validationMessage={validationMessage}
      onChangeValidity={isValid => setIsError(!isValid)}
      enableErrors
      {...props}
      fieldStyle={[
        filled || applyDefaultStyle ? dynamicStyles.filled : undefined,
        outlined ? dynamicStyles.outlined : undefined,
        fieldStyle,
      ]}
    />
  )
}

export default TextField

const styles = StyleSheet.create({
  filled: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 16,
  },
  outlined: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
})
