import * as React from 'react'
import { TextStyle } from 'react-native'
import { Colors } from 'react-native-ui-lib'

import { Pickable } from '../../types'
import Icon from '../basic/Icon'
import Text from '../basic/Text'
import View from '../basic/View'
import Button from '../controls/Button'

interface MultiSegmentedControlProps<T> {
  segments: Pickable<T>[]
  onSelectionChange: (items: T[]) => void
  initialSelection?: string[]
  minimumSelected?: number
  renderSegment?: (segment: Pickable<T>) => React.ReactNode
  activeColor?: string
  inactiveColor?: string
  labelStyle?: TextStyle
}

export default function MultiSegmentedControl<T>({
  segments,
  onSelectionChange,
  initialSelection = [],
  minimumSelected,
  renderSegment,
  activeColor = Colors.$backgroundPrimaryLight,
  inactiveColor = undefined,
  labelStyle,
}: MultiSegmentedControlProps<T>) {
  const [selected, setSelected] = React.useState(
    segments.filter(segment => initialSelection.includes(segment.id))
  )
  const isSelected = (id: string) => selected.some(segment => segment.id === id)

  const handleSelectionChange = (id: string) => {
    const newSelected = isSelected(id)
      ? selected.filter(segment => segment.id !== id)
      : [...selected, segments.find(segment => segment.id === id)!]
    setSelected(newSelected)
    const newSelectedItems = newSelected.map(segment => segment.item)
    onSelectionChange(newSelectedItems)
  }

  if (segments.length === 0) {
    console.error('No segments provided to MultiSegmentedControl')
    return null
  }

  return (
    <View height="100%" width="100%" row>
      {({ dim }) =>
        segments.map((segment, index) => (
          <Button
            key={segment.id}
            disabled={
              isSelected(segment.id) &&
              !!minimumSelected &&
              minimumSelected > 0 &&
              selected.length <= minimumSelected
            }
            outline
            flex
            onPress={() => {
              handleSelectionChange(segment.id)
            }}
            style={{
              borderTopLeftRadius: index === 0 ? 8 : 0,
              borderBottomLeftRadius: index === 0 ? 8 : 0,
              borderTopRightRadius: index === segments.length - 1 ? 8 : 0,
              borderBottomRightRadius: index === segments.length - 1 ? 8 : 0,
              borderColor: Colors.$outlinePrimary,
              borderLeftWidth: index === 0 ? 1 : 0,
              backgroundColor: isSelected(segment.id) ? Colors.$backgroundPrimaryLight : undefined,
            }}
            iconSource={
              renderSegment
                ? () => renderSegment(segment)
                : () => (
                    <ButtonContent
                      label={segment.label}
                      width={dim('100cqw') / segments.length}
                      height={dim('100cqh')}
                      activeColor={activeColor}
                      inactiveColor={inactiveColor}
                      labelStyle={labelStyle}
                      isSelected={isSelected(segment.id)}
                    />
                  )
            }
          />
        ))
      }
    </View>
  )
}

const ButtonContent = ({
  label,
  width,
  height,
  activeColor,
  inactiveColor,
  labelStyle,
  isSelected,
}: {
  label: string
  width: number
  height: number
  activeColor?: string
  inactiveColor?: string
  labelStyle?: TextStyle
  isSelected?: boolean
}) => {
  return (
    <View
      row
      center
      style={{ padding: width * 0.1, backgroundColor: isSelected ? activeColor : inactiveColor }}
    >
      <Text
        flex
        center
        numberOfLines={1}
        color={isSelected ? Colors.$black : Colors.$textNeutral}
        style={[{ fontSize: height * 0.3 }, labelStyle]}
      >
        {label}
      </Text>
      {isSelected && (
        <Icon
          name="check"
          size={height * 0.3}
          color={Colors.$textPrimary}
          family="material-icons"
          style={{ position: 'absolute', bottom: 0, right: 4 }}
        />
      )}
    </View>
  )
}
