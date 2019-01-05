import * as React from 'react'
import './profile.sass'
import { IMAGE } from '../../../utils/image-path'
import Blurb from '../../../components/blurb/blurb'

const title = 'Who\'s this guy?'
const desc = 'I\'m a Front-End Developer and I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let\'s make something awesome.'

const Profile = () => (
  <div className="profile-wrapper">
    <img className="profile-image" src={IMAGE.headshot} alt='Profile Image'/>
    <div className='blurb-wrapper'>
      <Blurb title={title} desc={desc}/>
    </div>
  </div>
)

export default Profile