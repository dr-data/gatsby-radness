import * as React from 'react'
import ProjectHeader from '../projects/header/project-header'
import ProjectCards from '../projects/project-card/project-card'

const headerTitle = 'Freelance Web Designer & Developer based in Texas. </br> Highly experienced in designing & developing custom Angular & React websites.'
const ProjectPage = () => (
  <div className="container">
    <ProjectHeader title={headerTitle}/>
    <ProjectCards/>
  </div>
)

export default ProjectPage