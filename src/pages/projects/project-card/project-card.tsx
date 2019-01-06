import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import './project-card.sass'

const ProjectItem = ({ node }) => {
  return (
    <div className="project-thumbnail">
      <div className='project-caption'>
        <Link className="link" to={node.slug}>
          <img className="project-img" src={node.projectImage.file.url} alt='project image'/>
          <div>{node.summary}</div>
        </Link>
      </div>
    </div>
  )
}

const ProjectCard = () => (
  <StaticQuery
    query={graphql`
      query Projects {
        allContentfulMyProjects (sort:{ fields: [projectTitle], order: ASC }) {
          edges {
            node {
              summary
              slug
              projectImage {
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
        {data.allContentfulMyProjects.edges.map((edge) => <ProjectItem key={edge.node.slug} node={edge.node}/>)}
      </div>
    )}
  />
)

export default ProjectCard