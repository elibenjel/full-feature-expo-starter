import * as React from 'react'
import RNUIButton from 'react-native-ui-lib/button'
import { ButtonProps as RNUIButtonProps } from 'react-native-ui-lib/src/components/button'

import useTimer from '../../hooks/useTimer'
import Text from '../basic/Text'
import View from '../basic/View'
import Spinner from '../status/Spinner'

export type ButtonProps = RNUIButtonProps & {
  loading?: boolean
  doubleCheck?: boolean
  doubleCheckDuration?: number
  doubleCheckLabel?: string
}

export default function Button(props: ButtonProps) {
  const { loading, doubleCheck, doubleCheckDuration, doubleCheckLabel, ...baseProps } = props
  const { timer, isRunning, start, reset } = useTimer({
    duration: doubleCheckDuration ?? 0,
  })

  return (
    <RNUIButton
      {...baseProps}
      label={loading ? ' ' : doubleCheck && isRunning ? doubleCheckLabel : baseProps.label}
      iconSource={
        loading
          ? () => <Spinner color="white" />
          : doubleCheck && isRunning
            ? () => (
                <View marginR-8>
                  <Text text80BO $textPrimary>
                    {timer}
                  </Text>
                </View>
              )
            : baseProps.iconSource
      }
      iconStyle={loading ? { position: 'absolute', top: 0, bottom: 0 } : baseProps.iconStyle}
      onPress={() => {
        if (loading) return
        if (doubleCheck && doubleCheckDuration && !isRunning) {
          start()
          return
        }

        baseProps.onPress?.()
        reset()
      }}
    />
  )
}
