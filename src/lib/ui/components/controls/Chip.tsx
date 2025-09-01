import * as React from 'react'
import { Colors, Typography, TypographyKeys } from 'react-native-ui-lib'
import RNUIChip from 'react-native-ui-lib/chip'

import Icon from '../basic/Icon'

export default function Chip(
  props: React.ComponentProps<typeof RNUIChip> & {
    color?: 'primary' | 'danger' | 'success' | 'warning' | 'default'
    emphasized?: boolean
    renderIcon?: boolean | ((emphasized: boolean) => React.ReactElement)
    size?: keyof TypographyKeys | number
  }
) {
  const colors = {
    primary: Colors.$backgroundPrimaryLight,
    danger: Colors.$backgroundDangerLight,
    success: Colors.$backgroundSuccessLight,
    warning: Colors.$backgroundWarningLight,
    default: Colors.$backgroundDefault,
  }

  const size =
    typeof props.size === 'number'
      ? props.size
      : props.size
        ? (Typography[props.size]?.fontSize ?? 24)
        : 24

  const spacing = size * 0.4
  const icon =
    typeof props.renderIcon === 'function' ? (
      props.renderIcon(props.emphasized ?? false)
    ) : props.renderIcon && props.emphasized ? (
      <Icon family="ionicons" name="checkmark" size={size * 0.6} />
    ) : undefined

  return (
    <RNUIChip
      {...props}
      resetSpacings
      containerStyle={{
        backgroundColor: props.emphasized ? colors[props.color ?? 'primary'] : colors.default,
        paddingRight: spacing,
        gap: 0.5 * spacing,
        paddingLeft: icon ? spacing * 0.5 : spacing,
      }}
      labelStyle={{
        paddingRight: 0,
        paddingLeft: 0,
        fontSize: size ? size * 0.5 : undefined,
        lineHeight: size ? size * 0.8 : undefined,
      }}
      leftElement={icon}
      size={size ?? undefined}
    />
  )
}
