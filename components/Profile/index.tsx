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
    <div className="mb-8">
      <h1 className="text-3xl font-black mb-2">{name}</h1>
      <p>{bio}</p>
    </div>
  )
}
