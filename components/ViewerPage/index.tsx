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
    viewer: { name, bio, posts },
  } = data

  return (
    <div>
      <Profile name={name} bio={bio} />
      <PostList posts={posts} />
    </div>
  )
}
