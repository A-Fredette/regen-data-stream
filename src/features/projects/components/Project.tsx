import { ProjectType } from '@/features/projects';
import { getLocalFromUtc } from '@/utils/getLocalFromUtc';

const Project = ({ project }: {project: ProjectType}) => {

  const localDate = getLocalFromUtc(project.createdAt);

  return (
    <>
      <header>{project.name}</header>
      <div>
        No project description.
      </div>
      <div>Created: {localDate}</div>
    </>
  );
}

export default Project;
