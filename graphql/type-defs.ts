import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    bio: String
    posts: [Post!]!
  }

  type Post {
    id: ID!
    date: String!
    title: String!
  }

  type Query {
    viewer: User!
  }
`
