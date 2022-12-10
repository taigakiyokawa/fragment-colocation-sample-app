import { FC } from 'react'

type Props = {
  name: string
}

export const Profile: FC<Props> = ({ name }) => {
  return <h1>{name}</h1>
}
