import React, { useState } from 'react';
import './ContactForm.css';
import Navbar from '../components/Navbar';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = {
      name,
      email,
      message,
    };
  
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Response from server:', await response.json());
        // Reset the form or provide feedback to the user
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle HTTP errors
        console.error('HTTP Error:', response.statusText);
        // Provide feedback to the user
      }
    } catch (error) {
      console.error('Network error:', error);
      // Provide feedback to the user
    }
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
