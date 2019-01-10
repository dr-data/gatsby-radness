import * as React from 'react'
import './about.sass'
import PageHeader from '../../components/page-header/page-header'
import BulletWrap from '../../components/bullet-wrap/bullet-wrap'
import ProfileContainer from './profile-container/profile-container'

const About = () => (
  <>
    <PageHeader title="About"/>
    <section className="container">
      <div className="hideBulletMobile">
        <BulletWrap/>
      </div>
      <ProfileContainer/>
      <div className="hideBulletDesktop">
        <BulletWrap/>
      </div>
    </section>
  </>
)

export default About