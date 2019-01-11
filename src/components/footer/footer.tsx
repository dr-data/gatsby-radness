import * as React from 'react'
import './footer.sass'
import SocialLinks from '../../components/social-links/social-links'

const Footer = () => (
  <footer>
    <div className='footer-container'>
      <div className="social-comp-wrapper">
        <SocialLinks/>
      </div>
      <div className="made-with">Made with <i className="fas fa-heart"/> by Jason Brewer</div>
    </div>
  </footer>
)

export default Footer