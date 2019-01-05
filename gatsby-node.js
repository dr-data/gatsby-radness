const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/components/project-template/project-template.tsx')
    resolve(
      graphql(`
        {
          allContentfulMyProjects (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulMyProjects.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: projectTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
      })
    )
  })
}