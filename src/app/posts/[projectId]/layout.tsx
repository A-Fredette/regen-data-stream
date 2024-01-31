import { getProjects } from '@/data/getProjects'
import React from 'react'

const PostsLayout = async ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { projectId: string }
}>) => {
  const { project } = await getProjects(params.projectId)

  return (
    <>
      <div className="p-5">{project.name} Posts (100)</div>
      <section className="content-start flex-wrap h-screen w-screen flex flex-row">
        {children}
      </section>
    </>
  )
}

export default PostsLayout
