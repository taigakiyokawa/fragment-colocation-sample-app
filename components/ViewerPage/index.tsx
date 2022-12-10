import { FC } from 'react'
import { useFetchViewerPageQuery } from '../../graphql/__generated__/graphql-types'

export const ViewerPage: FC = () => {
  const { data } = useFetchViewerPageQuery()

  if (!data) {
    return <p>Loading...</p>
  }

  const {
    viewer: { name, posts },
  } = data

  return (
    <div>
      <h1>{name}</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map(({ id, title }) => {
          return <li key={id}>{title}</li>
        })}
      </ul>
    </div>
  )
}
