import { gql } from '@apollo/client'
import type { FC } from 'react'
import { PostList_PostFragment } from './__generated__'

gql`
  fragment PostList_Post on Post {
    id
    date
    title
  }
`

type Props = {
  posts: PostList_PostFragment[]
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b border-b-neutral-800">
        Posts
      </h2>
      <ul>
        {posts.map(({ id, date, title }) => {
          return (
            <li key={id} className="mb-2">
              {date}: {title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
