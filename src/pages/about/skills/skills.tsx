import * as React from 'react'
import './skills.sass'
import { ProgressBarItem } from '../../../components/progress-bar/progress-bar-item/model/progress-bar-model'
import ProgressBarItemComponent from '../../../components/progress-bar/progress-bar-item/progress-bar-item'

class Skills extends React.Component<any, any> {

  progressItems = [
    new ProgressBarItem('HTML', '70%', '90'),
    new ProgressBarItem('CSS', '70%', '90'),
    new ProgressBarItem('SASS', '65%', '80'),
    new ProgressBarItem('Typescript', '45%', '65'),
    new ProgressBarItem('Angular', '40%', '60'),
    new ProgressBarItem('React', '38%', '50'),
    new ProgressBarItem('Node.js', '35%', '40'),
    new ProgressBarItem('UI Design', '60%', '70'),
    new ProgressBarItem('Sketch', '38%', '60'),
  ]

  render() {
    return (
      <div>
        {this.progressItems.map(items => (
          <div key={items.barTitle} className="pro-wrapper">
            <ProgressBarItemComponent progressBarItem={items}/>
          </div>
        ))}
      </div>
    )
  }
}

export default Skills