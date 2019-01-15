import * as React from 'react'
import './page-header.sass'

const PageHeader = props => (
  <>
    <header className="header-container">
      <h1 className="header-title">{props.title}
        <span className="header-sub">{props.subTitle}</span>
      </h1>
    </header>
  </>

)

export default PageHeader