import { gql } from '@apollo/client'
import { FC } from 'react'
import { useFetchViewerPageQuery } from './__generated__'
import { PostList } from '../PostList'
import { Profile } from '../Profile'

gql`
  query FetchViewerPage {
    viewer {
      id
      ...Profile_User
      posts {
        ...PostList_Post
      }
    }
  }
`

export const ViewerPage: FC = () => {
  const { data } = useFetchViewerPageQuery()

  if (!data) {
    return <p>Loading...</p>
  }

  const {
    viewer: { name, bio, posts },
  } = data

  return (
    <div className="max-w-xl mx-auto p-4">
      <Profile name={name} bio={bio} />
      <PostList posts={posts} />
    </div>
  )
}
