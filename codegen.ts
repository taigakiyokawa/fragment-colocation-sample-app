import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'graphql/type-defs.ts',
  generates: {
    'graphql/__generated__/graphql-schema-types.ts': {
      plugins: ['typescript'],
    },
    'components/': {
      documents: 'components/**/index.tsx',
      preset: 'near-operation-file',
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      presetConfig: {
        baseTypesPath: '../graphql/__generated__/graphql-schema-types.ts',
        folder: '__generated__',
        extension: '.ts',
        importTypesNamespace: 'SchemaTypes',
      },
    },
  },
  config: { avoidOptionals: true },
  hooks: { afterAllFileWrite: ['prettier --write'] },
}
export default config
