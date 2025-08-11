import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>📬 Get in Touch</h1>
        <p>We’d love to hear from you. Fill out the form below!</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <div className="info-card">
          <h2>📍 Location</h2>
          <p>123 Future Street, Tech City</p>
        </div>
        <div className="info-card">
          <h2>📞 Phone</h2>
          <p>+1 (234) 567-890</p>
        </div>
        <div className="info-card">
          <h2>📧 Email</h2>
          <p>support@myapp.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
