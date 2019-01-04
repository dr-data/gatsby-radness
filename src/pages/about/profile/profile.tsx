import * as React from 'react'
import './profile.sass'
import { IMAGE } from '../../../utils/image-path'
import Blurb from '../../../components/blurb/blurb'

const title = 'My title'
const desc = 'My Description'

const Profile = () => (
  <div className="profile-wrapper">
    <div className="profile-img">
      <img src={IMAGE.headshot} alt='Profile Image'/>
      <Blurb title={title} desc={desc}/>
    </div>

  </div>
)

export default Profile