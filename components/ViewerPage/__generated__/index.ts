import * as SchemaTypes from '../../../graphql/__generated__/graphql-schema-types'

import { gql } from '@apollo/client'
import { Profile_UserFragmentDoc } from '../../Profile/__generated__/index'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type FetchViewerPageQueryVariables = SchemaTypes.Exact<{
  [key: string]: never
}>

export type FetchViewerPageQuery = {
  __typename?: 'Query'
  viewer: {
    __typename?: 'User'
    id: string
    name: string
    bio: string | null
    posts: Array<{
      __typename?: 'Post'
      id: string
      date: string
      title: string
    }>
  }
}

export const FetchViewerPageDocument = gql`
  query FetchViewerPage {
    viewer {
      id
      ...Profile_User
      posts {
        id
        date
        title
      }
    }
  }
  ${Profile_UserFragmentDoc}
`

/**
 * __useFetchViewerPageQuery__
 *
 * To run a query within a React component, call `useFetchViewerPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchViewerPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchViewerPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchViewerPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchViewerPageQuery,
    FetchViewerPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FetchViewerPageQuery, FetchViewerPageQueryVariables>(
    FetchViewerPageDocument,
    options
  )
}
export function useFetchViewerPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchViewerPageQuery,
    FetchViewerPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    FetchViewerPageQuery,
    FetchViewerPageQueryVariables
  >(FetchViewerPageDocument, options)
}
export type FetchViewerPageQueryHookResult = ReturnType<
  typeof useFetchViewerPageQuery
>
export type FetchViewerPageLazyQueryHookResult = ReturnType<
  typeof useFetchViewerPageLazyQuery
>
export type FetchViewerPageQueryResult = Apollo.QueryResult<
  FetchViewerPageQuery,
  FetchViewerPageQueryVariables
>
