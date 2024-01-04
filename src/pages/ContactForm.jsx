import React, { useState } from 'react';
import './ContactForm.css';
import Navbar from '../components/Navbar';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newMessage = { name, email, message };
    const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];
    existingMessages.push(newMessage);

    localStorage.setItem('messages', JSON.stringify(existingMessages));

    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div className="contact-form-container">
      <Navbar />
      <h2 className="contact-form-title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="contact-form-input"
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="contact-form-input"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="contact-form-input"
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
