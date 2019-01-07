import * as React from 'react'
import { TechSkillItem } from './model/tech-skills-model'
import './tech-skill-item.sass'

type Props = {
  techSkill: TechSkillItem
}

class TechSkill extends React.Component<Props, {}> {
  render() {
    const { techSkill } = this.props
    return (
      <>
        <div className="skill-item-container">
          <div className='skill-item-wrapper'>
            <div className='icon-wrapper'>
              <i id={techSkill.iconClass} className={`skill-icon ${techSkill.icon}`}/>
              <img className="skill-icon" src={techSkill.icon} alt=''/>
            </div>
            <div className="tech-title">{techSkill.text}</div>
          </div>
        </div>
      </>
    )
  }
}


export default TechSkill