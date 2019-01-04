import * as React from 'react'
import './page-header.sass'

const PageHeader = (props: any) => (
  <>
    <header className="header-title">{props.title}</header>
    <div className='header-bar'/>
  </>

)

export default PageHeader