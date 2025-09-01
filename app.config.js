const os = require('os')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

/**
 * Dynamic app config.
 * Uses APP_VARIANT environment variable to determine the app variant.
 * Supports dev, preview and production variants.
 * Each variant has its own unique identifier, name, scheme, graphql url, supabase url and supabase anon key.
 */

const IS_DEV = process.env.APP_VARIANT === 'development'
const IS_PREVIEW = process.env.APP_VARIANT === 'preview'
const IS_PROD = process.env.APP_VARIANT === 'production'
const INVALID_APP_VARIANT_ERROR = new Error('Invalid app variant')

const getUniqueIdentifier = baseAppIdentifier => {
  if (IS_DEV) {
    return `${baseAppIdentifier}.dev`
  }

  if (IS_PREVIEW) {
    return `${baseAppIdentifier}.preview`
  }

  if (IS_PROD) {
    return baseAppIdentifier
  }

  throw INVALID_APP_VARIANT_ERROR
}

const getAppName = baseAppName => {
  if (IS_DEV) {
    return `${baseAppName} (Dev)`
  }

  if (IS_PREVIEW) {
    return `${baseAppName} (Preview)`
  }

  if (IS_PROD) {
    return baseAppName
  }

  throw INVALID_APP_VARIANT_ERROR
}

const getScheme = baseScheme => {
  if (IS_DEV) {
    return `${baseScheme}.dev`
  }

  if (IS_PREVIEW) {
    return `${baseScheme}.preview`
  }

  if (IS_PROD) {
    return baseScheme
  }

  throw INVALID_APP_VARIANT_ERROR
}

const getLocalIpAddress = () => {
  const interfaces = os.networkInterfaces()
  for (const interfaceName of Object.keys(interfaces)) {
    for (const iface of interfaces[interfaceName]) {
      if (!iface.internal && iface.family === 'IPv4') {
        return iface.address // Returns the first external IPv4 address found
      }
    }
  }
  return 'localhost' // Fallback
}

const getGraphqlUrl = () => {
  if (IS_DEV) {
    return `http://${getLocalIpAddress()}:8080/graphql`
  }

  if (IS_PREVIEW) {
    return `https://surpreat-backend.onrender.com/graphql`
  }

  if (IS_PROD) {
    throw new Error('Backend graphql URL is not available in production')
  }

  throw INVALID_APP_VARIANT_ERROR
}

const getSupabaseUrl = () => {
  if (IS_DEV) {
    return `http://${getLocalIpAddress()}:54321`
  }

  if (IS_PREVIEW) {
    // Preview supabase project url should be returned here
    throw new Error('Supabase URL is not available in preview')
  }

  if (IS_PROD) {
    // Production supabase project url should be returned here
    throw new Error('Supabase URL is not available in production')
  }

  throw INVALID_APP_VARIANT_ERROR
}

const getSupabaseAnonKey = () => {
  const anonKey = process.env.SUPABASE_ANON_KEY
  if (anonKey.length === 0) {
    throw new Error('SUPABASE_ANON_KEY is not set')
  }

  return anonKey
}

export default ({ config }) => ({
  ...config,
  name: getAppName(config.name),
  scheme: getScheme(config.scheme),
  android: {
    ...config.android,
    package: getUniqueIdentifier(config.android.package),
  },
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(config.ios.bundleIdentifier),
  },
  extra: {
    ...config.extra,
    GRAPHQL_URL: getGraphqlUrl(),
    SUPABASE_URL: getSupabaseUrl(),
    SUPABASE_GRAPHQL_URL: `${getSupabaseUrl()}/graphql/v1`,
    SUPABASE_ANON_KEY: getSupabaseAnonKey(),
    APP_VARIANT: process.env.APP_VARIANT,
  },
  updates: {
    // url: 'https://u.expo.dev/c722accf-d9da-424b-877d-aaa11a301e46', // project update url
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
})
