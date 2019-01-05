import * as React from 'react'
import { StaticQuery, graphql } from "gatsby";
import Link from 'gatsby-link'

const ProjectThing = ({node}) => {
  return (
      <Link to={node.slug}>
        <h3>{node.projectTitle}</h3>
      </Link>
  )
}

const Projects = () => (
  <StaticQuery
    query={graphql`
      query Projects {
        allContentfulMyProjects {
          edges {
            node {
              projectTitle
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
    render={( data ) => (
      <>
        {data.allContentfulMyProjects.edges.map((edge) => <ProjectThing node={edge.node} />)}
      </>
    )}
  />
);

export default Projects