export interface NetworkCall {
  query: string
  variables?: any
  timestamp: number
  duration: number
  success: boolean
  error?: string
}

export interface QueryStatistics {
  query: string
  variables?: any
  callCount: number
  minDuration: number
  maxDuration: number
  avgDuration: number
  totalDuration: number
  successCount: number
  errorCount: number
  lastCall?: NetworkCall
  calls: NetworkCall[]
}

export interface NetworkStatistics {
  queries: Record<string, QueryStatistics>
  totalCalls: number
  totalDuration: number
  avgDuration: number
  startTime: number
}

export function createQueryKey(query: string, variables?: any): string {
  const variablesStr = variables ? JSON.stringify(variables) : ''
  return `${query}:${variablesStr}`
}

export function calculateQueryStatistics(calls: NetworkCall[]): QueryStatistics {
  if (calls.length === 0) {
    return {
      query: '',
      variables: undefined,
      callCount: 0,
      minDuration: 0,
      maxDuration: 0,
      avgDuration: 0,
      totalDuration: 0,
      successCount: 0,
      errorCount: 0,
      calls: [],
    }
  }

  const durations = calls.map(call => call.duration)
  const successCalls = calls.filter(call => call.success)
  const errorCalls = calls.filter(call => !call.success)

  return {
    query: calls[0].query,
    variables: calls[0].variables,
    callCount: calls.length,
    minDuration: Math.min(...durations),
    maxDuration: Math.max(...durations),
    avgDuration: durations.reduce((sum, duration) => sum + duration, 0) / calls.length,
    totalDuration: durations.reduce((sum, duration) => sum + duration, 0),
    successCount: successCalls.length,
    errorCount: errorCalls.length,
    lastCall: calls[calls.length - 1],
    calls,
  }
}

export function calculateOverallStatistics(queries: Record<string, QueryStatistics>): {
  totalCalls: number
  totalDuration: number
  avgDuration: number
} {
  const allCalls = Object.values(queries).flatMap(q => q.calls)

  if (allCalls.length === 0) {
    return {
      totalCalls: 0,
      totalDuration: 0,
      avgDuration: 0,
    }
  }

  const totalCalls = allCalls.length
  const totalDuration = allCalls.reduce((sum, call) => sum + call.duration, 0)
  const avgDuration = totalDuration / totalCalls

  return {
    totalCalls,
    totalDuration,
    avgDuration,
  }
}
