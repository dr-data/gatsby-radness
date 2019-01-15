import * as React from 'react'
import ProjectCards from '../projects/project-card/project-card'
import PageHeader from '../../components/page-header/page-header'

const ProjectPage = () => (
  <>
    <div className="container section-container">
      <div className='hideOnMobile'>
        <PageHeader title="Project" subTitle="Portfolio"/>
      </div>
      <div className='hideOnDesktop'>
        <PageHeader subTitle="Portfolio"/>
      </div>
      <ProjectCards/>
    </div>
  </>
)

export default ProjectPage