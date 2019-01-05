import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Canvas from '../components/canvas/canvas'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `portfolio`, `react`, `web development`, `responsive`]} />
    <Canvas/>
  </Layout>
)

export default IndexPage