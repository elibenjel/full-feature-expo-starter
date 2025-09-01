import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

/**
 * Graphql code generation configuration.
 * Configured to connect to a supabase graphql endpoint.
 * Generates the merged schema, together with associated type definitions and react-query hooks.
 */

dotenv.config({ path: '.env' })
const supabaseGraphQLUrl = `${process.env.SUPABASE_URL!}/graphql/v1`
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!

const config: CodegenConfig = {
  schema: [
    {
      [supabaseGraphQLUrl]: {
        headers: {
          apikey: supabaseAnonKey,
        },
      },
    },
    /**
     * Add other path to merge together multiple schema files, e.g. if supabase schema is only used for queries
     * and a custom backend provide specific mutations.
     */
    // '../backend/src/main/resources/graphql/**/*.graphqls',
  ],
  documents: ['src/**/*.tsx', 'app/**/*.tsx', 'src/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  config: {
    reactQueryVersion: 5,
  },
  generates: {
    './src/graphql/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        defaultScalarType: 'unknown',
        scalars: {
          BigFloat: 'number',
          BigInt: 'number',
          Date: 'Date',
          Datetime: 'Date',
          Time: 'string',
          UUID: 'string',
          Cursor: 'string',
          Opaque: 'unknown',
          JSON: 'unknown',
        },
        skipTypename: true,
        fetcher: './fetcher#fetcher',
        exposeQueryKeys: true,
        exposeFetcher: true,
        namingConvention: 'keep',
      },
    },
    './schema.graphql': {
      // needed for query field hovering and completion (only in typescript files)
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
