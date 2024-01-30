import React from 'react'
import { PostProps } from '@/features/posts'
import { getLocalFromUtc } from '@/utils/getLocalFromUtc'

const Post: React.FC<PostProps> = ({ post, projectName }) => {
  const localDate = getLocalFromUtc(post.createdAt);

  return (
    <>
      <header>{post.title}</header>
      <div>Created: {localDate}</div>
      <div>Project: {projectName}</div>
      <div>{post.comment}</div>
    </>
    )
}

export default Post;
