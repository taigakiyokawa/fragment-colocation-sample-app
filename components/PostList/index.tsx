import type { FC } from 'react'

type Props = {
  posts: { id: string; title: string }[]
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map(({ id, title }) => {
          return <li key={id}>{title}</li>
        })}
      </ul>
    </>
  )
}
