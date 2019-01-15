import * as React from 'react'
import './about-me.sass'
import { IMAGE } from '../../../utils/image-path'

export default () => (
  <div className="b-about">
    <div className="about-headshot-wrapper">
      <img className="about-headshot" src={IMAGE.headshot} alt='Profile Image'/>
    </div>
   <div className='about-message-wrapper'>
     <p className="about-message">
       I'm Jason Brewer and I specialize in front-end development, primarily working with Angular & React. I mostly focus on simplicity, responsive design, cross-browser compatibility and SEO-friendly code.
     </p>
     <p className="about-message">
       I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
     </p>
   </div>
  </div>
)