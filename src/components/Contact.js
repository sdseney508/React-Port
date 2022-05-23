import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
      const url = `mailto:sdseney508@gmail.com?subject=${formData.subject}&body=${formData.message}`;
      window.open(url);
    }
  };
  return (
    <section>
      <Row>
        <Col>
          <form className="" id="contact-form" onSubmit={handleSubmit}>
            <h3 className="">Contact Form:</h3>
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
            <p className="" id="contact-warning">
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
        </Col>

        <Col>
          <h3>Links:</h3>
          <a href="https://github.com/sdseney508" className="icon m-5" alt="Github">
              <FontAwesomeIcon icon={faGithub} />Github
            </a>
          <br />
          <a href="https://www.linkedin.com/in/stevenseney/" className="icon m-5" alt="Linkedin">
              <FontAwesomeIcon icon={faLinkedin} />Linkedin
            </a>
          <br />
          <a href="https://stackoverflow.com/users/18003160/homeschool" alt="Stack Overflow" className="m-5">
              <ImStackoverflow  />Stack Overflow
            </a>
        </Col>
      </Row>

    </section>
  );
};

export default Contact;
