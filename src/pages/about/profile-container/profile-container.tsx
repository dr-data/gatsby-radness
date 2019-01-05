import * as React from 'react'
import './profile-container.sass'
import Profile from '../profile/profile'
import Skills from '../skills/skills'

const ProfileContainer = () => (
  <section className="profile-container">
    <div className="container">
      <div className='profile-cont'>
        <Profile/>
      </div>
      <div className='skills-cont'>
        <Skills/>
      </div>
    </div>
  </section>
)

export default ProfileContainer