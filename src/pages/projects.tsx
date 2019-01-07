import * as React from 'react'
import Layout from '../components/layout'
import ProjectPage from './projects/projects-page'
import ProjectHeader from '../pages/projects/header/project-header'

const headerTitle = 'Freelance Web Designer & Developer based in Texas. </br> Highly experienced in designing & developing custom Angular & React websites.'
const ProjectsPage = () => (
  <Layout>
    <ProjectHeader title={headerTitle}/>
    <ProjectPage/>
  </Layout>
)

export default ProjectsPage
