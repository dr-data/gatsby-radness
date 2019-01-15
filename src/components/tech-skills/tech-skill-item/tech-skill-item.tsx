import * as React from 'react'
import { TechSkillItem } from './model/tech-skills-model'
import './tech-skill-item.sass'

type Props = {
  techSkill: TechSkillItem
}

class TechSkill extends React.Component<Props, {}> {


  render() {
    const { techSkill } = this.props
    const starGroup = () => (
      <>
        <i className={`skill-icon ${techSkill.star1}`}/>
        <i className={`skill-icon ${techSkill.star2}`}/>
        <i className={`skill-icon ${techSkill.star3}`}/>
        <i className={`skill-icon ${techSkill.star4}`}/>
        <i className={`skill-icon ${techSkill.star5}`}/>
      </>
    )
    return (
      <div className="skill-rating">
        <span className="skill-title">{techSkill.skillTitle}</span>
        {starGroup()}
      </div>
    )
  }
}


export default TechSkill