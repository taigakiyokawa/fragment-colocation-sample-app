import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    viewer: User
  }
`
