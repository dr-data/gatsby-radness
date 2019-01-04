import * as React from 'react'
import './blurb.sass'

const Blurb = (props: any) => (
  <>
    <div>{props.title}</div>
      <div>{props.desc}</div>
  </>
)

export default Blurb