/**
 * This file is not used in the project, it is only a workaround to get the typescript-react-query plugin to work.
 * Without a code file containing a GraphQL query, the plugin will not generate the types for the documents.graphql files.
 * The file extension must also be .tsx, as it seems graphql-codegen does not search for GraphQL queries in .ts files.
 */

const _ = /* GraphQL */ `
  query Introspect {
    __schema {
      queryType {
        fields {
          name
        }
      }
    }
  }
`
