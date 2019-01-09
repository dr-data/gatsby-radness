import * as React from 'react'
import './contact-form.sass'

const SelectionOption = {
  Name: 'Name',
  Email: 'Email',
  Phone: 'Phone',
  Message: 'Message',
}

class ContactForm extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { selection: SelectionOption.Name }
  }

  handleInputFocus = selection => {
    this.setState({ selection: SelectionOption[selection] })
  }

  lastLogin = () => {
    let today = new Date()
    const dd = today.getDate()
    const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const day = weekday[today.getDay()]
    const month = months[today.getMonth()]
    const hr = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    if (min < 10) {
      min = '0' + min
    }
    if (sec < 10) {
      sec = '0' + sec
    }
    return day + ' ' + month + ' ' + dd + ' ' + hr + ':' + min + ':' + sec + ' on ttys000'
  }

  render() {


    const { selection } = this.state
    return (
      <div className="container">
        <div className='terminal-container'>
          <div className='terminal-bar'>
            <i className="fas fa-times-circle"/>
            <i className="fas fa-minus-circle"/>
            <i className="fas fa-plus-circle"/>
            <div className="bash">radness <div className="line"/> -bash <div className="line"/> 99x20</div>
          </div>
          <div className='terminal-body'>
            <span className="terminal-login-text">Last login: {this.lastLogin()}</span>
            <form className="terminal-form" method="POST" data-netlify="true" name="contact">
              {Object.keys(SelectionOption).map(opt => {
                return (
                  <SuperDynamicInput
                    key={opt}
                    selectionType={opt}
                    handleInputFocus={this.handleInputFocus}
                    selected={selection === opt}
                  />
                )
              })}
              <input type="hidden" name="form-name" value="contact"/>
              <button>$ git push origin master (click to send)</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const SuperDynamicInput = props => {
  return (
    <div className="input-container">
      <div className='terminal-label-wrapper'>
        <label className='terminal-label' htmlFor='field'>{props.selectionType}</label>
      </div>
      <div className='field-wrapper'>
        {props.selected && (<div className="blink-wrapper">$
          <div className="blinking"/>
        </div>)}
        <input
          form='field'
          name={props.selectionType}
          onFocus={() => props.handleInputFocus(props.selectionType)}
          role="grid"
          className="terminal-field"
        />
      </div>
    </div>
  )
}

export default ContactForm