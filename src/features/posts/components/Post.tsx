import { PostProps } from '@/features/posts'
import { getLocalFromUtc } from '@/utils/getLocalFromUtc'
import React from 'react'

const Post: React.FC<PostProps> = ({ post, projectName }) => {
  const localDate = getLocalFromUtc(post.createdAt)

  return (
    <>
      <section className="h-60 shadow-lg min-w-60 bg-red-300 border rounded-md d flex-col m-5">
        <div className="inline-flex flex-col p-2.5">
          <header className="text-lg bold">{post.title}</header>
          <div>{localDate}</div>
        </div>
        <div className="p-2.5">{post.comment}</div>
      </section>
    </>
  )
}

export default Post
