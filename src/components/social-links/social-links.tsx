import * as React from 'react'
import './social-links.sass'
import { SocialLinkItem } from './social-link-item/model/social-link-model'
import SocialLinkComponent from './social-link-item/social-link-item'

class SocialLinks extends React.Component<> {

  socialLinks = [
    new SocialLinkItem('fab fa-github', 'https://github.com/jradness'),
    new SocialLinkItem('fab fa-linkedin', 'https://www.linkedin.com/in/jbrewer3/')
  ]
  
  render() {
    return (
      <div className="social-link-wrapper">
        {this.socialLinks.map(link => (
          <SocialLinkComponent socialItem={link}/>
        ))}
      </div>
    )
  }
}

export default SocialLinks