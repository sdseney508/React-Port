import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <footer className="d-flex flex-row">
      <div className="flex-column">
        <div>
          <a href="https://github.com/sdseney508" className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/stevenseney/" className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <a href="mailto:sdseney508@gmail.com">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
