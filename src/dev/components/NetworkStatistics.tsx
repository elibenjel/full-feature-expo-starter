import * as React from 'react'

import {
  useDevConfiguration,
  useDevConfigurationActions,
  useNetworkStatistics,
} from '@/graphql/useDevConfigurationStore'
import { Button, Surface, Text, View } from '@/lib/ui'

export default function NetworkStatistics() {
  const { networkStatisticsEnabled } = useDevConfiguration()
  const { toggleNetworkStatistics, clearNetworkStatistics } = useDevConfigurationActions()
  const networkStatistics = useNetworkStatistics()

  const formatDuration = (ms: number) => {
    if (ms < 1000) return `${ms}ms`
    return `${(ms / 1000).toFixed(2)}s`
  }

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString()
  }

  const sortedQueries = Object.entries(networkStatistics.queries).sort(
    (a, b) => b[1].callCount - a[1].callCount
  )

  return (
    <View gap-16>
      <View row distribute center>
        <Text text70BO>Network Statistics</Text>
        <Button
          label={networkStatisticsEnabled ? 'Disable' : 'Enable'}
          onPress={toggleNetworkStatistics}
          size="small"
        />
      </View>

      {networkStatisticsEnabled && (
        <View gap-16>
          {/* Overall Statistics */}
          <Surface padding-16>
            <Text text80BO marginB-8>
              Overall Statistics
            </Text>
            <View gap-4>
              <Text text90>Total Calls: {networkStatistics.totalCalls}</Text>
              <Text text90>Total Duration: {formatDuration(networkStatistics.totalDuration)}</Text>
              <Text text90>Average Duration: {formatDuration(networkStatistics.avgDuration)}</Text>
              <Text text90>Start Time: {formatTimestamp(networkStatistics.startTime)}</Text>
            </View>
            <Button
              label="Clear Statistics"
              onPress={clearNetworkStatistics}
              size="small"
              marginT-8
            />
          </Surface>

          {/* Query Statistics */}
          {sortedQueries.length > 0 && (
            <View gap-12>
              <Text text80BO>Query Statistics</Text>
              {sortedQueries.map(([queryKey, stats]) => (
                <Surface key={queryKey} padding-16>
                  <View gap-8>
                    <Text text90BO numberOfLines={2}>
                      {stats.query}
                    </Text>
                    {stats.variables && (
                      <Text text90 $textNeutral numberOfLines={1}>
                        Variables: {JSON.stringify(stats.variables)}
                      </Text>
                    )}

                    <View gap-4>
                      <Text text90>Call Count: {stats.callCount}</Text>
                      <Text text90>
                        Success Rate: {((stats.successCount / stats.callCount) * 100).toFixed(1)}%
                      </Text>
                      <Text text90>Min Duration: {formatDuration(stats.minDuration)}</Text>
                      <Text text90>Max Duration: {formatDuration(stats.maxDuration)}</Text>
                      <Text text90>Avg Duration: {formatDuration(stats.avgDuration)}</Text>
                      <Text text90>Total Duration: {formatDuration(stats.totalDuration)}</Text>
                    </View>

                    {stats.lastCall && (
                      <View gap-4>
                        <Text text90BO>Last Call</Text>
                        <Text text90>Time: {formatTimestamp(stats.lastCall.timestamp)}</Text>
                        <Text text90>Duration: {formatDuration(stats.lastCall.duration)}</Text>
                        <Text text90>Status: {stats.lastCall.success ? 'Success' : 'Error'}</Text>
                        {stats.lastCall.error && (
                          <Text text90 $textDanger numberOfLines={2}>
                            Error: {stats.lastCall.error}
                          </Text>
                        )}
                      </View>
                    )}

                    {/* Recent Calls */}
                    {stats.calls.length > 0 && (
                      <View gap-4>
                        <Text text90BO>Recent Calls ({stats.calls.length})</Text>
                        {stats.calls.slice(-5).map((call, index) => (
                          <View key={index} row distribute center>
                            <Text text90>{formatTimestamp(call.timestamp)}</Text>
                            <Text text90>{formatDuration(call.duration)}</Text>
                            <Text text90 $textSuccess={call.success} $textDanger={!call.success}>
                              {call.success ? '✓' : '✗'}
                            </Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                </Surface>
              ))}
            </View>
          )}

          {sortedQueries.length === 0 && (
            <Surface padding-16>
              <Text text90 center $textNeutral>
                No network calls recorded yet. Make some API calls to see statistics.
              </Text>
            </Surface>
          )}
        </View>
      )}

      {!networkStatisticsEnabled && (
        <Surface padding-16>
          <Text text90 center $textNeutral>
            Enable network statistics to start tracking API calls.
          </Text>
        </Surface>
      )}
    </View>
  )
}
