'use client'
import PrimaryButton from '@/common/buttons/primary'
import { Post, PostT } from '@/features/posts'
import useFetchPosts from '@/hooks/useGetMorePosts'
import { useState } from 'react'

const PostList = ({
  projectId,
  projectName
}: {
  projectId: string
  projectName: string
}) => {
  const [offset, setOffset] = useState(10)
  const [posts, loading, error] = useFetchPosts(projectId, offset)

  const handleLoadMore = () => setOffset(offset + 10)

  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post: PostT) => (
          <Post key={post.id} post={post} projectName={projectName} />
        ))}

      {loading ? (
        <div>Loading older posts...</div>
      ) : (
        <div className="w-screen ml-5 pb-10">
          <PrimaryButton text="See older posts" onClick={handleLoadMore} />
        </div>
      )}

      {error && <div>Something went wrong...please refresh the page.</div>}
    </>
  )
}

export default PostList
