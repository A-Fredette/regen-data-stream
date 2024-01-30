'use client'
import useFetchPosts from '@/hooks/useGetMorePosts'
import { useState } from 'react'
import { Post, PostT } from '@/features/posts'

const PostList = ({ projectId, projectName } : { projectId: string, projectName: string }) => {
  const [offset, setOffset] = useState(10)
  const [posts, loading, error] = useFetchPosts(projectId, offset)

  const handleLoadMore = () => setOffset(offset + 10)

    return (
        <>
          {posts && posts.length > 0 && posts.map((post: PostT) => {
            return (
              <Post key={post.id} post={post} projectName={projectName} />
            )
          })}

          {loading ?
            <div>Loading older posts...</div>
            :
            <button onClick={handleLoadMore}>Load Older Posts</button>
          }

          {error && <div>Something went wrong...please try again.</div>}
        </>
    )
}

export default PostList;
