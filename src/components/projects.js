import React  from 'react';
import { Grid, PageHeader } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import ProjectPolaroid from './project_polaroid';
import projectList from './projectsList.json';

const Projects = () => {

  const projects = Object.entries(projectList['projects']).map((project) => {
    return <ProjectPolaroid
      title={project[1].title}
      img={project[1].img}
      description={project[1].description}
      type={project[1].type}
      key={project[1].title}
    />
  });

  return(
    <ScrollableAnchor id={'projects'}>
      <div>
        <Grid>
          <PageHeader>a few projects i have worked on</PageHeader>
        </Grid>
        <hr/>
        <Grid className="project-list">
          {projects}
        </Grid>
      </div>
    </ScrollableAnchor>
  );
}

export default Projects;