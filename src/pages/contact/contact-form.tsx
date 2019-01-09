import * as React from 'react'
import './contact-form.sass'

const SelectionOption = {
  Name: "Name",
  Email: "Email",
  Phone: "Phone",
  Message: "Message",
};

class ContactForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { selection: SelectionOption.Name };
  }

  handleInputFocus = selection => {
    this.setState({ selection: SelectionOption[selection] });
  };

  render() {
    console.log(this.state.selection);
    const { selection } = this.state;
    return (
      <div className="container">
        <div className='terminal-container'>
          <div className='terminal-bar'>
            <div className="close-btn">x</div>
            <span className="min-btn">-</span>
            <span className="ex-btn">^</span>
          </div>
          <div className='terminal-body'>
            {Object.keys(SelectionOption).map(opt => {
              return (
                <form method="POST">
                  <SuperDynamicInput
                    key={opt}
                    selectionType={opt}
                    handleInputFocus={this.handleInputFocus}
                    selected={selection === opt}
                  />
                </form>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const SuperDynamicInput = props => {
  return (
      <div className="input-container">
        <div className='terminal-label-wrapper'>
          <label className='terminal-label' htmlFor='field'>{props.selectionType}</label>
        </div>
        <div className='field-wrapper'>
          {props.selected && (<div className="blink-wrapper">$<div className="blinking"/></div>)}
          <input
            form='field'
            name={props.selectionType}
            onFocus={() => props.handleInputFocus(props.selectionType)}
            role="grid"
            className="terminal-field"
          />
        </div>
      </div>
  );
};

export default ContactForm