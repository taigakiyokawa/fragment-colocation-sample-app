import { FC } from 'react'
import { useFetchViewerPageQuery } from '../../graphql/__generated__/graphql-types'
import { PostList } from '../PostList'
import { Profile } from '../Profile'

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
      <Profile name={name} />
      <PostList posts={posts} />
    </div>
  )
}
