import type { FC } from 'react'

type Props = {
  posts: { id: string; date: string; title: string }[]
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(({ id, date, title }) => {
          return (
            <li key={id}>
              {date}: {title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
