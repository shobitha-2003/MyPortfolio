import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub,  FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({ type: '', text: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_0zn07dp",
        "template_v9b2ksc",
        formRef.current,
        "pnIU2OvobbfgUXiQl"
      )
      .then(
        () => {
          setModalMessage({ type: 'success', text: 'Message sent successfully!' });
          setShowModal(true);
          formRef.current.reset();
          setSending(false);
        },
        (error) => {
          setModalMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
          setShowModal(true);
          console.error(error);
          setSending(false);
        }
      );
  };

  const openBook = () => {
    setBookOpen(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-book">
        <div className={`book-cover ${bookOpen ? 'open' : ''}`}>
          <div className="cover-content">
            <h1>Let's Connect</h1>
            <p className="subtitle">MERN Stack Developer | Problem Solver</p>
            <p className="description">
              Feel free to reach out by sending a message or connecting with me on social media. 
              I'm always excited to discuss new projects and opportunities!
            </p>

            <div className="cover-social">
              <a href="https://www.linkedin.com/in/shobitha-n-v-448941249/" target="_blank" rel="noopener noreferrer" className="cover-social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/shobitha-2003" target="_blank" rel="noopener noreferrer" className="cover-social-link">
                <FaGithub />
              </a>
              <a href="mailto:shobithanaliyar@gmail.com" className="cover-social-link">
                <HiOutlineMail />
              </a>
            </div>

            <button className="open-book-btn" onClick={openBook}>
              Get In Touch
            </button>
          </div>

          <div className="cover-image-section">
            <img src="/assets/contact-profile.png" alt="Profile" className="cover-profile-img" />
          </div>
        </div>

        <div className={`contact-card ${bookOpen ? 'visible' : ''}`}>
          <div className="contact-info-side">
            <div>
              <div className="contact-info-header">
                <h2>Let's Connect</h2>
                {/* <p>Have a project in mind? I'm always open to discussing new opportunities and creative ideas.</p> */}
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <HiOutlineMail />
                  </div>
                  <div className="contact-item-text">
                    <h4>Email</h4>
                    <p>shobithanaliyar@gmail.com</p>
                  </div>
                </div>

             

                <div className="contact-item">
                  <div className="contact-icon">
                    <HiOutlineLocationMarker />
                  </div>
                  <div className="contact-item-text">
                    <h4>Current Location</h4>
                    <p>Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Connect with me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/shobitha-n-v-448941249/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/shobitha-2003" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="mailto:shobithanaliyar@gmail.com" className="social-link">
                  <HiOutlineMail />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-side">
            <h3>Send a Message</h3>
            {/* <p className="subtitle">Fill out the form below and I'll get back to you within 24 hours</p> */}
            
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  onKeyPress={(e) => {
                    if (!/[A-Za-z\s]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" placeholder="Enter your Email" required />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your number"
                  required
                  onKeyPress={(e) => {
                    if (!/[0-9+\s-]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              
              <div className="form-group">
                <label>Your Message</label>
                <textarea name="message" placeholder="Write your message..." rows="3" required />
              </div>

              <button type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={`modal-icon ${modalMessage.type}`}>
              {modalMessage.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
            </div>
            <h3>{modalMessage.type === 'success' ? 'Success!' : 'Error!'}</h3>
            <p>{modalMessage.text}</p>
            <button onClick={() => setShowModal(false)} className="modal-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
