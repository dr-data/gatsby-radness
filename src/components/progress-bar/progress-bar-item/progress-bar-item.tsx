import * as React from 'react'
import './progress-bar-item.sass'
import { ProgressBarItem } from './model/progress-bar-model'

type Props = {
  progressBarItem: ProgressBarItem
}

class ProgressBarItemComponent extends React.Component<Props, {}> {
  render() {
    const { progressBarItem } = this.props
    return (
      <div className="bar">
        <div className='tag'><span className="tag-title">{progressBarItem.barTitle}</span></div>
        <div className="fill" style={{ width: progressBarItem.barFill }}>
          <span className="bar-percent">{progressBarItem.barPercent}%</span>
        </div>
      </div>
    )
  }
}

export default ProgressBarItemComponent