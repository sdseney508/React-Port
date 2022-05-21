import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ subject: '', message: '' });
  const title = 'Contact Me';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked submit');
    if (!formData.subject || !formData.message) {
      document.getElementById('contact-warning').classList.remove('d-none');
    } else {
      //   TODO: set timeout
      document.getElementById('contact-warning').classList.add('d-none');
      const url = `mailto:angeladonati93@gmail.com?subject=${formData.subject}&body=${formData.message}`;
      window.open(url);
    }
  };
  return (
    <div className="row">
      <div className="col-8">
        <form className="ml-1" id="contact-form" onSubmit={handleSubmit}>
          <h3 className="title">Contact Form:</h3>
          <div className="form-group">
            <label htmlFor="subject-input">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject-input"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message-input">Message</label>
            <textarea
              className="form-control"
              id="message-input"
              rows="3"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
            ></textarea>
          </div>
          <p className="d-none ml-1" id="contact-warning">
            Both fields must be entered before pressing submit
          </p>
          <button
            className="btn btn-primary bg-info rounded border-info ml-1 mt-3 mb-3"
            type="submit"
            id="email-button"
          >
            Send Email
          </button>
        </form>
      </div>
      <div className="col-4 p-0">
        <h3>Links:</h3>
        <a href="https://github.com/a-donati" target="_blank">
          <i className="fab fa-github fa-2x m-2"></i>GitHub
        </a>
        <br />
        <a href="https://www.linkedin.com/in/angeladonati" target="_blank">
          <i className="fab fa-linkedin fa-2x m-2"></i>LinkedIn
        </a>
        <br />
        <a href="mailto:angeladonati93@gmail.com" target="_blank">
          <i className="fas fa-envelope fa-2x m-2"></i>
          Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
