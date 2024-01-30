import { getProjects } from '@/data/getProjects'
import { Project } from '@/features/projects'

const ProjectPage = async ({ params }: { params : { projectId: string}}) => {
  const { project } = await getProjects(params.projectId)

  return (
    <>
      <Project project={project} />
    </>
  );
}

export default ProjectPage;
