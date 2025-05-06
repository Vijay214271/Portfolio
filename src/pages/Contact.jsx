import React, { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '...' }

  const SERVICE_ID = "service_lilo0ch";
  const TEMPLATE_ID = "template_bck81sh";
  const USER_ID = "ymdvlP_72qMZ4FdWl";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID)
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({ type: "error", message: "Failed to send message. Please try again later." });
      });
  };

  return (
    <Element name="contact" className="section contact">
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Send Message</button>

          {status && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> <a href="mailto:vijaypatnala147@gmail.com">vijaypatnala147@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Vijay214271" target="_blank" rel="noopener noreferrer">github.com/Vijay214271</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vijay-patnala-9b8919272" target="_blank" rel="noopener noreferrer">linkedin.com/in/vijay-patnala-9b8919272</a></p>
        <p><strong>Location:</strong> Vijayawada, Andhra Pradesh, India</p>
      </div>
    </Element>
  );
};

export default Contact;
