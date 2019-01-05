import * as React from 'react'
import Proptypes from 'prop-types'
import Layout from '../../components/layout'

class ProjectTemplate extends React.Component {
  render() {
    const { projectTitle,
      projectImage: {file: {url}},
      projectDesc: {childMarkdownRemark: {html}}} = this.props.data.contentfulMyProjects
    return (
      <Layout>
        <div style={{padding: '0 1rem'}}>
          <h1>{projectTitle}</h1>
          <img src={url} alt='logo'/>
          {<div dangerouslySetInnerHTML={{__html: html}}/>}
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