import { PostProps } from '@/features/posts'
import { getLocalFromUtc } from '@/utils/getLocalFromUtc'
import React from 'react'

const Post: React.FC<PostProps> = ({ post }) => {
  const localDate = getLocalFromUtc(post.createdAt)

  return (
    <>
      <section className="h-40 shadow-lg min-w-60 bg-white border rounded-md d flex flex-col m-5">
        <div className="inline-flex flex-col p-2.5 border-b w-full">
          <header className="font-bold text-black">{post.title}</header>
          <div className="text-slate-500 text-sm">{localDate}</div>
        </div>
        <div className="h-20 p-2.5 overflow-scroll">{post.comment}</div>
      </section>
    </>
  )
}

export default Post
