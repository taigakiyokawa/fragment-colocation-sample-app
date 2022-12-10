import { gql } from '@apollo/client'
import { FC } from 'react'
import { Profile_UserFragment } from './__generated__'

gql`
  fragment Profile_User on User {
    name
    bio
  }
`

type Props = Profile_UserFragment

export const Profile: FC<Props> = ({ name, bio }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  )
}
