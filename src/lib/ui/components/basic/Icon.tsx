import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import { TextProps } from 'react-native'
import { Colors, Typography, TypographyKeys } from 'react-native-ui-lib'

import { Color } from '../../types'

export type IconFamilies =
  | 'ionicons'
  | 'antdesign'
  | 'material-icons'
  | 'material-community-icons'
  | 'feather'
  | 'fontawesome5'
  | 'fontawesome6'

export interface IconProps<T> {
  family: T
  name: T extends 'ionicons'
    ? keyof typeof Ionicons.glyphMap
    : T extends 'antdesign'
      ? keyof typeof AntDesign.glyphMap
      : T extends 'material-community-icons'
        ? keyof typeof MaterialCommunityIcons.glyphMap
        : T extends 'feather'
          ? keyof typeof Feather.glyphMap
          : T extends 'material-icons'
            ? keyof typeof MaterialIcons.glyphMap
            : T extends 'fontawesome5'
              ? keyof typeof FontAwesome5.glyphMap
              : T extends 'fontawesome6'
                ? keyof typeof FontAwesome6.glyphMap
                : never
  color?: Color | (string & {})
  style?: TextProps['style']
  size: number | keyof TypographyKeys
}

export default function Icon<T extends IconFamilies>({
  family,
  name,
  size,
  color = '$iconPrimary',
  style,
}: IconProps<T>) {
  const renderIcon = (size: number) => {
    if (size === 0) {
      console.warn('Icon size cannot be 0 (family: ', family, ', name: ', name, ')')
      return null
    }

    const iconProps = { size, color: (Colors[color] as Color) ?? color, style }
    switch (family) {
      case 'ionicons':
        return <Ionicons name={name as keyof typeof Ionicons.glyphMap} {...iconProps} />

      case 'antdesign':
        return <AntDesign name={name as keyof typeof AntDesign.glyphMap} {...iconProps} />

      case 'material-community-icons':
        return (
          <MaterialCommunityIcons
            name={name as keyof typeof MaterialCommunityIcons.glyphMap}
            {...iconProps}
          />
        )

      case 'feather':
        return <Feather name={name as keyof typeof Feather.glyphMap} {...iconProps} />

      case 'material-icons':
        return <MaterialIcons name={name as keyof typeof MaterialIcons.glyphMap} {...iconProps} />

      case 'fontawesome5':
        return <FontAwesome5 name={name as keyof typeof FontAwesome5.glyphMap} {...iconProps} />

      case 'fontawesome6':
        return <FontAwesome6 name={name as keyof typeof FontAwesome6.glyphMap} {...iconProps} />

      default:
        return null
    }
  }

  if (typeof size === 'number') {
    return renderIcon(size)
  }

  return renderIcon(Typography[size]?.fontSize ?? 0)
}
