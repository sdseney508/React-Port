import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { IoHomeOutline } from 'react-icons/io5';
import { IoAccessibilityOutline } from 'react-icons/io5';
import { BsFolder } from 'react-icons/bs';
import { FcDocument } from 'react-icons/fc';
import { FaEnvelope } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <Container fluid>
      <Navbar className="pb-3">
        <Nav className="justify-space-around">
          <Row>
            <Col>
              <Link to={'/'} className="">
                <IoHomeOutline className="link-icon" />
                <span className="link-text"> Home </span>
              </Link>
            </Col>

            <Col>
              <Link to={'/about'} className="">
                <IoAccessibilityOutline className="link-icon" />
                <span className="link-text"> About </span>
              </Link>
            </Col>
            <Col>
              <Link to={'/portfolio'} className="">
                <BsFolder className="link-icon" />
                <span className="link-text"> Portfolio </span>
              </Link>
            </Col>
            <Col>
              <Link to={'/resume'} className="">
                <FcDocument className="link-icon" />
                <span className="link-text"> Resume </span>
              </Link>
            </Col>
            <Col>
              <Link to={'/contact'} className="">
                <FaEnvelope className="link-icon" />
                <span className="link-text"> Contact </span>
              </Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Header;
