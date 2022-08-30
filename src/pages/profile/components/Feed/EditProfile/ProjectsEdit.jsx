import React, { useContext } from 'react'
import { UserProfileContext } from '../../../../../App';
import { ProjectsGrid } from '../../../Styles/materialStyles'
import Project from '../Project/Project';

const ProjectsEdit = () => {

  const projects = useContext(UserProfileContext).projects;

  return (
    <ProjectsGrid container direction="row" spacing={2} sx={{ height: "87%" }}>
    {projects.map(project =>
      <Project
        key={project._id}
        project={project}
        // getProjects={getProjects}
      ></Project>
    )}
  </ProjectsGrid>
  )
}

export default ProjectsEdit