import * as React from 'react'
import ProjectCards from '../projects/project-card/project-card'
import PageHeader from '../../components/page-header/page-header'

const ProjectPage = () => (
  <>
    <PageHeader title="Projects"/>
    <div className="container">
      <ProjectCards/>
    </div>
  </>
)

export default ProjectPage