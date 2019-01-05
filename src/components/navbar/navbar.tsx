import * as React from 'react'
import './navbar.sass'
import { NavItem } from './nav-item/model/nav-model'
import NavItemComponent from './nav-item/nav-item'

class Navbar extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }

  toggleSideNav = (state: boolean) => {
    this.setState({ expanded: !state })
  }

  navLinks = [
    new NavItem('Home', '/'),
    new NavItem('Projects', 'projectss'),
    new NavItem('About', 'about'),
    new NavItem('Contact', '/')
  ]

  render() {
    return (
      <nav className={`nav-container ${this.state.expanded ? 'expanded' : ''}`}>
        <div className='container'>
          <div className='nav-wrapper'>
            <a className="hideOnDesktop navbar-toggler navbar-toggler-right"
               onClick={() => this.toggleSideNav(this.state.expanded)}>&#9776;</a>
            <div className='hideOnMobile navbar-main'>
              {this.navLinks.map(items => (
                  <NavItemComponent key={items.routePath} navItem={items}/>
                )
              )}
            </div>
          </div>
        </div>
        <div className="hideOnDesktop slide-nav-container">
          <a className={`navbar-toggler ${this.state.expanded ? 'expanded' : ''}`} type="button"
             onClick={() => this.toggleSideNav(this.state.expanded)}>&times;</a>
          <div className='slide-nav-items'>
            {this.navLinks.map(items => (
                <NavItemComponent key={items.routePath} navItem={items}/>
              ),
            )}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar