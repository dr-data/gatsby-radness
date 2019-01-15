import * as React from 'react'
import ProjectCards from '../projects/project-card/project-card'
import PageHeader from '../../components/page-header/page-header'

const ProjectPage = () => (
  <>
    <div className="container section-container">
      <PageHeader title="Project" subTitle="Portfolio"/>
      <ProjectCards/>
    </div>
  </>
)

export default ProjectPage