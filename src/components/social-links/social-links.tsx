import * as React from 'react'
import './social-links.sass'
import { SocialLinkItem } from './social-link-item/model/social-link-model'
import SocialLinkComponent from './social-link-item/social-link-item'
import Resume from '../../assets/Jason_Brewer_Resume_2019.pdf'

class SocialLinks extends React.Component<> {
  socialLinks = [
    new SocialLinkItem('fab fa-github', 'https://github.com/jradness', 'Github'),
    new SocialLinkItem('fab fa-linkedin', 'https://www.linkedin.com/in/jbrewer3/', 'LinkedIn'),
    new SocialLinkItem('fas fa-envelope', 'mailto:dev.jasonb@gmail.com', 'Email'),
    new SocialLinkItem('fas fa-file-alt', Resume, 'Resume'),
  ]
  
  render() {
    return (
      <div className="social-link-wrapper">
        {this.socialLinks.map(link => (
          <SocialLinkComponent key={link.socialUrl} socialItem={link}/>
        ))}
      </div>
    )
  }
}

export default SocialLinks