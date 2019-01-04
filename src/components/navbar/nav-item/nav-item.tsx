import * as React from 'react'
import { Link } from 'gatsby'
import './nav-item.sass'
import NavItem from '../nav-item/model/nav-model'

type Props = {
  navItem: NavItem
}

class NavItemComponent extends React.Component<Props, {}> {
  render() {
    const { navItem } = this.props
    return (
      <div className="nav-item">
        <Link to={navItem.routePath} className="link-item">
          <div>{navItem.text}</div>
        </Link>
      </div>
    )
  }
}

export default NavItemComponent

