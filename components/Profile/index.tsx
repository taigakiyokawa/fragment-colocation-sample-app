import { FC } from 'react'

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
