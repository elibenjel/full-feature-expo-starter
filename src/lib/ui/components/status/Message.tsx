import { Button, Colors, Typography, TypographyKeys } from 'react-native-ui-lib'

import Icon from '../basic/Icon'
import Text from '../basic/Text'
import Touchable from '../basic/Touchable'
import View from '../basic/View'
import Surface from '../layout/Surface'

interface ButtonItem {
  label: string
  onPress: () => void
}

export type MessageVariant = 'error' | 'info'
export type MessageAction = 'confirm' | 'cancel'

export interface MessageProps {
  variant: MessageVariant
  message: string
  size: number | keyof TypographyKeys
  translate?: (key: MessageVariant) => string
  buttons?: Partial<Record<MessageAction, ButtonItem>>
  onClose?: () => void
}

const getVariantProps = (variant: MessageVariant) => {
  switch (variant) {
    case 'error':
      return {
        iconFamily: 'ionicons',
        iconName: 'alert-circle',
        borderLeftColor: '$backgroundDangerHeavy',
        backgroundColor: '$backgroundDangerLight',
      } as const
    case 'info':
      return {
        iconFamily: 'ionicons',
        iconName: 'information-circle',
        borderLeftColor: '$backgroundGeneralHeavy',
        backgroundColor: '$backgroundGeneralMedium',
      } as const
  }
}

export default function Message({
  variant,
  message,
  size,
  translate = key => key,
  buttons,
  onClose,
}: MessageProps) {
  const { iconFamily, iconName, borderLeftColor, backgroundColor } = getVariantProps(variant)
  const fontSize = typeof size === 'number' ? size : (Typography[size]?.fontSize ?? 0)
  const closeable = !!onClose
  return (
    <Surface
      padding-16
      gap-4
      style={{
        borderLeftWidth: 3,
        borderLeftColor: Colors[borderLeftColor],
        backgroundColor: Colors[backgroundColor],
      }}
    >
      <View gap-4 centerV row>
        <Icon family={iconFamily} name={iconName} size={fontSize} color={borderLeftColor} />
        <Text style={{ fontSize: fontSize + 1, fontWeight: 'bold' }}>{translate(variant)}</Text>
      </View>
      <Text style={{ fontSize: fontSize }}>{message}</Text>
      {buttons && (
        <View row gap-6 style={{ justifyContent: 'flex-end' }}>
          {buttons.cancel && (
            <Button
              size="small"
              label={buttons.cancel.label}
              onPress={buttons.cancel.onPress}
              br40
              color={Colors.$textNeutral}
              style={{
                borderColor: Colors.$textNeutral,
                borderWidth: 1,
                backgroundColor: 'transparent',
              }}
            />
          )}
          {buttons.confirm && (
            <Button
              size="small"
              label={buttons.confirm.label}
              onPress={buttons.confirm.onPress}
              br40
              style={{ backgroundColor: Colors[borderLeftColor] }}
            />
          )}
        </View>
      )}
      {closeable && (
        <Touchable onPress={onClose} style={{ position: 'absolute', right: 4, top: 4 }}>
          <Icon family="ionicons" name="close" size={fontSize + 2} color="$textNeutral" />
        </Touchable>
      )}
    </Surface>
  )
}
