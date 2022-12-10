import * as SchemaTypes from '../../../graphql/__generated__/graphql-schema-types'

import { gql } from '@apollo/client'
export type Profile_UserFragment = {
  __typename?: 'User'
  name: string
  bio: string | null
}

export const Profile_UserFragmentDoc = gql`
  fragment Profile_User on User {
    name
    bio
  }
`
