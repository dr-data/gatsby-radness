import * as React from 'react'
import './project-template.sass'
import Proptypes from 'prop-types'
import Layout from '../../components/layout'
import ProjectHeader from '../../pages/projects/header/project-header'
import { Link } from 'gatsby'

class ProjectTemplate extends React.Component<any, any> {

  render() {
    const {
      projectTitle, skills, sourceCode,
      summary,
      website,
      projectDesc: { childMarkdownRemark: { html } },
      projectImage: { file: { url } },
    } = this.props.data.contentfulDevProjects

    const headerTitle = 'Freelance Web Designer & Developer based in Texas. </br> Highly experienced in designing & developing custom Angular & React websites.'

    return (
      <Layout>
        <ProjectHeader title={headerTitle}/>
        <div className='container'>
          <div className='template-container'>
            <div className="template-content">
              <Link className="back-link" to="projects"><i className="fas fa-chevron-circle-left"/>Back to
                projects</Link>
              <img className="img-project-view" src={url} alt=''/>
              <div>
                {sourceCode !== null &&
                <a href={sourceCode} target="_blank">
                  <i className="fab fa-github"> <span className="source-code"> Source Code</span></i>
                </a>}
              </div>
              <h2 className="template-title">Project Brief</h2>
              <hr/>
              {<div className="template-text" dangerouslySetInnerHTML={{ __html: html }}/>}
            </div>
            <div className='template-sidebar'>
              <div className='container'>
                <div className='template-sidebar-box'>
                  <h3 className="template-title">{projectTitle}</h3>
                  <div className="template-text">{summary}</div>
                  <div className='btn-wrapper'>
                    <a className="template-web-link" href={website} target="_blank">View website
                      <i className="fas fa-arrow-circle-right"/>
                    </a>
                  </div>
                </div>
                {skills !== null && <div className='template-sidebar-box'>
                  <h3 className="template-title">Technologies</h3>
                  <hr/>
                  <div className="skill-list-container">
                    {skills.map(skill => (
                      <ul key={skill} className="skill-ul">
                        <li className="skill-l">{skill}</li>
                      </ul>
                    ))}
                  </div>
                </div>}
              </div>
            </div>
          </div>
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
    contentfulDevProjects(slug: {eq: $slug}) {
      projectTitle
      summary
      website
      slug
      skills
      sourceCode
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