import * as React from 'react'
import './page-header.sass'

const PageHeader = (props: any) => (
  <>
    <header className="header-title">
      <h3>{props.title}</h3>
      </header>
    <div className='header-bar'/>
  </>

)

export default PageHeader