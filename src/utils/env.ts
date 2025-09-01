import Constants from 'expo-constants'

export const IS_PROD = Constants.expoConfig?.extra?.APP_VARIANT === 'production'
export const IS_PREVIEW = Constants.expoConfig?.extra?.APP_VARIANT === 'preview'
export const IS_DEV = Constants.expoConfig?.extra?.APP_VARIANT === 'development'
