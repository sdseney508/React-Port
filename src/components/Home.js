import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import p8pic from '../assets/images/P-8A-drops-Mk54-torpedo-1.jpg';
import avatar from '../assets/images/avatar.jpg';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid className="pb-5" id="home">
        <Col className="text-center justify-content-center pb-3">
          <h1 style={{ paddingBottom: 25 }} className="heading">
            Hi There!
          </h1>

          <h1 className="">
            I'm
            <strong className=""> Steve "Homeschool" Seney</strong>
          </h1>
          <div className="text-center justify-content-center">
            <img src={avatar} alt="me" style={{ width: '125px' }} />
          </div>
        </Col>
        <Row className="text-center justify-content-center">
          <Col md={6} sm={12}>
            {/* <div style={{ padding: 20, textAlign: "left" }}> */}
            <Type />
            {/* </div> */}
          </Col>

          <Col md={6} sm={12}>
            <img src={p8pic} alt="home pic" style={{ width: '50%' }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
