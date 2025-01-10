import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function HeroSection() {
  return (
    <div
      style={{
        backgroundColor: "#ff3366",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        height:"80vh",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p style={{ textTransform: "uppercase", fontSize: "14px", fontWeight: "500" }}>
              Process visa without within hours
            </p>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}
            >
              Immigrations & <br />
              Visa Consultation
            </h1>
            <Button
              variant="light"
              style={{
                color: "#000",
                fontWeight: "600",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Book Consultancy
            </Button>
          </Col>

          <Col md={6} className="text-end">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/header-img.png" // Şəkil URL-ni dəyişdirin
              alt="Consultation"
              style={{
                width:"800px",
                height: "800px",
                
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
