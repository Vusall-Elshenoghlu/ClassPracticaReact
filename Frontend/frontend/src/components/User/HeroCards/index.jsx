import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // react-bootstrap istifadə edirik
import { FaUserCog, FaTools, FaHandsHelping, FaRocket, FaStar, FaComments } from 'react-icons/fa'; // Iconlar üçün react-icons

const HeroCards = () => {
  return (
    <Container className="text-center my-5">
      <h2>Our Unique Features that can impress you</h2>
      <p>Who are in extremely love with eco friendly system.</p>

      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <FaUserCog size={40} />
          <h5 className="mt-2">Expert Technicians</h5>
          <p>
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
          </p>
        </Col>

        <Col md={4} className="mb-4">
          <FaTools size={40} />
          <h5 className="mt-2">Professional Service</h5>
          <p>
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
          </p>
        </Col>

        <Col md={4} className="mb-4">
          <FaHandsHelping size={40} />
          <h5 className="mt-2">Great Support</h5>
          <p>
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
          </p>
        </Col>

        <Col md={4} className="mb-4">
          <FaRocket size={40} />
          <h5 className="mt-2">Technical Skills</h5>
          <p>
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
          </p>
        </Col>

        <Col md={4} className="mb-4">
          <FaStar size={40} />
          <h5 className="mt-2">Highly Recommended</h5>
          <p>
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
          </p>
        </Col>

        <Col md={4} className="mb-4">
          <FaComments size={40} />
          <h5 className="mt-2">Positive Reviews</h5>
          <p>
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCards;
