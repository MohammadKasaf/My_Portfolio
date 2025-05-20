import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "cc5a6303-e89e-4ae6-98dc-f526697be1f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Submission Failed ❌");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-card">
              <h3 className="contact-name">Mohammad Kasaf Siddique</h3>
              <div className="contact-details">
                <p className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  Hathras, Uttar Pradesh
                </p>
                <p className="contact-item">
                  <i className="fas fa-phone"></i>
                  +91-9719936609
                </p>
                <p className="contact-item">
                  <i className="fas fa-envelope"></i>
                  kaashifchishti611@gmail.com
                </p>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/MohammadKasaf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammad-kasaf-siddique-006b1a1a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://x.com/MohammadKasaf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
              {result && <p className="submit-message">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
