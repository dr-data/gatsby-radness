import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import './project-card.sass'

const ProjectItem = ({ node }) => {
  return (
    <div className="project-thumbnail-container">
      <Link className="thumbnail-wrapper" to={node.slug}>
        <img className="project-img" src={node.projectThumbnail.file.url} alt='project image'/>
        <div className='summary-wrapper'>
          <div className="thumbnail-title">{node.projectTitle}
            <i className="fas fa-chevron-circle-right"/>
          </div>
        </div>
      </Link>
    </div>
  )
}

const ProjectCard = () => (
  <StaticQuery
    query={graphql`
      query Projects {
        allContentfulDevProjects (sort:{ fields: [projectTitle], order: ASC }) {
          edges {
            node {
              projectTitle
              summary
              slug
              projectThumbnail {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="project-grid">
        {data.allContentfulDevProjects.edges.map((edge) => <ProjectItem key={edge.node.slug} node={edge.node}/>)}
      </div>
    )}
  />
)

export default ProjectCard