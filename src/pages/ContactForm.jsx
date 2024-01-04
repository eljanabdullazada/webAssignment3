import React from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Us</h2>
      <form>
        <input
          type="text"
          className="contact-form-input"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          type="email"
          className="contact-form-input"
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          className="contact-form-input"
          placeholder="Your Message"
          name="message"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="contact-form-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
