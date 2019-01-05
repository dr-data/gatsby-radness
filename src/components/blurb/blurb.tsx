import * as React from 'react'
import './blurb.sass'

const Blurb = (props: any) => (
  <>
    <div className="blurb-title">{props.title}</div>
      <div className="blurb-desc">{props.desc}</div>
  </>
)

export default Blurb