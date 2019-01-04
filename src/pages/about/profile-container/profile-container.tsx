import * as React from 'react'
import './profile-container.sass'
import Profile from '../profile/profile'

const ProfileContainer = () => (
  <section className="profile-container">
    <div className="container">
      <Profile/>
    </div>
  </section>
)

export default ProfileContainer