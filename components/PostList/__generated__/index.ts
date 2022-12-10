import * as SchemaTypes from '../../../graphql/__generated__/graphql-schema-types'

import { gql } from '@apollo/client'
export type PostList_PostFragment = {
  __typename?: 'Post'
  id: string
  date: string
  title: string
}

export const PostList_PostFragmentDoc = gql`
  fragment PostList_Post on Post {
    id
    date
    title
  }
`
