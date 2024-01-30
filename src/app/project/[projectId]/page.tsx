import React from 'react';
import { getProjects } from '@/data/getProjects';
import { Project } from '@/features/projects';

const ProjectPage = async ({ params }: { params : { projectId: string}}) => {
  const { project } = await getProjects(params.projectId)

  return (
    <div>
      <Project project={project} />
    </div>
  );
}

export default ProjectPage;
