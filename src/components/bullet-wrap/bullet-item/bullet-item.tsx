import * as React from 'react'
import './bullet-item.sass'
import { BulletItem } from './model/bullet-model'

type Props = {
  bulletItem: BulletItem
}

class BulletItemComponent extends React.Component<Props, {}> {
  render() {
    const { bulletItem } = this.props
    return (
      <div className="bullet-wrap">
        <div className={`hex-wrap ${bulletItem.rotateClass}`}>
          <div className='hex'>
            <i className={`icon ${bulletItem.icon}`}/>
          </div>
        </div>
        <div className={`blurb-wrap ${bulletItem.blurClass}`}>
          <div className='label'>{bulletItem.title}</div>
          <div className='blurb'>{bulletItem.blurb}</div>
        </div>
      </div>
    )
  }
}

export default BulletItemComponent