import * as React from 'react'
import './about-container.sass'
import BulletWrap from '../../../components/bullet-wrap/bullet-wrap'
import PageHeader from '../../../components/page-header/page-header'
import AboutMe from '../about-me/about-me'
import Skills from '../skills/skills'

const AboutContainer = () => (
  <div className="container">
    <div className='section-container'>
      <PageHeader title="About" subTitle="Me"/>
      <AboutMe/>
      <div className="hideBulletMobile section-container">
        <BulletWrap/>
      </div>
      <PageHeader className="hello" title="Tech" subTitle="Skills"/>
      <Skills/>
    </div>
  </div>
)

export default AboutContainer