import { ProjectType } from '@/features/projects'
import { getLocalFromUtc } from '@/utils/getLocalFromUtc'
import Link from 'next/link'

const Project = ({ project }: {project: ProjectType}) => {

  const localDate = getLocalFromUtc(project.createdAt);

  return (
    <Link href={`/posts/${project.id}`}>
      <header>{project.name}</header>
      <div>
        No project description.
      </div>
      <div>Created: {localDate}</div>
    </Link>
  );
}

export default Project;
