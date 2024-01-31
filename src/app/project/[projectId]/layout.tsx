import React from 'react'

const PostsLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <div className="p-5">Projects (1)</div>
      {children}
    </>
  )
}

export default PostsLayout
