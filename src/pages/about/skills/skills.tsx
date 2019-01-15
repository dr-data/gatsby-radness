import * as React from 'react'
import './skills.sass'
import { TechSkillItem } from '../../../components/tech-skills/tech-skill-item/model/tech-skills-model'
import TechSkill from '../../../components/tech-skills/tech-skill-item/tech-skill-item'

class Skills extends React.Component<any, any> {
  filledStar = 'fas fa-star'
  emptyStar = 'far fa-star'
  halfStar = 'fas fa-star-half-alt'

  techItemColOne = [
    new TechSkillItem('HTML', this.filledStar, this.filledStar, this.filledStar, this.filledStar, this.filledStar),
    new TechSkillItem('CSS', this.filledStar, this.filledStar, this.filledStar, this.filledStar, this.filledStar),
    new TechSkillItem('SASS', this.filledStar, this.filledStar, this.filledStar, this.filledStar, this.emptyStar),
    new TechSkillItem('Bootstrap 4', this.filledStar, this.filledStar, this.filledStar, this.filledStar, this.emptyStar),
    new TechSkillItem('Sketch', this.filledStar, this.filledStar, this.filledStar, this.emptyStar, this.emptyStar),
    new TechSkillItem('Photoshop', this.filledStar, this.filledStar, this.filledStar, this.emptyStar, this.emptyStar),
    new TechSkillItem('Illustrator', this.filledStar, this.filledStar, this.filledStar, this.emptyStar, this.emptyStar),
    new TechSkillItem('Git', this.filledStar, this.filledStar, this.filledStar, this.filledStar, this.filledStar)
  ]

  techItemColTwo = [
    new TechSkillItem('Angular', this.filledStar, this.filledStar, this.filledStar, this.halfStar, this.emptyStar),
    new TechSkillItem('React', this.filledStar, this.filledStar, this.filledStar, this.emptyStar, this.emptyStar),
    new TechSkillItem('Typescript', this.filledStar, this.filledStar, this.filledStar, this.halfStar, this.emptyStar),
    new TechSkillItem('Wordpress', this.filledStar, this.filledStar, this.filledStar, this.emptyStar, this.emptyStar),
    new TechSkillItem('UI / UX', this.filledStar, this.filledStar, this.filledStar, this.halfStar, this.emptyStar),
    new TechSkillItem('Responsive Design', this.filledStar, this.filledStar, this.filledStar, this.filledStar, this.filledStar)
  ]

  render() {
    return (
      <div className="skill-container">
        <div className='skill-container--one'>
          {this.techItemColOne.map(skill => (
            <TechSkill key={skill.skillTitle} techSkill={skill}/>
          ))}
        </div>
        <div className='skill-container--two'>
          {this.techItemColTwo.map(skill => (
            <TechSkill key={skill.skillTitle} techSkill={skill}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Skills