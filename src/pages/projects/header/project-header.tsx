import * as React from 'react'
import './project-header.sass'

const ProjectHeader = (props: any) => (
  <header>
    <h3 dangerouslySetInnerHTML={{__html: props.title}} className="project-header"/>
  </header>
)

export default ProjectHeader