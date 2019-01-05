import * as React from 'react'
import './bullet-wrap.sass'
import { BulletItem } from './bullet-item/model/bullet-model'
import BulletItemComponent from './bullet-item/bullet-item'

class BulletWrap extends React.Component<any, any> {

  blurbOne = 'Fast load times and lag free interaction, my highest priority'
  blurbTwo = 'My layouts will work on any device, big or small.'
  blurbThree = 'Strong preference for easy to use, intuitive UX/UI.'
  blurbFour = 'Websites don\'t have to be static, I love making pages come to life'

  bullets = [
    new BulletItem('fas fa-fighter-jet', 'Fast', this.blurbOne),
    new BulletItem('fas fa-mobile-alt', 'Responsive', this.blurbTwo),
    new BulletItem('far fa-lightbulb', 'Intuitive', this.blurbThree),
    new BulletItem('fas fa-rocket', 'Dynamic', this.blurbFour)
  ]

  render() {
    return (
      <div className="bullet-container">
        {this.bullets.map(items => (
          <BulletItemComponent bulletItem={items}/>
        ))}
      </div>
    )
  }
}

export default BulletWrap