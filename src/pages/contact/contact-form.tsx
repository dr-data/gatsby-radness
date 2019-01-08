import * as React from 'react'
import PropTypes from 'prop-types';

const ContactForm = ({ action, name }) => (
  <form
    key="contact-form"
    name="contact"
    method="POST"
    action={action}
    data-netlify-honeypot="full-name"
    data-netlify="true"
  >
    <div>
      <label htmlFor="full-name">
        Don’t fill out this field if you’re a human.
      </label>
      <input type="text" id="full-name" name="full-name" />
    </div>
    <label htmlFor="fname">Name</label>
    <input type="text" id="fname" name="name" required />
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />
    <button type="submit">
      <span>Send Message</span>
    </button>
    <input type="hidden" name="form-name" value="contact" />
  </form>
);

ContactForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default ContactForm