import React from 'react';
import './Contact.css'; // CSS file for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Call To Us</h2>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <hr />
        <h2>Write To Us</h2>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Your Name *" className="input-field" />
        <input type="email" placeholder="Your Email *" className="input-field" />
        <input type="tel" placeholder="Your Phone *" className="input-field" />
        <textarea placeholder="Your Message" className="textarea-field"></textarea>
        <button className="send-button">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
