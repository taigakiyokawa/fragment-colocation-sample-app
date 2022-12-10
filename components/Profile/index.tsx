import { gql } from '@apollo/client'
import { FC } from 'react'

gql`
  fragment Profile_User on User {
    name
    bio
  }
`

type Props = {
  name: string
  bio: string | null
}

export const Profile: FC<Props> = ({ name, bio }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  )
}
