import { getProjectPosts } from '@/data/getProjectPosts'
import { getProjects } from '@/data/getProjects'
import { Post, PostT } from '@/features/posts'
import PostList from '@/features/posts/components/PostList'

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const { project } = await getProjects(params.projectId)
  const { posts } = await getProjectPosts(params.projectId, 10, 0)

  return (
    <>
      {posts.map((post: PostT) => (
        <Post key={post.id} post={post} projectName={project.name} />
      ))}
      <PostList projectId={project.id} projectName={project.name} />
    </>
  )
}

export default ProjectPage
