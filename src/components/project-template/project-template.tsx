import * as React from 'react'
import './project-template.sass'
import Proptypes from 'prop-types'
import Layout from '../../components/layout'
import ProjectHeader from '../../pages/projects/header/project-header'

class ProjectTemplate extends React.Component {
  render() {
    const {
      projectTitle,
      projectImage: { file: { url } },
      projectDesc: { childMarkdownRemark: { html } },
    } = this.props.data.contentfulMyProjects
    const headerTitle = 'Freelance Web Designer & Developer based in Texas. </br> Highly experienced in designing & developing custom Angular & React websites.'
    return (
      <Layout>
        <ProjectHeader title={headerTitle}/>
        <div style={{ padding: '0 1rem' }}>
          <h1>{projectTitle}</h1>
          <img className="img-project-view" src={url} alt='logo'/>
          {<div dangerouslySetInnerHTML={{ __html: html }}/>}
        </div>
      </Layout>
    )
  }
}

ProjectTemplate.propTypes = {
  data: Proptypes.object.isRequired,
}

export default ProjectTemplate

export const pageQuery = graphql`
  query myProjectQuery($slug: String!){
    contentfulMyProjects(slug: {eq: $slug}) {
      projectTitle
      slug
      projectImage {
        file {
          url
        }
      }
       projectDesc {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`