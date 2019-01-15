import * as React from 'react'
import './social-link-item.sass'
import { SocialLinkItem } from './model/social-link-model'


type Props = {
  socialItem: SocialLinkItem
}

class SocialLinkComponent extends React.Component<Props, {}> {
  render() {
    const { socialItem } = this.props
    return (
      <div className="social-link-item">
        <a href={socialItem.socialUrl} target="_blank" className="link-item" title={socialItem.hoverTitle}>
          <i className={socialItem.socialIcon}/>
        </a>
      </div>
    )
  }
}

export default SocialLinkComponent

