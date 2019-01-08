import * as React from 'react'

const ContactForm = () => (
  <form key="contact-form" name="contact" method="POST" data-netlify="true">
    <div>
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

export default ContactForm