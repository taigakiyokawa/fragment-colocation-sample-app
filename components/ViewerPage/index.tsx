import { gql } from '@apollo/client'
import { FC } from 'react'
import { useFetchViewerPageQuery } from './__generated__'
import { PostList } from '../PostList'
import { Profile } from '../Profile'

gql`
  query FetchViewerPage {
    viewer {
      id
      name
      bio
      posts {
        id
        date
        title
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
    <div>
      <Profile name={name} bio={bio} />
      <PostList posts={posts} />
    </div>
  )
}
