import {
  Locale,
  addWeeks,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  format,
  isSameDay,
  startOfWeek,
  subWeeks,
} from 'date-fns'

import * as React from 'react'
import { GestureResponderEvent } from 'react-native'
import { Colors } from 'react-native-ui-lib'

import Text from '../basic/Text'
import Touchable from '../basic/Touchable'
import View, { ViewProps } from '../basic/View'

interface DayActivity {
  date: Date
  takeout?: number
  eatIn?: number
}

interface ActivityProps {
  forwardWeeks: number
  backwardWeeks: number
  activity?: DayActivity[]
  cellSize?: number
  onDayPressed?: (day: Date) => void
  getCellStyle?: (day: Date) => ViewProps['style']
  dateFnsLocale?: Locale
}

interface CellData extends DayActivity {
  activityLevel: number
  x: number
  y: number
}

export default function Activity({
  forwardWeeks,
  backwardWeeks,
  activity,
  cellSize = 10,
  onDayPressed,
  getCellStyle,
  dateFnsLocale,
}: ActivityProps) {
  const now = new Date()
  const firstDayOfFirstWeek = startOfWeek(subWeeks(now, backwardWeeks), { locale: dateFnsLocale })
  const firstDayOfLastWeek = startOfWeek(addWeeks(now, forwardWeeks), { locale: dateFnsLocale })

  const firstDaysOfWeeks = eachWeekOfInterval(
    {
      start: firstDayOfFirstWeek,
      end: firstDayOfLastWeek,
    },
    { locale: dateFnsLocale }
  ).map(day => startOfWeek(day, { locale: dateFnsLocale }))

  const getDaysOfWeek = (week: Date) => {
    const start = startOfWeek(week, { locale: dateFnsLocale })
    const end = endOfWeek(week, { locale: dateFnsLocale })
    return eachDayOfInterval({ start, end })
  }

  const [pointedCell, setPointedCell] = React.useState<CellData | null>(null)
  const getActivity = (day: Date) => {
    if (!day) return { activityLevel: 0, takeout: 0, eatIn: 0 }
    const dayActivity = activity?.find(a => isSameDay(a.date, day))
    return {
      activityLevel: dayActivity ? (dayActivity.takeout ?? 0) + (dayActivity.eatIn ?? 0) : 0,
      takeout: dayActivity?.takeout ?? 0,
      eatIn: dayActivity?.eatIn ?? 0,
    }
  }

  const handleCellPointed = React.useCallback((day: Date, event: GestureResponderEvent) => {
    const { activityLevel, takeout, eatIn } = getActivity(day)
    setPointedCell({
      date: day,
      activityLevel,
      takeout,
      eatIn,
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY,
    })
  }, [])

  return (
    <View padding-8>
      <View center>
        <View row>
          <View>
            {getDaysOfWeek(now).map(day => (
              <View key={day.toISOString()} center flex marginR-8>
                <Text font="Lemon-Regular" style={{ fontSize: cellSize }}>
                  {format(day, 'EEEEE', { locale: dateFnsLocale })}
                </Text>
              </View>
            ))}
          </View>
          {firstDaysOfWeeks.map(day => (
            <View key={day.toISOString()} center>
              {getDaysOfWeek(day).map(day => {
                const { activityLevel } = getActivity(day)
                return (
                  <View
                    key={day.toISOString()}
                    onTouchStart={event => handleCellPointed(day, event)}
                  >
                    <Touchable onPressIn={() => onDayPressed?.(day)}>
                      <View center style={[{ padding: cellSize / 4 }]}>
                        <View
                          width={cellSize}
                          height={cellSize}
                          bg-$backgroundNeutralMedium
                          br10
                          style={[
                            {
                              borderWidth: 1,
                              borderColor: Colors.rgba(Colors.$outlinePrimary, 0.1),
                              backgroundColor: Colors.rgba(Colors.$backgroundPrimaryLight, 0.3),
                            },
                            isSameDay(day, now) && {
                              borderWidth: 1,
                              borderColor: Colors.$backgroundPrimaryMedium,
                              boxShadow: `0 0 0 1px ${Colors.$backgroundPrimaryLight}`,
                            },
                            pointedCell &&
                              isSameDay(day, pointedCell.date) && {
                                boxShadow: `0 0 5px 1px ${Colors.$backgroundPrimaryLight}`,
                              },
                            activityLevel > 0 && {
                              backgroundColor: Colors.rgba(
                                Colors.$backgroundPrimaryMedium,
                                0.3 + (0.8 * activityLevel) / 20
                              ),
                            },
                            getCellStyle?.(day),
                          ]}
                        >
                          {day.getDate() === 1 && (
                            <Text center style={{ fontWeight: 'bold', fontSize: cellSize * 0.65 }}>
                              {format(day, 'MMMMM', { locale: dateFnsLocale })}
                            </Text>
                          )}
                          {isSameDay(day, now) && (
                            <View
                              br100
                              style={{
                                position: 'absolute',
                                inset: '10%',
                                borderWidth: cellSize * 0.2,
                                borderColor: Colors.$backgroundDangerHeavy,
                                opacity: 0.7,
                              }}
                            />
                          )}
                        </View>
                      </View>
                    </Touchable>
                  </View>
                )
              })}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
