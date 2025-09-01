import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import {
  NetworkCall,
  NetworkStatistics,
  calculateOverallStatistics,
  calculateQueryStatistics,
  createQueryKey,
} from '../utils/networkStatistics'

type DevConfigurationStore = {
  settings: {
    mockMode: boolean
    networkDelay: number | undefined
    networkDelayEnabled: boolean
    networkStatisticsEnabled: boolean
    devGraphqlUrl: string | undefined
  }
  networkStatistics: NetworkStatistics
  actions: {
    toggleMockMode: () => void
    toggleNetworkDelay: () => void
    setNetworkDelay: (networkDelay: number) => void
    toggleNetworkStatistics: () => void
    addNetworkCall: (call: NetworkCall) => void
    clearNetworkStatistics: () => void
    getNetworkStatistics: () => NetworkStatistics
    toggleDevGraphqlUrl: () => void
  }
}

const useDevConfigurationStore = create<DevConfigurationStore>()(
  persist(
    (set, get) => ({
      settings: {
        mockMode: false,
        networkDelay: undefined,
        networkDelayEnabled: false,
        networkStatisticsEnabled: false,
        devGraphqlUrl: undefined,
      },
      networkStatistics: {
        queries: {},
        totalCalls: 0,
        totalDuration: 0,
        avgDuration: 0,
        startTime: Date.now(),
      },
      actions: {
        toggleMockMode: () =>
          set({ settings: { ...get().settings, mockMode: !get().settings.mockMode } }),
        toggleNetworkDelay: () =>
          set({
            settings: {
              ...get().settings,
              networkDelayEnabled: !get().settings.networkDelayEnabled,
            },
          }),
        setNetworkDelay: (networkDelay: number) =>
          set({ settings: { ...get().settings, networkDelay } }),
        toggleNetworkStatistics: () =>
          set({
            settings: {
              ...get().settings,
              networkStatisticsEnabled: !get().settings.networkStatisticsEnabled,
            },
          }),
        addNetworkCall: (call: NetworkCall) => {
          const state = get()
          const queryKey = createQueryKey(call.query, call.variables)
          const existingCalls = state.networkStatistics.queries[queryKey]?.calls || []
          const updatedCalls = [...existingCalls, call]

          const updatedQueries = {
            ...state.networkStatistics.queries,
            [queryKey]: calculateQueryStatistics(updatedCalls),
          }

          const overallStats = calculateOverallStatistics(updatedQueries)

          set({
            networkStatistics: {
              ...state.networkStatistics,
              queries: updatedQueries,
              ...overallStats,
            },
          })
        },
        clearNetworkStatistics: () =>
          set({
            networkStatistics: {
              queries: {},
              totalCalls: 0,
              totalDuration: 0,
              avgDuration: 0,
              startTime: Date.now(),
            },
          }),
        getNetworkStatistics: () => get().networkStatistics,
        toggleDevGraphqlUrl: () =>
          set({
            settings: {
              ...get().settings,
              devGraphqlUrl: get().settings.devGraphqlUrl
                ? undefined
                : 'https://surpreat-backend.onrender.com/graphql',
            },
          }),
      },
    }),
    {
      name: 'dev-configuration',
      storage: createJSONStorage(() => AsyncStorage),
      merge: (persistedState, currentState) => {
        return {
          ...(persistedState as DevConfigurationStore),
          ...currentState,
        }
      },
    }
  )
)

export const devConfigurationStore = useDevConfigurationStore
export const useDevConfiguration = () => useDevConfigurationStore(state => state.settings)
export const useDevConfigurationActions = () => useDevConfigurationStore(state => state.actions)
export const useNetworkStatistics = () => useDevConfigurationStore(state => state.networkStatistics)
