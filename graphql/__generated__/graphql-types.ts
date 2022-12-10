import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Post = {
  __typename?: 'Post'
  date: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  viewer: User
}

export type User = {
  __typename?: 'User'
  bio: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  posts: Array<Post>
}

export type FetchViewerPageQueryVariables = Exact<{ [key: string]: never }>

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
      name
      bio
      posts {
        id
        date
        title
      }
    }
  }
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
