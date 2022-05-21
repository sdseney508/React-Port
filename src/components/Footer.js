import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ImStackoverflow } from "react-icons/im";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function Footer() {
  return (
    <Container>
      <footer className="">
        <Row className="d-flex text-center justify-content-center">
          <Col className="m-5">
            <a href="https://github.com/sdseney508" className="icon m-5" alt="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/stevenseney/" className="icon m-5" alt="Linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://stackoverflow.com/users/18003160/homeschool" alt="Stack Overflow" className="m-5">
              <ImStackoverflow  />
            </a>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;
