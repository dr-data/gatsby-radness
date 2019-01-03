import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Canvas from '../components/canvas/canvas'

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Canvas/>
  </Layout>
)

export default IndexPage
